import { useState } from "react";
import { Phone, Menu, X, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  "Electrical Panels",
  "Electrical Repairs",
  "Emergency Service",
  "Circuit Breakers",
  "Lighting & Wiring",
  "Smoke & CO Detectors",
  "EV Charger Installation",
  "Smart Home Electrical",
];

const serviceAreas = [
  "Fort Lauderdale",
  "Hollywood",
  "Pembroke Pines",
  "Pompano Beach",
  "Coral Springs",
  "Miramar",
  "Southwest Ranches",
  "Davie",
  "Weston",
  "Cooper City",
  "Plantation",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const linkClass =
    "text-sm font-medium text-muted-foreground hover:text-primary transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-center gap-4 px-4 py-2 text-sm font-semibold">
          <a href="tel:9548684111" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="h-4 w-4" />
            (954) 868-4111
          </a>
          <span className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-secondary" />
            24/7 Emergency Service
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
          <a href="/" className="flex items-center gap-2">
            <Zap className="h-7 w-7 text-primary" />
            <span className="font-heading font-bold text-lg md:text-xl text-foreground">
              B&S Electric <span className="text-primary">LLC</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className={linkClass}>Home</a>

            <DropdownMenu>
              <DropdownMenuTrigger className={`${linkClass} flex items-center gap-1 outline-none`}>
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {services.map((s) => (
                  <DropdownMenuItem key={s} className="cursor-pointer">
                    {s}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#" className={linkClass}>About Us</a>

            <a href="#pricing" className={linkClass}>Pricing</a>

            <DropdownMenu>
              <DropdownMenuTrigger className={`${linkClass} flex items-center gap-1 outline-none`}>
                Service Area <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {serviceAreas.map((c) => (
                  <DropdownMenuItem key={c} className="cursor-pointer">
                    {c}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#" className={linkClass}>Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:block">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-electric-glow font-semibold">
                Free Quote
              </Button>
            </a>
            <button
              className="lg:hidden text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="flex flex-col p-4 gap-1">
              <a href="/" onClick={() => setMobileOpen(false)} className={`${linkClass} py-2`}>Home</a>

              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`${linkClass} py-2 flex items-center justify-between`}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 flex flex-col gap-2 pb-2">
                  {services.map((s) => (
                    <a key={s} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {s}
                    </a>
                  ))}
                </div>
              )}

              <a href="#" onClick={() => setMobileOpen(false)} className={`${linkClass} py-2`}>About Us</a>

              <a href="#pricing" onClick={() => setMobileOpen(false)} className={`${linkClass} py-2`}>Pricing</a>

              <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className={`${linkClass} py-2 flex items-center justify-between`}
                aria-expanded={mobileAreasOpen}
              >
                Service Area
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAreasOpen && (
                <div className="pl-4 flex flex-col gap-2 pb-2">
                  {serviceAreas.map((c) => (
                    <a key={c} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {c}
                    </a>
                  ))}
                </div>
              )}

              <a href="#" onClick={() => setMobileOpen(false)} className={`${linkClass} py-2`}>Contact</a>

              <a href="tel:9548684111" className="sm:hidden mt-2">
                <Button variant="outline" className="w-full gap-2 border-primary/30 text-primary">
                  <Phone className="h-4 w-4" />
                  (954) 868-4111
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
