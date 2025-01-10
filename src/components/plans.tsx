import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    ageGroup: "20s",
    price: "₹499",
    coverage: "₹50L",
    benefits: ["Lower premiums", "High coverage", "Wealth building focus"],
    recommended: false,
  },
  {
    ageGroup: "30s",
    price: "₹899",
    coverage: "₹1Cr",
    benefits: ["Family protection", "Critical illness cover", "Investment options"],
    recommended: true,
  },
  {
    ageGroup: "40s",
    price: "₹1,499",
    coverage: "₹2Cr",
    benefits: ["Comprehensive coverage", "Health benefits", "Retirement planning"],
    recommended: false,
  },
]

export function PlansSection() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Plan</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Find the perfect coverage tailored to your age and needs
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:py-8">
          {plans.map((plan) => (
            <Card key={plan.ageGroup} className={`relative ${plan.recommended ? 'border-primary md:scale-110 md:shadow-xl' : ''}`}>
              {plan.recommended && (
                <Badge className="absolute top-4 right-4">
                  Recommended
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">Age {plan.ageGroup}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium mb-4">Coverage up to {plan.coverage}</p>
                <ul className="space-y-2">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Compare Plans</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

