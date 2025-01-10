import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Home, Wallet, CreditCard, FileText, Shield, Calculator, Bell, HelpCircle, Menu, ChevronDown } from 'lucide-react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card"

export function DashboardNav() {
  return (
    <nav className="flex flex-col bg-gray-900 text-white w-64 h-screen">
      <div className="p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6" />
          <span className="font-bold text-lg">InsureFi</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <div className="grid gap-2 p-2">
          {items.map((item, index) => (
            <Button key={index} asChild variant="ghost" className="w-full justify-start">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800 hover:text-white"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4">
        <ProfileMenu />
      </div>
    </nav>
  )
}

function ProfileMenu() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" className="w-full justify-start">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src="/avatar.png" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span>John Doe</span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80" align="start">
        <div className="flex justify-between space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/avatar.png" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">John Doe</h4>
            <p className="text-sm">john.doe@example.com</p>
            <div className="flex items-center pt-2">
              <Shield className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Premium Member since 2023
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <Button variant="outline" className="w-full justify-start">Profile</Button>
          <Button variant="outline" className="w-full justify-start">Settings</Button>
          <Button variant="outline" className="w-full justify-start">Log out</Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

const items = [
  { title: "Overview", href: "/", icon: Home },
  { title: "Wallet", href: "/wallet", icon: Wallet },
  { title: "Payments", href: "/payments", icon: CreditCard },
  { title: "Claims", href: "/claims", icon: FileText },
  { title: "Policy", href: "/policy", icon: Shield },
  { title: "Tools", href: "/tools", icon: Calculator },
  { title: "Notifications", href: "/notifications", icon: Bell },
  { title: "Support", href: "/support", icon: HelpCircle },
]

