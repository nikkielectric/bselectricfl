import ServicePageLayout, { type ServicePageConfig } from "@/components/ServicePageLayout";
import appImg from "@/assets/services/smart-app.jpg";
import switchImg from "@/assets/services/smart-switch.jpg";
import thermostatImg from "@/assets/services/smart-thermostat.jpg";
import panelImg from "@/assets/services/smart-panel.jpg";

const config: ServicePageConfig = {
  seo: {
    title: "Smart Home Electrical & Automation | Broward County, FL",
    description: "Smart switches, smart panels, thermostats, and whole-home automation wiring in Broward County. Lutron, Leviton, more. Call (954) 868-4111.",
    path: "/services/smart-home-electrical",
  },
  eyebrow: "Electrical Services",
  titleLead: "Smart Home",
  titleAccent: "Electrical",
  heroDescription:
    "Smart switches, smart panels, smart thermostats, and whole-home automation — done right with proper neutrals, hub planning, and rock-solid Wi-Fi placement. B&S Electric brings real electrical expertise to your smart home across Broward County.",
  servicesHeading: "Smart Home Electrical Services",
  services: [
    { image: switchImg, title: "Smart Switches & Dimmers", desc: "Lutron Caseta, Leviton Decora Smart, and Wi-Fi dimmers installed with proper neutrals — no flicker, no buzz." },
    { image: appImg, title: "Lighting Automation", desc: "Scene control, motion-triggered lighting, and app-based scheduling for the whole home." },
    { image: thermostatImg, title: "Smart Thermostats", desc: "Nest, Ecobee, and HVAC-integrated thermostats — with proper C-wire installation for reliable operation." },
    { image: panelImg, title: "Smart Panels & Energy Monitoring", desc: "Span and Lumin smart panels, plus Emporia and Sense whole-home energy monitoring for solar and EV-ready homes." },
  ],
  warningHeading: "Why Pro Installation Matters",
  warningDescription:
    "Most smart device failures aren't the device — they're the wiring. Older Florida homes often lack the neutrals and proper grounding modern smart devices need.",
  warningSigns: [
    "No neutral wire in switch boxes (common in older homes)",
    "Smart switches that flicker or randomly disconnect",
    "Thermostat that won't hold a Wi-Fi connection",
    "No dedicated circuit for hub or smart panel",
    "Aluminum wiring incompatible with smart devices",
    "Wi-Fi dead zones near key smart devices",
  ],
  process: [
    { step: "01", title: "Plan", desc: "We map your goals, devices, and ecosystem (Apple, Google, Alexa, SmartThings)." },
    { step: "02", title: "Wiring Check", desc: "Verify neutrals, ground, and circuit capacity for every device." },
    { step: "03", title: "Quote", desc: "Upfront pricing for devices and labor." },
    { step: "04", title: "Install & Configure", desc: "Clean install, app pairing, scenes set up the way you want." },
    { step: "05", title: "Walkthrough", desc: "We teach you the ecosystem and leave docs for everything." },
  ],
  faqHeading: "Smart Home Electrical FAQ — Broward County",
  faqs: [
    { q: "How much does smart home electrical work cost in Fort Lauderdale?", a: "Smart switch installs run $125-$225 per switch including the device. A full smart lighting overhaul for a 3-bedroom home typically runs $2,500-$6,000. Smart panels (Span/Lumin) start around $5,000 plus installation. We provide detailed quotes." },
    { q: "Do I need a neutral wire for smart switches?", a: "Most smart switches require a neutral wire in the switch box, which many older Broward homes don't have. We can either pull a new neutral or recommend no-neutral-required smart switches like Lutron Caseta." },
    { q: "Will my smart devices survive a Florida power outage?", a: "Smart switches return to default state after power loss. Smart panels with battery backup (like Span with a battery) keep critical loads running. We help design systems that handle South Florida's hurricane season." },
    { q: "Can you integrate with my existing Alexa, Google, or HomeKit setup?", a: "Yes — we work with all major ecosystems. Lutron Caseta, Leviton, Kasa, and Hubitat all integrate cleanly. We help pick devices that match your existing voice assistants and apps." },
    { q: "Are smart panels worth it in South Florida?", a: "Smart panels (Span, Lumin) make a lot of sense if you have or plan to add solar, an EV charger, or backup batteries — they manage loads automatically during outages. For a standard home without those, the ROI is lower." },
    { q: "Can you install a smart thermostat with my older HVAC?", a: "Usually yes — but many older systems lack a C-wire. We pull a new C-wire from your air handler so smart thermostats run reliably without 'low battery' nuisance issues." },
  ],
  ctaHeading: "Ready to Smarten Your Home?",
  ctaDescription:
    "Tell us about your smart home goals and a licensed Broward County electrician will reach out within one business day with a clear plan and quote.",
  serviceOptions: [
    { value: "smart-switches", label: "Smart Switches / Dimmers" },
    { value: "lighting-automation", label: "Lighting Automation" },
    { value: "smart-thermostat", label: "Smart Thermostat" },
    { value: "smart-panel", label: "Smart Panel / Energy Monitor" },
    { value: "full-system", label: "Whole-Home Smart System" },
  ],
};

const SmartHome = () => <ServicePageLayout config={config} />;
export default SmartHome;
