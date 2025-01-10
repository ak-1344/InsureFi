"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Wallet } from 'lucide-react'
import { cn } from "@/lib/utils"

interface WalletSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function WalletSection({ className, ...props }: WalletSectionProps) {
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    // Implement wallet connection logic here
    setIsConnected(true)
  }

  return (
    <Card className={cn("col-span-full md:col-span-1", className)} {...props}>
      <CardHeader>
        <CardTitle>Wallet</CardTitle>
      </CardHeader>
      <CardContent>
        {isConnected ? (
          <div>
            <p className="text-sm font-medium mb-2">Connected Wallet</p>
            <p className="text-xs text-muted-foreground mb-4">0x1234...5678</p>
            <p className="text-sm font-medium mb-2">Balance</p>
            <p className="text-2xl font-bold">2.5 ETH</p>
          </div>
        ) : (
          <Button onClick={handleConnect} className="w-full">
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

