'use client'
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Network } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
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
                        <div className="space-y-6">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Reinventing Life Insurance with{" "}
                                <span className="text-[#000]">Blockchain Security</span>
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Experience the future of life insurance. Secure, transparent, and instant settlements powered by blockchain technology.
                            </p>
                        </div>
                        <div className="z-20 flex flex-col gap-4 min-[400px]:flex-row">
                            <Button size="lg" className="font-medium">
                                Get Started
                            </Button>
                            <Button size="lg" variant="outline" className="font-medium">
                                Explore Plans
                            </Button>
                        </div>
                    </div>

                    {/* Animated Blockchain Visualization */}
                    <div className="relative flex items-center justify-center lg:me-20 lg:justify-end">
                        <div className="relative w-full max-w-[400px] aspect-square">
                            {/* Center Node */}
                            <motion.div
                                className="absolute left-[55%] top-[44%] -translate-x-1/2 -translate-y-1/2"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Network className="w-16 h-16 text-[#000]" />
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
                                        className="w-full h-full rounded-full bg-[#000]"
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
                                        className="absolute top-1/2 left-1/2 h-[1px] bg-[#000]/30 origin-left"
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