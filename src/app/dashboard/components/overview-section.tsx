import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"
import { cn } from "@/lib/utils"
import React from "react";

interface OverviewSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function OverviewSection({ className, ...props }: OverviewSectionProps) {
  return (
    <Card className={cn("col-span-full lg:col-span-2", className)} {...props}>
      <CardHeader>
        <CardTitle>Plan Overview</CardTitle>
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
          <div>
            <p className="text-sm font-medium mb-2">Coverage Period Progress</p>
            <Progress value={33} className="h-2 bg-[#000]" />
            <p className="text-xs text-muted-foreground mt-1">33% completed</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

