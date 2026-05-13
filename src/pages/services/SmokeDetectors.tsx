import ServicePageLayout, { type ServicePageConfig } from "@/components/ServicePageLayout";
import installImg from "@/assets/services/smoke-install.jpg";
import coImg from "@/assets/services/smoke-co.jpg";
import comboImg from "@/assets/services/smoke-combo.jpg";
import alarmImg from "@/assets/services/smoke-alarm.jpg";

const config: ServicePageConfig = {
  seo: {
    title: "Smoke & CO Detector Installation | Broward County, FL",
    description: "Hardwired, interconnected smoke and carbon monoxide detector installation to Florida code in Broward County. Call (954) 868-4111.",
    path: "/services/smoke-co-detectors",
  },
  eyebrow: "Electrical Services",
  titleLead: "Smoke & CO",
  titleAccent: "Detector Installation",
  heroDescription:
    "Florida law requires working smoke alarms in every home — and Broward County code requires hardwired, interconnected detectors in newer construction. B&S Electric installs and replaces smoke and carbon monoxide detectors that meet current code and protect your family.",
  servicesHeading: "Detector Installation & Service",
  services: [
    { image: installImg, title: "Hardwired Smoke Detectors", desc: "Code-compliant 120V hardwired smoke alarms with battery backup, properly placed in every required location." },
    { image: coImg, title: "Carbon Monoxide Detectors", desc: "CO detectors installed near sleeping areas and gas appliances — silent, deadly, easy to prevent." },
    { image: comboImg, title: "Combination Smoke + CO", desc: "Dual-function alarms protect against fire and CO from a single unit — fewer holes, simpler maintenance." },
    { image: alarmImg, title: "Interconnected Systems", desc: "When one alarm sounds, they all do — required by code and lifesaving in larger Broward homes." },
  ],
  warningHeading: "Don't Wait Until It's Too Late",
  warningDescription:
    "Most fire deaths happen in homes without working smoke alarms. CO is invisible and odorless. Both are easily preventable with properly installed detectors.",
  warningSigns: [
    "Detectors more than 10 years old",
    "Only battery-powered detectors in a hardwired era",
    "Yellowed, dusty, or chirping units",
    "No detector in every bedroom",
    "No CO detector near gas appliances or garage",
    "Alarms not interconnected (one trips alone)",
  ],
  process: [
    { step: "01", title: "Code Review", desc: "We map your home against current Florida and Broward code requirements." },
    { step: "02", title: "Quote", desc: "Flat per-unit pricing — no surprises." },
    { step: "03", title: "Power & Mount", desc: "Hardwired install with battery backup and proper placement." },
    { step: "04", title: "Interconnect", desc: "All detectors linked so one alarm triggers all." },
    { step: "05", title: "Test & Train", desc: "Full system test and quick walkthrough with you." },
  ],
  faqHeading: "Smoke & CO Detector FAQ — Broward County",
  faqs: [
    { q: "Where are smoke detectors required in a Florida home?", a: "Florida code requires smoke alarms in every bedroom, outside each sleeping area, and on every level of the home — including basements. Broward County also requires hardwiring with battery backup in new construction and major remodels." },
    { q: "How much does it cost to install hardwired smoke detectors?", a: "A typical installation in Broward County runs $125-$200 per unit for hardwired, interconnected smoke alarms. Combination smoke/CO units run slightly more. We provide a flat per-unit quote upfront." },
    { q: "How often should I replace my smoke and CO detectors?", a: "Smoke detectors should be replaced every 10 years (check the date on the back). CO detectors typically last 5-7 years. Sensors degrade over time even if the unit still beeps." },
    { q: "Do I need carbon monoxide detectors in South Florida?", a: "Yes if you have any gas appliances (stove, water heater, dryer), an attached garage, or a fireplace. Florida law requires CO detectors in homes with these sources." },
    { q: "Can you replace battery alarms with hardwired units?", a: "Yes. We run new wiring, add 120V hardwired alarms with battery backup, and interconnect them so they all alert together — significantly safer than standalone battery units." },
    { q: "Why do my smoke alarms keep going off for no reason?", a: "Common causes are dust, humidity, expired sensors, or loose wiring. In Broward County's humid climate, alarms older than 7-8 years often need replacement." },
  ],
  ctaHeading: "Protect Your Family Today",
  ctaDescription:
    "Tell us about your home's current smoke and CO setup and a licensed Broward County electrician will reach out within one business day with a quote.",
  serviceOptions: [
    { value: "hardwired-smoke", label: "Hardwired Smoke Detectors" },
    { value: "co", label: "CO Detectors" },
    { value: "combo", label: "Combination Smoke + CO" },
    { value: "interconnect", label: "Interconnected System" },
    { value: "replacement", label: "Detector Replacement" },
  ],
};

const SmokeDetectors = () => <ServicePageLayout config={config} />;
export default SmokeDetectors;
