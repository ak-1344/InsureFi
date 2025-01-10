"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Calculator, BarChart } from 'lucide-react'
import { CoverageCalculator } from "./coverage-calculator"
import { BenefitsGraph } from "./benefits-graph"
import { cn } from "@/lib/utils"

interface InteractiveToolsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function InteractiveToolsSection({ className, ...props }: InteractiveToolsSectionProps) {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
  const [isGraphOpen, setIsGraphOpen] = useState(false)

  return (
    <Card className={cn("col-span-full lg:col-span-2", className)} {...props}>
      <CardHeader>
        <CardTitle>Interactive Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
            <DialogTrigger asChild>
              <Button className="w-full justify-start">
                <Calculator className="mr-2 h-4 w-4" />
                <span className="truncate">Coverage and Premium Calculator</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Coverage and Premium Calculator</DialogTitle>
              </DialogHeader>
              <CoverageCalculator />
            </DialogContent>
          </Dialog>
          <Dialog open={isGraphOpen} onOpenChange={setIsGraphOpen}>
            <DialogTrigger asChild>
              <Button className="w-full justify-start">
                <BarChart className="mr-2 h-4 w-4" />
                <span className="truncate">Benefits Over Time Graph</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Benefits Over Time Graph</DialogTitle>
              </DialogHeader>
              <BenefitsGraph />
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}

