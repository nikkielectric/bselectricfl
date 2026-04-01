import { Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import googleLogo from "@/assets/google-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Left: review badges + headline */}
          <div>
            {/* Review rating badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div
                className="flex items-center gap-0 bg-card/90 backdrop-blur-sm rounded-full border border-border px-[16px] py-0"
              >
                <img src={googleLogo} alt="Google" className="h-16 w-16" />
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="font-semibold text-primary text-base">5.0 Rating</span>
                </div>
              </div>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Top-Rated Electrician in{" "}
              <span className="text-gradient">Broward County</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
              Licensed residential, commercial & industrial electrical services.
              From panel upgrades to EV chargers — we handle it all with
              upfront pricing and zero shortcuts.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-sm font-semibold text-foreground">
              <span>✔ 100% Satisfaction</span>
              <span>✔ Honest & Reliable</span>
              <span>✔ Upfront Pricing</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-electric-glow font-bold text-base gap-2 h-14 px-8">
                  Contact Us
                </Button>
              </a>
              <a href="tel:9548684111">
                <Button size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-bold text-base gap-2 h-14 px-8">
                  <Phone className="h-5 w-5" />
                  Call (954) 868-4111
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
