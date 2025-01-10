import { DashboardHeader } from "./components/dashboard-header"
import { DashboardShell } from "./components/dashboard-shell"
import { OverviewSection } from "./components/overview-section"
import { WalletSection } from "./components/wallet-section"
import { PaymentSection } from "./components/payment-section"
import { ClaimStatusSection } from "./components/claim-status-section"
import { PolicyDetailsSection } from "./components/policy-details-section"
import { InteractiveToolsSection } from "./components/interactive-tools-section"
import { NotificationsSection } from "./components/notifications-section"
import { SupportSection } from "./components/support-section"
import './styles.css'
export default function DashboardPage() {
    return (
        <DashboardShell>
            <DashboardHeader
                heading="InsureFi Dashboard"
                text="Manage your blockchain-based life insurance policies"
            />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <OverviewSection className="col-span-full" />
                <WalletSection className="md:col-span-1" />
                <PaymentSection className="md:col-span-1 lg:col-span-2" />
                <ClaimStatusSection className="md:col-span-1" />
                <PolicyDetailsSection className="md:col-span-2 lg:col-span-1" />
                <InteractiveToolsSection className="md:col-span-2 lg:col-span-1" />
                <NotificationsSection className="md:col-span-1" />
                <SupportSection className="md:col-span-1" />
            </div>
        </DashboardShell>
    )
}

