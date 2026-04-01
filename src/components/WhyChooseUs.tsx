import { motion } from "framer-motion";
import { Wrench, Clock, FileCheck, ThumbsUp, Headphones } from "lucide-react";

const reasons = [
  { icon: Wrench, title: "No Shortcuts, Real Fixes", desc: "We do it right the first time — no band-aids, no callbacks." },
  { icon: Clock, title: "24/7 Availability", desc: "Electrical emergencies don't wait, and neither do we. Always on call." },
  { icon: FileCheck, title: "Code-Compliant Work", desc: "Every job meets or exceeds Florida electrical code requirements." },
  { icon: ThumbsUp, title: "100% Satisfaction", desc: "We're not done until you're completely happy with the work." },
  { icon: Headphones, title: "Responsive Communication", desc: "We answer calls, show up on time, and keep you informed every step." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding section-bg-dark relative">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why B&S Electric</p>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground">
          Built on Trust & Quality
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <r.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
