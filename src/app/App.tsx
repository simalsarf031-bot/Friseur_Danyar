import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Scissors, Palette, Wind, User, Sparkles, Heart, Baby, Star,
  Phone, MapPin, Clock, ChevronLeft, ChevronRight, Menu, X,
  Instagram, Facebook, Users, Zap, ThumbsUp, Calendar,
  BadgeCheck, Mail, ArrowRight, Globe, Play, ChevronDown,
} from "lucide-react";
import heroStorefront from "../assets/hero-storefront.jpg";
import danyarOwner from "../assets/danyar-owner.jpg";

/* ── Images ─────────────────────────────────────────────────────────────────── */
const IMG = {
  hero:      heroStorefront,
  haircut:   "https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?w=800&h=600&fit=crop&auto=format",
  coloring:  "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=800&h=600&fit=crop&auto=format",
  salon:     "https://images.unsplash.com/photo-1759134198561-e2041049419c?w=800&h=600&fit=crop&auto=format",
  blonde:    "https://images.unsplash.com/photo-1560869713-bf165a9cfac1?w=800&h=1000&fit=crop&auto=format",
  reception: "https://images.unsplash.com/photo-1781513144825-aa1e284c5950?w=900&h=700&fit=crop&auto=format",
  tools:     "https://images.unsplash.com/photo-1613754773306-532ec48b0de5?w=800&h=600&fit=crop&auto=format",
  barbers:   "https://images.unsplash.com/photo-1759134155377-4207d89b39ec?w=800&h=600&fit=crop&auto=format",
  t1:        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=600&fit=crop&auto=format",
  t2:        "https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=500&h=600&fit=crop&auto=format",
  t3:        danyarOwner,
  t4:        "https://images.unsplash.com/photo-1605124305733-fe7ecf960b0e?w=500&h=600&fit=crop&auto=format",
};

/* ── Language config ────────────────────────────────────────────────────────── */
const LANGS = {
  en: { label: "EN", name: "English",  dir: "ltr" as const },
  de: { label: "DE", name: "Deutsch",  dir: "ltr" as const },
  ar: { label: "AR", name: "العربية",  dir: "rtl" as const },
  tr: { label: "TR", name: "Türkçe",   dir: "ltr" as const },
} as const;
type Lang = keyof typeof LANGS;

/* ── Translations ───────────────────────────────────────────────────────────── */
const T = {
  en: {
    nav: { services: "Services", team: "Team", gallery: "Gallery", testimonials: "Testimonials", contact: "Contact", book: "Book Now" },
    hero: {
      badge: "Reviews on Google",
      h1a: "Your Style.", h1b: "Our Passion.",
      sub: "Premium haircuts, styling, coloring, and beauty services in the heart of Hannover.",
      cta1: "Book Appointment", cta2: "Call Now",
    },
    sl: { services: "What We Offer", team: "The People Behind Your Look", whyus: "Our Difference", instagram: "See Our Work", gallery: "The Gallery", testimonials: "Client Stories", booking: "Reserve Your Spot", location: "Find Us" },
    sh: { services: "Our Services", team: "Meet Our Team", whyus: "Why Choose Us", instagram: "Have a Look at Our Work", gallery: "Gallery", testimonials: "Testimonials", booking: "Book Your Appointment", location: "Our Location" },
    ss: {
      services: "From everyday cuts to transformative color — every service delivered with precision and care.",
      team: "Passionate professionals dedicated to bringing out your absolute best.",
      whyus: "Six reasons why Hannover chooses Friseur Danyar, again and again.",
      instagram: "Real results from our salon. Follow us for daily inspiration.",
      gallery: "A glimpse of the transformations we create every day.",
      testimonials: "Trusted by hundreds of happy clients across Hannover.",
      booking: "Ready for a transformation? Fill in the form and we will confirm your appointment within 24 hours.",
      location: "Conveniently located inside MARKTKAUF Hannover on Vahrenwalder Strasse.",
    },
    services: [
      { title: "Haircuts",            desc: "Precision cuts tailored to your face shape and lifestyle." },
      { title: "Hair Coloring",       desc: "Balayage, highlights, ombré and full color transformations." },
      { title: "Hair Styling",        desc: "Blowouts, straightening, curling and special occasion styling." },
      { title: "Beard Grooming",      desc: "Expert beard shaping, trimming and grooming treatments." },
      { title: "Eyebrow Threading",   desc: "Precise shaping using traditional threading technique." },
      { title: "Hair Treatments",     desc: "Keratin, deep conditioning and restorative hair masks." },
      { title: "Children's Haircuts", desc: "Gentle, patient care for your little ones." },
      { title: "Wedding Styling",     desc: "Bridal and wedding party hair for your perfect day." },
    ],
    teamRoles: [
      { role: "Master Stylist & Owner", desc: "Over 12 years of precision cuts and color artistry, bringing a distinctive personal touch to every client." },
      { role: "Senior Colorist",        desc: "Specialist in balayage, highlights and creative color transformations that turn heads." },
      { role: "Styling Expert",         desc: "Expert in bridal updos, special occasion hair and everyday glam styling." },
      { role: "Beauty Specialist",      desc: "Threading, nourishing treatments and a warm presence that puts every client at ease." },
    ],
    reasons: [
      { title: "4.9 Google Rating",     desc: "Trusted by 159+ satisfied customers across Hannover." },
      { title: "Professional Stylists", desc: "Highly trained team with years of hands-on expertise." },
      { title: "Modern Techniques",     desc: "We stay ahead with the latest trends and industry methods." },
      { title: "Friendly Team",         desc: "Warm, welcoming atmosphere from the moment you walk in." },
      { title: "Easy Booking",          desc: "Book your appointment online in under 60 seconds." },
      { title: "Affordable Luxury",     desc: "Premium results at prices that respect your budget." },
    ],
    testimonials: [
      { name: "Yasmin H.", text: "Absolutely amazing experience! Danyar is a true artist. My hair has never looked so healthy and beautiful. The salon atmosphere is incredibly clean and welcoming.", date: "March 2026" },
      { name: "Sarah M.", text: "The best hair salon in Hannover, hands down. The team is so friendly and professional. My balayage turned out exactly as I envisioned — I get compliments every single day.", date: "January 2026" },
      { name: "Lena B.", text: "I've been coming here for 3 years and would never go anywhere else. Quality is consistent, prices are fair, and the team makes you feel like royalty.", date: "November 2025" },
      { name: "Fatima A.", text: "Brought my daughter for her first real haircut and the experience was magical. The stylists were so patient and kind. We'll definitely be back!", date: "September 2025" },
      { name: "Maria T.", text: "Wedding hair done to perfection! Sara understood my vision immediately and executed it flawlessly. My bridal party looked absolutely stunning. Thank you!", date: "July 2025" },
    ],
    booking: {
      nameL: "Name", phoneL: "Phone", emailL: "Email", serviceL: "Service",
      stylistL: "Stylist", dateL: "Date", timeL: "Time", msgL: "Message",
      chooseSvc: "Choose service", anyStylist: "Any stylist", selTime: "Select time",
      submitBtn: "Book Appointment", successTitle: "Booking Request Sent!",
      successMsg: "Thank you! We will confirm your appointment within 24 hours.",
      ph_name: "Your full name", ph_phone: "+49 ...", ph_email: "you@example.com", ph_msg: "Any special requests or notes...",
      ownerSubjectPrefix: "New Appointment Request —",
      custSubject: "Your Appointment Confirmation — Friseur Danyar",
      custBody: "Hi {name},\n\nThank you for booking with Friseur Danyar! Here are your appointment details:\n\nService: {service}\nDate: {date}\nTime: {time}\nAddress: {address}\n\nWe look forward to seeing you!\n\nBest regards,\nFriseur Danyar",
    },
    loc: {
      inside: "Located inside MARKTKAUF Hannover", hours: "Opening Hours",
      dir: "Get Directions", monFri: "Monday – Friday", sat: "Saturday", sun: "Sunday",
      rating: "4.9 / 5 on Google", reviews: "Based on 159+ verified reviews",
    },
    footer: {
      tagline: "Premium hair salon in the heart of Hannover. Your style, our passion — since day one.",
      links: "Quick Links", hours: "Opening Hours", contact: "Contact", copy: "All rights reserved.",
      navLinks: ["Services", "Meet the Team", "Gallery", "Testimonials", "Book Appointment"],
    },
    misc: {
      scroll: "Scroll", tabSvc: "Services", tabWork: "Our Work",
      viewIG: "View on Instagram", followIG: "Follow us @friseur_danyar",
      bookSvc: "Book This Service", exp: "yrs experience", close: "Close",
      reviewsGoogle: "Reviews on Google",
      waLabel: "Chat on WhatsApp", waMsg: "Hi! I'd like to book an appointment at Friseur Danyar.",
    },
  },
  de: {
    nav: { services: "Leistungen", team: "Team", gallery: "Galerie", testimonials: "Bewertungen", contact: "Kontakt", book: "Jetzt buchen" },
    hero: {
      badge: "Bewertungen auf Google",
      h1a: "Ihr Stil.", h1b: "Unsere Leidenschaft.",
      sub: "Premium-Haarschnitte, Styling, Colorierung und Beautyservices im Herzen Hannovers.",
      cta1: "Termin buchen", cta2: "Jetzt anrufen",
    },
    sl: { services: "Was wir anbieten", team: "Das Team hinter Ihrem Look", whyus: "Unser Unterschied", instagram: "Unsere Arbeit", gallery: "Die Galerie", testimonials: "Kundenstimmen", booking: "Termin reservieren", location: "Uns finden" },
    sh: { services: "Unsere Leistungen", team: "Unser Team", whyus: "Warum wir?", instagram: "Werfen Sie einen Blick auf unsere Arbeit", gallery: "Galerie", testimonials: "Bewertungen", booking: "Termin buchen", location: "Unser Standort" },
    ss: {
      services: "Von alltäglichen Haarschnitten bis transformativen Farbveränderungen — jede Leistung mit Präzision.",
      team: "Leidenschaftliche Profis, die Ihr Bestes herausholen.",
      whyus: "Sechs Gründe, warum Hannover immer wieder zu Friseur Danyar kommt.",
      instagram: "Echte Ergebnisse aus unserem Salon. Folgen Sie uns für tägliche Inspiration.",
      gallery: "Ein Blick auf die täglichen Verwandlungen, die wir schaffen.",
      testimonials: "Von hunderten glücklicher Kunden in Hannover vertraut.",
      booking: "Bereit für eine Verwandlung? Füllen Sie das Formular aus und wir bestätigen Ihren Termin in 24 Stunden.",
      location: "Praktisch im MARKTKAUF Hannover an der Vahrenwalder Straße gelegen.",
    },
    services: [
      { title: "Haarschnitte",           desc: "Präzisionshaarschnitte, abgestimmt auf Ihre Gesichtsform und Ihren Lebensstil." },
      { title: "Haarcolorierung",        desc: "Balayage, Highlights, Ombré und vollständige Farbveränderungen." },
      { title: "Haarstyling",            desc: "Föhnfrisuren, Glätten, Locken und Styling für besondere Anlässe." },
      { title: "Bartpflege",             desc: "Professionelles Bartformen, -trimmen und -pflegen." },
      { title: "Augenbrauen-Threading",  desc: "Präzises Formen mit der traditionellen Fadenmethode." },
      { title: "Haarpflege",             desc: "Keratin, intensive Pflege und regenerierende Haarmasken." },
      { title: "Kinderhaarschnitte",     desc: "Sanfte, geduldige Betreuung für Ihre Kleinen." },
      { title: "Hochzeitsstyling",       desc: "Braut- und Hochzeitspartyfrisuren für Ihren perfekten Tag." },
    ],
    teamRoles: [
      { role: "Meister-Stylist & Inhaber", desc: "Über 12 Jahre Erfahrung in Präzisionsschnitten und Colorierungen mit einer unverwechselbaren persönlichen Note." },
      { role: "Senior Coloristin",         desc: "Spezialisiert auf Balayage, Highlights und kreative Farbveränderungen, die begeistern." },
      { role: "Styling-Expertin",          desc: "Expertin für Brautfrisuren, besondere Anlässe und alltägliches Glamour-Styling." },
      { role: "Beauty-Spezialistin",       desc: "Threading, nährende Pflegebehandlungen und eine herzliche Atmosphäre für jeden Kunden." },
    ],
    reasons: [
      { title: "4,9 Google-Bewertung",     desc: "Von 159+ zufriedenen Kunden in Hannover vertraut." },
      { title: "Professionelle Stylisten", desc: "Hochqualifiziertes Team mit jahrelanger praktischer Erfahrung." },
      { title: "Moderne Techniken",        desc: "Wir bleiben mit den neuesten Trends und Methoden immer vorne." },
      { title: "Freundliches Team",        desc: "Warme, einladende Atmosphäre vom ersten Moment an." },
      { title: "Einfache Buchung",         desc: "Termin online in weniger als 60 Sekunden buchen." },
      { title: "Erschwinglicher Luxus",    desc: "Premium-Ergebnisse zu Preisen, die Ihr Budget respektieren." },
    ],
    testimonials: [
      { name: "Yasmin H.", text: "Absolut tolle Erfahrung! Danyar ist ein echter Künstler. Meine Haare haben noch nie so gesund und schön ausgesehen. Die Salonatmosphäre ist unglaublich sauber und einladend.", date: "März 2026" },
      { name: "Sarah M.", text: "Der beste Friseursalon in Hannover, ohne Frage. Das Team ist so freundlich und professionell. Mein Balayage ist genau so geworden, wie ich es mir vorgestellt hatte.", date: "Januar 2026" },
      { name: "Lena B.", text: "Ich komme seit 3 Jahren hierher und würde nie woanders hingehen. Die Qualität ist konstant, die Preise fair und das gesamte Team lässt einen wie eine Königin fühlen.", date: "November 2025" },
      { name: "Fatima A.", text: "Meiner Tochter für ihren ersten richtigen Haarschnitt gebracht und die Erfahrung war zauberhaft. Die Stylisten waren so geduldig und freundlich. Wir kommen definitiv wieder!", date: "September 2025" },
      { name: "Maria T.", text: "Hochzeitsfrisur in Perfektion! Sara hat meine Vision sofort verstanden und sie makellos umgesetzt. Meine Hochzeitsgesellschaft sah absolut atemberaubend aus.", date: "Juli 2025" },
    ],
    booking: {
      nameL: "Name", phoneL: "Telefon", emailL: "E-Mail", serviceL: "Leistung",
      stylistL: "Stylist", dateL: "Datum", timeL: "Zeit", msgL: "Nachricht",
      chooseSvc: "Leistung wählen", anyStylist: "Beliebiger Stylist", selTime: "Zeit wählen",
      submitBtn: "Termin buchen", successTitle: "Terminanfrage gesendet!",
      successMsg: "Vielen Dank! Wir bestätigen Ihren Termin innerhalb von 24 Stunden.",
      ph_name: "Vollständiger Name", ph_phone: "+49 ...", ph_email: "sie@beispiel.de", ph_msg: "Besondere Wünsche oder Anmerkungen...",
      ownerSubjectPrefix: "Neue Terminanfrage —",
      custSubject: "Ihre Terminbestätigung — Friseur Danyar",
      custBody: "Hallo {name},\n\nvielen Dank für Ihre Buchung bei Friseur Danyar! Hier sind Ihre Termindetails:\n\nLeistung: {service}\nDatum: {date}\nUhrzeit: {time}\nAdresse: {address}\n\nWir freuen uns auf Ihren Besuch!\n\nMit freundlichen Grüßen,\nFriseur Danyar",
    },
    loc: {
      inside: "Im MARKTKAUF Hannover", hours: "Öffnungszeiten",
      dir: "Route planen", monFri: "Montag – Freitag", sat: "Samstag", sun: "Sonntag",
      rating: "4,9 / 5 auf Google", reviews: "Basierend auf 159+ verifizierten Bewertungen",
    },
    footer: {
      tagline: "Premium-Friseursalon im Herzen Hannovers. Ihr Stil, unsere Leidenschaft — seit dem ersten Tag.",
      links: "Schnelllinks", hours: "Öffnungszeiten", contact: "Kontakt", copy: "Alle Rechte vorbehalten.",
      navLinks: ["Leistungen", "Unser Team", "Galerie", "Bewertungen", "Termin buchen"],
    },
    misc: {
      scroll: "Scrollen", tabSvc: "Leistungen", tabWork: "Unsere Arbeit",
      viewIG: "Auf Instagram ansehen", followIG: "Folgen Sie @friseur_danyar",
      bookSvc: "Diesen Service buchen", exp: "Jahre Erfahrung", close: "Schließen",
      reviewsGoogle: "Bewertungen auf Google",
      waLabel: "Über WhatsApp chatten", waMsg: "Hallo! Ich möchte gerne einen Termin bei Friseur Danyar buchen.",
    },
  },
  ar: {
    nav: { services: "الخدمات", team: "الفريق", gallery: "المعرض", testimonials: "التقييمات", contact: "اتصل بنا", book: "احجز الآن" },
    hero: {
      badge: "تقييمات على جوجل",
      h1a: "أسلوبك.", h1b: "شغفنا.",
      sub: "قصات شعر فاخرة وتصفيف وتلوين وخدمات تجميل في قلب هانوفر.",
      cta1: "احجز موعداً", cta2: "اتصل الآن",
    },
    sl: { services: "ما نقدمه", team: "الفريق خلف إطلالتك", whyus: "ما يميزنا", instagram: "أعمالنا", gallery: "المعرض", testimonials: "قصص عملائنا", booking: "احجز موعدك", location: "اعثر علينا" },
    sh: { services: "خدماتنا", team: "فريقنا", whyus: "لماذا تختارنا", instagram: "شاهد أعمالنا", gallery: "المعرض", testimonials: "التقييمات", booking: "احجز موعدك", location: "موقعنا" },
    ss: {
      services: "من قصات الشعر اليومية إلى تحولات الألوان الرائعة — كل خدمة تُقدَّم بدقة واهتمام.",
      team: "محترفون متحمسون مكرسون لإبراز أفضل ما فيك.",
      whyus: "ستة أسباب تجعل هانوفر تختار فريزور دانيار مراراً وتكراراً.",
      instagram: "نتائج حقيقية من صالوننا. تابعونا للإلهام اليومي.",
      gallery: "لمحة من التحولات التي نصنعها كل يوم.",
      testimonials: "موثوق به من قِبل مئات العملاء السعداء في هانوفر.",
      booking: "هل أنت مستعد للتحول؟ املأ النموذج وسنؤكد موعدك خلال 24 ساعة.",
      location: "يقع بشكل مريح داخل ماركتكاوف هانوفر في شارع فارنوالدر.",
    },
    services: [
      { title: "قصات الشعر",           desc: "قصات دقيقة مصممة لشكل وجهك وأسلوب حياتك." },
      { title: "تلوين الشعر",          desc: "بالياج وهايلايت وأومبري وتحولات اللون الكاملة." },
      { title: "تصفيف الشعر",          desc: "تجفيف وفرد وتجعيد وتصفيف للمناسبات الخاصة." },
      { title: "العناية باللحية",      desc: "تشكيل اللحية وقصها والعناية بها باحترافية." },
      { title: "نمص الحواجب بالخيط",  desc: "تشكيل دقيق للحواجب باستخدام تقنية الخيط التقليدية." },
      { title: "علاجات الشعر",         desc: "كيراتين وعناية عميقة وأقنعة الشعر المُجددة." },
      { title: "قصات أطفال",           desc: "عناية لطيفة وصبورة لأطفالك الصغار." },
      { title: "تصفيف حفلات الزفاف",   desc: "تسريحات العرائس وحفلات الزفاف ليومك المثالي." },
    ],
    teamRoles: [
      { role: "المصفف الرئيسي والمالك", desc: "أكثر من 12 عاماً من الخبرة في القصات الدقيقة وفنون التلوين، مع لمسة شخصية مميزة لكل عميل." },
      { role: "خبيرة تلوين أولى",       desc: "متخصصة في البالياج والهايلايت والتحولات الإبداعية للألوان التي تلفت الأنظار." },
      { role: "خبيرة تصفيف الشعر",     desc: "خبيرة في تسريحات العرائس والمناسبات الخاصة والتصفيف اليومي الأنيق." },
      { role: "متخصصة تجميل",           desc: "نمص الحواجب وعلاجات مغذية وحضور دافئ يجعل كل عميل في راحة تامة." },
    ],
    reasons: [
      { title: "تقييم 4.9 على جوجل",    desc: "موثوق به من قِبل أكثر من 159 عميل راضٍ في هانوفر." },
      { title: "مصففون محترفون",        desc: "فريق مدرب تدريباً عالياً بسنوات من الخبرة العملية." },
      { title: "تقنيات حديثة",          desc: "نواكب أحدث الاتجاهات والأساليب في المجال." },
      { title: "فريق ودود",             desc: "أجواء دافئة ومرحبة من اللحظة التي تدخل فيها." },
      { title: "حجز سهل",               desc: "احجز موعدك عبر الإنترنت في أقل من 60 ثانية." },
      { title: "فخامة بأسعار معقولة",   desc: "نتائج ممتازة بأسعار تحترم ميزانيتك." },
    ],
    testimonials: [
      { name: "ياسمين ح.", text: "تجربة رائعة للغاية! دانيار فنان حقيقي. لم يبدُ شعري صحياً وجميلاً هكذا من قبل. الأجواء نظيفة ومرحبة بشكل لا يصدق.", date: "مارس 2026" },
      { name: "سارة م.", text: "أفضل صالون شعر في هانوفر بلا منازع. الفريق ودود للغاية ومحترف. البالياج جاء تماماً كما تخيلته — أتلقى المديح كل يوم.", date: "يناير 2026" },
      { name: "لينا ب.", text: "أزور هذا الصالون منذ 3 سنوات ولن أذهب لأي مكان آخر. الجودة ثابتة والأسعار عادلة والفريق يجعلك تشعرين بالملكية.", date: "نوفمبر 2025" },
      { name: "فاطمة أ.", text: "أحضرت ابنتي لأول قصة شعر حقيقية وكانت التجربة ساحرة. المصففون كانوا صبورين ولطيفين جداً. سنعود بالتأكيد!", date: "سبتمبر 2025" },
      { name: "ماريا ت.", text: "تسريحة زفاف مثالية! سارة فهمت رؤيتي على الفور ونفذتها بلا عيب. فريقي في الزفاف بدا رائعاً. شكراً جزيلاً!", date: "يوليو 2025" },
    ],
    booking: {
      nameL: "الاسم", phoneL: "الهاتف", emailL: "البريد الإلكتروني", serviceL: "الخدمة",
      stylistL: "المصفف", dateL: "التاريخ", timeL: "الوقت", msgL: "رسالة",
      chooseSvc: "اختر خدمة", anyStylist: "أي مصفف", selTime: "اختر وقتاً",
      submitBtn: "احجز موعداً", successTitle: "تم إرسال طلب الحجز!",
      successMsg: "شكراً! سنؤكد موعدك خلال 24 ساعة.",
      ph_name: "الاسم الكامل", ph_phone: "+49 ...", ph_email: "بريدك@مثال.com", ph_msg: "أي طلبات خاصة أو ملاحظات...",
      ownerSubjectPrefix: "طلب حجز جديد —",
      custSubject: "تأكيد حجزك — صالون دانيار",
      custBody: "مرحباً {name}،\n\nشكراً لحجزك مع صالون دانيار! إليك تفاصيل موعدك:\n\nالخدمة: {service}\nالتاريخ: {date}\nالوقت: {time}\nالعنوان: {address}\n\nنتطلع لرؤيتك!\n\nمع تحيات فريق صالون دانيار",
    },
    loc: {
      inside: "داخل ماركتكاوف هانوفر", hours: "ساعات العمل",
      dir: "الاتجاهات", monFri: "الاثنين – الجمعة", sat: "السبت", sun: "الأحد",
      rating: "4.9 / 5 على جوجل", reviews: "بناءً على 159+ تقييم موثق",
    },
    footer: {
      tagline: "صالون تجميل فاخر في قلب هانوفر. أسلوبك، شغفنا — منذ اليوم الأول.",
      links: "روابط سريعة", hours: "ساعات العمل", contact: "تواصل معنا", copy: "جميع الحقوق محفوظة.",
      navLinks: ["الخدمات", "فريقنا", "المعرض", "التقييمات", "احجز موعداً"],
    },
    misc: {
      scroll: "للأسفل", tabSvc: "الخدمات", tabWork: "أعمالنا",
      viewIG: "عرض على إنستغرام", followIG: "تابعنا @friseur_danyar",
      bookSvc: "احجز هذه الخدمة", exp: "سنوات خبرة", close: "إغلاق",
      reviewsGoogle: "تقييمات على جوجل",
      waLabel: "الدردشة عبر واتساب", waMsg: "مرحباً! أرغب في حجز موعد في صالون دانيار.",
    },
  },
  tr: {
    nav: { services: "Hizmetler", team: "Ekip", gallery: "Galeri", testimonials: "Yorumlar", contact: "İletişim", book: "Rezervasyon" },
    hero: {
      badge: "Google Değerlendirmesi",
      h1a: "Tarzınız.", h1b: "Tutkumuz.",
      sub: "Hannover'in kalbinde premium saç kesimi, stil, renklendirme ve güzellik hizmetleri.",
      cta1: "Randevu Al", cta2: "Şimdi Ara",
    },
    sl: { services: "Sunduklarımız", team: "Görünüşünüzün Arkasındaki Ekip", whyus: "Farkımız", instagram: "Çalışmalarımız", gallery: "Galeri", testimonials: "Müşteri Hikayeleri", booking: "Yerinizi Ayırın", location: "Bizi Bulun" },
    sh: { services: "Hizmetlerimiz", team: "Ekibimizle Tanışın", whyus: "Neden Bizi Seçmelisiniz", instagram: "Çalışmalarımıza Göz Atın", gallery: "Galeri", testimonials: "Yorumlar", booking: "Randevu Alın", location: "Konumumuz" },
    ss: {
      services: "Günlük kesimlerden renk dönüşümlerine — her hizmet hassasiyet ve özenle sunulur.",
      team: "En iyinizi ortaya çıkarmaya adanmış tutkulu profesyoneller.",
      whyus: "Hannover'in Friseur Danyar'ı defalarca tercih etmesinin altı nedeni.",
      instagram: "Salonumuzdan gerçek sonuçlar. Günlük ilham için bizi takip edin.",
      gallery: "Her gün yarattığımız dönüşümlere bir bakış.",
      testimonials: "Hannover genelinde yüzlerce mutlu müşteri tarafından güvenilir.",
      booking: "Bir dönüşüme hazır mısınız? Formu doldurun, randevunuzu 24 saat içinde onaylayalım.",
      location: "Vahrenwalder Caddesi üzerindeki MARKTKAUF Hannover içinde rahatça konumlandırılmıştır.",
    },
    services: [
      { title: "Saç Kesimi",          desc: "Yüz şeklinize ve yaşam tarzınıza özel hassas kesimler." },
      { title: "Saç Boyama",          desc: "Balayage, röfle, ombre ve tam renk dönüşümleri." },
      { title: "Saç Şekillendirme",   desc: "Fön, düzleştirme, kıvırma ve özel günler için stil." },
      { title: "Sakal Bakımı",        desc: "Uzman sakal şekillendirme, kesme ve bakım uygulamaları." },
      { title: "Kaş İpliği",          desc: "Geleneksel iplik tekniği ile hassas kaş şekillendirme." },
      { title: "Saç Bakımı",          desc: "Keratin, derin nemlendirme ve onarıcı saç maskeleri." },
      { title: "Çocuk Saç Kesimi",    desc: "Küçükleriniz için nazik ve sabırlı bakım." },
      { title: "Düğün Saç Tasarımı",  desc: "Mükemmel gününüz için gelin ve düğün saç tasarımı." },
    ],
    teamRoles: [
      { role: "Baş Stilist & Sahip",   desc: "12 yılı aşkın hassas kesim ve renk sanatı deneyimiyle her müşteriye özgün bir kişisel dokunuş." },
      { role: "Kıdemli Renk Uzmanı",   desc: "Balayage, röfle ve göz alıcı yaratıcı renk dönüşümlerinde uzman." },
      { role: "Stil Uzmanı",           desc: "Gelin topuzları, özel günler ve günlük glamour stillerde uzman." },
      { role: "Güzellik Uzmanı",       desc: "İplik uygulamaları, besleyici bakımlar ve her müşteriyi rahatlatacak sıcak bir ortam." },
    ],
    reasons: [
      { title: "4.9 Google Puanı",        desc: "Hannover genelinde 159+ memnun müşteri tarafından güvenilir." },
      { title: "Profesyonel Stilistler",  desc: "Yıllarca uygulamalı deneyime sahip yüksek eğitimli ekip." },
      { title: "Modern Teknikler",        desc: "En güncel trendler ve endüstri yöntemleriyle hep bir adım önde." },
      { title: "Samimi Ekip",             desc: "İçeri girdiğiniz andan itibaren sıcak ve davetkar bir atmosfer." },
      { title: "Kolay Rezervasyon",       desc: "Randevunuzu 60 saniyeden kısa sürede online alın." },
      { title: "Uygun Fiyatlı Lüks",     desc: "Bütçenize saygı duyan fiyatlarla premium sonuçlar." },
    ],
    testimonials: [
      { name: "Yasmin H.", text: "Kesinlikle harika bir deneyim! Danyar gerçek bir sanatçı. Saçlarım hiç bu kadar sağlıklı ve güzel görünmemişti. Salon atmosferi inanılmaz temiz ve davetkar.", date: "Mart 2026" },
      { name: "Sarah M.", text: "Hannover'deki en iyi kuaför salonu, açık ara. Ekip çok samimi ve profesyonel. Balayage tam hayal ettiğim gibi çıktı — her gün iltifat alıyorum.", date: "Ocak 2026" },
      { name: "Lena B.", text: "3 yıldır buraya geliyorum ve başka bir yere gitmeyeceğim. Kalite tutarlı, fiyatlar adil ve tüm ekip sizi kraliçe gibi hissettiriyor.", date: "Kasım 2025" },
      { name: "Fatima A.", text: "Kızımı ilk gerçek saç kesimi için getirdim ve deneyim sihirli gibiydi. Stilistler çok sabırlı ve nazikti. Kesinlikle geri döneceğiz!", date: "Eylül 2025" },
      { name: "Maria T.", text: "Düğün saçı mükemmeldi! Sara vizyonumu hemen anladı ve kusursuz uyguladı. Düğün ekibim nefes kesici güzeldi. Çok teşekkürler!", date: "Temmuz 2025" },
    ],
    booking: {
      nameL: "Ad", phoneL: "Telefon", emailL: "E-posta", serviceL: "Hizmet",
      stylistL: "Stilist", dateL: "Tarih", timeL: "Saat", msgL: "Mesaj",
      chooseSvc: "Hizmet seçin", anyStylist: "Herhangi bir stilist", selTime: "Saat seçin",
      submitBtn: "Randevu Al", successTitle: "Rezervasyon Talebiniz Gönderildi!",
      successMsg: "Teşekkürler! Randevunuzu 24 saat içinde onaylayacağız.",
      ph_name: "Tam adınız", ph_phone: "+49 ...", ph_email: "siz@ornek.com", ph_msg: "Özel istekler veya notlar...",
      ownerSubjectPrefix: "Yeni Randevu Talebi —",
      custSubject: "Randevu Onayınız — Friseur Danyar",
      custBody: "Merhaba {name},\n\nFriseur Danyar'dan rezervasyon yaptığınız için teşekkür ederiz! Randevu detaylarınız:\n\nHizmet: {service}\nTarih: {date}\nSaat: {time}\nAdres: {address}\n\nSizi görmek için sabırsızlanıyoruz!\n\nSaygılarımızla,\nFriseur Danyar",
    },
    loc: {
      inside: "MARKTKAUF Hannover içinde", hours: "Çalışma Saatleri",
      dir: "Yol Tarifi", monFri: "Pazartesi – Cuma", sat: "Cumartesi", sun: "Pazar",
      rating: "Google'da 4.9 / 5", reviews: "159+ doğrulanmış değerlendirmeye dayalı",
    },
    footer: {
      tagline: "Hannover'in kalbinde premium kuaför salonu. Tarzınız, tutkumuz — ilk günden beri.",
      links: "Hızlı Bağlantılar", hours: "Çalışma Saatleri", contact: "İletişim", copy: "Tüm hakları saklıdır.",
      navLinks: ["Hizmetler", "Ekibimiz", "Galeri", "Yorumlar", "Randevu Al"],
    },
    misc: {
      scroll: "Kaydır", tabSvc: "Hizmetler", tabWork: "Çalışmalarımız",
      viewIG: "Instagram'da Görüntüle", followIG: "@friseur_danyar Takip Et",
      bookSvc: "Bu Hizmeti Rezerve Et", exp: "yıl deneyim", close: "Kapat",
      reviewsGoogle: "Google Değerlendirmesi",
      waLabel: "WhatsApp'tan Yazın", waMsg: "Merhaba! Friseur Danyar'da randevu almak istiyorum.",
    },
  },
};

/* ── Service data ───────────────────────────────────────────────────────────── */
const SVC_ICONS = [Scissors, Palette, Wind, User, Sparkles, Heart, Baby, Star];
const SVC_IMGS  = [IMG.haircut, IMG.coloring, IMG.blonde, IMG.barbers, IMG.tools, IMG.coloring, IMG.haircut, IMG.blonde];
const SVC_GALLERY: string[][] = [
  [IMG.haircut,  IMG.salon,     IMG.barbers,   IMG.tools   ],
  [IMG.coloring, IMG.blonde,    IMG.tools,     IMG.salon   ],
  [IMG.blonde,   IMG.coloring,  IMG.reception, IMG.haircut ],
  [IMG.barbers,  IMG.salon,     IMG.tools,     IMG.haircut ],
  [IMG.tools,    IMG.reception, IMG.salon,     IMG.barbers ],
  [IMG.coloring, IMG.tools,     IMG.blonde,    IMG.reception],
  [IMG.haircut,  IMG.salon,     IMG.barbers,   IMG.reception],
  [IMG.blonde,   IMG.coloring,  IMG.reception, IMG.salon   ],
];

/* ── Team data ──────────────────────────────────────────────────────────────── */
const TEAM_NAMES = ["Danyar", "Sara K.", "Leila M.", "Nina R."];
const TEAM_YEARS = [12, 8, 6, 5];
const TEAM_IMGS  = [IMG.t3, IMG.t1, IMG.t2, IMG.t4];

/* ── Reasons icons ──────────────────────────────────────────────────────────── */
const REASON_ICONS = [Star, Users, Zap, ThumbsUp, Calendar, BadgeCheck];

/* ── Instagram work posts ───────────────────────────────────────────────────── */
const WORK_POSTS = [
  { img: IMG.haircut,   type: "reel", likes: 234 },
  { img: IMG.coloring,  type: "reel", likes: 412 },
  { img: IMG.blonde,    type: "post", likes: 189 },
  { img: IMG.barbers,   type: "reel", likes: 156 },
  { img: IMG.reception, type: "post", likes: 298 },
  { img: IMG.tools,     type: "reel", likes: 167 },
];

/* ── Gallery ────────────────────────────────────────────────────────────────── */
const GALLERY = [
  { src: IMG.reception, alt: "Salon interior",       cls: "col-span-2 row-span-2" },
  { src: IMG.haircut,   alt: "Professional haircut", cls: "" },
  { src: IMG.coloring,  alt: "Hair coloring",        cls: "" },
  { src: IMG.blonde,    alt: "Blonde styling",       cls: "row-span-2" },
  { src: IMG.barbers,   alt: "Stylists at work",     cls: "" },
  { src: IMG.tools,     alt: "Styling tools",        cls: "" },
];

/* ── Social links ───────────────────────────────────────────────────────────── */
const SOCIAL = {
  instagram: "https://www.instagram.com/friseur_danyar?igsh=c2t1MXFjZ2pueW0z",
  facebook:  "https://www.facebook.com/share/1Bbpbzw17r/?mibextid=wwXIfr",
};

// TEMPLATE PLACEHOLDER — swap for the salon's real WhatsApp number before launch.
const WHATSAPP_NUMBER = "4917642907828"; // international format, no "+" or leading zero

/* ── Helpers ────────────────────────────────────────────────────────────────── */
function WhatsAppIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.65 4.526 1.78 6.394L4 29l7.79-1.746A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-2.014 0-3.89-.59-5.47-1.606l-.392-.247-4.62 1.036 1.06-4.51-.256-.406A9.71 9.71 0 0 1 5.25 15c0-5.937 4.817-10.75 10.754-10.75S26.75 9.063 26.75 15 21.937 24.75 16.004 24.75Zm5.918-8.146c-.324-.163-1.917-.946-2.214-1.054-.297-.108-.513-.163-.729.162-.216.325-.837 1.054-1.026 1.271-.19.216-.378.244-.702.081-.324-.163-1.368-.504-2.605-1.606-.963-.86-1.614-1.921-1.803-2.246-.19-.325-.02-.5.143-.663.147-.146.324-.379.486-.569.163-.19.216-.325.324-.542.108-.216.054-.406-.027-.569-.081-.163-.729-1.757-.999-2.406-.263-.632-.53-.546-.729-.556l-.621-.011c-.216 0-.567.081-.864.406-.297.325-1.134 1.108-1.134 2.702s1.161 3.133 1.323 3.35c.163.216 2.286 3.489 5.538 4.895.774.334 1.377.534 1.847.684.776.247 1.483.212 2.042.129.623-.093 1.917-.783 2.187-1.54.27-.756.27-1.404.19-1.54-.081-.135-.297-.216-.622-.379Z" />
    </svg>
  );
}

function StarRow({ count = 5, size = "sm" }: { count?: number; size?: "sm" | "xs" }) {
  const cls = size === "xs" ? "w-3 h-3" : "w-4 h-4";
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${cls} fill-[#C9A227] text-[#C9A227]`} />
      ))}
    </span>
  );
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };
}

function stagger(i: number) { return fadeUp(i * 0.07); }

/* ── App ────────────────────────────────────────────────────────────────────── */
const EMPTY_FORM = { name: "", phone: "", email: "", service: "", stylist: "", date: "", time: "", message: "" };

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [svcModal, setSvcModal] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const t = T[lang];
  const isRTL = LANGS[lang].dir === "rtl";

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // TEMPLATE PLACEHOLDER — replace with the salon's real business email before launch.
      const OWNER_EMAIL = "simalsarf031@gmail.com";
      const SALON_ADDRESS = "Vahrenwalder Str. 140, 30165 Hannover";

      // Fill the customer confirmation email with this booking's details.
      const custBody = t.booking.custBody
        .replace("{name}", form.name)
        .replace("{service}", form.service || "-")
        .replace("{date}", form.date || "-")
        .replace("{time}", form.time || "-")
        .replace("{address}", SALON_ADDRESS);

      // FormSubmit.co sends the notification below to the salon owner (OWNER_EMAIL),
      // and — via the _autoresponse field — automatically sends a separate
      // confirmation email back to the customer's address (form.email).
      await fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `${t.booking.ownerSubjectPrefix} ${form.name}`,
          _template: "table",
          _replyto: form.email,
          _autoresponse: custBody,
          Name: form.name, Phone: form.phone, Email: form.email,
          Service: form.service, Stylist: form.stylist,
          Date: form.date, Time: form.time, Message: form.message,
        }),
      });
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      setForm(EMPTY_FORM);
    }
  };

  const navLinks = [
    { label: t.nav.services,     href: "#services"     },
    { label: t.nav.team,         href: "#team"         },
    { label: t.nav.gallery,      href: "#gallery"      },
    { label: t.nav.testimonials, href: "#testimonials" },
    { label: t.nav.contact,      href: "#contact"      },
  ];

  return (
    <div
      dir={LANGS[lang].dir}
      className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden"
    >

      {/* ── Navigation ──────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/92 backdrop-blur-lg border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-none select-none">
            <span className="text-xl font-serif font-bold tracking-tight text-[#1A1A1A]">Friseur</span>
            <span className="text-[10px] tracking-[0.3em] text-[#C9A227] uppercase font-semibold">Danyar</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-[#1A1A1A]/65 hover:text-[#1A1A1A] transition-colors tracking-wide">
                {l.label}
              </a>
            ))}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2.5">
            {/* Language switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(v => !v)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-black/[0.1] text-sm text-[#1A1A1A] hover:border-[#C9A227]/50 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#C9A227]" />
                <span className="font-semibold">{LANGS[lang].label}</span>
                <ChevronDown className={`w-3 h-3 text-[#1A1A1A]/50 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full mt-2 bg-white rounded-xl shadow-xl border border-black/[0.07] overflow-hidden w-38 z-50"
                    style={{ [isRTL ? "left" : "right"]: 0 }}
                  >
                    {(Object.entries(LANGS) as [Lang, typeof LANGS[Lang]][]).map(([key, val]) => (
                      <button
                        key={key}
                        onClick={() => { setLang(key); setLangOpen(false); }}
                        className={`w-full px-4 py-2.5 text-sm flex items-center gap-2.5 hover:bg-[#F8F6F2] transition-colors ${lang === key ? "text-[#C9A227]" : "text-[#1A1A1A]"}`}
                      >
                        <span className="font-bold w-5">{val.label}</span>
                        <span className="text-[#1A1A1A]/55 text-xs">{val.name}</span>
                        {lang === key && <span className="ms-auto w-1.5 h-1.5 rounded-full bg-[#C9A227]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#appointment" className="hidden md:inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#C9A227] transition-colors duration-300 font-medium">
              {t.nav.book}
            </a>

            <button className="md:hidden p-2 text-[#1A1A1A]" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-black/[0.06] overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                     className="text-base text-[#1A1A1A] py-3 border-b border-black/[0.05] last:border-0">
                    {l.label}
                  </a>
                ))}
                <a href="#appointment" onClick={() => setMenuOpen(false)}
                   className="mt-3 bg-[#1A1A1A] text-white text-sm px-5 py-3.5 rounded-xl text-center font-medium">
                  {t.nav.book}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d0d]">
          <img src={IMG.hero} alt="Modern luxury salon interior" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/65" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-sm mb-10"
          >
            <StarRow />
            <span className="font-semibold">4.9 / 5</span>
            <span className="text-white/40">·</span>
            <span className="text-white/75">159+ {t.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl md:text-8xl font-bold leading-[1.04] tracking-tight mb-6"
          >
            {t.hero.h1a}
            <br />
            <span className="text-[#C9A227] italic">{t.hero.h1b}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#appointment"
               className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-white px-9 py-4 rounded-full text-base font-semibold hover:bg-[#b08d20] transition-all duration-300 shadow-xl hover:-translate-y-0.5">
              {t.hero.cta1} <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+4951112345678"
               className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white px-9 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-all duration-300">
              <Phone className="w-4 h-4" /> {t.hero.cta2}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 text-[10px] tracking-[0.35em] uppercase"
        >
          <span>{t.misc.scroll}</span>
          <div className="w-px h-8 bg-white/20 relative overflow-hidden rounded-full">
            <motion.div animate={{ y: ["-100%", "200%"] }} transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 top-0 h-1/2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ── Services ────────────────────────────────────────────────────────── */}
      <section id="services" className="py-28 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-10">
            <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">{t.sl.services}</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-5">{t.sh.services}</h2>
            <p className="text-[#1A1A1A]/55 text-lg max-w-xl mx-auto leading-relaxed">{t.ss.services}</p>
          </motion.div>

          {/* Tab toggle */}
          <motion.div {...fadeUp(0.1)} className="flex justify-center mb-10">
            <div className="bg-white border border-black/[0.08] rounded-full p-1 flex gap-1 shadow-sm">
              {[
                { key: false, label: t.misc.tabSvc },
                { key: true,  label: t.misc.tabWork },
              ].map(tab => (
                <button
                  key={String(tab.key)}
                  onClick={() => setShowWork(tab.key)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${showWork === tab.key ? "bg-[#1A1A1A] text-white shadow-sm" : "text-[#1A1A1A]/55 hover:text-[#1A1A1A]"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {showWork ? (
              /* Instagram work showcase */
              <motion.div key="work"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
                  {WORK_POSTS.map((post, i) => (
                    <motion.a
                      key={i}
                      {...stagger(i)}
                      href={SOCIAL.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-2xl bg-[#E8E5DF] aspect-square cursor-pointer block"
                    >
                      <img src={post.img} alt="Salon work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-400" />

                      {post.type === "reel" && (
                        <div className="absolute top-2.5 end-2.5">
                          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-1.5">
                            <Play className="w-3 h-3 text-white fill-white" />
                          </div>
                        </div>
                      )}

                      {/* Instagram-style hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
                          <Heart className="w-5 h-5 fill-white" /> {post.likes}
                        </div>
                      </div>

                      {/* Instagram watermark */}
                      <div className="absolute bottom-2.5 start-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                          <Instagram className="w-3 h-3 text-white" />
                          <span className="text-white text-[10px] font-medium">@friseur_danyar</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="text-center">
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-white px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity text-sm"
                    style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}
                  >
                    <Instagram className="w-5 h-5" />
                    {t.misc.followIG}
                  </a>
                </div>
              </motion.div>
            ) : (
              /* Service cards */
              <motion.div key="services"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              >
                {t.services.map((svc, i) => {
                  const Icon = SVC_ICONS[i];
                  return (
                    <motion.div key={svc.title} {...stagger(i)}
                      onClick={() => setSvcModal(i)}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
                    >
                      <div className="relative h-44 overflow-hidden bg-[#F5F5F5]">
                        <img src={SVC_IMGS[i]} alt={svc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-[#1A1A1A]/15 group-hover:bg-[#1A1A1A]/5 transition-colors duration-500" />
                        <div className="absolute top-3 start-3 bg-white/95 backdrop-blur-sm rounded-xl p-2.5 shadow-sm">
                          <Icon className="w-4 h-4 text-[#C9A227]" />
                        </div>
                        <div className="absolute bottom-3 end-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="bg-[#C9A227] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                            View Gallery →
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-lg font-semibold text-[#1A1A1A] mb-1.5">{svc.title}</h3>
                        <p className="text-[13px] text-[#1A1A1A]/52 leading-relaxed">{svc.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Service Gallery Modal ────────────────────────────────────────────── */}
      <AnimatePresence>
        {svcModal !== null && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSvcModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-7 md:p-9">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                      {t.services[svcModal].title}
                    </h3>
                    <p className="text-[#1A1A1A]/55 text-sm mt-2 leading-relaxed">{t.services[svcModal].desc}</p>
                  </div>
                  <button onClick={() => setSvcModal(null)}
                    className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors ms-4 flex-shrink-0">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="w-10 h-px bg-[#C9A227] my-5" />

                <div className="grid grid-cols-2 gap-3">
                  {SVC_GALLERY[svcModal].map((img, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.07 }}
                      className="rounded-xl overflow-hidden aspect-square bg-[#F5F5F5] group"
                    >
                      <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </motion.div>
                  ))}
                </div>

                <a href="#appointment" onClick={() => setSvcModal(null)}
                   className="mt-6 flex items-center justify-center gap-2 bg-[#1A1A1A] text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-[#C9A227] transition-colors duration-300">
                  {t.misc.bookSvc} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Team ────────────────────────────────────────────────────────────── */}
      <section id="team" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">{t.sl.team}</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-5">{t.sh.team}</h2>
            <p className="text-[#1A1A1A]/55 text-lg max-w-xl mx-auto leading-relaxed">{t.ss.team}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_NAMES.map((name, i) => (
              <motion.div key={name} {...stagger(i)} className="group text-center">
                <div className="relative mb-5 overflow-hidden rounded-2xl bg-[#F5F5F5] aspect-[3/4]">
                  <img src={TEAM_IMGS[i]} alt={`${name} – ${t.teamRoles[i].role}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="bg-[#C9A227] text-white text-xs px-3.5 py-1.5 rounded-full font-semibold">
                      {TEAM_YEARS[i]} {t.misc.exp}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-1">{name}</h3>
                <p className="text-[#C9A227] text-xs font-semibold tracking-wide uppercase mb-2.5">{t.teamRoles[i].role}</p>
                <p className="text-[13px] text-[#1A1A1A]/52 leading-relaxed">{t.teamRoles[i].desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
             style={{ background: "radial-gradient(circle at 20% 50%, #C9A227 0%, transparent 60%), radial-gradient(circle at 80% 20%, #C9A227 0%, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">{t.sl.whyus}</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">{t.sh.whyus}</h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto">{t.ss.whyus}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.reasons.map((r, i) => {
              const Icon = REASON_ICONS[i];
              return (
                <motion.div key={r.title} {...stagger(i)}
                  className="group bg-white/[0.05] border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.09] hover:border-[#C9A227]/35 transition-all duration-500">
                  <div className="w-12 h-12 bg-[#C9A227]/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C9A227]/25 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2.5">{r.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{r.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery ─────────────────────────────────────────────────────────── */}
      <section id="gallery" className="py-28 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">{t.sl.gallery}</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-5">{t.sh.gallery}</h2>
            <p className="text-[#1A1A1A]/55 text-lg max-w-xl mx-auto">{t.ss.gallery}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" style={{ gridAutoRows: "200px" }}>
            {GALLERY.map((item, i) => (
              <motion.div key={i} {...stagger(i)}
                className={`relative overflow-hidden rounded-2xl bg-[#E8E5DF] group cursor-pointer ${item.cls}`}>
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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

      {/* ── Testimonials ────────────────────────────────────────────────────── */}
      <section id="testimonials" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">{t.sl.testimonials}</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-5">{t.sh.testimonials}</h2>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <StarRow />
              <span className="text-2xl font-bold text-[#1A1A1A]">4.9</span>
              <span className="text-[#1A1A1A]/30 text-lg">·</span>
              <span className="text-[#1A1A1A]/55 text-sm">159 {t.misc.reviewsGoogle}</span>
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#F8F6F2] rounded-3xl px-10 py-12 md:px-16 md:py-14 text-center"
              >
                <div className="flex justify-center mb-4">
                  <StarRow count={t.testimonials[slide].rating} />
                </div>
                <blockquote className="font-serif text-xl md:text-2xl text-[#1A1A1A] leading-relaxed mb-8 italic">
                  &ldquo;{t.testimonials[slide].text}&rdquo;
                </blockquote>
                <div className="w-10 h-px bg-[#C9A227] mx-auto mb-5" />
                <p className="font-semibold text-[#1A1A1A]">{t.testimonials[slide].name}</p>
                <p className="text-[13px] text-[#1A1A1A]/45 mt-1">{t.testimonials[slide].date}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={() => setSlide(i => (i - 1 + t.testimonials.length) % t.testimonials.length)}
                className="w-10 h-10 rounded-full border border-[#1A1A1A]/15 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300 text-[#1A1A1A]/60">
                {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </button>
              <div className="flex gap-2 items-center">
                {t.testimonials.map((_, i) => (
                  <button key={i} onClick={() => setSlide(i)} aria-label={`Testimonial ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${i === slide ? "w-7 h-2 bg-[#C9A227]" : "w-2 h-2 bg-[#1A1A1A]/18"}`} />
                ))}
              </div>
              <button onClick={() => setSlide(i => (i + 1) % t.testimonials.length)}
                className="w-10 h-10 rounded-full border border-[#1A1A1A]/15 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300 text-[#1A1A1A]/60">
                {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Appointment ─────────────────────────────────────────────────────── */}
      <section id="appointment" className="py-28 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp()} className="lg:pt-4">
              <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">{t.sl.booking}</p>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">{t.sh.booking}</h2>
              <p className="text-[#1A1A1A]/55 text-lg mb-10 leading-relaxed">{t.ss.booking}</p>

              <div className="space-y-5 mb-10">
                {[
                  { Icon: Phone, text: "+49 511 123 456 78", href: "tel:+4951112345678" },
                  { Icon: MapPin, text: "Vahrenwalder Str. 140, 30165 Hannover" },
                  { Icon: Clock, text: "Mon–Sat 9:00–19:00  ·  Sun 10:00–16:00" },
                ].map(({ Icon, text, href }) => (
                  <div key={text} className="flex items-center gap-3.5">
                    <div className="w-9 h-9 bg-[#C9A227]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#C9A227]" />
                    </div>
                    {href ? (
                      <a href={href} className="text-sm text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors">{text}</a>
                    ) : (
                      <span className="text-sm text-[#1A1A1A]/70">{text}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Social media quick links */}
              <div className="flex gap-3">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-black/[0.1] text-sm text-[#1A1A1A] hover:border-[#C9A227]/50 hover:bg-[#C9A227]/5 transition-all">
                  <Instagram className="w-4 h-4 text-[#C9A227]" /> @friseur_danyar
                </a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-black/[0.1] text-sm text-[#1A1A1A] hover:border-[#C9A227]/50 hover:bg-[#C9A227]/5 transition-all">
                  <Facebook className="w-4 h-4 text-[#C9A227]" /> Facebook
                </a>
              </div>
            </motion.div>

            {/* Booking form */}
            <motion.div {...fadeUp(0.15)}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl p-10 shadow-sm text-center"
                  >
                    <div className="w-16 h-16 bg-[#C9A227]/15 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="w-8 h-8 fill-[#C9A227] text-[#C9A227]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-3">{t.booking.successTitle}</h3>
                    <p className="text-[#1A1A1A]/60 mb-8">{t.booking.successMsg}</p>
                    <button onClick={() => setSubmitted(false)}
                      className="bg-[#1A1A1A] text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#C9A227] transition-colors">
                      {t.misc.close}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl p-8 shadow-sm space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">{t.booking.nameL} *</label>
                        <input name="name" value={form.name} onChange={handleInput} placeholder={t.booking.ph_name} required
                          className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">{t.booking.phoneL}</label>
                        <input name="phone" value={form.phone} onChange={handleInput} placeholder={t.booking.ph_phone}
                          className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">{t.booking.emailL} *</label>
                      <input name="email" type="email" value={form.email} onChange={handleInput} placeholder={t.booking.ph_email} required
                        className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">{t.booking.serviceL}</label>
                        <select name="service" value={form.service} onChange={handleInput}
                          className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all appearance-none">
                          <option value="">{t.booking.chooseSvc}</option>
                          {t.services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">{t.booking.stylistL}</label>
                        <select name="stylist" value={form.stylist} onChange={handleInput}
                          className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all appearance-none">
                          <option value="">{t.booking.anyStylist}</option>
                          {TEAM_NAMES.map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">{t.booking.dateL}</label>
                        <input name="date" type="date" value={form.date} onChange={handleInput}
                          className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">{t.booking.timeL}</label>
                        <select name="time" value={form.time} onChange={handleInput}
                          className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all appearance-none">
                          <option value="">{t.booking.selTime}</option>
                          {["09:00","09:30","10:00","10:30","11:00","11:30","12:00","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00"].map(tm => (
                            <option key={tm} value={tm}>{tm}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#1A1A1A]/50 mb-2 uppercase tracking-wider">{t.booking.msgL}</label>
                      <textarea name="message" value={form.message} onChange={handleInput} placeholder={t.booking.ph_msg} rows={3}
                        className="w-full bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 border-2 border-transparent focus:border-[#C9A227] focus:bg-white focus:outline-none transition-all resize-none" />
                    </div>

                    <button type="submit" disabled={submitting}
                      className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl text-sm font-semibold tracking-wide hover:bg-[#C9A227] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-2 mt-1">
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>{t.booking.submitBtn} <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Location ────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase font-semibold mb-4">{t.sl.location}</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-5">{t.sh.location}</h2>
            <p className="text-[#1A1A1A]/55 text-lg max-w-xl mx-auto">{t.ss.location}</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <motion.div {...fadeUp()} className="lg:col-span-3 rounded-2xl overflow-hidden shadow-sm bg-[#F5F5F5] h-[460px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.0!2d9.73!3d52.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00b3d!2sVahrenwalder+Str.+140%2C+30165+Hannover!5e0!3m2!1sen!2sde!4v1700000000000"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Friseur Danyar Location"
              />
            </motion.div>

            <motion.div {...fadeUp(0.12)} className="lg:col-span-2 space-y-4">
              <div className="bg-[#F8F6F2] rounded-2xl p-6">
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-0.5">Friseur Danyar</h3>
                <p className="text-[#C9A227] text-xs font-semibold tracking-wide uppercase mb-5">{t.loc.inside}</p>
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A]">Vahrenwalder Str. 140</p>
                      <p className="text-sm text-[#1A1A1A]/55">30165 Hannover, Germany</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                    <a href="tel:+4951112345678" className="text-sm text-[#1A1A1A] hover:text-[#C9A227] transition-colors font-medium">+49 511 123 456 78</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                    <a href="mailto:info@friseur-danyar.de" className="text-sm text-[#1A1A1A] hover:text-[#C9A227] transition-colors">info@friseur-danyar.de</a>
                  </div>
                  {/* Social links */}
                  <div className="flex gap-2 pt-1">
                    <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 bg-white border border-black/[0.08] rounded-xl px-3 py-2 text-xs font-medium text-[#1A1A1A] hover:border-[#C9A227]/50 hover:text-[#C9A227] transition-all">
                      <Instagram className="w-3.5 h-3.5" /> Instagram
                    </a>
                    <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1.5 bg-white border border-black/[0.08] rounded-xl px-3 py-2 text-xs font-medium text-[#1A1A1A] hover:border-[#C9A227]/50 hover:text-[#C9A227] transition-all">
                      <Facebook className="w-3.5 h-3.5" /> Facebook
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F6F2] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-[#C9A227]" />
                  <h4 className="font-semibold text-[#1A1A1A] text-sm">{t.loc.hours}</h4>
                </div>
                <div className="space-y-2.5 text-sm">
                  {[
                    { day: t.loc.monFri, hours: "09:00 – 19:00" },
                    { day: t.loc.sat,    hours: "09:00 – 18:00" },
                    { day: t.loc.sun,    hours: "10:00 – 16:00" },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="text-[#1A1A1A]/55">{day}</span>
                      <span className="text-[#1A1A1A] font-semibold text-xs bg-white px-2.5 py-1 rounded-lg">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-[#C9A227]/10 border border-[#C9A227]/20 rounded-2xl p-4">
                <StarRow />
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">{t.loc.rating}</p>
                  <p className="text-xs text-[#1A1A1A]/50">{t.loc.reviews}</p>
                </div>
              </div>

              <a href="https://maps.google.com/?q=Vahrenwalder+Str.+140,+30165+Hannover"
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 w-full bg-[#1A1A1A] text-white py-4 rounded-xl text-sm font-semibold hover:bg-[#C9A227] transition-colors duration-300">
                <MapPin className="w-4 h-4" /> {t.loc.dir}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">

            <div className="md:col-span-1">
              <div className="mb-5">
                <span className="block text-2xl font-serif font-bold">Friseur</span>
                <span className="block text-[10px] tracking-[0.35em] text-[#C9A227] uppercase font-semibold">Danyar</span>
              </div>
              <p className="text-sm text-white/45 leading-relaxed mb-6">{t.footer.tagline}</p>
              <div className="flex gap-3">
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                   className="w-9 h-9 bg-white/[0.08] rounded-full flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                   className="w-9 h-9 bg-white/[0.08] rounded-full flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-6">{t.footer.links}</h4>
              <ul className="space-y-3">
                {t.footer.navLinks.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-[#C9A227] transition-colors duration-200">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-6">{t.footer.hours}</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between gap-4 text-white/60"><span>{t.loc.monFri}</span><span className="text-white/80">09:00–19:00</span></li>
                <li className="flex justify-between gap-4 text-white/60"><span>{t.loc.sat}</span><span className="text-white/80">09:00–18:00</span></li>
                <li className="flex justify-between gap-4 text-white/60"><span>{t.loc.sun}</span><span className="text-white/80">10:00–16:00</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-6">{t.footer.contact}</h4>
              <ul className="space-y-3.5 text-sm text-white/60">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <span>Vahrenwalder Str. 140<br />30165 Hannover</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                  <a href="tel:+4951112345678" className="hover:text-[#C9A227] transition-colors">+49 511 123 456 78</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                  <a href="mailto:info@friseur-danyar.de" className="hover:text-[#C9A227] transition-colors">info@friseur-danyar.de</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A227] transition-colors">@friseur_danyar</a>
                </li>
              </ul>

              <div className="mt-5 flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-xl p-3">
                <StarRow size="xs" />
                <span className="text-xs text-white/55">4.9 · 159+ {t.misc.reviewsGoogle}</span>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <p>© {new Date().getFullYear()} Friseur Danyar · Hannover · {t.footer.copy}</p>
            <p>Vahrenwalder Str. 140, 30165 Hannover</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button — opens a chat pre-filled with a booking message */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.misc.waMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.misc.waLabel}
        title={t.misc.waLabel}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-transform"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>

    </div>
  );
}
