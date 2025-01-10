import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CTASection() {
  return (
    <section className="py-16 bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900">
      <div className="w-full px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join the Insurance Revolution
            </h2>
            <p className="mt-4 text-neutral-50/90 md:text-lg dark:text-neutral-900/90">
              Get started with InsureFi today and experience the future of life insurance.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-neutral-50 dark:text-neutral-900">
                  Name
                </Label>
                <Input id="name" className="bg-white/20" />
              </div>
              <div>
                <Label htmlFor="email" className="text-neutral-50 dark:text-neutral-900">
                  Email
                </Label>
                <Input id="email" type="email" className="bg-white/20" />
              </div>
              <div>
                <Label htmlFor="age" className="text-neutral-50 dark:text-neutral-900">
                  Age
                </Label>
                <Input id="age" type="number" className="bg-white/20" />
              </div>
              <Button className="w-full bg-white text-neutral-900 hover:bg-white/90 dark:text-neutral-50">
                Get Covered Today
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

