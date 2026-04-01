import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does it cost to hire an electrician in Broward County?",
    a: "We offer free estimates for most quoted projects including panel upgrades, lighting installations, and EV charger setups. For troubleshooting and no-power service calls, a $150 diagnostic fee applies — and it's credited toward your repair if you approve the work on the same visit.",
  },
  {
    q: "Do you offer 24/7 emergency electrical service?",
    a: "Yes! B&S Electric LLC provides around-the-clock emergency electrical service throughout Broward County. Whether it's a power outage, sparking outlet, or electrical hazard, call us anytime at (954) 868-4111.",
  },
  {
    q: "Are you a licensed and insured electrical contractor?",
    a: "Absolutely. B&S Electric LLC holds Florida Electrical Contractor License #EC13015340 and carries full liability insurance. Every job we complete meets or exceeds Florida electrical code requirements.",
  },
  {
    q: "Can you install an EV charger at my home?",
    a: "Yes — we specialize in Level 2 EV charger installations for Tesla, Ford, Rivian, and all other electric vehicles. We handle the dedicated circuit, panel capacity check, and permitting so you can start charging at home safely.",
  },
  {
    q: "How long does a panel upgrade take?",
    a: "Most residential panel upgrades are completed in one day. We'll assess your current system, pull the necessary permits, install the new panel, and ensure everything passes inspection — typically within 4–8 hours.",
  },
  {
    q: "What areas do you serve?",
    a: "We're headquartered in Hollywood, FL and serve all of Broward County including Fort Lauderdale, Pembroke Pines, Miramar, Coral Springs, Davie, Plantation, Sunrise, Pompano Beach, Deerfield Beach, Weston, and Cooper City. We're also licensed statewide across Florida.",
  },
  {
    q: "Do I need a permit for electrical work in Florida?",
    a: "Most electrical work in Florida requires a permit — including panel upgrades, new circuit installations, and EV charger setups. As a licensed contractor, B&S Electric handles all permitting and inspections for you.",
  },
  {
    q: "How do I know if my electrical panel needs to be replaced?",
    a: "Common signs include frequently tripping breakers, flickering lights, burning smells near the panel, a panel that's warm to the touch, or if your home still has a Federal Pacific or Zinsco panel. We offer free assessments to determine if a replacement is needed.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding section-bg-dark relative">
    <div className="container mx-auto max-w-3xl">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          Common Questions
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground">
          Frequently Asked Questions
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:glow-border transition-all"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5 text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
