import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";

const areas = [
  "Hollywood", "Fort Lauderdale", "Pembroke Pines", "Miramar",
  "Coral Springs", "Davie", "Plantation", "Sunrise",
  "Pompano Beach", "Deerfield Beach", "Weston", "Cooper City",
];

const ServiceArea = () => (
  <section id="service-area" className="section-padding section-bg-alt relative">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Where We Work</p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
            Serving All of Broward County
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            B&S Electric LLC is headquartered in Hollywood, FL and proudly serves
            homeowners and businesses throughout Broward County. We are licensed
            statewide across the State of Florida.
          </p>

          <div className="flex items-start gap-3 mb-6">
            <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">15800 Pines Blvd Suite 3120</p>
              <p className="text-muted-foreground">Hollywood, FL 33027</p>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-heading font-bold text-lg text-foreground text-center mb-5">Areas We Serve</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-5 pt-4 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Licensed Statewide</span> — We can serve customers throughout the entire State of Florida.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl overflow-hidden border border-border h-[350px] md:h-[500px]"
        >
          <iframe
            title="B&S Electric LLC location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925824442!2d-80.26837!3d26.0112014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a8f4ad4e3c39%3A0xf17caa4c92e10c76!2s15800%20Pines%20Blvd%20%233120%2C%20Pembroke%20Pines%2C%20FL%2033027!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServiceArea;
