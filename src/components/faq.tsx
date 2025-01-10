import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does blockchain ensure my policy is secure?",
    answer: "Your policy is stored on the Aptos blockchain as a smart contract, making it immutable and tamper-proof. Every transaction change recorded transparently, ensuring complete security of your details.",
  },
  {
    question: "What happens in case of a dispute?",
    answer: "Our smart contracts include built-in dispute resolution mechanisms. All policy terms and conditions are clearly coded, in case of disputes, an independent arbitrator can review the blockchain records for fair resolution.",
  },
  {
    question: "How do instant settlements work?",
    answer: "When a valid claim is submitted, our ML system verifies the documents instantly. Once verified, smart contract automatically triggers payment, transferring funds directly to your nominated account within minutes.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-neutral-500 md:text-lg dark:text-neutral-400">
            Find answers to common questions about InsureFi
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

