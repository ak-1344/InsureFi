import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    content: "InsureFi's instant claim settlement saved my family from financial stress. The process was smooth and transparent.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Software Engineer",
    content: "The blockchain-based policy gives me peace of mind. I know my coverage is secure and tamper-proof.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Doctor",
    content: "As someone who understands the importance of quick medical claims, InsureFi's ML-powered verification is revolutionary.",
    rating: 4,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="w-full px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
          <p className="mt-4 text-neutral-500 md:text-lg dark:text-neutral-400">
            Real stories from real users who trust InsureFi
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-neutral-900 dark:text-neutral-50" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg mb-4">{testimonial.content}</blockquote>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

