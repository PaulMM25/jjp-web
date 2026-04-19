"use client";

import React, { useEffect, useState } from "react";
import {
  Mail,
  Shield,
  Cpu,
  HardHat,
  Heart,
  BadgeCheck,
  ScrollText,
  Target,
} from "lucide-react";

const translations = {
  es: {
    nav: ["Inicio", "Nosotros", "Servicios", "Valores", "Contacto"],
    contactBtn: "Contáctenos",
    heroBadge: "Petróleo y Gas · Venezuela",
    heroTitle1: "Impulsando la",
    heroAccent: "Eficiencia",
    heroTitle2: "y la Seguridad en las Operaciones de Petróleo y Gas",
    heroSubtitle:
      "Transformación digital industrial, equipos de seguridad y servicios especializados para operaciones exigentes.",
    heroCta: "Enviar Correo",
    aboutEyebrow: "Sobre JJP",
    aboutTitle: "El factor humano en el centro de cada operación.",
    mission: "Misión",
    missionText:
      "Suministrar soluciones integrales en equipos de protección personal y servicios técnicos especializados para la industria petrolera, garantizando la seguridad de la fuerza laboral y la eficiencia operativa de nuestros clientes a través de productos de alta calidad, cumplimiento normativo y un acompañamiento experto en campo.",
    missionQuote:
      "Entendemos la importancia del factor humano en la operación petrolera y aseguramos la entrega oportuna de nuestros implementos y servicios.",
    visionTag: "2030",
    visionText: "Visión estratégica para el sector energético",
    servicesEyebrow: "Qué hacemos",
    servicesTitle1: "Tres pilares de",
    servicesAccent: "excelencia industrial.",
    servicesSubtitle:
      "Desde la inteligencia impulsada por IIoT hasta equipos de protección certificados: soluciones diseñadas para los entornos más exigentes de petróleo y gas.",
    serviceItems: [
      {
        small: "IIOT",
        title: "Transformación Digital Industrial",
        bullets: [
          "Sistemas de monitoreo en tiempo real",
          "Mantenimiento predictivo",
          "Optimización de eficiencia operativa",
        ],
      },
      {
        small: "Seguridad",
        title: "Monitoreo y Detección de Gases",
        bullets: [
          "Sensores industriales de gases",
          "Sistemas de detección de riesgo",
          "Soluciones de monitoreo para seguridad operacional",
        ],
      },
      {
        small: "EPP",
        title: "Equipos de Protección Industrial",
        bullets: [
          "Equipos certificados",
          "Cumplimiento ANSI, ISO y OSHA",
          "Protección para fuerza laboral crítica",
        ],
      },
    ],
    valuesEyebrow: "Nuestros valores",
    valuesTitle1: "Principios que resisten",
    valuesAccent: "bajo presión.",
    values: [
      {
        title: "Compromiso con la Vida",
        text: "La seguridad no es una opción, es nuestro propósito central.",
      },
      {
        title: "Excelencia Operativa",
        text: "Entregamos lo prometido, donde y cuando la operación lo requiera.",
      },
      {
        title: "Integridad Técnica",
        text: "Operamos bajo estrictos estándares internacionales (ANSI, ISO, OSHA).",
      },
    ],
    contactEyebrow: "Hablemos",
    contactTitle1: "Póngase en",
    contactAccent: "Contacto",
    contactText:
      "¿Listo para mejorar sus operaciones? Contacte a nuestro equipo y construyamos instalaciones más seguras e inteligentes.",
    footer: "Soluciones industriales para operaciones más seguras e inteligentes",
  },
  en: {
    nav: ["Home", "About", "Services", "Values", "Contact"],
    contactBtn: "Contact Us",
    heroBadge: "Oil & Gas · Venezuela",
    heroTitle1: "Driving",
    heroAccent: "Efficiency",
    heroTitle2: "and Safety in Oil & Gas Operations",
    heroSubtitle:
      "Industrial digital transformation, safety equipment, and specialized services for demanding operations.",
    heroCta: "Send Email",
    aboutEyebrow: "About JJP",
    aboutTitle: "The human factor at the center of every operation.",
    mission: "Mission",
    missionText:
      "To provide integrated solutions in personal protective equipment and specialized technical services for the oil industry, ensuring workforce safety and operational efficiency through high-quality products, regulatory compliance, and expert field support.",
    missionQuote:
      "We understand the importance of the human factor in oil operations and ensure timely delivery of our equipment and services.",
    visionTag: "2030",
    visionText: "Strategic vision for the energy sector",
    servicesEyebrow: "What we do",
    servicesTitle1: "Three pillars of",
    servicesAccent: "industrial excellence.",
    servicesSubtitle:
      "From IIoT-driven intelligence to certified protection equipment: solutions built for the most demanding oil and gas environments.",
    serviceItems: [
      {
        small: "IIOT",
        title: "Industrial Digital Transformation",
        bullets: [
          "Real-time monitoring systems",
          "Predictive maintenance",
          "Operational efficiency optimization",
        ],
      },
      {
        small: "Safety",
        title: "Gas Monitoring and Detection",
        bullets: [
          "Industrial gas sensors",
          "Hazard detection systems",
          "Operational safety monitoring solutions",
        ],
      },
      {
        small: "PPE",
        title: "Industrial Protection Equipment",
        bullets: [
          "Certified safety equipment",
          "ANSI, ISO and OSHA compliance",
          "Protection for critical workforce",
        ],
      },
    ],
    valuesEyebrow: "Our values",
    valuesTitle1: "Principles that hold",
    valuesAccent: "under pressure.",
    values: [
      {
        title: "Commitment to Life",
        text: "Safety is not optional; it is our core purpose.",
      },
      {
        title: "Operational Excellence",
        text: "We deliver what we promise, where and when operations require it.",
      },
      {
        title: "Technical Integrity",
        text: "We operate under strict international standards (ANSI, ISO, OSHA).",
      },
    ],
    contactEyebrow: "Let’s talk",
    contactTitle1: "Get in",
    contactAccent: "Touch",
    contactText:
      "Ready to improve your operations? Contact our team and let’s build safer, smarter facilities.",
    footer: "Industrial solutions for safer and smarter operations",
  },
};

export default function JJPLandingPage() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const saved = localStorage.getItem("jjp-lang");
    if (saved === "en" || saved === "es") {
      setLang(saved);
    }
  }, []);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("jjp-lang", newLang);
  };

  const t = translations[lang] || translations.es;

  const links = [
    { id: "inicio", label: t.nav[0] },
    { id: "nosotros", label: t.nav[1] },
    { id: "servicios", label: t.nav[2] },
    { id: "valores", label: t.nav[3] },
    { id: "contacto", label: t.nav[4] },
  ];

  return (
    <div className="bg-[#edf1f5] text-[#0b1f61] scroll-smooth font-[Inter]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        .font-display { font-family: 'Manrope', sans-serif; }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.9s ease-out forwards;
        }

        .animate-fade-up-delayed {
          opacity: 0;
          animation: fadeUp 0.9s ease-out 0.2s forwards;
        }

        .animate-fade-up-more-delayed {
          opacity: 0;
          animation: fadeUp 0.9s ease-out 0.4s forwards;
        }
      `}</style>

      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#081f62] text-2xl font-extrabold text-white font-display">
              JJP
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl font-extrabold tracking-tight text-[#0b1f61]">
                JJP <span className="text-[#ff6500]">SUPPLIER</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Services
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-10 text-[18px] font-semibold text-slate-800 lg:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="transition hover:text-[#ff6500]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-xl border border-slate-300 bg-white p-1">
              <button
                type="button"
                onClick={() => changeLanguage("en")}
                aria-pressed={lang === "en"}
                className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-bold transition ${
                  lang === "en"
                    ? "bg-[#ff6500] text-black shadow-sm"
                    : "text-slate-500 hover:text-[#0b1f61]"
                }`}
              >
                EN
              </button>

              <div className="mx-1 h-6 w-px bg-slate-300" />

              <button
                type="button"
                onClick={() => changeLanguage("es")}
                aria-pressed={lang === "es"}
                className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-bold transition ${
                  lang === "es"
                    ? "bg-[#ff6500] text-black shadow-sm"
                    : "text-slate-500 hover:text-[#0b1f61]"
                }`}
              >
                ES
              </button>
            </div>

            <a
              href="mailto:info@jjpsuppliersservices.com"
              className="inline-flex items-center gap-3 rounded-xl bg-[#ff6500] px-6 py-4 text-lg font-bold text-black shadow-[0_10px_30px_rgba(255,101,0,0.18)] transition hover:-translate-y-0.5"
            >
              <Mail className="h-5 w-5" />
              {t.contactBtn}
            </a>
          </div>
        </div>
      </header>

      <section
        id="inicio"
        className="relative min-h-screen overflow-hidden bg-[#07153f] pt-32 text-white"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-85"
          style={{ backgroundImage: "url('/hero-refinery.jpg')" }}
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,101,0,0.16),transparent_30%),linear-gradient(180deg,rgba(7,21,63,0.15),rgba(7,21,63,0.45))]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10">
          <div className="mb-10 inline-flex items-center rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-200 backdrop-blur">
            <Shield className="mr-3 h-4 w-4 text-[#ff6500]" />
            {t.heroBadge}
          </div>

          <h1 className="font-display animate-fade-up max-w-5xl text-6xl font-extrabold leading-[0.95] tracking-tight md:text-7xl xl:text-[6.3rem]">
            {t.heroTitle1}{" "}
            <span className="text-[#ff6500]">{t.heroAccent}</span>{" "}
            {t.heroTitle2}
          </h1>

          <div className="mt-8 h-1.5 w-48 rounded-full bg-[#ff6500]" />

          <p className="animate-fade-up-delayed mt-10 max-w-3xl text-2xl leading-relaxed text-slate-200">
            {t.heroSubtitle}
          </p>

          <div className="animate-fade-up-more-delayed mt-10">
            <a
              href="mailto:info@jjpsuppliersservices.com"
              className="inline-flex items-center gap-3 rounded-xl bg-[#ff6500] px-7 py-4 text-lg font-bold text-black shadow-[0_12px_30px_rgba(255,101,0,0.2)]"
            >
              <Mail className="h-5 w-5" />
              {t.heroCta}
            </a>
          </div>
        </div>
      </section>

      <section id="nosotros" className="bg-[#edf1f5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-1 w-12 bg-[#ff6500]" />
            <span className="text-lg font-bold uppercase tracking-[0.35em] text-[#ff6500]">
              {t.aboutEyebrow}
            </span>
          </div>

          <h2 className="font-display max-w-5xl text-6xl font-extrabold leading-[1] tracking-tight text-[#0b1f61] md:text-7xl">
            {t.aboutTitle}
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_1.45fr]">
            <div className="relative">
              <img
                src="/about-jjp.jpg"
                alt="JJP industrial team"
                className="h-[360px] w-full rounded-2xl object-cover shadow-sm"
              />
              <div className="absolute -bottom-8 right-0 rounded-2xl bg-[#ff6500] px-8 py-6 text-black shadow-[0_14px_30px_rgba(255,101,0,0.25)] md:right-4">
                <div className="font-display text-5xl font-extrabold leading-none">
                  {t.visionTag}
                </div>
                <div className="mt-3 max-w-[180px] text-xl font-black uppercase leading-tight">
                  {t.visionText}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#081f62] text-[#ff6500]">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="font-display text-5xl font-extrabold tracking-tight">
                  {t.mission}
                </h3>
              </div>

              <p className="text-2xl leading-relaxed text-slate-700">
                {t.missionText}
              </p>

              <div className="mt-10 border-l-2 border-[#ff6500] pl-6 text-2xl italic leading-relaxed text-slate-600">
                {t.missionQuote}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-[#081f62] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-1 w-12 bg-[#ff6500]" />
            <span className="text-lg font-bold uppercase tracking-[0.35em] text-[#ff6500]">
              {t.servicesEyebrow}
            </span>
          </div>

          <h2 className="font-display max-w-5xl text-6xl font-extrabold leading-[1] tracking-tight md:text-7xl">
            {t.servicesTitle1}{" "}
            <span className="text-[#ff6500]">{t.servicesAccent}</span>
          </h2>

          <p className="mt-10 max-w-4xl text-2xl leading-relaxed text-slate-300">
            {t.servicesSubtitle}
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {t.serviceItems.map((item, idx) => {
              const Icon = idx === 0 ? Cpu : idx === 1 ? Shield : HardHat;
              return (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-10 backdrop-blur"
                >
                  <div className="font-display absolute right-8 top-8 text-7xl font-black text-white/10">
                    0{idx + 1}
                  </div>
                  <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-xl bg-[#ff6500] text-black">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="mb-5 text-sm font-extrabold uppercase tracking-[0.35em] text-[#ff6500]">
                    {item.small}
                  </div>
                  <h3 className="font-display max-w-xs text-4xl font-extrabold leading-tight">
                    {item.title}
                  </h3>
                  <ul className="mt-8 space-y-4 text-xl leading-relaxed text-slate-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-6 shrink-0 rounded-full bg-[#ff6500]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="valores" className="bg-[#edf1f5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-1 w-12 bg-[#ff6500]" />
            <span className="text-lg font-bold uppercase tracking-[0.35em] text-[#ff6500]">
              {t.valuesEyebrow}
            </span>
          </div>

          <h2 className="font-display max-w-5xl text-6xl font-extrabold leading-[1] tracking-tight md:text-7xl">
            {t.valuesTitle1}{" "}
            <span className="text-[#ff6500]">{t.valuesAccent}</span>
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[Heart, BadgeCheck, ScrollText].map((Icon, idx) => (
              <div
                key={t.values[idx].title}
                className="relative rounded-2xl border border-slate-200 bg-white p-12 shadow-sm"
              >
                <div className="font-display absolute right-8 top-8 text-4xl font-black text-slate-300">
                  0{idx + 1}
                </div>
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-xl bg-[#081f62] text-[#ff6500]">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-4xl font-extrabold leading-tight text-[#0b1f61]">
                  {t.values[idx].title}
                </h3>
                <p className="mt-8 text-2xl italic leading-relaxed text-slate-600">
                  “{t.values[idx].text}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="relative overflow-hidden bg-[#07153f] py-28 text-white"
      >
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:38px_38px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,101,0,0.2),transparent_25%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="mb-8 text-lg font-bold uppercase tracking-[0.35em] text-[#ff6500]">
            {t.contactEyebrow}
          </div>
          <h2 className="font-display text-6xl font-extrabold leading-none tracking-tight md:text-7xl xl:text-[6rem]">
            {t.contactTitle1}{" "}
            <span className="text-[#ff6500]">{t.contactAccent}</span>
          </h2>
          <p className="mx-auto mt-10 max-w-4xl text-2xl leading-relaxed text-slate-200">
            {t.contactText}
          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-8 md:flex-row">
            <a
              href="mailto:info@jjpsuppliersservices.com"
              className="inline-flex items-center gap-3 rounded-xl bg-[#ff6500] px-10 py-5 text-2xl font-bold text-black shadow-[0_15px_35px_rgba(255,101,0,0.2)] transition hover:-translate-y-0.5"
            >
              <Mail className="h-6 w-6" />
              {t.heroCta}
              <span className="text-3xl">→</span>
            </a>
            <a
              href="mailto:info@jjpsuppliersservices.com"
              className="text-2xl underline decoration-white/30 underline-offset-8"
            >
              info@jjpsuppliersservices.com
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#081f62] px-6 py-8 text-center text-lg text-slate-300">
        <div className="mx-auto max-w-7xl">
          <div className="font-bold text-white">JJP Supplier Services</div>
          <div className="mt-2">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}