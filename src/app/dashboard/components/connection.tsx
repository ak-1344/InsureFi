"use client"
import { useWallet } from "@aptos-labs/wallet-adapter-react"
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design"
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Progress } from "./ui/progress"
import { cn } from "@/lib/utils"
import { LogOut } from "lucide-react"
import { Types } from "aptos"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const NODE_URL = "https://fullnode.mainnet.aptoslabs.com"

interface ConnectionSectionProps extends React.HTMLAttributes<HTMLDivElement> { }

interface Transaction {
    version: string
    timestamp: string
    amount: string
}

export function ConnectionSection({ className, ...props }: ConnectionSectionProps) {
    const { account, connected, disconnect } = useWallet()
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchTransactions = async () => {
        if (!account?.address) return

        setIsLoading(true)
        try {
            const response = await fetch(
                `${NODE_URL}/v1/accounts/${account.address}/transactions?limit=5`
            )
            const data = await response.json()

            if (!Array.isArray(data)) {
                console.error("Expected array of transactions, got:", typeof data)
                setTransactions([])
                return
            }

            const formattedTransactions = data
                .filter((tx: any) => tx && tx.version)
                .map((tx: Types.Transaction) => ({
                    version: tx.version.toString(),
                    timestamp: new Date(tx.timestamp).toLocaleDateString(),
                    amount: tx.payload?.function?.split("::")?.[2] || "Transfer"
                }))

            setTransactions(formattedTransactions)
        } catch (error) {
            console.error("Failed to fetch transactions:", error)
            setTransactions([])
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (connected && account) {
            fetchTransactions()
        }
    }, [connected, account])

    if (!connected || !account) {
        return (
            <Card className={cn("col-span-full", className)} {...props}>
                <CardHeader>
                    <CardTitle>Connect Wallet</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center justify-center p-6">
                        <p className="text-lg text-muted-foreground mb-4">
                            Please connect your wallet to view your insurance details
                        </p>
                        <WalletSelector />
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="grid gap-4 grid-cols-1">
            {/* Overview Section */}
            <Card className={cn("col-span-full lg:col-span-2", className)} {...props}>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Plan Overview</CardTitle>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={disconnect}
                        className="flex items-center gap-2"
                    >
                        <LogOut className="h-4 w-4" />
                        Disconnect
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p className="text-sm font-medium">Plan Name</p>
                            <p className="text-2xl font-bold">Gold Coverage</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Monthly Premium</p>
                            <p className="text-2xl font-bold">$250</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Total Premiums Paid</p>
                            <p className="text-2xl font-bold">$3,000</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium">Coverage Amount</p>
                            <p className="text-2xl font-bold">$500,000</p>
                        </div>
                        <div className="col-span-full">
                            <p className="text-sm font-medium mb-2">Coverage Period Progress</p>
                            <Progress value={33} className="h-2 bg-[#000]" />
                            <p className="text-xs text-muted-foreground mt-1">33% completed</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                {/* Payment Section */}
                <Card className={cn("col-span-1 lg:col-span-2", className)} {...props}>
                    <CardHeader>
                        <CardTitle>Payments</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <p className="text-sm font-medium mb-2">Next Payment Due</p>
                                <p className="text-2xl font-bold">July 1, 2023</p>
                                <div className="flex flex-col gap-2 mt-4">
                                    <Button
                                        className="bg-gradient-to-r from-[#01bdc1] to-[#1d73bd] w-full"
                                        onClick={() => window.location.href = "http://localhost:3001"}
                                    >
                                        Pay with Crypto
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium mb-2">Payment History</p>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Transaction ID</TableHead>
                                                <TableHead>Date</TableHead>
                                                <TableHead>Type</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {isLoading ? (
                                                <TableRow>
                                                    <TableCell colSpan={3} className="text-center">
                                                        Loading transactions...
                                                    </TableCell>
                                                </TableRow>
                                            ) : transactions.length > 0 ? (
                                                transactions.map((tx) => (
                                                    <TableRow key={tx.version}>
                                                        <TableCell className="font-mono">
                                                            {tx.version.slice(0, 6)}...{tx.version.slice(-4)}
                                                        </TableCell>
                                                        <TableCell>{tx.timestamp}</TableCell>
                                                        <TableCell>{tx.amount}</TableCell>
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow>
                                                    <TableCell colSpan={3} className="text-center">
                                                        No transactions found
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Policy Details Section */}
                <Card className={cn("col-span-1 lg:col-span-2", className)} {...props}>
                    <CardHeader>
                        <CardTitle>Policy Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Terms and Conditions</AccordionTrigger>
                                <AccordionContent>
                                    This policy is subject to the terms and conditions outlined in the contract.
                                    Key points include coverage limits, exclusions, and claim procedures.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Benefits</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc pl-5">
                                        <li>Death benefit: $500,000</li>
                                        <li>Accidental death benefit: Additional $250,000</li>
                                        <li>Terminal illness benefit: 50% of death benefit</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Coverage Specifics</AccordionTrigger>
                                <AccordionContent>
                                    This policy provides coverage for natural and accidental death.
                                    It includes a waiver of premium for disability and a conversion
                                    option at the end of the term.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}