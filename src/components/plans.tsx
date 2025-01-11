import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ShineBorder from "@/components/ui/shine-border";
import HyperText from "./ui/hyper-text";

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
];

export function PlansSection() {
  return (
    <section id="plans" className="py-16 bg-gradient-to-r from-[#0a0928] to-[#121212] w-full">
      <div className=" w-full px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Choose Your Plan</h2>
          <p className="mt-4 text-muted-foreground md:text-lg text-[#ffffffad]">
            Find the perfect coverage tailored to your age and needs
          </p>
        </div>
        <div className="flex justify-around w-full gap-6 md:grid-cols-3 md:py-8">
          {plans.map((plan) => {
            const cardContent = (
              <Card className="relative h-full">
                {plan.recommended && (
                  <Badge className="absolute bg-gradient-to-r from-[#01bdc1] to-[#1d73bd] top-4 right-4">
                    Recommended
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">Age {plan.ageGroup}</CardTitle>
                  <div className="mt-4">
                    <HyperText startOnView={true} as={'span'} characterSet={["0", "1", "2",'3','4','5','6','7','8','9']} className="text-4xl font-bold">{plan.price}</HyperText>/month
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
                  <Button className="w-full bg-gradient-to-r from-[#01bdc1] to-[#1d73bd]">Compare Plans</Button>
                </CardFooter>
              </Card>
            );

            return plan.recommended ? (
              <ShineBorder
                key={plan.ageGroup}
                borderRadius={8}
                borderWidth={3}
                duration={14}
                color={["#01bdc1", "#1d73bd"]}
                className="border-primary md:scale-110 md:shadow-xl"
              >
                {cardContent}
              </ShineBorder>
            ) : (
              <div className="shadow border rounded-xl w-[18rem] min-w-56" key={plan.ageGroup}>{cardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}