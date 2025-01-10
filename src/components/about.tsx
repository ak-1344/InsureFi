import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Blocks, Shield, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="w-full px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About InsureFi</h2>
            <p className="text-neutral-500 md:text-lg dark:text-neutral-400">
              InsureFi is revolutionizing life insurance through blockchain technology and artificial intelligence. Our
              mission is to make insurance accessible, transparent, and hassle-free for everyone.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">The Blockchain Edge</h3>
              <p className="text-neutral-500 dark:text-neutral-400">
                Built on the Aptos blockchain, InsureFi ensures:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Blocks className="w-5 h-5 text-neutral-900 dark:text-neutral-50" />
                  Immutable policy records
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-neutral-900 dark:text-neutral-50" />
                  Transparent claims process
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-neutral-900 dark:text-neutral-50" />
                  Instant settlements
                </li>
              </ul>
              <Button className="mt-6">Learn More</Button>
            </div>
          </div>
          <Card className="rounded-lg shadow-lg border-2">
            <CardContent className="p-6">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="InsureFi Blockchain Process"
                className="rounded-lg"
                width={500}
                height={400}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

