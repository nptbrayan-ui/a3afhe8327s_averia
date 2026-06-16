import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

const features = [
  {
    title: "Designed for Better Sleep",
    desc: "Crafted with a sleek, minimalist form and premium materials, Aveira blends seamlessly into your bedroom sanctuary. It actively detects late-night screen time and gently interrupts the cycle, helping you disconnect and drift off.",
  },
  {
    title: "Smart, but Subtle",
    desc: "mmWave presence sensing, adaptive brightness, wireless charging, and ambient lighting work quietly in the background. Useful features that never get in the way.",
  },
  {
    title: "The Cost of Scrolling",
    desc: "Late-night screen time does more than just steal your hours; it actually keeps your brain wide awake. The bright light from your phone tricks your mind into thinking it's still daytime, making it much harder to relax and fall into a deep sleep.",
  },
]

export default function FeaturesCards() {
  return (
    <div className="mt-4 grid gap-6 md:grid-cols-3">
      {features.map((f, i) => (
        <Card key={i} className="rounded-none bg-warm-white transition-all duration-300 hover:scale-[1.02]">
          <CardHeader className="p-8 pb-0">
            <CardTitle className="font-display text-2xl font-bold tracking-tight text-accent">
              {f.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <p className="text-sm leading-relaxed text-ink/60">{f.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
