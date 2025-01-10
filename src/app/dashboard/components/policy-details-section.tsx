import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { cn } from "@/lib/utils"
import React from "react";

interface PolicyDetailsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PolicyDetailsSection({ className, ...props }: PolicyDetailsSectionProps) {
  return (
    <Card className={cn("col-span-full lg:col-span-2", className)} {...props}>
      <CardHeader>
        <CardTitle>Policy Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Terms and Conditions</AccordionTrigger>
            <AccordionContent>
              This policy is subject to the terms and conditions outlined in the contract. Key points include coverage limits, exclusions, and claim procedures.
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
              This policy provides coverage for natural and accidental death. It includes a waiver of premium for disability and a conversion option at the end of the term.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

