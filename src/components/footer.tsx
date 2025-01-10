import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-neutral-500 dark:text-neutral-400">support@insurefi.com</li>
              <li className="text-neutral-500 dark:text-neutral-400">+91 1800-123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-neutral-500 dark:text-neutral-400">
          <p>© 2024 InsureFi. All rights reserved.</p>
          <p className="mt-2 text-sm">When life ends, we make sure the money doesn't.</p>
        </div>
      </div>
    </footer>
  )
}

