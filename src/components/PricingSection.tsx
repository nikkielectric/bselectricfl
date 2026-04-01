import { motion } from "framer-motion";
import { CheckCircle, Info } from "lucide-react";

const PricingSection = () => (
  <section id="pricing" className="section-padding section-bg-alt relative">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Transparent Pricing</p>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground">
          No Surprises, No Hidden Fees
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl border border-border p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <h3 className="font-heading font-bold text-xl text-foreground">Free Estimates</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We provide free, no-obligation estimates for quoted projects including:
          </p>
          <ul className="space-y-2">
            {["Panel upgrades & replacements", "Lighting installations", "EV charger installation", "Dedicated circuit additions"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-card rounded-xl border border-primary/30 p-8 glow-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <Info className="h-6 w-6 text-primary" />
            <h3 className="font-heading font-bold text-xl text-foreground">$150 Diagnostic Fee</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For troubleshooting and no-power service calls, a $150 diagnostic fee applies.
          </p>
          <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
            <p className="text-sm font-semibold text-primary">
              💡 The diagnostic fee is credited toward your repair cost when you approve the work on the same visit.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PricingSection;
