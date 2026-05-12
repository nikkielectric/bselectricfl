import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { AlertTriangle, Phone, ArrowRight, ChevronDown, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CircuitBackground from "@/components/CircuitBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export interface ServiceCard {
  image: string;
  title: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServicePageConfig {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  heroDescription: string;
  servicesHeading: string;
  services: ServiceCard[];
  warningHeading: string;
  warningDescription: string;
  warningSigns: string[];
  process: ProcessStep[];
  faqHeading: string;
  faqs: FaqItem[];
  ctaHeading: string;
  ctaDescription: string;
  serviceOptions: { value: string; label: string }[];
}

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  city: z.string().trim().min(1, "City is required").max(100),
  serviceType: z.string().min(1, "Please select a service"),
  message: z.string().trim().max(1000).optional(),
});

const ServicePageLayout = ({ config }: { config: ServicePageConfig }) => {
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    serviceType: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = quoteSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check the form",
        description: result.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Quote request sent!",
        description: "We'll be in touch within 1 business day.",
      });
      setForm({ name: "", email: "", phone: "", city: "", serviceType: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <>
      <CircuitBackground />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: config.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
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
                {config.eyebrow}
              </p>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                {config.titleLead} <span className="text-primary">{config.titleAccent}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {config.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a href="tel:9548684111">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-electric-glow font-semibold gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    (954) 868-4111
                  </Button>
                </a>
                <a href="#quote">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/40 text-foreground hover:bg-primary/10 hover:text-foreground font-semibold gap-2"
                  >
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
                {config.servicesHeading}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {config.services.map((s, i) => (
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
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      {s.title}
                    </h3>
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
                  {config.warningHeading}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {config.warningDescription}
                </p>
                <a href="tel:9548684111">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-electric-glow font-semibold gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call (954) 868-4111
                  </Button>
                </a>
              </div>

              <ul className="space-y-3">
                {config.warningSigns.map((sign) => (
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
              {config.process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-secondary rounded-xl border border-border p-6"
                >
                  <div className="font-heading font-extrabold text-3xl text-primary mb-3">
                    {p.step}
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground mb-2">
                    {p.title}
                  </h3>
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
                {config.faqHeading}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {config.faqs.map((faq, i) => (
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
                    <span className="font-heading font-semibold text-foreground pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Quote Form */}
        <section id="quote" className="section-padding section-bg-alt border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                  Get a Free Quote
                </p>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">
                  {config.ctaHeading}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {config.ctaDescription}
                </p>
                <a href="tel:9548684111" className="inline-block">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-electric-glow font-semibold gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Or Call (954) 868-4111
                  </Button>
                </a>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-secondary border border-primary/30 rounded-2xl p-6 md:p-8 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      maxLength={100}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      maxLength={20}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      maxLength={255}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="Fort Lauderdale"
                      maxLength={100}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Needed</Label>
                  <Select
                    value={form.serviceType}
                    onValueChange={(v) => setForm({ ...form, serviceType: v })}
                  >
                    <SelectTrigger id="serviceType">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {config.serviceOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details (optional)</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-electric-glow font-semibold gap-2"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "Sending..." : "Request My Free Quote"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export const defaultProcess: ProcessStep[] = [
  { step: "01", title: "Free On-Site Assessment", desc: "We inspect your system and identify the right solution for your home." },
  { step: "02", title: "Transparent Quote", desc: "Upfront pricing — no surprises, no hidden fees, no high-pressure sales." },
  { step: "03", title: "Permit & Schedule", desc: "We pull all required permits with your city when needed." },
  { step: "04", title: "Professional Installation", desc: "Licensed electricians complete the work to NEC code." },
  { step: "05", title: "Inspection & Cleanup", desc: "We handle final inspection and leave your space spotless." },
];

export default ServicePageLayout;
