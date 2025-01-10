import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { MessageSquare, HelpCircle } from 'lucide-react'
import { cn } from "@/lib/utils"

interface SupportSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SupportSection({ className, ...props }: SupportSectionProps) {
  return (
    <Card className={cn("col-span-full md:col-span-1", className)} {...props}>
      <CardHeader>
        <CardTitle>Support</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Button className="justify-start">
            <MessageSquare className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
          <Button variant="outline" className="justify-start">
            <HelpCircle className="mr-2 h-4 w-4" />
            FAQs
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

