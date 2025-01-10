import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { cn } from "@/lib/utils"

interface PaymentSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PaymentSection({ className, ...props }: PaymentSectionProps) {
  return (
    <Card className={cn("col-span-full lg:col-span-2", className)} {...props}>
      <CardHeader>
        <CardTitle>Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium mb-2">Next Payment Due</p>
            <p className="text-2xl font-bold">July 1, 2023</p>
            <div className="flex flex-col gap-2 mt-4">
              <Button className="w-full">Pay with Crypto</Button>
              <Button variant="outline" className="w-full">Pay with Fiat</Button>
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
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>0x1234...5678</TableCell>
                    <TableCell>June 1, 2023</TableCell>
                    <TableCell>$250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>0x8765...4321</TableCell>
                    <TableCell>May 1, 2023</TableCell>
                    <TableCell>$250</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

