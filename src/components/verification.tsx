import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Database } from "lucide-react"
import Image from "next/image"
import Verification from '@/public/verification.jpg';

export function VerificationSection() {
  return (
    <section id="verification" className="text-white py-16 bg-gradient-to-r from-[#0a0928] to-[#121212]">
      <div className="w-full px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Verification & Security</h2>
          <p className="mt-4 text-[#ffffffad] md:text-lg dark:text-neutral-400">
            State-of-the-art security powered by blockchain and ML
          </p>
        </div>
        <div className="flex items-center justify-between gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Advanced Document Verification</h3>
            <p className="text-[#ffffff79] dark:text-[#fff]">
              Our ML-powered system verifies your documents in real-time, ensuring accuracy and security:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#fff] dark:text-[#fff]" />
                Instant document validation
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#fff] dark:text-[#fff]" />
                End-to-end encryption
              </li>
              <li className="flex items-center gap-2">
                <Database className="w-5 h-5 text-[#fff] dark:text-[#fff]" />
                Secure DigiLocker integration
              </li>
            </ul>
          </div>
          <Card className="rounded-lg shadow-lg border-2 p-6">
            <CardHeader>
              <CardTitle>Security Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute inset-0 rounded-lg" />
                <Image
                  src={Verification}
                  alt="Security Process Diagram"
                  className="rounded-lg"
                  width={750}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

