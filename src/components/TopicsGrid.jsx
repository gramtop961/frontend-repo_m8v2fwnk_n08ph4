import { motion } from "framer-motion";
import { MessageSquare, TrendingUp, BookOpen, Mic2, ShieldCheck } from "lucide-react";

const topics = [
  {
    title: "Geopolitics & Culture",
    description:
      "From soft power to cultural shifts — dissect narratives shaping the world.",
    icon: ShieldCheck,
  },
  {
    title: "Tech & AI Ethics",
    description:
      "Debate bias, alignment, creator economy, and the next wave of disruption.",
    icon: TrendingUp,
  },
  {
    title: "Work, Money, Life",
    description:
      "Career pivots, remote-first, financial independence, and mental performance.",
    icon: MessageSquare,
  },
  {
    title: "Literature & Media",
    description:
      "Close-readings, longform essays, and media literacy in the attention era.",
    icon: BookOpen,
  },
  {
    title: "Rhetoric & Debate",
    description:
      "Sharpen delivery, framing, and rebuttals with fast-paced sparring.",
    icon: Mic2,
  },
];

export default function TopicsGrid() {
  return (
    <section id="topics" className="relative py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-manrope text-3xl font-bold text-slate-900 md:text-4xl">
              What we talk about
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Curated, high-signal prompts updated weekly. Expect nuance, evidence, and strong opinions held lightly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600 ring-1 ring-inset ring-indigo-100">
                  <t.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{t.title}</h3>
                  <p className="mt-1 text-slate-600">{t.description}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(79,70,229,0.06), transparent 40%)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
