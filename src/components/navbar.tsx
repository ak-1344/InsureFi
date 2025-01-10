'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
    { label: "Why Choose Us", href: "#why-choose" },
    { label: "Plans", href: "#plans" },
    { label: "Security", href: "#verification" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className={cn(
            "fixed top-0 w-full z-50 transition-all duration-200",
            isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
        )}>
            <div className="w-full flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold">InsureFi</span>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Button
                            key={item.href}
                            variant="ghost"
                            className="text-sm font-medium transition-colors"
                            onClick={() => scrollToSection(item.href)}
                        >
                            {item.label}
                        </Button>
                    ))}
                    <Button onClick={() => scrollToSection('#cta')}>
                        Get Started
                    </Button>
                </nav>
                <Button
                    className="md:hidden"
                    variant="ghost"
                    size="icon"
                    onClick={() => scrollToSection('#cta')}
                >
                    Get Started
                </Button>
            </div>
        </header>
    )
}

