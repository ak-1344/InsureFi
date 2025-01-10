import { Shield, Zap, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-16 bg-gradient-to-r from-[#0a0928] to-[#121212]">
      <div className="w-full px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01bdc1] to-[#1d73bd]">InsureFi?</span></h2>
          <p className="mt-4 text-white md:text-lg dark:text-neutral-400">
            Experience the future of insurance with our cutting-edge technology
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <Shield className="w-12 h-12 mb-4 text-neutral-900 dark:text-neutral-50" />
              <CardTitle>Web3-powered Trust and Security</CardTitle>
              <CardDescription>
                Our blockchain technology ensures unmatched transparency and security for all your insurance needs.
                Every policy is cryptographically secured and immutable.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-lg">
            <CardHeader>
              <Zap className="w-12 h-12 mb-4 text-neutral-900 dark:text-neutral-50" />
              <CardTitle>Hassle-Free Claims Verification</CardTitle>
              <CardDescription>
                Advanced ML and OCR technology processes your claims instantly, reducing verification time from days to minutes.
                Experience lightning-fast settlements.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-lg">
            <CardHeader>
              <Users className="w-12 h-12 mb-4 text-neutral-900 dark:text-neutral-50" />
              <CardTitle>Tailored Plans for Every Age</CardTitle>
              <CardDescription>
                Find the perfect coverage with our age-optimized plans. Smart algorithms ensure you get the most suitable
                and affordable options.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}

