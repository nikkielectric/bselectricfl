import { motion } from "framer-motion";
import { Users, DollarSign, MessageSquare, ShieldCheck } from "lucide-react";

const props = [
  {
    icon: Users,
    title: "Locally Owned & Operated",
    desc: "We take pride in providing personalized service and treat every customer like family.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    desc: "We always provide upfront pricing and only accept payment once the work is 100% complete.",
  },
  {
    icon: MessageSquare,
    title: "Free 2nd Opinion",
    desc: "Received a quote from another company? We'll gladly review it and help you make the right call.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Florida-licensed (EC13015340), drug-tested, and background-checked technicians for your family's safety.",
  },
];

const ValueProps = () => (
  <section className="relative z-10 -mt-8 md:-mt-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {props.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl border border-border p-6 text-center"
          >
            <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <p.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProps;
