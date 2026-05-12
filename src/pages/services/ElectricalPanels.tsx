import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, AlertTriangle, CheckCircle2, Phone, ArrowRight, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CircuitBackground from "@/components/CircuitBackground";
import { Button } from "@/components/ui/button";
import panelUpgradesImg from "@/assets/services/panel-upgrades.jpg";
import panelReplacementsImg from "@/assets/services/panel-replacements.jpg";
import panelRepairsImg from "@/assets/services/panel-repairs.jpg";
import subPanelImg from "@/assets/services/sub-panel.jpg";

const warningSigns = [
  "Frequently tripping breakers",
  "Flickering or dimming lights",
  "Burning smell near the panel",
  "Rust, corrosion, or warm panel cover",
  "Two-prong outlets / no grounding",
  "Panel is 25+ years old (Federal Pacific, Zinsco, Pushmatic)",
];

const services = [
  {
    icon: Zap,
    image: panelUpgradesImg,
    title: "Panel Upgrades",
    desc: "Upgrade from 100A to 200A or 400A service to power modern appliances, EV chargers, and HVAC systems safely.",
  },
  {
    icon: ShieldCheck,
    image: panelReplacementsImg,
    title: "Panel Replacements",
    desc: "Full code-compliant replacement of outdated, recalled, or unsafe panels with modern brands like Square D, Eaton, and Siemens.",
  },
  {
    icon: AlertTriangle,
    image: panelRepairsImg,
    title: "Panel Repairs",
    desc: "Diagnose and repair faulty breakers, loose connections, burnt bus bars, and other panel issues — fast.",
  },
  {
    icon: CheckCircle2,
    image: subPanelImg,
    title: "Sub-Panel Installation",
    desc: "Add capacity for additions, garages, workshops, ADUs, or pool equipment with properly sized sub-panels.",
  },
];

const process = [
  { step: "01", title: "Free On-Site Assessment", desc: "We inspect your existing panel, load demand, and grounding system." },
  { step: "02", title: "Transparent Quote", desc: "Upfront pricing — no surprises, no hidden fees, no high-pressure sales." },
  { step: "03", title: "Permit & Schedule", desc: "We pull all required permits with your city and coordinate with FPL." },
  { step: "04", title: "Professional Installation", desc: "Licensed electricians complete the work to NEC code, typically in one day." },
  { step: "05", title: "Inspection & Cleanup", desc: "We handle the final inspection and leave your space spotless." },
];

const faqs = [
  {
    q: "How much does an electrical panel upgrade cost in South Florida?",
    a: "Most panel upgrades in Fort Lauderdale and Broward County range from $1,800 to $3,500 depending on amperage, brand, and whether trenching or meter relocation is needed. We provide free on-site quotes with upfront pricing.",
  },
  {
    q: "Do I need a permit to replace my electrical panel in Florida?",
    a: "Yes. Florida law and local municipalities in Broward County require permits for panel replacements and upgrades. B&S Electric pulls all necessary permits and coordinates inspections so you don't have to worry about compliance.",
  },
  {
    q: "How long does a panel upgrade take?",
    a: "Most residential panel upgrades are completed in a single day. We schedule the work around your availability, handle the FPL disconnect/reconnect, and pass final inspection before we leave.",
  },
  {
    q: "Is my Federal Pacific or Zinsco panel dangerous?",
    a: "Yes. Federal Pacific and Zinsco panels have known failure rates and are no longer manufactured. If your South Florida home still has one, we strongly recommend a free inspection and replacement for safety.",
  },
  {
    q: "Can you install a sub-panel for my garage, pool, or ADU?",
    a: "Absolutely. We size and install NEC-compliant sub-panels for workshops, pool equipment, detached garages, and ADUs throughout Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding areas.",
  },
  {
    q: "What size panel do I need for an EV charger?",
    a: "A 200-amp service is typically recommended if you're adding a Level 2 EV charger. We calculate your total load demand and recommend the right upgrade for your home in South Florida.",
  },
];

const ElectricalPanels = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
    <CircuitBackground />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }),
      }}
    />
    <div className="relative z-10">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-28 pb-16 md:pt-32 md:pb-24 section-bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Electrical Services
            </p>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Electrical Panel <span className="text-primary">Upgrades & Repairs</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Your electrical panel is the heart of your home's power system. B&S Electric provides
              code-compliant panel upgrades, replacements, and repairs across Broward County —
              backed by a licensed master electrician and a workmanship warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="tel:9548684111">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-electric-glow font-semibold gap-2">
                  <Phone className="h-4 w-4" />
                  (954) 868-4111
                </Button>
              </a>
              <a href="#">
                <Button size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 hover:text-foreground font-semibold gap-2">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground">
              Full-Service Panel Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl border border-border p-0 min-h-[280px] hover:border-primary/40 transition-all duration-300"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="section-padding section-bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Warning Signs
              </p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
                Is Your Panel Failing?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A failing electrical panel is one of the leading causes of house fires in Florida.
                If you're noticing any of these warning signs, schedule an inspection today.
              </p>
              <a href="tel:9548684111">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-electric-glow font-semibold gap-2">
                  <Phone className="h-4 w-4" />
                  Call (954) 868-4111
                </Button>
              </a>
            </div>

            <ul className="space-y-3">
              {warningSigns.map((sign) => (
                <li
                  key={sign}
                  className="flex items-start gap-3 bg-secondary border border-border rounded-lg p-4"
                >
                  <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Our Process
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground">
              Simple, Transparent, Done Right
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-secondary rounded-xl border border-border p-6"
              >
                <div className="font-heading font-extrabold text-3xl text-primary mb-3">{p.step}</div>
                <h3 className="font-heading font-bold text-base text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Frequently Asked Questions
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground">
              Electrical Panel FAQ — South Florida
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-secondary border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-heading font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-secondary border border-primary/30 rounded-2xl p-10 md:p-14">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">
              Ready to Upgrade Your Panel?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get a free, no-obligation quote from a licensed Florida electrical contractor today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:9548684111">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-electric-glow font-semibold gap-2">
                  <Phone className="h-4 w-4" />
                  (954) 868-4111
                </Button>
              </a>
              <a href="#">
                <Button size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 font-semibold">
                  Request a Free Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>
  );
};

export default ElectricalPanels;
