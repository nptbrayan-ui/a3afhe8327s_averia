import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

const features = [
  {
    num: "01",
    title: "Designed for Better Sleep",
    desc: "Crafted with a sleek, minimalist form and premium materials, Aveira blends seamlessly into your bedroom sanctuary, actively detecting late-night screen time and gently interrupting the cycle to help you disconnect and drift off.",
  },
  {
    num: "02",
    title: "Smart, but Subtle",
    desc: "mmWave presence sensing, adaptive brightness, wireless charging, and ambient lighting work quietly in the background — useful features that never get in the way.",
  },
  {
    num: "03",
    title: "Built by Makers",
    desc: "Created by a team of four high school students passionate about engineering and design. Aveira proves everyday devices can be both functional and elegant.",
  },
]

export default function FeaturesCards() {
  return (
    <div className="mt-4 grid gap-6 md:grid-cols-3">
      {features.map((f) => (
        <Card key={f.num} className="bg-warm-white">
          <CardHeader>
            <span className="flex h-10 w-10 items-center justify-center bg-ink text-xs font-bold text-accent-light">
              {f.num}
            </span>
            <CardTitle className="font-display mt-2 text-2xl font-bold tracking-tight">
              {f.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-ink/60">{f.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
