import { motion } from "framer-motion";
import { Zap, ShieldCheck, AlertTriangle, CheckCircle2, Phone, ArrowRight } from "lucide-react";
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

const ElectricalPanels = () => (
  <>
    <CircuitBackground />
    <div className="relative z-10">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32 md:pt-40 pb-16 md:pb-24 section-bg-dark">
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
                <Button size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 font-semibold gap-2">
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

export default ElectricalPanels;
