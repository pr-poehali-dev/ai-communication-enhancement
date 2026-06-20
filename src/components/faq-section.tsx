import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько раскладов можно сделать бесплатно?",
      answer:
        "После регистрации тебе доступны 3 полноценных расклада совершенно бесплатно. Этого достаточно, чтобы прочувствовать атмосферу и точность толкований.",
    },
    {
      question: "Сколько стоит подписка?",
      answer:
        "Безлимитный доступ ко всем раскладам стоит всего 300 ₽ в месяц. Гадай столько, сколько хочешь, в любое время дня и ночи.",
    },
    {
      question: "Как ИИ толкует карты?",
      answer:
        "Искусственный интеллект знает классические значения всех 78 карт Таро и связывает их между собой в единое послание именно под твой вопрос — это не сухой шаблон, а живое толкование.",
    },
    {
      question: "Можно ли доверять такому гаданию?",
      answer:
        "Расклад опирается на проверенные веками традиции Таро. ИИ помогает раскрыть смысл карт глубже и подробнее, но финальное решение всегда остаётся за тобой.",
    },
    {
      question: "Мои вопросы останутся приватными?",
      answer:
        "Да. Твои вопросы и расклады видишь только ты. Мы бережно храним конфиденциальность всего, о чём ты спрашиваешь у карт.",
    },
    {
      question: "Нужно ли что-то устанавливать?",
      answer:
        "Нет. Сервис работает прямо в браузере на любом устройстве. Просто зарегистрируйся и сделай первый расклад за пару секунд.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о раскладах, подписке и точности толкований карт.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}