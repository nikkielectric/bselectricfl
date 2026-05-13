import { motion } from "framer-motion";
import {
  Zap, Wrench, AlertTriangle, ShieldCheck,
  Lightbulb, Flame, Car, Smartphone
} from "lucide-react";

const services = [
  { icon: Zap, name: "Electrical Panels", desc: "Full panel repairs, upgrades, and replacements to keep your home or business powered safely.", href: "/services/electrical-panels" },
  { icon: Wrench, name: "Electrical Repairs", desc: "Fast, reliable troubleshooting and repair for outlets, wiring, and all electrical issues.", href: "/services/electrical-repairs" },
  { icon: AlertTriangle, name: "Emergency Service", desc: "24/7 emergency response for power outages, sparking outlets, and urgent electrical hazards.", href: "/services/emergency-service" },
  { icon: ShieldCheck, name: "Circuit Breakers", desc: "Circuit breaker installation, replacement, and electrical protection upgrades.", href: "/services/circuit-breakers" },
  { icon: Lightbulb, name: "Lighting & Wiring", desc: "Interior and exterior lighting installation, rewiring, and dedicated circuit additions.", href: "/services/lighting-wiring" },
  { icon: Flame, name: "Smoke & CO Detectors", desc: "Code-compliant smoke and carbon monoxide detector installation and maintenance.", href: "/services/smoke-co-detectors" },
  { icon: Car, name: "EV Charger Installation", desc: "Level 2 home and commercial EV charger installation with dedicated circuits.", href: "/services/ev-charger-installation" },
  { icon: Smartphone, name: "Smart Home Electrical", desc: "Smart switches, outlets, lighting controls, and whole-home automation wiring.", href: "/services/smart-home-electrical" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding section-bg-dark relative">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground">
          Our Electrical Services
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-secondary rounded-xl border border-border p-6 hover:border-primary/40 transition-all duration-300 hover:glow-border block"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
