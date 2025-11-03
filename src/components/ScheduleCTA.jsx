import { motion } from "framer-motion";
import { Calendar, Users, Star } from "lucide-react";

export default function ScheduleCTA() {
  return (
    <section id="schedule" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-white p-8 shadow-sm md:grid-cols-2">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-manrope text-3xl font-bold text-slate-900"
            >
              Join the next live session
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-2 max-w-xl text-slate-600"
            >
              Small groups, high bandwidth. 90 minutes of fast, structured conversation led by an expert moderator.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-5 grid gap-3 text-sm text-slate-700"
            >
              <li className="flex items-center gap-2"><Calendar className="h-4 w-4 text-indigo-600" /> Thursdays & Sundays, 19:00–20:30 (GMT+3)</li>
              <li className="flex items-center gap-2"><Users className="h-4 w-4 text-indigo-600" /> 4–6 participants, C1–C2 only</li>
              <li className="flex items-center gap-2"><Star className="h-4 w-4 text-indigo-600" /> Focus: fluency, nuance, and rhetorical finesse</li>
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Apply now
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                How it works
              </a>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card title="Warm-up drills" text="Targeted prompts to activate advanced vocabulary." />
            <Card title="Deep dives" text="Case studies and roundtables on complex topics." />
            <Card title="Lightning debates" text="Structured sparring to sharpen delivery." />
            <Card title="Actionable feedback" text="Personal notes on clarity, nuance, and tone." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </motion.div>
  );
}
