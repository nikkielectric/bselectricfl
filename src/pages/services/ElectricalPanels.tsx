import ServicePageLayout, { defaultProcess, type ServicePageConfig } from "@/components/ServicePageLayout";
import panelUpgradesImg from "@/assets/services/panel-upgrades.jpg";
import panelReplacementsImg from "@/assets/services/panel-replacements.jpg";
import panelRepairsImg from "@/assets/services/panel-repairs.jpg";
import subPanelImg from "@/assets/services/sub-panel.jpg";

const config: ServicePageConfig = {
  eyebrow: "Electrical Services",
  titleLead: "Electrical Panel",
  titleAccent: "Upgrades & Repairs",
  heroDescription:
    "Your electrical panel is the heart of your home's power system. B&S Electric provides code-compliant panel upgrades, replacements, and repairs across Broward County — backed by a licensed master electrician and a workmanship warranty.",
  servicesHeading: "Full-Service Panel Solutions",
  services: [
    { image: panelUpgradesImg, title: "Panel Upgrades", desc: "Upgrade from 100A to 200A or 400A service to power modern appliances, EV chargers, and HVAC systems safely." },
    { image: panelReplacementsImg, title: "Panel Replacements", desc: "Full code-compliant replacement of outdated, recalled, or unsafe panels with modern brands like Square D, Eaton, and Siemens." },
    { image: panelRepairsImg, title: "Panel Repairs", desc: "Diagnose and repair faulty breakers, loose connections, burnt bus bars, and other panel issues — fast." },
    { image: subPanelImg, title: "Sub-Panel Installation", desc: "Add capacity for additions, garages, workshops, ADUs, or pool equipment with properly sized sub-panels." },
  ],
  warningHeading: "Is Your Panel Failing?",
  warningDescription:
    "A failing electrical panel is one of the leading causes of house fires in Florida. If you're noticing any of these warning signs, schedule an inspection today.",
  warningSigns: [
    "Frequently tripping breakers",
    "Flickering or dimming lights",
    "Burning smell near the panel",
    "Rust, corrosion, or warm panel cover",
    "Two-prong outlets / no grounding",
    "Panel is 25+ years old (Federal Pacific, Zinsco, Pushmatic)",
  ],
  process: [
    { step: "01", title: "Free On-Site Assessment", desc: "We inspect your existing panel, load demand, and grounding system." },
    { step: "02", title: "Transparent Quote", desc: "Upfront pricing — no surprises, no hidden fees, no high-pressure sales." },
    { step: "03", title: "Permit & Schedule", desc: "We pull all required permits with your city and coordinate with FPL." },
    { step: "04", title: "Professional Installation", desc: "Licensed electricians complete the work to NEC code, typically in one day." },
    { step: "05", title: "Inspection & Cleanup", desc: "We handle the final inspection and leave your space spotless." },
  ],
  faqHeading: "Electrical Panel FAQ — South Florida",
  faqs: [
    { q: "How much does an electrical panel upgrade cost in South Florida?", a: "Most panel upgrades in Fort Lauderdale and Broward County range from $1,800 to $3,500 depending on amperage, brand, and whether trenching or meter relocation is needed. We provide free on-site quotes with upfront pricing." },
    { q: "Do I need a permit to replace my electrical panel in Florida?", a: "Yes. Florida law and local municipalities in Broward County require permits for panel replacements and upgrades. B&S Electric pulls all necessary permits and coordinates inspections so you don't have to worry about compliance." },
    { q: "How long does a panel upgrade take?", a: "Most residential panel upgrades are completed in a single day. We schedule the work around your availability, handle the FPL disconnect/reconnect, and pass final inspection before we leave." },
    { q: "Is my Federal Pacific or Zinsco panel dangerous?", a: "Yes. Federal Pacific and Zinsco panels have known failure rates and are no longer manufactured. If your South Florida home still has one, we strongly recommend a free inspection and replacement for safety." },
    { q: "Can you install a sub-panel for my garage, pool, or ADU?", a: "Absolutely. We size and install NEC-compliant sub-panels for workshops, pool equipment, detached garages, and ADUs throughout Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding areas." },
    { q: "What size panel do I need for an EV charger?", a: "A 200-amp service is typically recommended if you're adding a Level 2 EV charger. We calculate your total load demand and recommend the right upgrade for your home in South Florida." },
  ],
  ctaHeading: "Ready to Upgrade Your Panel?",
  ctaDescription:
    "Tell us about your project and a licensed Broward County electrician will reach out within one business day with upfront pricing — no obligation.",
  serviceOptions: [
    { value: "panel-upgrade", label: "Panel Upgrade" },
    { value: "panel-replacement", label: "Panel Replacement" },
    { value: "panel-repair", label: "Panel Repair" },
    { value: "sub-panel", label: "Sub-Panel Installation" },
    { value: "inspection", label: "Free Inspection" },
  ],
};

const ElectricalPanels = () => <ServicePageLayout config={config} />;
void defaultProcess;
export default ElectricalPanels;
