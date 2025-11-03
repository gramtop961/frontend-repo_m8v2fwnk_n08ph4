import { motion } from "framer-motion";

const faqs = [
  {
    q: "Кому подойдёт?",
    a: "Тем, кто уже общается на английском (B1–C2) и хочет уверенно обсуждать сложные темы.",
  },
  {
    q: "Как проходит занятие?",
    a: "90 минут в мини-группе с модератором: разогрев, дискуссии по темам недели и короткие дебаты.",
  },
  {
    q: "Нужна ли подготовка?",
    a: "Перед встречей высылаем краткий бриф с ссылками и вопросами. Можно принести свои примеры и кейсы.",
  },
  {
    q: "Это подготовка к экзаменам?",
    a: "Нет. Мы тренируем беглость, структуру речи и аргументацию — навыки пригодятся и на экзаменах.",
  },
  {
    q: "Сколько стоит?",
    a: "Первое пробное — бесплатно. Дальше — гибкие абонементы или разовые посещения. Подробности в ответ на заявку.",
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
          Частые вопросы
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
                <span className="text-sm text-slate-500">нажмите, чтобы раскрыть</span>
              </summary>
              <p className="mt-2 text-slate-700">{item.a}</p>
            </motion.details>
          ))}
        </div>

        <div id="apply" className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-slate-600">
            Готовы присоединиться? Расскажите о целях и уровне — подберём подходящую группу.
          </p>
          <a
            href="mailto:join@sparkspeak.club?subject=Заявка%20в%20SPARK%20SPEAK&body=Привет!%20Хочу%20в%20клуб.%20Мой%20уровень:%20...%20Цели:%20..."
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Отправить заявку на email
          </a>
        </div>
      </div>
    </section>
  );
}
