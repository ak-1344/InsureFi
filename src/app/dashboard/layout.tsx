import { cn } from "@/lib/utils"


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={cn(" dark bg-gray-900 text-gray-100 antialiased")}>{children}</body>
        </html>
    )
}
