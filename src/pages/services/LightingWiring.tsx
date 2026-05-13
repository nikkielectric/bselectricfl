import ServicePageLayout, { type ServicePageConfig } from "@/components/ServicePageLayout";
import recessedImg from "@/assets/services/lighting-recessed.jpg";
import outdoorImg from "@/assets/services/lighting-outdoor.jpg";
import rewireImg from "@/assets/services/lighting-rewire.jpg";
import fixtureImg from "@/assets/services/lighting-fixture.jpg";

const config: ServicePageConfig = {
  seo: {
    title: "Lighting Installation & Wiring | Broward County Electricians",
    description: "Recessed LED, outdoor lighting, fixture install, and whole-home rewiring in Broward County, FL. Licensed & insured. Call (954) 868-4111.",
    path: "/services/lighting-wiring",
  },
  eyebrow: "Electrical Services",
  titleLead: "Lighting &",
  titleAccent: "Wiring",
  heroDescription:
    "From custom recessed lighting to whole-home rewiring, B&S Electric delivers clean, code-compliant electrical work across Broward County. Modern fixtures, smart dimming, outdoor and landscape lighting — done right the first time.",
  servicesHeading: "Lighting & Wiring Services",
  services: [
    { image: recessedImg, title: "Recessed & LED Lighting", desc: "Custom recessed cans, cove lighting, and modern LED solutions for every room — energy efficient and beautiful." },
    { image: outdoorImg, title: "Outdoor & Landscape Lighting", desc: "Pathway lights, palm tree uplighting, soffit lighting, and pool deck lighting designed for Florida weather." },
    { image: rewireImg, title: "Whole-Home Rewiring", desc: "Replace aluminum, knob-and-tube, or deteriorated wiring in older Broward County homes safely and to current code." },
    { image: fixtureImg, title: "Fixture Installation", desc: "Chandeliers, pendants, ceiling fans, vanity lighting — installed properly with reinforced support boxes." },
  ],
  warningHeading: "Signs You Need Lighting or Wiring Work",
  warningDescription:
    "Older South Florida homes often have wiring that wasn't designed for today's electrical loads. These are the symptoms we see most often.",
  warningSigns: [
    "Lights flicker or dim when appliances start",
    "Outlets without a third (ground) prong",
    "Cloth, aluminum, or knob-and-tube wiring",
    "Not enough outlets for modern living",
    "Outdated, harsh, or yellowing fixtures",
    "Dim outdoor lighting or unsafe walkways at night",
  ],
  process: [
    { step: "01", title: "Design Consult", desc: "We walk through your space and discuss your vision and budget." },
    { step: "02", title: "Layout & Quote", desc: "Detailed lighting plan or wiring scope with upfront pricing." },
    { step: "03", title: "Permit", desc: "Permits pulled with your Broward city when required." },
    { step: "04", title: "Clean Install", desc: "Tidy, code-compliant installation with minimal disruption." },
    { step: "05", title: "Final Walkthrough", desc: "We test every fixture and switch with you before we leave." },
  ],
  faqHeading: "Lighting & Wiring FAQ — Broward County",
  faqs: [
    { q: "How much does recessed lighting cost in South Florida?", a: "Recessed LED lights run about $150-$250 per can installed for a typical retrofit. Larger jobs or new construction with multiple zones and dimmers will get a custom quote — usually $1,500-$4,000 for a full living area." },
    { q: "Do I need to rewire my older Fort Lauderdale home?", a: "Many homes built before 1975 in Broward County have aluminum wiring or undersized service that struggles with modern loads. A free inspection will tell you whether spot repairs or a full rewire makes more sense." },
    { q: "Can you install landscape lighting that survives Florida weather?", a: "Yes — we use marine-grade fixtures, properly rated transformers, and direct-burial wiring designed for South Florida's heat, salt air, and afternoon storms." },
    { q: "Will you install a fixture I bought online?", a: "Absolutely. We install customer-supplied chandeliers, fans, and pendants all the time. We also verify the box can support the weight (especially for ceiling fans) and add bracing if needed." },
    { q: "How long does whole-home rewiring take?", a: "A typical 3-bedroom Broward home takes 5-10 working days depending on access (drywall, ceiling, attic). We work in sections so you keep partial power throughout." },
    { q: "Can you add smart dimmers and lighting controls?", a: "Yes — we install Lutron Caseta, Leviton Decora Smart, Wi-Fi dimmers, and full-home control systems with proper neutral wiring." },
  ],
  ctaHeading: "Ready to Light Up Your Home?",
  ctaDescription:
    "Tell us about your lighting or wiring project and a licensed Broward County electrician will reach out within one business day with a clear quote.",
  serviceOptions: [
    { value: "recessed", label: "Recessed / LED Lighting" },
    { value: "outdoor-lighting", label: "Outdoor / Landscape" },
    { value: "rewire", label: "Whole-Home Rewiring" },
    { value: "fixture", label: "Fixture Installation" },
    { value: "smart-dimming", label: "Smart Dimming / Controls" },
  ],
};

const LightingWiring = () => <ServicePageLayout config={config} />;
export default LightingWiring;
