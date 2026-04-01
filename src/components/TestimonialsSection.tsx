import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Fania D.",
    text: "I had an excellent experience with B&S Electric. Their team was extremely professional, reliable, and great to work with from start to finish. They showed up right on time, completed the job efficiently, and made sure everything was done correctly.",
    service: "Electrical Service",
  },
  {
    name: "Timothy L.",
    text: "I had my traditional fixtures replaced with modern recessed lighting, and the entire process was quick, clean, and professionally handled. I would gladly recommend B&S Electric for any future electrical projects.",
    service: "Lighting Installation",
  },
  {
    name: "Glenda G.",
    text: "Juan diagnosed my circuit breaker problem in a flash. The circuit was overloaded so he ran new wiring to my pool pump and installed a new timer. It was all done professionally and quickly in one day.",
    service: "Circuit Breaker Repair",
  },
  {
    name: "Alicia P.",
    text: "I used B&S Electric to install my Tesla charger, and they did an amazing job. The work was efficient, clean, and looks great. I highly recommend this company!",
    service: "EV Charger Installation",
  },
  {
    name: "R. Jovane",
    text: "This morning I had the most pleasant experience with technician Juan. He is a true professional that came into my home and did an excellent job installing my patio lights. The price agreed upon was fair and very reasonable.",
    service: "Lighting Installation",
  },
  {
    name: "Anai S.",
    text: "Reliable, punctual and courteous — we were very pleased with the service. Our electrician arrived right on time, quickly diagnosed and fixed our issue, and the final bill was very reasonable. I will definitely recommend this company!",
    service: "Electrical Repair",
  },
  {
    name: "Simona B.",
    text: "Charlie fixed the main electrical panel, his work was very clean and professional. You can tell that Charlie is very experienced with many years on the job — additionally super nice to deal with, kind, professional and communicative.",
    service: "Panel Replacement",
  },
  {
    name: "Keevin J.",
    text: "My experience was nothing short of amazing. Between me calling them and the job being done was under two hours. I highly recommend them as they are extremely professional.",
    service: "Electrical Service",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding section-bg-alt relative">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          Customer Reviews
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          5.0 Stars on Google
        </h2>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-muted-foreground">Based on 28+ verified Google reviews</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-card rounded-xl border border-border p-6 flex flex-col"
          >
            <Quote className="h-8 w-8 text-primary/30 mb-3" />
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
              "{t.text}"
            </p>
            <div className="border-t border-border pt-4">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.service}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://www.google.com/search?q=b%26s+electric+supply+south+florida+location&lkt=LocalPoiReviews&rlimm=11559985993464242896&lrd=0x88d9a191ec436d55:0xa06d52037ced62d0,3,,,,"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
            <Star className="h-4 w-4" />
            Leave Us a Review
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
