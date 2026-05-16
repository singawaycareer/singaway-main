import { motion } from "framer-motion";
import { ArrowUpRight, Phone, ShieldCheck, Users, GraduationCap, BadgeCheck } from "lucide-react";
import skyline from "@/assets/hero-skyline.jpg";


const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-b from-secondary to-transparent blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex w-full justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Singapore Career & Visa Consultancy
          </div>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-balance text-center font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          Build Your Future
          <br />
          <span className="text-muted-foreground">in </span>Singapore.
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-center text-base text-muted-foreground sm:text-lg"
        >
          We help candidates secure Singapore jobs, work permits, and study visas
          with trusted guidance and end-to-end professional support.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Apply Now
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Phone className="h-4 w-4" /> Free Consultation
          </a>
        </motion.div>

        {/* Visual stage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-14 sm:mt-20"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface shadow-luxe">
            <img
              src={skyline}
              alt="Singapore Marina Bay skyline"
              width={1920}
              height={1080}
              className="h-[340px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

            {/* Floating glass card – left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute left-4 top-4 hidden rounded-2xl border border-border glass-strong p-3 shadow-luxe sm:left-6 sm:top-6 sm:flex"
            >
             <p>Your Sucess Our Priority</p>
            </motion.div>

            {/* Floating glass card – right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="absolute bottom-4 right-4 hidden rounded-2xl border border-border glass-strong p-4 shadow-luxe sm:bottom-6 sm:right-6 sm:flex"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Success rate</p>
                  <p className="font-display text-lg font-semibold leading-none">98.4%</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4">
            {[
              { icon: Users, k: "5,000+", v: "Candidates Assisted" },
              { icon: BadgeCheck, k: "Verified", v: "Singapore Employers" },
              { icon: GraduationCap, k: "Study Visa", v: "End-to-End Guidance" },
              { icon: ShieldCheck, k: "Trusted", v: "Licensed Consultants" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="rounded-2xl border border-border bg-card p-4"
              >
                <s.icon className="h-4 w-4 text-muted-foreground" />
                <p className="mt-3 font-display text-xl font-semibold tracking-tight">{s.k}</p>
                <p className="text-xs text-muted-foreground">{s.v}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Trusted strip */}
      {/* <div className="mx-auto mt-20 max-w-6xl px-5">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Working alongside leading Singapore employers
        </p>
        <div className="mt-6 overflow-hidden">
          <div className="marquee flex w-max gap-12 opacity-70">
            {[..."Marina Bay HR · Changi Logistics · Orchard Hospitality · Tanjong Industrial · Raffles Education · Sentosa Resorts · Jurong Manufacturing · Kallang Retail".split(" · "), ..."Marina Bay HR · Changi Logistics · Orchard Hospitality · Tanjong Industrial · Raffles Education · Sentosa Resorts · Jurong Manufacturing · Kallang Retail".split(" · ")].map(
              (n, i) => (
                <span key={i} className="font-display text-lg font-medium text-foreground/60">
                  {n}
                </span>
              ),
            )}
          </div>
        </div>
      </div> */}
    </section>
  );
}
