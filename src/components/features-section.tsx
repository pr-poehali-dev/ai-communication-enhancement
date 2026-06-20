import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Глубокая интерпретация",
    description: "Карты читаются не по шаблону, а связываются между собой в цельное живое послание именно для тебя.",
    icon: "brain",
    badge: "Точно",
  },
  {
    title: "Полная конфиденциальность",
    description: "Твои вопросы и расклады остаются только твоими. Никто не увидит, о чём ты спрашивал у карт.",
    icon: "lock",
    badge: "Приватно",
  },
  {
    title: "Любой вопрос",
    description: "Любовь, карьера, деньги, отношения или путь судьбы — задай свой вопрос и получи развёрнутый ответ.",
    icon: "globe",
    badge: "78 карт",
  },
  {
    title: "Мгновенный ответ",
    description: "Не нужно ждать запись к тарологу. Расклад готов за секунды, в любое время дня и ночи.",
    icon: "zap",
    badge: "24/7",
  },
  {
    title: "Классические расклады",
    description: "Карта дня, три карты, Кельтский крест и другие проверенные веками схемы гадания.",
    icon: "link",
    badge: "Традиции",
  },
  {
    title: "3 расклада бесплатно",
    description: "Попробуй силу карт без оплаты. Дальше — безлимитная подписка всего за 300 ₽ в месяц.",
    icon: "target",
    badge: "Бесплатно",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему именно мы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Таинство древних карт и глубина толкования в каждом раскладе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "🔮"}
                    {feature.icon === "lock" && "🔒"}
                    {feature.icon === "globe" && "🌙"}
                    {feature.icon === "zap" && "✨"}
                    {feature.icon === "link" && "🃏"}
                    {feature.icon === "target" && "🌟"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}