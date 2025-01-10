import { WhyChooseSection } from "@/components/why-choose"
import { PlansSection } from "@/components/plans"
import { VerificationSection } from "@/components/verification"
import { AboutSection } from "@/components/about"
import { TestimonialsSection } from "@/components/testimonials"
import { FAQSection } from "@/components/faq"
import { CTASection } from "@/components/cta"
import { Footer } from "@/components/footer"
import LandingPage from "@/components/landingPage"
import HowItWorks from "@/components/workfeature_us"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <>
    <Navbar/>
    <main>
      <LandingPage/>
      <HowItWorks/>
      <WhyChooseSection />
      <PlansSection />
      <VerificationSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
    </>
  )
}

