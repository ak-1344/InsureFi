'use client'
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Network } from 'lucide-react'
import Image from 'next/image'
import LogoTagline from '@/public/logo_tagline.svg';
export default function HeroSection() {
    const scrollToPlans = () => {
        const plansSection = document.querySelector('#plans')
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <section className="relative min-h-[90vh] bg-gradient-to-r from-[#0a0928] to-[#121212] w-full flex items-center overflow-hidden pt-16">
            {/* Background Pattern */}
            <InteractiveGridPattern
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            />
            <div className="w-full px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-2">
                            {/* SVG Logos */}
                            <div className="flex justify-start space-x-4">
                                <Image width={300} src={LogoTagline} alt="logo of company with tagline"/>
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                                Reinventing Life Insurance with{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01bdc1] to-[#1d73bd]">Blockchain Security</span>
                            </h1>
                            <p className="z-40 max-w-[600px] text-white text-muted-foreground md:text-xl">
                                Experience the future of life insurance. Secure, transparent, and instant settlements powered by blockchain technology.
                            </p>
                        </div>
                        <div className="z-20 flex flex-col gap-4 min-[400px]:flex-row">
                            <Button size="lg" className="font-medium bg-gradient-to-r from-[#01bdc1] to-[#1d73bd]" onClick={() => {
                                const ctaSection = document.querySelector('#cta')
                                window.location.href = 'http://localhost:3000/auth';

                            }}>
                                Get Started
                            </Button>
                            <Button size="lg" variant="outline" className="font-medium" onClick={scrollToPlans}>
                                Explore Plans
                            </Button>
                        </div>
                    </div>

                    {/* Animated Blockchain Visualization */}
                    <div className="relative flex items-center justify-center lg:me-20 lg:justify-end">
                        <div className="relative w-full max-w-[400px] aspect-square">
                            {/* Center Node */}
                            <motion.div
                                className="absolute left-[60%] top-[43%] -translate-x-1/2 -translate-y-1/2"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Network className="w-16 h-16 text-white" />
                            </motion.div>

                            {/* Orbiting Nodes */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute left-1/2 top-1/2 w-4 h-4"
                                    initial={{
                                        x: 0,
                                        y: 0,
                                        opacity: 0
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: Math.cos(i * (Math.PI / 4)) * 120,
                                        y: Math.sin(i * (Math.PI / 4)) * 120
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1
                                    }}
                                >
                                    <motion.div
                                        className="w-full h-full rounded-full bg-[#01bdc1]"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }}
                                    />
                                    {/* Connecting Lines */}
                                    <motion.div
                                        className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-[#01bdc1] to-[#1d73bd] origin-left"
                                        style={{
                                            width: '120px',
                                            transform: `rotate(${i * 45}deg)`,
                                        }}
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}