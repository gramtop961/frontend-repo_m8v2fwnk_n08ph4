import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Анна, маркетолог (B2)",
    text:
      "После трёх занятий перестала переводить в голове. Нравится темп и то, как мягко поправляют формулировки.",
  },
  {
    name: "Михаил, продакт (C1)",
    text:
      "Самое ценное — дискуссии на сложные темы. Много практики аргументации и новых идиом.",
  },
  {
    name: "Лиза, аналитик (B1)",
    text:
      "Формат мини-групп идеально подошёл. Стало легче вступать в разговор и держать мысль.",
  },
  {
    name: "Игорь, инженер (C2)",
    text:
      "Уровень высокий, модерация отличная. Можно реально оттачивать нюанс и тон.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center font-manrope text-3xl font-bold text-slate-900"
        >
          Отзывы участников
        </motion.h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-2 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700">{r.text}</blockquote>
              <figcaption className="mt-3 text-sm font-medium text-slate-900">{r.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
