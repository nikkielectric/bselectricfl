import { Zap, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Electrical Panels", href: "/services/electrical-panels" },
  { label: "Electrical Repairs", href: "/services/electrical-repairs" },
  { label: "Emergency Service", href: "/services/emergency-service" },
  { label: "Circuit Breakers", href: "/services/circuit-breakers" },
  { label: "Lighting & Wiring", href: "/services/lighting-wiring" },
  { label: "Smoke & CO Detectors", href: "/services/smoke-co-detectors" },
  { label: "EV Charger Installation", href: "/services/ev-charger-installation" },
  { label: "Smart Home Electrical", href: "/services/smart-home-electrical" },
];

const Footer = () => (
  <footer className="bg-primary border-t border-primary-foreground/20">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-primary-foreground" />
            <span className="font-heading font-bold text-lg text-primary-foreground">
              B&S Electric <span className="text-secondary">LLC</span>
            </span>
          </div>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Licensed Florida electrical contractor serving Broward County with
            residential, commercial & industrial services.
          </p>
          <p className="text-xs text-primary-foreground/60 mt-3">License #EC13015340</p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-3">
            <li>
              <a href="tel:9548684111" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <span className="flex h-5 w-5 flex-none items-center justify-center">
                  <Phone className="h-5 w-5 text-secondary" />
                </span>
                (954) 868-4111
              </a>
            </li>
            <li>
              <a href="mailto:Services@bselectricfl.com" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <span className="flex h-5 w-5 flex-none items-center justify-center">
                  <Mail className="h-5 w-5 text-secondary" />
                </span>
                <span className="break-all">Services@bselectricfl.com</span>
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center">
                <MapPin className="h-5 w-5 text-secondary" />
              </span>
              <span>15800 Pines Blvd Suite 3120, Hollywood, FL 33027</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Hours</h4>
          <p className="text-sm text-primary-foreground/80">Monday – Sunday</p>
          <p className="text-sm text-primary-foreground font-semibold">7:00 AM – 7:00 PM</p>
          <p className="text-sm text-secondary font-semibold mt-2">24/7 Emergency Service</p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <p className="text-xs text-primary-foreground/60">
          © 2026 B&S Electric LLC. All rights reserved. Licensed Electrical Contractor — EC13015340
        </p>
        <p className="text-xs text-primary-foreground/60">
          Website Built By{" "}
          <a href="https://www.wisdomstudios.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-foreground transition-colors">
            Wisdom Studios
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
