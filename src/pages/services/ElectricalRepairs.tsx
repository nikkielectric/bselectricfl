import ServicePageLayout, { type ServicePageConfig } from "@/components/ServicePageLayout";
import outletImg from "@/assets/services/repairs-outlet.jpg";
import wiringImg from "@/assets/services/repairs-wiring.jpg";
import breakerImg from "@/assets/services/repairs-breaker.jpg";
import troubleshootImg from "@/assets/services/repairs-troubleshoot.jpg";

const config: ServicePageConfig = {
  seo: {
    title: "Electrical Repairs in Fort Lauderdale & Broward County, FL",
    description: "Fast electrical repair for outlets, wiring, breakers, and no-power calls in Broward County. Licensed, warrantied work. Call (954) 868-4111.",
    path: "/services/electrical-repairs",
  },
  eyebrow: "Electrical Services",
  titleLead: "Electrical",
  titleAccent: "Repairs",
  heroDescription:
    "From flickering lights to dead outlets and tripping breakers, our licensed electricians diagnose and fix electrical problems fast across Fort Lauderdale and all of Broward County — with a workmanship warranty on every repair.",
  servicesHeading: "Common Electrical Repairs",
  services: [
    { image: outletImg, title: "Outlet & Switch Repair", desc: "Replace dead, sparking, loose, or scorched outlets and switches with code-compliant fixtures." },
    { image: wiringImg, title: "Wiring Repair", desc: "Repair damaged, aluminum, knob-and-tube, or rodent-chewed wiring safely and to NEC code." },
    { image: breakerImg, title: "Tripping Breaker Diagnosis", desc: "Pinpoint the root cause of repeatedly tripping breakers — overloaded circuits, shorts, or faulty breakers." },
    { image: troubleshootImg, title: "Troubleshooting", desc: "Flickering lights, dead circuits, buzzing fixtures, or shocks — we trace and fix electrical mysteries." },
  ],
  warningHeading: "Don't Ignore These Repair Warnings",
  warningDescription:
    "Small electrical problems become big ones — and Florida's heat and humidity accelerate failures. If you're seeing any of these signs, call us today.",
  warningSigns: [
    "Outlets that are warm, scorched, or sparking",
    "Lights that flicker or dim when appliances run",
    "Breakers that trip repeatedly",
    "Buzzing or humming from outlets or switches",
    "Mild shocks when touching switches or appliances",
    "Burning smell with no visible source",
  ],
  process: [
    { step: "01", title: "Phone Triage", desc: "Quick call to understand the symptoms and dispatch the right tech." },
    { step: "02", title: "On-Site Diagnosis", desc: "We arrive, isolate the issue, and explain exactly what's wrong." },
    { step: "03", title: "Upfront Quote", desc: "Flat-rate repair pricing before we touch a single wire." },
    { step: "04", title: "Repair & Test", desc: "Code-compliant repair, then full functional testing." },
    { step: "05", title: "Warranty", desc: "Backed by our workmanship warranty for peace of mind." },
  ],
  faqHeading: "Electrical Repair FAQ — Broward County",
  faqs: [
    { q: "How much does an electrical repair cost in Fort Lauderdale?", a: "Most minor repairs (outlets, switches, single breakers) run $150-$350. Larger issues like rewiring a circuit or repairing burned panel components range from $400-$1,500. We always provide upfront flat-rate pricing before starting." },
    { q: "Do you offer same-day electrical repair?", a: "Yes. B&S Electric offers same-day repair across Broward County — Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, and surrounding areas — when scheduling allows." },
    { q: "Can I fix a tripping breaker myself?", a: "We strongly recommend against it. A repeatedly tripping breaker is usually a symptom of a deeper issue (short, ground fault, overload, failing breaker) that needs a licensed electrician to diagnose safely." },
    { q: "Why do my lights flicker in my Florida home?", a: "Flickering lights can be caused by loose connections, an overloaded circuit, a failing breaker, or even an issue with FPL's service drop. We diagnose the exact cause and fix it." },
    { q: "Are aluminum wiring repairs safe?", a: "Yes — when done by a licensed electrician using approved AlumiConn or COPALUM connectors. Many South Florida homes built in the 60s-70s have aluminum wiring that needs proper repair." },
    { q: "Do you repair electrical damage from hurricanes or storms?", a: "Absolutely. Storm-related electrical damage — flooded outlets, surge-fried circuits, downed service lines — is a specialty. We work with insurance and prioritize emergency calls." },
  ],
  ctaHeading: "Need an Electrical Repair?",
  ctaDescription:
    "Tell us what's happening and a licensed Broward County electrician will respond within one business day — often same-day. Upfront pricing, no obligation.",
  serviceOptions: [
    { value: "outlet-switch", label: "Outlet / Switch Repair" },
    { value: "wiring", label: "Wiring Repair" },
    { value: "breaker", label: "Tripping Breaker" },
    { value: "troubleshoot", label: "Troubleshooting" },
    { value: "other", label: "Other Repair" },
  ],
};

const ElectricalRepairs = () => <ServicePageLayout config={config} />;
export default ElectricalRepairs;
