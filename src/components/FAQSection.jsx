import { motion } from "framer-motion";

const faqs = [
  {
    q: "Who is this for?",
    a: "Experienced speakers at C1–C2 who thrive on sophisticated, real-world conversation and want to keep their edge.",
  },
  {
    q: "What is the format?",
    a: "90-minute sessions in small groups with a facilitator. Expect warm-up drills, discussion rounds, and optional lightning debates.",
  },
  {
    q: "How do I prepare?",
    a: "You'll get a short brief with links and prompts. Bring your own examples and opinions — evidence beats hot takes.",
  },
  {
    q: "Is it exam-focused?",
    a: "No. It's about clear thinking, nuance, and rhetorical precision — skills that naturally transfer to any exam context.",
  },
  {
    q: "What about pricing?",
    a: "First drop-in is free. Then flexible passes or membership. Apply for details and scheduling.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-16">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center font-manrope text-3xl font-bold text-slate-900"
        >
          Frequently asked questions
        </motion.h3>

        <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((item, idx) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group p-5 open:bg-indigo-50/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="font-medium text-slate-900">{item.q}</span>
                <span className="text-sm text-slate-500">click to expand</span>
              </summary>
              <p className="mt-2 text-slate-700">{item.a}</p>
            </motion.details>
          ))}
        </div>

        <div id="apply" className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-slate-600">
            Ready to join? Share your goals and level. We'll match you with the best slot.
          </p>
          <a
            href="mailto:apply@c2club.example?subject=Application%20-%20C2%20Conversation%20Club&body=Hi!%20I%27d%20like%20to%20join.%20My%20level%3A%20C2.%20Goals%3A%20..."
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Apply via email
          </a>
        </div>
      </div>
    </section>
  );
}
