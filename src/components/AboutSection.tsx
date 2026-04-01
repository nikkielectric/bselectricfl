import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-bg-alt relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              About B&S Electric
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Reliable Residential & Commercial Electrical Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              B&S Electric LLC is your local, trusted electrician serving all of
              Broward County. We bring professionalism and expertise to every job
              — backed by a commitment to honest pricing, quality work, and your
              complete satisfaction.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With extensive experience in residential, commercial, and industrial
              electrical services, our licensed technicians handle everything from
              panel upgrades and EV charger installations to emergency repairs.
              Every job meets or exceeds Florida electrical code, and we stand
              behind our work with integrity.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#contact">
                <Button className="bg-primary text-primary-foreground hover:bg-electric-glow font-bold gap-2">
                  Contact Us
                </Button>
              </a>
              <a href="tel:9548684111">
                <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-bold gap-2">
                  <Phone className="h-4 w-4" />
                  Call (954) 868-4111
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
