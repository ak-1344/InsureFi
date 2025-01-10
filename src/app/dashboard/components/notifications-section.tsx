import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Bell, CreditCard, RefreshCw, AlertTriangle } from 'lucide-react'
import { cn } from "@/lib/utils"

interface NotificationsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NotificationsSection({ className, ...props }: NotificationsSectionProps) {
  return (
    <Card className={cn("col-span-full md:col-span-1", className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Alert>
            <CreditCard className="h-4 w-4" />
            <AlertTitle>Payment Reminder</AlertTitle>
            <AlertDescription>Your next payment is due in 5 days.</AlertDescription>
          </Alert>
          <Alert>
            <RefreshCw className="h-4 w-4" />
            <AlertTitle>Policy Renewal</AlertTitle>
            <AlertDescription>Your policy is up for renewal next month.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Wallet Transaction</AlertTitle>
            <AlertDescription>Unusual activity detected in your wallet.</AlertDescription>
          </Alert>
        </div>
      </CardContent>
    </Card>
  )
}

