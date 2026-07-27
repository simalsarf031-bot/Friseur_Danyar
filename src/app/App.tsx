import { useState } from "react";
import { motion } from "motion/react";
import {
  Scissors,
  Palette,
  Wind,
  User,
  Sparkles,
  Heart,
  Baby,
  Star,
  Phone,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Users,
  Zap,
  ThumbsUp,
  Calendar,
  BadgeCheck,
  Mail,
  ArrowRight,
} from "lucide-react";

// ─── Images ────────────────────────────────────────────────────────────────────
const IMG = {
  hero: "https://images.unsplash.com/photo-1781513144825-aa1e284c5950?w=1920&h=1080&fit=crop&auto=format",
  haircut:
    "https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?w=800&h=600&fit=crop&auto=format",
  coloring:
    "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=800&h=600&fit=crop&auto=format",
  salon:
    "https://images.unsplash.com/photo-1759134198561-e2041049419c?w=800&h=600&fit=crop&auto=format",
  blondeHair:
    "https://images.unsplash.com/photo-1560869713-bf165a9cfac1?w=800&h=1000&fit=crop&auto=format",
  reception:
    "https://images.unsplash.com/photo-1781513144825-aa1e284c5950?w=900&h=700&fit=crop&auto=format",
  tools:
    "https://images.unsplash.com/photo-1613754773306-532ec48b0de5?w=800&h=600&fit=crop&auto=format",
  barbers:
    "https://images.unsplash.com/photo-1759134155377-4207d89b39ec?w=800&h=600&fit=crop&auto=format",
  team1:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=600&fit=crop&auto=format",
  team2:
    "https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=500&h=600&fit=crop&auto=format",
  team3:
    "https://images.unsplash.com/photo-1712213396688-c6f2d536671f?w=500&h=600&fit=crop&auto=format",
  team4:
    "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?w=500&h=600&fit=crop&auto=format",
};

// ─── Data ───────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Scissors,
    title: "Haircuts",
    desc: "Precision cuts tailored to your face shape and lifestyle.",
    img: IMG.haircut,
  },
  {
    icon: Palette,
    title: "Hair Coloring",
    desc: "Balayage, highlights, ombré and full color transformations.",
    img: IMG.coloring,
  },
  {
    icon: Wind,
    title: "Hair Styling",
    desc: "Blowouts, straightening, curling and special occasion styling.",
    img: IMG.blondeHair,
  },
  {
    icon: User,
    title: "Beard Grooming",
    desc: "Expert beard shaping, trimming and grooming treatments.",
    img: IMG.barbers,
  },
  {
    icon: Sparkles,
    title: "Eyebrow Threading",
    desc: "Precise shaping using traditional threading technique.",
    img: IMG.tools,
  },
  {
    icon: Heart,
    title: "Hair Treatments",
    desc: "Keratin, deep conditioning and restorative hair masks.",
    img: IMG.coloring,
  },
  {
    icon: Baby,
    title: "Children's Haircuts",
    desc: "Gentle, patient care for your little ones.",
    img: IMG.haircut,
  },
  {
    icon: Star,
    title: "Wedding Styling",
    desc: "Bridal and wedding party hair for your perfect day.",
    img: IMG.blondeHair,
  },
];

const TEAM = [
  {
    name: "Danyar",
    role: "Master Stylist & Owner",
    desc: "Over 12 years of precision cuts and color artistry, bringing a distinctive personal touch to every client.",
    years: 12,
    img: IMG.team3,
  },
  {
    name: "Sara K.",
    role: "Senior Colorist",
    desc: "Specialist in balayage, highlights and creative color transformations that turn heads.",
    years: 8,
    img: IMG.team1,
  },
  {
    name: "Leila M.",
    role: "Styling Expert",
    desc: "Expert in bridal updos, special occasion hair and everyday glam styling.",
    years: 6,
    img: IMG.team2,
  },
  {
    name: "Nina R.",
    role: "Beauty Specialist",
    desc: "Threading, nourishing treatments and a warm presence that puts every client at ease.",
    years: 5,
    img: IMG.team4,
  },
];

const REASONS = [
  {
    icon: Star,
    title: "4.9 Google Rating",
    desc: "Trusted by 159+ satisfied customers across Hannover.",
  },
  {
    icon: Users,
    title: "Professional Stylists",
    desc: "Highly trained team with years of hands-on expertise.",
  },
  {
    icon: Zap,
    title: "Modern Techniques",
    desc: "We stay ahead with the latest trends and industry methods.",
  },
  {
    icon: ThumbsUp,
    title: "Friendly Team",
    desc: "Warm, welcoming atmosphere from the moment you walk in.",
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    desc: "Book your appointment online in under 60 seconds.",
  },
  {
    icon: BadgeCheck,
    title: "Affordable Luxury",
    desc: "Premium results at prices that respect your budget.",
  },
];

const TESTIMONIALS = [
  {
    name: "Yasmin H.",
    rating: 5,
    text: "Absolutely amazing experience! Danyar is a true artist. My hair has never looked so healthy and beautiful. The salon atmosphere is incredibly clean and welcoming.",
    date: "März 2024",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "The best hair salon in Hannover, hands down. The team is so friendly and professional. My balayage turned out exactly as I envisioned — I get compliments every single day.",
    date: "Februar 2024",
  },
  {
    name: "Lena B.",
    rating: 5,
    text: "I've been coming here for 3 years and would never go anywhere else. The quality is consistent, the prices are fair, and the whole team makes you feel like royalty.",
    date: "Januar 2024",
  },
  {
    name: "Fatima A.",
    rating: 5,
    text: "Brought my daughter for her first real haircut and the experience was magical. The stylists were so patient and kind. We'll definitely be back!",
    date: "Dezember 2023",
  },
  {
    name: "Maria T.",
    rating: 5,
    text: "Wedding hair done to perfection! Sara understood my vision immediately and executed it flawlessly. My bridal party looked absolutely stunning. Thank you!",
    date: "November 2023",
  },
];

const GALLERY = [
  {
    src: IMG.reception,
    alt: "Luxury salon interior",
    classes: "col-span-2 row-span-2",
  },
  {
    src: IMG.haircut,
    alt: "Professional haircut",
    classes: "",
  },
  {
    src: IMG.coloring,
    alt: "Hair coloring treatment",
    classes: "",
  },
  {
    src: IMG.blondeHair,
    alt: "Beautiful blonde styling",
    classes: "row-span-2",
  },
  { src: IMG.barbers, alt: "Stylists at work", classes: "" },
  {
    src: IMG.tools,
    alt: "Professional styling tools",
    classes: "",
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────────
function StarRow({
  count = 5,
  size = "sm",
}: {
  count?: number;
  size?: "sm" | "xs";
}) {
  const cls = size === "xs" ? "w-3 h-3" : "w-4 h-4";
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className={`${cls} fill-[#C9A227] text-[#C9A227]`}
        />
      ))}
    </span>
  );
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: {
      duration: 0.75,
      delay,
      ease: [0.22, 1, 0.36, 1] as [
        number,
        number,
        number,
        number,
      ],
    },
  };
}

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    stylist: "",
    date: "",
    time: "",
    message: "",
  });

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Vielen Dank! Ihre Terminanfrage wurde übermittelt. Wir melden uns bald bei Ihnen.",
    );
  };

  const prev = () =>
    setActiveSlide(
      (i) =>
        (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  const next = () =>
    setActiveSlide((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* ── Navigation ─────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-lg border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a
            href="#"
            className="flex flex-col leading-none select-none"
          >
            <span className="text-xl font-serif font-bold tracking-tight text-[#1A1A1A]">
              Friseur
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[#C9A227] uppercase font-semibold">
              Danyar
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {(
              [
                "Services",
                "Team",
                "Gallery",
                "Testimonials",
                "Contact",
              ] as const
            ).map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[#1A1A1A]/65 hover:text-[#1A1A1A] transition-colors duration-200 tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#appointment"
              className="hidden md:inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#C9A227] transition-colors duration-300 font-medium"
            >
              Book Now
            </a>
            <button
              className="md:hidden p-2 text-[#1A1A1A]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-black/[0.06] px-6 py-4 flex flex-col gap-1">
            {[
              "Services",
              "Team",
              "Gallery",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base text-[#1A1A1A] py-3 border-b border-black/[0.05] last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#appointment"
              className="mt-3 bg-[#1A1A1A] text-white text-sm px-5 py-3.5 rounded-xl text-center font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        )}
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d0d]">
          <img
            src={IMG.hero}
            alt="Modern luxury salon interior with curved white design"
            className="w-full h-full object-cover opacity-45 scale-105"
            style={{ transformOrigin: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/65" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-sm mb-10"
          >
            <StarRow count={5} />
            <span className="font-semibold">4.9 / 5</span>
            <span className="text-white/40">·</span>
            <span className="text-white/75">
              159+ Reviews on Google
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-6xl md:text-8xl font-bold leading-[1.04] tracking-tight mb-6"
          >
            Your Style.
            <br />
            <span className="text-[#C9A227] italic">
              Our Passion.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Premium haircuts, styling, coloring, and beauty
            services in the heart of Hannover.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-white px-9 py-4 rounded-full text-base font-semibold hover:bg-[#b08d20] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+4951112345678"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white px-9 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 text-[10px] tracking-[0.35em] uppercase"
        >
          <span>Scroll</span>
          <div className="w-px h-8 bg-white/20 relative overflow-hidden rounded-full">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-x-0 top-0 h-1/2 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ── Services ───────────────────────────────────────────────────────────── */}
      <section id="services" className="py-28 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            {...fadeUp()}
            className="text-center mb-16"
          >
            <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-5">
              Our Services
            </h2>
            <p className="text-[#1A1A1A]/55 text-lg max-w-xl mx-auto leading-relaxed">
              From everyday cuts to transformative color — every
              service delivered with precision and care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  {...fadeUp(i * 0.06)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 cursor-default"
                >
                  <div className="relative h-44 overflow-hidden bg-[#F5F5F5]">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-[#1A1A1A]/15 group-hover:bg-[#1A1A1A]/5 transition-colors duration-500" />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-xl p-2.5 shadow-sm">
                      <Icon className="w-4 h-4 text-[#C9A227]" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-1.5">
                      {svc.title}
                    </h3>
                    <p className="text-[13px] text-[#1A1A1A]/52 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Meet the Team ──────────────────────────────────────────────────────── */}
      <section id="team" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            {...fadeUp()}
            className="text-center mb-16"
          >
            <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">
              The People Behind Your Look
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-5">
              Meet Our Team
            </h2>
            <p className="text-[#1A1A1A]/55 text-lg max-w-xl mx-auto leading-relaxed">
              Passionate professionals dedicated to bringing out
              your absolute best.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeUp(i * 0.09)}
                className="group text-center"
              >
                <div className="relative mb-5 overflow-hidden rounded-2xl bg-[#F5F5F5] aspect-[3/4]">
                  <img
                    src={member.img}
                    alt={`${member.name} – ${member.role}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="bg-[#C9A227] text-white text-xs px-3.5 py-1.5 rounded-full font-semibold tracking-wide">
                      {member.years} yrs experience
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#C9A227] text-xs font-semibold tracking-wide uppercase mb-2.5">
                  {member.role}
                </p>
                <p className="text-[13px] text-[#1A1A1A]/52 leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#1A1A1A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C9A227 0%, transparent 60%), radial-gradient(circle at 80% 20%, #C9A227 0%, transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            {...fadeUp()}
            className="text-center mb-16"
          >
            <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">
              Our Difference
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">
              Why Choose Us
            </h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
              Six reasons why Hannover chooses Friseur Danyar,
              again and again.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REASONS.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  {...fadeUp(i * 0.07)}
                  className="group bg-white/[0.05] border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.09] hover:border-[#C9A227]/35 transition-all duration-500 cursor-default"
                >
                  <div className="w-12 h-12 bg-[#C9A227]/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C9A227]/25 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2.5">
                    {reason.title}
                  </h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">
                    {reason.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery ────────────────────────────────────────────────────────────── */}
      <section id="gallery" className="py-28 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            {...fadeUp()}
            className="text-center mb-16"
          >
            <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">
              Our Work
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-5">
              Gallery
            </h2>
            <p className="text-[#1A1A1A]/55 text-lg max-w-xl mx-auto leading-relaxed">
              A glimpse of the transformations we create every
              day.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            style={{ gridAutoRows: "200px" }}
          >
            {GALLERY.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className={`relative overflow-hidden rounded-2xl bg-[#E8E5DF] group cursor-pointer ${item.classes}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/35 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded-full">
                    {item.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────────────────── */}
      <section id="testimonials" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            {...fadeUp()}
            className="text-center mb-16"
          >
            <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">
              Client Stories
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-5">
              Testimonials
            </h2>
            <div className="flex items-center justify-center gap-3">
              <StarRow count={5} />
              <span className="text-2xl font-bold text-[#1A1A1A]">
                4.9
              </span>
              <span className="text-[#1A1A1A]/30 text-lg">
                ·
              </span>
              <span className="text-[#1A1A1A]/55 text-sm">
                159 Reviews on Google
              </span>
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#F8F6F2] rounded-3xl px-10 py-12 md:px-16 md:py-14 text-center"
            >
              <div className="flex justify-center mb-4">
                <StarRow
                  count={TESTIMONIALS[activeSlide].rating}
                />
              </div>
              <blockquote className="font-serif text-xl md:text-2xl text-[#1A1A1A] leading-relaxed mb-8 italic">
                &ldquo;{TESTIMONIALS[activeSlide].text}&rdquo;
              </blockquote>
              <div className="w-10 h-px bg-[#C9A227] mx-auto mb-5" />
              <p className="font-semibold text-[#1A1A1A] text-base">
                {TESTIMONIALS[activeSlide].name}
              </p>
              <p className="text-[13px] text-[#1A1A1A]/45 mt-1">
                {TESTIMONIALS[activeSlide].date}
              </p>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#1A1A1A]/15 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300 text-[#1A1A1A]/60"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2 items-center">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${i === activeSlide ? "w-7 h-2 bg-[#C9A227]" : "w-2 h-2 bg-[#1A1A1A]/18"}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#1A1A1A]/15 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300 text-[#1A1A1A]/60"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Appointment ────────────────────────────────────────────────────────── */}
      <section id="appointment" className="py-28 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp()} className="lg:pt-4">
              <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">
                Reserve Your Spot
              </p>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
                Book Your Appointment
              </h2>
              <p className="text-[#1A1A1A]/55 text-lg mb-10 leading-relaxed">
                Ready for a transformation? Fill in the form and
                we will confirm your appointment within 24
                hours.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  {
                    icon: Phone,
                    text: "+49 511 123 456 78",
                    href: "tel:+4951112345678",
                  },
                  {
                    icon: MapPin,
                    text: "Vahrenwalder Str. 140, 30165 Hannover",
                    href: undefined,
                  },
                  {
                    icon: Clock,
                    text: "Mon–Sat 9:00–19:00  ·  Sun 10:00–16:00",
                    href: undefined,
                  },
                ].map(({ icon: Icon, text, href }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3.5"
                  >
                    <div className="w-9 h-9 bg-[#C9A227]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#C9A227]" />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
                      >
                        {text}
                      </a>
                    ) : (
                      <span className="text-sm text-[#1A1A1A]/70">
                        {text}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-2xl h-52 bg-[#E8E5DF]">
                <img
                  src={IMG.salon}
                  alt="Inside Friseur Danyar salon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold font-serif text-lg">
                      Friseur Danyar
                    </p>
                    <p className="text-white/65 text-xs">
                      Inside MARKTKAUF Hannover
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
                    <StarRow count={5} size="xs" />
                    <span className="text-white text-xs font-semibold ml-0.5">
                      4.9
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              {...fadeUp(0.15)}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-sm space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">
                    Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleInput}
                    placeholder="Your full name"
                    required
                    className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleInput}
                    placeholder="+49 ..."
                    className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleInput}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">
                    Service
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleInput}
                    className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all appearance-none"
                  >
                    <option value="">Choose service</option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">
                    Stylist
                  </label>
                  <select
                    name="stylist"
                    value={form.stylist}
                    onChange={handleInput}
                    className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all appearance-none"
                  >
                    <option value="">Any stylist</option>
                    {TEAM.map((t) => (
                      <option key={t.name} value={t.name}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">
                    Date
                  </label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleInput}
                    className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">
                    Time
                  </label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleInput}
                    className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all appearance-none"
                  >
                    <option value="">Select time</option>
                    {[
                      "09:00",
                      "09:30",
                      "10:00",
                      "10:30",
                      "11:00",
                      "11:30",
                      "12:00",
                      "13:00",
                      "13:30",
                      "14:00",
                      "14:30",
                      "15:00",
                      "15:30",
                      "16:00",
                      "16:30",
                      "17:00",
                      "17:30",
                      "18:00",
                    ].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleInput}
                  placeholder="Any special requests or notes..."
                  rows={3}
                  className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl text-sm font-semibold tracking-wide hover:bg-[#C9A227] transition-colors duration-300 flex items-center justify-center gap-2 mt-2"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* ── Location ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            {...fadeUp()}
            className="text-center mb-16"
          >
            <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">
              Find Us
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-5">
              Our Location
            </h2>
            <p className="text-[#1A1A1A]/55 text-lg max-w-xl mx-auto">
              Conveniently located inside MARKTKAUF Hannover on
              Vahrenwalder Strasse.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <motion.div
              {...fadeUp()}
              className="lg:col-span-3 rounded-2xl overflow-hidden shadow-sm bg-[#F5F5F5] h-[460px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.0!2d9.73!3d52.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00b3d!2sVahrenwalder+Str.+140%2C+30165+Hannover!5e0!3m2!1sen!2sde!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Friseur Danyar – Vahrenwalder Str. 140, 30165 Hannover"
              />
            </motion.div>

            <motion.div
              {...fadeUp(0.12)}
              className="lg:col-span-2 space-y-4"
            >
              <div className="bg-[#F8F6F2] rounded-2xl p-6">
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-0.5">
                  Friseur Danyar
                </h3>
                <p className="text-[#C9A227] text-xs font-semibold tracking-wide uppercase mb-5">
                  Inside MARKTKAUF Hannover
                </p>
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">
                        Vahrenwalder Str. 140
                      </p>
                      <p className="text-sm text-[#1A1A1A]/55">
                        30165 Hannover, Germany
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                    <a
                      href="tel:+4951112345678"
                      className="text-sm text-[#1A1A1A] hover:text-[#C9A227] transition-colors font-medium"
                    >
                      +49 511 123 456 78
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                    <a
                      href="mailto:info@friseur-danyar.de"
                      className="text-sm text-[#1A1A1A] hover:text-[#C9A227] transition-colors"
                    >
                      info@friseur-danyar.de
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F6F2] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#C9A227]" />
                  <h4 className="font-semibold text-[#1A1A1A] text-sm">
                    Opening Hours
                  </h4>
                </div>
                <div className="space-y-2.5 text-sm">
                  {[
                    {
                      day: "Monday – Friday",
                      hours: "09:00 – 19:00",
                    },
                    { day: "Saturday", hours: "09:00 – 18:00" },
                    { day: "Sunday", hours: "10:00 – 16:00" },
                  ].map(({ day, hours }) => (
                    <div
                      key={day}
                      className="flex justify-between items-center"
                    >
                      <span className="text-[#1A1A1A]/55">
                        {day}
                      </span>
                      <span className="text-[#1A1A1A] font-semibold text-xs bg-white px-2.5 py-1 rounded-lg">
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-[#C9A227]/10 border border-[#C9A227]/20 rounded-2xl p-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C9A227] text-[#C9A227]"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    4.9 / 5 on Google
                  </p>
                  <p className="text-xs text-[#1A1A1A]/50">
                    Based on 159+ verified reviews
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Vahrenwalder+Str.+140,+30165+Hannover"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#1A1A1A] text-white py-4 rounded-xl text-sm font-semibold hover:bg-[#C9A227] transition-colors duration-300"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────────── */}
      <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
            <div className="md:col-span-1">
              <div className="mb-5">
                <span className="block text-2xl font-serif font-bold">
                  Friseur
                </span>
                <span className="block text-[10px] tracking-[0.35em] text-[#C9A227] uppercase font-semibold">
                  Danyar
                </span>
              </div>
              <p className="text-sm text-white/45 leading-relaxed mb-6">
                Premium hair salon in the heart of Hannover.
                Your style, our passion — since day one.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 bg-white/[0.08] rounded-full flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  "Services",
                  "Meet the Team",
                  "Gallery",
                  "Testimonials",
                  "Book Appointment",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-[#C9A227] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-6">
                Opening Hours
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between gap-4 text-white/60">
                  <span>Mon – Fri</span>
                  <span className="text-white/80">
                    09:00–19:00
                  </span>
                </li>
                <li className="flex justify-between gap-4 text-white/60">
                  <span>Saturday</span>
                  <span className="text-white/80">
                    09:00–18:00
                  </span>
                </li>
                <li className="flex justify-between gap-4 text-white/60">
                  <span>Sunday</span>
                  <span className="text-white/80">
                    10:00–16:00
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-6">
                Contact
              </h4>
              <ul className="space-y-3.5 text-sm text-white/60">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <span>
                    Vahrenwalder Str. 140
                    <br />
                    30165 Hannover
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                  <a
                    href="tel:+4951112345678"
                    className="hover:text-[#C9A227] transition-colors"
                  >
                    +49 511 123 456 78
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                  <a
                    href="mailto:info@friseur-danyar.de"
                    className="hover:text-[#C9A227] transition-colors"
                  >
                    info@friseur-danyar.de
                  </a>
                </li>
              </ul>

              <div className="mt-5 flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-xl p-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-[#C9A227] text-[#C9A227]"
                    />
                  ))}
                </div>
                <span className="text-xs text-white/55">
                  4.9 · 159+ Google Reviews
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>
              © {new Date().getFullYear()} Friseur Danyar ·
              Hannover · All rights reserved.
            </p>
            <p>Vahrenwalder Str. 140, 30165 Hannover</p>
          </div>
        </div>
      </footer>
    </div>
  );
}