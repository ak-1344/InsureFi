"use client";

import { UserPlus, ListChecks, Shield, Zap, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
    {
        icon: <UserPlus className="w-12 h-12 text-primary" />,
        title: "1. Register and Create Your Profile",
        description: "Sign up on InsureFi by providing your basic personal details to get started."
    },
    {
        icon: <ListChecks className="w-12 h-12 text-primary" />,
        title: "2. Select a Tailored Plan",
        description: "Choose an insurance plan that best fits your needs, based on your age, desired coverage, and benefits."
    },
    {
        icon: <Shield className="w-12 h-12 text-primary" />,
        title: "3. Secure Blockchain Transactions",
        description: "Payments and claims are processed securely via blockchain, ensuring transparency and automated verification."
    },
    {
        icon: <Zap className="w-12 h-12 text-primary" />,
        title: "4. Instant Claim Settlements",
        description: "Upon approval, receive instant settlement of your claim, thanks to our automated smart contract process."
    }
]

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from './ui/animated-beam';

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "flex flex-col items-center",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";


const Icons = {
    openai: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
    ),
    user: () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    ),
};

const Step = ({ icon, title, description, isLast }: { icon: React.ReactNode, title: string, description: string, isLast: boolean }) => (
    <div className="flex flex-col items-center">
        <Card className="w-full max-w-sm h-full">
            <CardHeader>
                <CardTitle className="flex items-center justify-center">{icon}</CardTitle>
            </CardHeader>
            <CardContent>
                <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
                <p className="text-muted-foreground text-center">{description}</p>
            </CardContent>
        </Card>
    </div>
)

export default function HowItWorks() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">How InsureFi Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <Step key={index} {...step} isLast={index === steps.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    )
}
