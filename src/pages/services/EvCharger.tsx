import ServicePageLayout, { type ServicePageConfig } from "@/components/ServicePageLayout";
import garageImg from "@/assets/services/ev-garage.jpg";
import installImg from "@/assets/services/ev-install.jpg";
import plugImg from "@/assets/services/ev-plug.jpg";
import outletImg from "@/assets/services/ev-outlet.jpg";

const config: ServicePageConfig = {
  seo: {
    title: "EV Charger Installation in Broward County, FL | Tesla, ChargePoint",
    description: "Level 2 EV charger installation for Tesla, ChargePoint, JuiceBox & NEMA 14-50 in Broward County. Permits handled. Call (954) 868-4111.",
    path: "/services/ev-charger-installation",
  },
  eyebrow: "Electrical Services",
  titleLead: "EV Charger",
  titleAccent: "Installation",
  heroDescription:
    "From Tesla Wall Connectors to ChargePoint, JuiceBox, and NEMA 14-50 outlets — B&S Electric is Broward County's go-to for clean, code-compliant Level 2 EV charger installations. Permits, panel checks, and FPL coordination handled.",
  servicesHeading: "EV Charging Solutions",
  services: [
    { image: garageImg, title: "Wall-Mounted Level 2 Chargers", desc: "Tesla Wall Connector, ChargePoint Home Flex, JuiceBox, Wallbox, and Grizzl-E installed cleanly in your garage or carport." },
    { image: installImg, title: "Hardwired Installation", desc: "Hardwired installs for higher amperage (48A+) and a cleaner finish — no plug, no exposed cord." },
    { image: plugImg, title: "Tesla & Universal", desc: "Tesla NACS, J1772, and dual-port options. Compatible with every modern EV on the road today." },
    { image: outletImg, title: "NEMA 14-50 Outlets", desc: "Code-compliant 240V outlets for Tesla Mobile Connectors and portable Level 2 chargers." },
  ],
  warningHeading: "Before You Buy a Charger, Check This",
  warningDescription:
    "Not every Florida home is ready for a Level 2 EV charger. We do a free panel and load assessment before quoting — so you don't buy a charger your panel can't safely run.",
  warningSigns: [
    "Panel is 100A or smaller (most Level 2 chargers need 200A)",
    "Panel is full — no open breaker slots",
    "Federal Pacific, Zinsco, or other obsolete panel",
    "Garage has no 240V outlet or dedicated circuit",
    "Long run from panel to garage (voltage drop concerns)",
    "Considering solar + EV combo (load management needed)",
  ],
  process: [
    { step: "01", title: "Free Site Survey", desc: "We assess your panel capacity, charger location, and wire run." },
    { step: "02", title: "Charger Recommendation", desc: "We help you pick the right charger if you haven't already bought one." },
    { step: "03", title: "Permit & Quote", desc: "Upfront pricing including permit and any panel work needed." },
    { step: "04", title: "Clean Install", desc: "Conduit run, breaker installed, charger mounted, fully tested." },
    { step: "05", title: "Inspection & Activation", desc: "We handle the city inspection and walk you through your new charger." },
  ],
  faqHeading: "EV Charger Installation FAQ — South Florida",
  faqs: [
    { q: "How much does it cost to install a Level 2 EV charger in Broward County?", a: "Standard installations in Fort Lauderdale, Hollywood, and surrounding Broward cities run $800-$1,800 — including permit, breaker, and short conduit run. Longer runs, panel upgrades, or trenching can add $500-$3,000+. We provide free quotes." },
    { q: "Do I need a permit to install an EV charger in Florida?", a: "Yes. Every Broward County municipality requires a permit and inspection for hardwired EV chargers and most NEMA 14-50 outlets. We pull the permit and handle the inspection for you." },
    { q: "Can my panel handle an EV charger?", a: "It depends on your panel size and existing load. Most modern Tesla/Level 2 chargers need a 50-60 amp circuit and a 200A panel. We do a free load calculation to tell you for sure — and quote a panel upgrade if needed." },
    { q: "Tesla Wall Connector vs NEMA 14-50 outlet — which is better?", a: "Wall Connector charges faster (up to 48A vs 32A) and looks cleaner, but costs more. NEMA 14-50 is cheaper and works with Tesla Mobile Connector and most portable Level 2 chargers. We help you decide based on your driving needs." },
    { q: "Do you install Tesla Wall Connectors and other brands?", a: "Yes — we install all major brands: Tesla, ChargePoint, JuiceBox, Grizzl-E, Wallbox, Emporia, and more. We're not tied to any one brand, so we recommend what's best for your situation." },
    { q: "Are there rebates for EV chargers in Florida?", a: "FPL has offered EV charging rebates and reduced overnight rates through their EVolution Home program. Federal tax credits up to 30% may also apply. We point you toward what's currently available." },
  ],
  ctaHeading: "Ready to Charge at Home?",
  ctaDescription:
    "Tell us about your EV and your panel, and a licensed Broward County electrician will reach out within one business day with a clear quote.",
  serviceOptions: [
    { value: "tesla-wall", label: "Tesla Wall Connector" },
    { value: "level-2-other", label: "Other Level 2 Charger" },
    { value: "nema-14-50", label: "NEMA 14-50 Outlet" },
    { value: "panel-upgrade-ev", label: "Panel Upgrade for EV" },
    { value: "site-survey", label: "Free Site Survey" },
  ],
};

const EvCharger = () => <ServicePageLayout config={config} />;
export default EvCharger;
