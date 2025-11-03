import { motion } from "framer-motion";
import { Rocket, Globe, TrendingUp, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-1 text-sm text-indigo-700 shadow-sm backdrop-blur"
          >
            <Rocket className="h-4 w-4" />
            Advanced Speaking Club
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 font-manrope text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl"
          >
            C2 English Conversation Club
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 max-w-2xl text-lg text-slate-600"
          >
            Dive into sharp, real-world discussions around culture, tech, trends, and life. Designed for near-native speakers who want to stay razor-sharp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#schedule"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Join the next session
            </a>
            <a
              href="#topics"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              Explore topics
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            <Stat icon={Globe} label="Global issues" />
            <Stat icon={TrendingUp} label="Hot trends" />
            <Stat icon={Users} label="C1–C2 peers" />
            <Stat icon={Rocket} label="High-velocity practice" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
      <Icon className="h-4 w-4 text-indigo-600" />
      <span>{label}</span>
    </div>
  );
}
