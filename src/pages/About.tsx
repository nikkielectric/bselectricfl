import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Star, Quote, MapPin, CheckCircle, Award, ShieldCheck, Clock, Users, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CircuitBackground from "@/components/CircuitBackground";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import googleLogo from "@/assets/google-logo.png";

import gal1 from "@/assets/services/panel-upgrades.jpg";
import gal2 from "@/assets/services/ev-install.jpg";
import gal3 from "@/assets/services/lighting-recessed.jpg";
import gal4 from "@/assets/services/breakers-install.jpg";
import gal5 from "@/assets/services/lighting-outdoor.jpg";
import gal6 from "@/assets/services/smart-panel.jpg";
import gal7 from "@/assets/services/panel-replacements.jpg";
import gal8 from "@/assets/services/ev-garage.jpg";
import gal9 from "@/assets/services/repairs-wiring.jpg";

const gallery = [
  { src: gal1, alt: "Electrical panel upgrade installation" },
  { src: gal2, alt: "EV charger installation" },
  { src: gal3, alt: "Recessed lighting installation" },
  { src: gal4, alt: "Circuit breaker installation" },
  { src: gal5, alt: "Outdoor landscape lighting" },
  { src: gal6, alt: "Smart electrical panel" },
  { src: gal7, alt: "Panel replacement project" },
  { src: gal8, alt: "Tesla home charger installation" },
  { src: gal9, alt: "Residential rewiring project" },
];

const stats = [
  { icon: Award, value: "15+", label: "Years of Experience" },
  { icon: Users, value: "1,000+", label: "Happy Customers" },
  { icon: ShieldCheck, value: "100%", label: "Licensed & Insured" },
  { icon: Clock, value: "24/7", label: "Emergency Service" },
];

const values = [
  {
    title: "Honest Pricing",
    desc: "Upfront, transparent quotes — no surprise fees, no hidden costs. What we quote is what you pay.",
  },
  {
    title: "Quality Workmanship",
    desc: "Every job meets or exceeds Florida electrical code. We don't cut corners, ever.",
  },
  {
    title: "Real Accountability",
    desc: "Licensed, insured, and locally owned. We stand behind every install with a real warranty.",
  },
  {
    title: "On-Time, Every Time",
    desc: "We respect your schedule. Our techs show up when promised and leave the worksite spotless.",
  },
];

const testimonials = [
  {
    name: "Fania D.",
    text: "I had an excellent experience with B&S Electric. Their team was extremely professional, reliable, and great to work with from start to finish. They showed up right on time and made sure everything was done correctly.",
    service: "Electrical Service",
  },
  {
    name: "Alicia P.",
    text: "I used B&S Electric to install my Tesla charger, and they did an amazing job. The work was efficient, clean, and looks great. I highly recommend this company!",
    service: "EV Charger Installation",
  },
  {
    name: "Simona B.",
    text: "Charlie fixed the main electrical panel, his work was very clean and professional. You can tell that Charlie is very experienced — additionally super nice to deal with, kind, professional and communicative.",
    service: "Panel Replacement",
  },
];

const areas = [
  "Hollywood", "Fort Lauderdale", "Pembroke Pines", "Miramar",
  "Coral Springs", "Davie", "Plantation", "Sunrise",
  "Pompano Beach", "Deerfield Beach", "Weston", "Cooper City",
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=b%26s+electric+supply+south+florida+location&lkt=LocalPoiReviews&rlimm=11559985993464242896";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

const About = () => (
  <>
    <Helmet>
      <title>About B&S Electric LLC | Licensed Broward County Electricians</title>
      <meta
        name="description"
        content="Learn about B&S Electric LLC — a licensed Florida electrical contractor (EC13015340) serving Broward County with honest pricing, quality work, and 24/7 service."
      />
      <link rel="canonical" href="https://bselectricfl.lovable.app/about" />
      <meta property="og:title" content="About B&S Electric LLC | Licensed Broward County Electricians" />
      <meta property="og:description" content="Family-owned, licensed electrical contractor serving Broward County with residential, commercial & industrial services." />
      <meta property="og:url" content="https://bselectricfl.lovable.app/about" />
      <meta property="og:type" content="website" />
    </Helmet>

    <CircuitBackground />
    <div className="relative z-10">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-40 pb-16 md:pt-48 md:pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/75" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              About Our Company
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Powering Broward County with{" "}
              <span className="text-gradient">Trust & Integrity</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              B&S Electric LLC is a locally owned, fully licensed electrical contractor
              built on three things: honest pricing, quality workmanship, and treating
              every customer like a neighbor.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#our-story">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-electric-glow font-bold gap-2 h-14 px-8">
                  Our Story <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="tel:9548684111">
                <Button size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-bold gap-2 h-14 px-8">
                  <Phone className="h-5 w-5" />
                  (954) 868-4111
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="section-bg-alt border-y border-border">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <s.icon className="h-7 w-7 text-primary mx-auto mb-3" />
                <div className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="section-padding section-bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-10">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Built on Craftsmanship.<br className="hidden md:block" /> Run on Trust.
              </h2>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                B&S Electric LLC was founded with a simple mission: deliver the kind of
                electrical service we'd want for our own homes and businesses.
                Headquartered in Hollywood, FL, we've grown into a trusted name across
                Broward County by doing the work right the first time.
              </p>
              <p>
                Our licensed technicians bring decades of combined experience across
                residential, commercial, and industrial electrical work — from full
                panel replacements and EV charger installations to emergency
                troubleshooting at 2 AM. We're certified, insured, and code-compliant
                on every job, every time.
              </p>
              <p>
                But what really sets us apart is how we treat people. No upselling. No
                runaround. Just honest answers, fair quotes, and clean, reliable work
                that you can count on for years.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 p-6 bg-secondary border border-primary/30 rounded-xl flex items-center gap-4">
              <ShieldCheck className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <p className="font-heading font-bold text-foreground">Licensed Florida Electrical Contractor</p>
                <p className="text-sm text-muted-foreground">License #EC13015340 — Authorized statewide across Florida.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              What We Stand For
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground">
              The Values Behind Every Job
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/40 transition-colors duration-300"
              >
                <CheckCircle className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding section-bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">
              A Look at Recent Projects
            </h2>
            <p className="text-muted-foreground">
              Panel upgrades, EV chargers, lighting, and more — across Broward County.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {gallery.map((img, i) => (
              <motion.div
                key={img.src}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-xl border border-border aspect-square"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-card/90 backdrop-blur-sm rounded-full border border-border pl-3 pr-5 py-2 mb-5">
              <img src={googleLogo} alt="Google" className="h-6 w-6" />
              <span className="h-5 w-px bg-border" />
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-bold text-foreground text-sm">5.0</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-3">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground">Real reviews from our Google Business Profile.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 flex flex-col"
              >
                <Quote className="h-8 w-8 text-primary/30 mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">"{t.text}"</p>
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
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                <Star className="h-4 w-4" />
                Read More Reviews
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding section-bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Where We Work</p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
                Serving All of Broward County
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Headquartered in Hollywood, FL and licensed statewide. Wherever you
                are in Broward, we'll get there fast.
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
                    <span className="font-semibold text-primary">Licensed Statewide</span> — Available throughout Florida.
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

      {/* CTA */}
      <section className="section-padding section-bg-alt border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-secondary border border-primary/30 rounded-2xl p-10 md:p-14 glow-border"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Ready When You Are
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4">
              Let's Power Your Next Project
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether it's a quick repair or a full panel upgrade, our licensed team is
              ready to help. Get a free quote today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/#contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-electric-glow font-bold gap-2 h-14 px-8">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="tel:9548684111">
                <Button size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-bold gap-2 h-14 px-8">
                  <Phone className="h-5 w-5" />
                  (954) 868-4111
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default About;
