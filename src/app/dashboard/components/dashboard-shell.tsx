import { cn } from "@/lib/utils"
import { DashboardNav } from "./dashboard-nav"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardShell({
  children,
  className,
  ...props
}: DashboardShellProps) {
  return (
    <div className="flex min-h-screen">
      <DashboardNav />
      <main className={cn("flex-1 overflow-y-auto", className)} {...props}>
        <div className="container mx-auto p-4 md:p-8">{children}</div>
      </main>
    </div>
  )
}

