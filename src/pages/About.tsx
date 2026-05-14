import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Star, Quote, MapPin, CheckCircle, ShieldCheck, ArrowRight, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CircuitBackground from "@/components/CircuitBackground";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import googleLogo from "@/assets/google-logo.png";
import storyImg from "@/assets/about-story.jpg";

import gal1 from "@/assets/work/chandelier.jpg";
import gal2 from "@/assets/work/tesla-charger.jpg";
import gal3 from "@/assets/work/recessed-layout.jpg";
import gal4 from "@/assets/work/tv-mount.jpg";
import gal5 from "@/assets/work/exterior-wiring.jpg";

const gallery = [
  { src: gal1, alt: "Multi-tier crystal chandelier installation", span: "md:col-span-2 md:row-span-2" },
  { src: gal2, alt: "Tesla home EV charger installation", span: "" },
  { src: gal3, alt: "Recessed lighting layout with laser alignment", span: "" },
  { src: gal4, alt: "Large flat-screen TV mount with concealed wiring", span: "md:col-span-2" },
  { src: gal5, alt: "Exterior wiring and floodlight installation", span: "" },
];

const credentials = [
  { value: "15+", label: "Years in the Field" },
  { value: "1,000+", label: "Jobs Completed" },
  { value: "24/7", label: "Emergency Coverage" },
  { value: "100%", label: "Licensed & Insured" },
];

const values = [
  { title: "Honest Pricing", desc: "Upfront, transparent quotes — no surprise fees, no hidden costs." },
  { title: "Quality Workmanship", desc: "Every job meets or exceeds Florida electrical code. We don't cut corners." },
  { title: "Real Accountability", desc: "Licensed, insured, and locally owned. Real warranty on every install." },
  { title: "On-Time, Every Time", desc: "We respect your schedule. Show up when promised, leave the site spotless." },
];

const testimonials = [
  { name: "Fania D.", text: "I had an excellent experience with B&S Electric. Their team was extremely professional, reliable, and great to work with from start to finish.", service: "Electrical Service" },
  { name: "Alicia P.", text: "I used B&S Electric to install my Tesla charger, and they did an amazing job. The work was efficient, clean, and looks great. I highly recommend this company!", service: "EV Charger Installation" },
  { name: "Simona B.", text: "Charlie fixed the main electrical panel — very clean and professional. You can tell he's experienced. Super nice, kind, and communicative.", service: "Panel Replacement" },
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
      <meta property="og:description" content="Family-owned, licensed electrical contractor serving Broward County." />
      <meta property="og:url" content="https://bselectricfl.lovable.app/about" />
      <meta property="og:type" content="website" />
    </Helmet>

    <CircuitBackground />
    <div className="relative z-10">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/75" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Our Company</p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Powering Broward County with{" "}
              <span className="text-gradient">Trust & Integrity</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              B&S Electric LLC is a locally owned, fully licensed electrical contractor built on three things:
              honest pricing, quality workmanship, and treating every customer like a neighbor.
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

      {/* Credentials banner — replaces flat stats strip */}
      <section className="relative section-bg-dark border-y border-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 py-12 md:py-16 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">By the Numbers</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground leading-tight">
                A track record you can <span className="text-gradient">verify</span>.
              </h2>
            </motion.div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-xl overflow-hidden border border-border">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-card p-6 md:p-8 hover:bg-secondary transition-colors duration-300 group relative"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                  <div className="font-heading font-extrabold text-4xl md:text-5xl text-foreground mb-2 tracking-tight">
                    {c.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {c.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story — 2-col with image */}
      <section id="our-story" className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Story</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Built on Craftsmanship.<br /> Run on Trust.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  B&S Electric LLC was founded with a simple mission: deliver the kind of electrical service
                  we'd want for our own homes and businesses. Headquartered in Hollywood, FL, we've grown into
                  a trusted name across Broward County by doing the work right the first time.
                </p>
                <p>
                  Our licensed technicians bring decades of combined experience across residential, commercial,
                  and industrial work — from full panel replacements and EV chargers to 2 AM emergency
                  troubleshooting. Certified, insured, and code-compliant on every job.
                </p>
                <p>
                  What really sets us apart is how we treat people. No upselling. No runaround. Just honest
                  answers, fair quotes, and clean, reliable work.
                </p>
              </div>

              <div className="mt-8 p-5 bg-card border-l-4 border-primary rounded-r-lg flex items-center gap-4">
                <ShieldCheck className="h-9 w-9 text-primary flex-shrink-0" />
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">Licensed Florida Electrical Contractor</p>
                  <p className="text-xs text-muted-foreground">License #EC13015340 — Authorized statewide.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/5] shadow-2xl">
                <img
                  src={storyImg}
                  alt="B&S Electric technician working on an electrical panel"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-primary/40 rounded-xl p-4 shadow-2xl hidden md:flex items-center gap-3 backdrop-blur-sm">
                <Zap className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-heading font-extrabold text-2xl text-foreground leading-none">15+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Years powering FL</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 h-24 w-24 border-2 border-primary/40 rounded-2xl -z-10 hidden md:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Stand For</p>
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

      {/* Gallery — bento grid of real work */}
      <section className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-10 bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Work</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground">
                Real jobs. Real results.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              From statement chandeliers to EV chargers and exterior wiring — a glimpse of recent installs
              across Broward County.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 max-w-6xl mx-auto md:auto-rows-[180px] lg:auto-rows-[220px]">
            {gallery.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-xl border border-border ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-foreground text-sm font-semibold">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-bg-dark">
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
      <section className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Where We Work</p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-6">
                Serving All of Broward County
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Headquartered in Hollywood, FL and licensed statewide. Wherever you are in Broward, we'll get there fast.
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
      <section className="section-padding section-bg-dark border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-secondary border border-primary/30 rounded-2xl p-10 md:p-14 glow-border"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Ready When You Are</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4">
              Let's Power Your Next Project
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether it's a quick repair or a full panel upgrade, our licensed team is ready to help. Get a free quote today.
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
