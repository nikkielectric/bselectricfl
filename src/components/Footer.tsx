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
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-heading font-bold text-lg text-foreground">
              B&S Electric <span className="text-primary">LLC</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Licensed Florida electrical contractor serving Broward County with
            residential, commercial & industrial services.
          </p>
          <p className="text-xs text-muted-foreground mt-3">License #EC13015340</p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-4">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3">
            <li>
              <a href="tel:9548684111" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" /> (954) 868-4111
              </a>
            </li>
            <li>
              <a href="mailto:Services@bselectricfl.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" /> Services@bselectricfl.com
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span>15800 Pines Blvd Suite 3120, Hollywood, FL 33027</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-foreground mb-4">Hours</h4>
          <p className="text-sm text-muted-foreground">Monday – Sunday</p>
          <p className="text-sm text-foreground font-semibold">7:00 AM – 7:00 PM</p>
          <p className="text-sm text-primary font-semibold mt-2">24/7 Emergency Service</p>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 B&S Electric LLC. All rights reserved. Licensed Electrical Contractor — EC13015340
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
