import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Blocks, Shield, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r text-white from-[#0a0928] to-[#121212]">
      <div className="w-full px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01bdc1] to-[#1d73bd]">InsureFi</span></h2>
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
                  <Blocks className="w-5 h-5 text-[#01bdc1] dark:text-neutral-50" />
                  Immutable policy records
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#01bdc1] dark:text-neutral-50" />
                  Transparent claims process
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#01bdc1] dark:text-neutral-50" />
                  Instant settlements
                </li>
              </ul>
              <Button className="mt-6 bg-gradient-to-r from-[#01bdc1] to-[#1d73bd]">Learn More</Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

