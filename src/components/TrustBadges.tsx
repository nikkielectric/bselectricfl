import { ShieldCheck, Award, BadgeCheck } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "FL License #EC13015340" },
  { icon: Award, label: "5-Star Rated", sub: "28+ verified Google reviews" },
  { icon: BadgeCheck, label: "Code-Compliant Work", sub: "Meets all Florida electrical codes" },
];

const TrustBadges = () => (
  <section className="section-padding section-bg-dark relative">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-secondary rounded-xl md:rounded-2xl border border-border overflow-hidden glow-border">
        {badges.map((badge, i) => (
          <div
            key={badge.label}
            className={`flex items-center gap-4 p-6 md:p-8 ${
              i < badges.length - 1 ? "md:border-r md:border-border" : ""
            }`}
          >
            <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <badge.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-heading font-bold text-foreground">{badge.label}</p>
              <p className="text-sm text-muted-foreground">{badge.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
