'use client'
import { cn } from "@/lib/utils";
import { useState } from 'react'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'

export default function LandingPage() {

    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-[#202020] md:shadow-xl">
            <div className="absolute left-0 flex flex-col items-start justify-center h-full pl-8">
                <h2 className="z-10 whitespace-pre-wrap text-5xl font-medium tracking-tighter text-white">
                    InsureFI
                </h2>
                <p className="text-white">
                    When life ends, we make sure the money doesn’t.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    Get Started
                </button>
            </div>
            <InteractiveGridPattern
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            />
        </div>
    )
}

