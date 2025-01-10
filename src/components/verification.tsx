import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Database } from "lucide-react"

export function VerificationSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Verification & Security</h2>
          <p className="mt-4 text-neutral-500 md:text-lg dark:text-neutral-400">
            State-of-the-art security powered by blockchain and ML
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Advanced Document Verification</h3>
            <p className="text-neutral-500 dark:text-neutral-400">
              Our ML-powered system verifies your documents in real-time, ensuring accuracy and security:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-neutral-900 dark:text-neutral-50" />
                Instant document validation
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-neutral-900 dark:text-neutral-50" />
                End-to-end encryption
              </li>
              <li className="flex items-center gap-2">
                <Database className="w-5 h-5 text-neutral-900 dark:text-neutral-50" />
                Secure DigiLocker integration
              </li>
            </ul>
          </div>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Security Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg" />
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Security Process Diagram"
                  className="rounded-lg"
                  width={400}
                  height={300}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

