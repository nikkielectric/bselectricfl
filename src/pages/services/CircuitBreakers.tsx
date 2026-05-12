import ServicePageLayout, { type ServicePageConfig } from "@/components/ServicePageLayout";
import installImg from "@/assets/services/breakers-install.jpg";
import gfciImg from "@/assets/services/breakers-gfci.jpg";
import afciImg from "@/assets/services/breakers-afci.jpg";
import replaceImg from "@/assets/services/breakers-replace.jpg";

const config: ServicePageConfig = {
  eyebrow: "Electrical Services",
  titleLead: "Circuit Breaker",
  titleAccent: "Installation & Replacement",
  heroDescription:
    "Circuit breakers are the first line of defense between your family and an electrical fire. B&S Electric installs, replaces, and upgrades breakers — including GFCI and AFCI protection — to current NEC code across Broward County.",
  servicesHeading: "Circuit Breaker Solutions",
  services: [
    { image: installImg, title: "New Breaker Installation", desc: "Add new circuits for additions, appliances, HVAC, or workshop equipment with properly sized breakers." },
    { image: gfciImg, title: "GFCI Protection", desc: "Required GFCI breakers and outlets for kitchens, bathrooms, garages, outdoor, and pool areas — Florida code compliant." },
    { image: afciImg, title: "AFCI Breakers", desc: "Arc-fault breakers detect dangerous arcing and prevent electrical fires in bedrooms and living areas." },
    { image: replaceImg, title: "Faulty Breaker Replacement", desc: "Replace tripping, buzzing, or recalled breakers with modern Square D, Eaton, or Siemens equivalents." },
  ],
  warningHeading: "Signs Your Breaker Needs Attention",
  warningDescription:
    "A failing breaker can fail to trip during a fault — defeating its entire purpose. Don't wait until something burns to act.",
  warningSigns: [
    "Breaker trips repeatedly with no obvious cause",
    "Breaker won't reset or feels loose",
    "Buzzing, humming, or crackling from the panel",
    "Breaker or panel area is warm to touch",
    "Burning smell from inside the panel",
    "Older brand: Federal Pacific, Zinsco, Pushmatic, Challenger",
  ],
  process: [
    { step: "01", title: "Inspect", desc: "We check your panel, breaker condition, and circuit load." },
    { step: "02", title: "Recommend", desc: "Right breaker brand, type (GFCI/AFCI/standard), and amperage." },
    { step: "03", title: "Quote", desc: "Upfront flat pricing with no surprises." },
    { step: "04", title: "Install", desc: "Power-down, install to NEC code, fully test the circuit." },
    { step: "05", title: "Walkthrough", desc: "We show you what changed and answer any questions." },
  ],
  faqHeading: "Circuit Breaker FAQ — South Florida",
  faqs: [
    { q: "How much does it cost to replace a circuit breaker in Broward County?", a: "Standard breaker replacement runs $150-$300 installed. GFCI and AFCI breakers cost more ($250-$450) due to higher component cost. We always quote flat-rate before starting." },
    { q: "Do I need GFCI breakers in my Florida home?", a: "Florida code requires GFCI protection in kitchens, bathrooms, laundry rooms, garages, basements, outdoor outlets, and within 6 feet of pool equipment. We bring older homes up to current code." },
    { q: "What's the difference between GFCI and AFCI?", a: "GFCI (ground-fault) protects people from shock — required in wet areas. AFCI (arc-fault) protects against electrical fires from damaged wiring — required in bedrooms and most living areas. Many areas now require dual-function breakers." },
    { q: "Why does my breaker keep tripping?", a: "Three main causes: overloaded circuit (too much pulled at once), short circuit (hot and neutral touching), or ground fault (current leaking to ground). A failing breaker itself is also possible. We diagnose and fix the root cause." },
    { q: "Are Federal Pacific Stab-Lok breakers really dangerous?", a: "Yes. Federal Pacific Stab-Lok breakers have a documented failure-to-trip rate as high as 50% in some studies. If your South Florida home still has one, we strongly recommend full panel replacement." },
    { q: "Can you add a circuit for my new appliance or EV charger?", a: "Yes — adding a dedicated circuit and breaker is one of our most common jobs. We make sure your panel has capacity, install the breaker, run the wire, and add the outlet." },
  ],
  ctaHeading: "Need a Breaker Installed or Replaced?",
  ctaDescription:
    "Tell us about your panel and what you need, and a licensed Broward County electrician will reach out within one business day with upfront pricing.",
  serviceOptions: [
    { value: "new-breaker", label: "New Breaker / Circuit" },
    { value: "gfci", label: "GFCI Protection" },
    { value: "afci", label: "AFCI Breaker" },
    { value: "replace-breaker", label: "Replace Faulty Breaker" },
    { value: "old-panel", label: "Federal Pacific / Zinsco" },
  ],
};

const CircuitBreakers = () => <ServicePageLayout config={config} />;
export default CircuitBreakers;
