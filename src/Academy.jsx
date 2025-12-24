import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Users,
  CalendarRange,
  Clock,
  Star,
  ChevronDown,
  GraduationCap,
  Sparkles,
  MessageCircle,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo  from  "./logo.png";
gsap.registerPlugin(ScrollTrigger);

const PRIMARY = "#23b5b5";
const PRIMARY_LIGHT = "#40c7c7";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: custom },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const FALLBACK_COHORTS = [
  {
    id: 1,
    title: "Product Builder Sprint",
    level: "Beginner–Intermediate",
    date: "12 Dec • 6 weeks",
    seats: "8 seats left",
    track: "Product",
  },
  {
    id: 2,
    title: "Design Systems Lab",
    level: "All levels",
    date: "5 Jan • 4 weeks",
    seats: "14 seats left",
    track: "Design",
  },
  {
    id: 3,
    title: "AI for Makers",
    level: "Intermediate",
    date: "20 Jan • 5 weeks",
    seats: "Early access",
    track: "AI",
  },
];

const mentors = [
  {
    name: "Aarav Mehta",
    role: "Senior Product Manager • SaaS",
  },
  {
    name: "Sofia Rao",
    role: "Lead UX Designer • Fintech",
  },
  {
    name: "Kabir Shah",
    role: "AI Engineer • Startup",
  },
];

const testimonials = [
  {
    name: "Megha",
    role: "Product Designer",
    quote:
      "The cohort structure and weekly reviews forced me to ship. I got my first product role right after graduating.",
  },
  {
    name: "Rohan",
    role: "Indie Maker",
    quote:
      "Loved the mix of live sessions + async tasks. The mentor feedback was brutal but super helpful.",
  },
];

const CohortLanding = () => {
  const [cohorts] = React.useState(FALLBACK_COHORTS);

  const heroRef = React.useRef(null);
  const heroInnerRef = React.useRef(null);
  const glowLeftRef = React.useRef(null);
  const glowRightRef = React.useRef(null);
  const howRef = React.useRef(null);
  const upcomingRef = React.useRef(null);
  const mentorsRef = React.useRef(null);
  const alumniRef = React.useRef(null);

  const [heroLoaded, setHeroLoaded] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setHeroLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const heroInner = heroInnerRef.current;
      const heroSection = heroRef.current;
      const glowLeft = glowLeftRef.current;
      const glowRight = glowRightRef.current;
      const howEl = howRef.current;
      const upcomingEl = upcomingRef.current;
      const mentorsEl = mentorsRef.current;
      const alumniEl = alumniRef.current;

      // Hero zoom / move
      if (heroInner && heroSection) {
        gsap.fromTo(
          heroInner,
          { scale: 1, y: 0 },
          {
            scale: 0.9,
            y: -80,
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
            ease: "none",
          }
        );
      }

      // Glows parallax
      if (glowLeft && heroSection) {
        gsap.to(glowLeft, {
          y: 60,
          x: -40,
          scale: 1.1,
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          ease: "none",
        });
      }

      if (glowRight && heroSection) {
        gsap.to(glowRight, {
          y: -80,
          x: 40,
          scale: 1.15,
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          ease: "none",
        });
      }

      // Section reveals
      [howEl, upcomingEl, mentorsEl, alumniEl].forEach((section) => {
        if (!section) return;
        gsap.fromTo(
          section,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          }
        );
      });

      // Upcoming cohorts stagger
      if (upcomingEl) {
        const cards = upcomingEl.querySelectorAll("[data-cohort-card]");
        if (cards.length) {
          gsap.fromTo(
            cards,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: upcomingEl,
                start: "top 80%",
              },
            }
          );
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#020617] text-slate-100">
      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          ref={glowLeftRef}
          className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#23b5b5]/25 blur-3xl"
        />
        <div
          ref={glowRightRef}
          className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#40c7c7]/25 blur-3xl"
        />
      </div>

      {/* HERO */}
      <main
        ref={heroRef}
        className="relative z-10 flex h-screen w-full items-stretch justify-center"
      >
        <div
          ref={heroInnerRef}
          className="flex h-full w-full rounded-none border border-slate-800 bg-slate-950/80 shadow-[0_28px_100px_rgba(15,23,42,0.8)] backdrop-blur-md sm:rounded-[24px] lg:rounded-[32px]"
        >
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col gap-6 px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 lg:px-10 lg:py-8">
            {/* NAVBAR */}
            <header className="flex items-center justify-between gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                      <a
      href="https://explified.com"

      rel="noopener noreferrer"
      className="text-[13px] font-medium tracking-wide"
      style={{ color: "#1B8F8F" }}
    ><img
                      src={logo} // or imported logo variable
                      alt="Logo"
                      className="w-8 h-8 object-contain"
                    /></a>
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500 md:text-xs">
                    Cohort
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    Atlas Academy
                  </p>
                </div>
              </div>

    

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  className="group flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-[0_0_20px_rgba(35,181,181,0.6)] transition hover:-translate-y-0.5 sm:px-4 sm:py-2 sm:text-xs sm:shadow-[0_0_30px_rgba(35,181,181,0.8)]"
                  style={{
                    background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_LIGHT})`,
                  }}
              
                >
                  Login
                  <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition group-hover:translate-x-0.5" />
                </button>
              </div>
            </header>

            {/* HERO CONTENT */}
            <section className="flex flex-1 flex-col gap-6 py-2 sm:py-4 lg:py-6">
              <div className="grid flex-1 items-center gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-8 lg:gap-10">
                {/* LEFT TEXT */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate={heroLoaded ? "visible" : "hidden"}
                  className="space-y-4 sm:space-y-5 md:space-y-6"
                >
                  <motion.div
                    variants={fadeUp}
                    custom={0}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] sm:px-4 sm:py-2 sm:text-xs"
                  >
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-semibold uppercase text-slate-950 sm:h-6 sm:w-6"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      New
                    </span>
                    <span className="text-slate-300">
                      Live cohort-based academy • Next batch in 7 days
                    </span>
                  </motion.div>

                  <motion.h1
                    variants={fadeUp}
                    custom={0.1}
                    className="text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    Master real skills
                    <br />
                    <span style={{ color: PRIMARY }}>with live cohorts</span>
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    custom={0.2}
                    className="max-w-xl text-[13px] leading-relaxed text-slate-400 sm:text-sm md:text-base"
                  >
                    Atlas Academy is a cohort-based learning platform for
                    ambitious builders. Learn in small batches, work on
                    production-grade projects, and graduate with a portfolio
                    that actually gets you interviews.
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    custom={0.3}
                    className="flex flex-wrap items-center gap-3 sm:gap-4"
                  >
                    <button
                      className="group flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-[0_0_20px_rgba(35,181,181,0.6)] transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(35,181,181,0.9)] sm:px-6 sm:py-3 sm:text-xs"
                      style={{
                        background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_LIGHT})`,
                      }}
                     
                    >
                      Coming soon
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition group-hover:translate-x-1" />
                    </button>

                    
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    custom={0.4}
                    className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 sm:gap-6 sm:text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {["AK", "SK", "MJ", "+"].map((label) => (
                          <div
                            key={label}
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-900 bg-slate-800 text-[9px] font-semibold text-slate-100 shadow sm:h-7 sm:w-7 sm:text-[10px]"
                          >
                            {label}
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-slate-100 sm:text-xs">
                          4,200+ academy alumni
                        </p>
                        <p className="text-[10px] text-slate-500 sm:text-[11px]">
                          From students to senior professionals
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-semibold text-slate-100 sm:text-sm">
                        4.9/5
                      </span>
                      <span className="text-[10px] text-slate-500 sm:text-[11px]">
                        average cohort rating
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* RIGHT VISUAL */}
                <div className="relative flex min-h-[220px] items-center justify-center sm:min-h-[260px]">
                  <motion.div
                    initial={{ opacity: 0, x: 40, rotate: 2 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      rotate: 0,
                      transition: {
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    className="relative w-full max-w-xs overflow-hidden rounded-[22px] border border-slate-700 bg-slate-900 p-3 text-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.9)] sm:max-w-sm sm:p-4 sm:rounded-[26px]"
                  >
                    <div
                      className="relative h-36 overflow-hidden rounded-2xl sm:h-44"
                      style={{
                        background: `radial-gradient(circle at top, ${PRIMARY_LIGHT} 0, ${PRIMARY} 45%, #020617 100%)`,
                      }}
                    >
                      <motion.div
                        animate={{ y: [0, -14, 0] }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -bottom-3 left-8 hidden h-32 w-32 rounded-[90px] bg-white/5 backdrop-blur md:block"
                      />
                      <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        className="absolute -bottom-10 right-0 h-40 w-32 rotate-3 rounded-[90px] bg-gradient-to-t from-slate-950 via-slate-900 to-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.9)] sm:h-52 sm:w-40"
                      />
                      <motion.div
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-50 sm:left-4 sm:top-4 sm:text-[11px]"
                      >
                        Live project review
                      </motion.div>
                    </div>

                    <div className="mt-3 space-y-2 text-[11px] sm:mt-4 sm:space-y-3 sm:text-xs">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500 sm:text-[11px]">
                            Featured Cohort
                          </p>
                          <p className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                            Ship a production-ready project in 6 weeks
                          </p>
                        </div>
                        <button
                          className="rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-950 sm:px-3 sm:text-[10px]"
                          style={{ backgroundColor: PRIMARY }}
                        >
                          Beginner
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-2 text-[10px] text-slate-400 sm:text-[11px]">
                        <div className="flex items-center gap-1.5">
                          <CalendarRange className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          <span>Starts 12 Dec</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          <span>3x / week • 90 mins</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-1 sm:pt-2">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-1">
                            <div className="h-5 w-5 rounded-full border border-slate-900 bg-slate-700 sm:h-6 sm:w-6" />
                            <div className="h-5 w-5 rounded-full border border-slate-900 bg-slate-600 sm:h-6 sm:w-6" />
                            <div className="h-5 w-5 rounded-full border border-slate-900 bg-slate-500 sm:h-6 sm:w-6" />
                          </div>
                          <span className="text-[10px] text-slate-400 sm:text-[11px]">
                            32/40 seats filled
                          </span>
                        </div>
                    
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating card */}
                  <motion.div
                    initial={{ opacity: 0, x: 40, y: -10 }}
                    animate={{
                      opacity: 1,
                      x: 20,
                      y: -30,
                      transition: { delay: 0.6, duration: 0.8 },
                    }}
                    whileHover={{ y: -40, scale: 1.03 }}
                    className="absolute right-1 top-2 hidden w-40 rounded-2xl border border-slate-700 bg-slate-900 p-3 text-[11px] shadow-2xl sm:block"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Next live class
                    </p>
                    <p className="mt-1 text-[13px] font-semibold text-slate-50">
                      Weekly mentor AMA
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Saturday • 8 PM</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        24 live
                      </span>
                    </div>
          
                  </motion.div>
                </div>
              </div>

              {/* Scroll hint */}
              <div className="mt-2 flex items-center justify-center text-[10px] uppercase tracking-[0.3em] text-slate-500 sm:text-[11px]">
                <div className="flex items-center gap-2">
                  <span>Scroll to explore cohorts</span>
                  <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* SECTION 1 – How it works */}
      <section
        ref={howRef}
        className="relative z-10 mx-auto mt-10 max-w-6xl rounded-3xl border border-slate-800 bg-slate-950/70 px-4 py-7 shadow-[0_18px_60px_rgba(15,23,42,0.8)] backdrop-blur-md sm:mt-12 sm:px-6 sm:py-8 lg:px-10 lg:py-10"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="flex items-center gap-2 text-lg font-semibold text-slate-50 sm:text-xl lg:text-2xl"
          >
            <Sparkles
              style={{ color: PRIMARY }}
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            How the cohort academy works
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className="mt-2 max-w-2xl text-sm text-slate-400"
          >
            Every program is structured as a 4–8 week sprint with weekly goals,
            peer pods, and live mentor sessions. No passive watching — the whole
            academy is built around building.
          </motion.p>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:gap-5 md:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Live workshops",
              desc: "Interactive sessions twice a week to learn core concepts and frameworks.",
            },
            {
              icon: Users,
              title: "Peer pods",
              desc: "Small groups of 8–12 learners keeping each other accountable.",
            },
            {
              icon: MessageCircle,
              title: "Hands-on feedback",
              desc: "Mentors review your work and give brutal but honest feedback.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={0.15 + idx * 0.08}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm shadow-sm transition hover:border-slate-600 hover:bg-slate-900 sm:p-5"
            >
              <div
                className="mb-3 inline-flex rounded-full p-2 shadow-sm"
                style={{ backgroundColor: `${PRIMARY}20`, color: PRIMARY }}
              >
                <item.icon className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-50">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-slate-400 group-hover:text-slate-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2 – Upcoming cohorts */}
      <section
        ref={upcomingRef}
        className="relative z-10 mx-auto mt-10 max-w-6xl px-4 sm:mt-12 sm:px-6 lg:px-20"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl lg:text-2xl">
              Upcoming cohorts
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Pick a track and join a batch that fits your schedule.
            </p>
          </div>
       
        </div>

        <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {cohorts.map((cohort) => (
            <div
              key={cohort.id}
              data-cohort-card
              className="flex translate-y-10 flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/90 p-4 text-sm opacity-0 shadow-sm transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-lg sm:p-5"
            >
              <div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: PRIMARY }}
                >
                  {cohort.track || "Cohort"}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-50">
                  {cohort.title}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {cohort.level || "All levels"}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  {cohort.date || "Dates TBA"}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  {cohort.seats || "Applications open"}
                </span>
              
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 – Mentors */}
      <section
        ref={mentorsRef}
        className="relative z-10 mx-auto mt-12 max-w-6xl rounded-3xl border border-slate-800 bg-slate-950/70 px-4 py-7 shadow-[0_18px_60px_rgba(15,23,42,0.8)] sm:px-6 sm:py-8 lg:px-10 lg:py-10"
      >
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl lg:text-2xl">
              Learn from practitioners, not just instructors
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              Every mentor at Atlas Academy actively works in the industry —
              from high-growth startups to global companies.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-400 sm:text-xs">
            <Users className="h-4 w-4" />
            <span>Mentor-to-learner ratio ≈ 1:12</span>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m, idx) => (
            <div
              key={m.name}
              className="group rounded-2xl border border-slate-800 bg-slate-900/90 p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-md sm:p-5"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-slate-950 sm:h-10 sm:w-10 sm:text-sm shadow-[0_0_20px_rgba(35,181,181,0.6)]"
                  style={{
                    background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_LIGHT})`,
                  }}
                >
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-50">
                    {m.name}
                  </p>
                  <p className="text-[11px] text-slate-400">{m.role}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-400 group-hover:text-slate-300">
                Mentors host weekly office hours, deep-dive critiques and help
                you unblock your projects.
              </p>
              <p className="mt-3 text-[11px] text-slate-500">
                Mentor for cohort #{idx + 1}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 – Alumni stories */}
      <section
        ref={alumniRef}
        className="relative z-10 mx-auto mt-12 mb-16 max-w-6xl px-4 sm:px-6 lg:px-20"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl lg:text-2xl">
              Alumni stories
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Real outcomes from people who went through the cohorts.
            </p>
          </div>
          <span className="text-[11px] text-slate-500 sm:text-xs">
            70% of graduates report a role change within 6 months
          </span>
        </div>

        <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl border border-slate-800 bg-slate-900/90 p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-lg sm:p-5"
            >
              <p className="text-xs leading-relaxed text-slate-300">
                “{t.quote}”
              </p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-slate-50">{t.name}</p>
                  <p className="text-[11px] text-slate-400">{t.role}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  <span>Verified learner</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
     <footer className="bg-black pt-16 pb-8 border-t border-white/10 text-sm w-full">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {/* Top link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-gray-400">
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://labs.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Labs
                  </a>
                </li>
                <li>
                  <a
                    href="https://stream.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Stream
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Developer
                  </a>
                </li>
                <li>
                  <a
                    href="https://affiliate.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Affiliate
                  </a>
                </li>
                <li>
                  <a
                    href="https://beacon.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Beacon
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://notes.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Notes
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/quickshot/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    QuickShot
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/youtube-summarizer/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Youtube Summariser
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/yt-insight-saas/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    YT Insight
                  </a>
                </li>
                <li>
                  <a
                    href="https://expli.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Expli
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://explified.com/blog/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/our-projects/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Our Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://community.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="https://academy.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Academy
                  </a>
                </li>
                <li>
                  <a
                    href="https://events.explified.com/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://explified.com/about-us/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/partners/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/terms-of-service/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/privacy-policy/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://explified.com/refund-terms/"
                    className="hover:text-[#23b5b5] transition-colors"
                  >
                    Refund Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom row */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6  flex items-center justify-center">
                <img
                      src={logo} // or imported logo variable
                      alt="Logo"
                      className="w-8 h-8 object-contain"
                    />
              </div>
              <span className="font-semibold text-white text-base">
                Explified
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#23b5b5] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-xs md:text-sm">Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#23b5b5] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs md:text-sm">LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#23b5b5] transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span className="text-xs md:text-sm">YouTube</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#23b5b5] transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span className="text-xs md:text-sm">Twitter / X</span>
              </a>
            </div>

          
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CohortLanding;
