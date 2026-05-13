import ServicePageLayout, { type ServicePageConfig } from "@/components/ServicePageLayout";
import nightImg from "@/assets/services/emergency-night.jpg";
import outageImg from "@/assets/services/emergency-outage.jpg";
import burntImg from "@/assets/services/emergency-burnt.jpg";
import vanImg from "@/assets/services/emergency-van.jpg";

const config: ServicePageConfig = {
  seo: {
    title: "24/7 Emergency Electrician in Broward County, FL",
    description: "24/7 emergency electrical service across Broward County. Power loss, sparking outlets, burning smells — licensed help fast. Call (954) 868-4111.",
    path: "/services/emergency-service",
  },
  eyebrow: "24/7 Emergency Service",
  titleLead: "Emergency",
  titleAccent: "Electrical Service",
  heroDescription:
    "Electrical emergencies don't wait — and neither do we. B&S Electric responds 24/7 across Broward County with licensed master electricians ready to make your home safe again. Burning smells, sparking outlets, or total power loss — call now.",
  servicesHeading: "When You Need Us Most",
  services: [
    { image: nightImg, title: "After-Hours Calls", desc: "Nights, weekends, holidays — a licensed electrician is on call across Fort Lauderdale and Broward County." },
    { image: outageImg, title: "Power Loss Diagnosis", desc: "Total or partial power outage that isn't FPL? We find the cause fast and restore service safely." },
    { image: burntImg, title: "Burning & Sparking", desc: "Burning smells, sparking outlets, or smoking panels — get out and call us. We'll respond immediately." },
    { image: vanImg, title: "Storm & Flood Damage", desc: "Hurricane, lightning, or flood damage? We make damaged systems safe and coordinate with insurance." },
  ],
  warningHeading: "Call Us Immediately If You See...",
  warningDescription:
    "These are not 'wait until Monday' problems. Florida's heat and humidity make electrical fires spread fast — call now and stay safe.",
  warningSigns: [
    "Burning plastic smell from outlets, switches, or panel",
    "Smoke or sparks from any electrical device",
    "Hot or discolored outlets or switch plates",
    "Total loss of power (and your neighbors have power)",
    "Buzzing or crackling sounds from your panel",
    "Visible water near electrical panel or outlets",
  ],
  process: [
    { step: "01", title: "Call Now", desc: "Reach a real person 24/7 at (954) 868-4111." },
    { step: "02", title: "Rapid Dispatch", desc: "We dispatch the closest licensed electrician immediately." },
    { step: "03", title: "Make Safe", desc: "On arrival, we isolate the hazard and stabilize your system." },
    { step: "04", title: "Diagnose & Quote", desc: "Clear explanation and upfront pricing before any major work." },
    { step: "05", title: "Permanent Repair", desc: "Full code-compliant repair, plus follow-up if needed." },
  ],
  faqHeading: "Emergency Electrician FAQ — South Florida",
  faqs: [
    { q: "Do you really answer the phone 24/7?", a: "Yes. B&S Electric has a real licensed electrician on call 24 hours a day, 7 days a week — including weekends and holidays — across Broward County." },
    { q: "How fast can you get to my Fort Lauderdale home?", a: "Most emergency calls in Fort Lauderdale, Hollywood, Pembroke Pines, and Davie get an electrician on-site within 60-90 minutes. Outlying Broward areas may take slightly longer." },
    { q: "How much does an emergency electrician cost in Broward County?", a: "Emergency service calls typically start at $185 for the dispatch and diagnosis. Repair pricing is quoted upfront before any work begins. We never inflate prices because of the time of day." },
    { q: "What should I do while I wait for the electrician?", a: "If you smell burning, see smoke, or have sparking, leave the home and call us from outside. If safe, shut off the main breaker. Don't touch anything wet near electrical." },
    { q: "Do you handle hurricane and storm damage?", a: "Yes — storm and flood electrical damage is a major part of what we do in South Florida. We safely de-energize damaged systems, work with your insurance, and rebuild to current code." },
    { q: "Is a partial power outage an emergency?", a: "It can be. Partial outages often indicate a serious problem like a failing service neutral, which can damage appliances and create fire risk. Call us if it persists more than a few minutes." },
  ],
  ctaHeading: "Need an Electrician Right Now?",
  ctaDescription:
    "Don't wait — call (954) 868-4111 24/7 for fastest response. Or send a non-urgent request and we'll reach out within one business day.",
  serviceOptions: [
    { value: "burning", label: "Burning Smell / Smoke" },
    { value: "power-loss", label: "Power Loss" },
    { value: "sparking", label: "Sparking / Hot Outlet" },
    { value: "storm", label: "Storm / Flood Damage" },
    { value: "other-emergency", label: "Other Emergency" },
  ],
};

const EmergencyService = () => <ServicePageLayout config={config} />;
export default EmergencyService;
