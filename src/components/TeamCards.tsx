import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card"

const team = [
  {
    name: "Brayan Nguyen",
    role: "Designer",
    bio: "Shapes the look and feel of Aveira.",
    photo: "/headshot-brayan.jpeg",
  },
  {
    name: "Nikhil Tadepalli",
    role: "Business & Lead",
    bio: "Drives the vision and strategy.",
    photo: "/headshot-nikhil.jpeg",
  },
  {
    name: "Vivaan Agarwaal",
    role: "Software",
    bio: "Builds the firmware and software.",
    photo: "/headshot-vivaan.jpeg",
  },
  {
    name: "Arnav Sharma",
    role: "Finance & Planning",
    bio: "Manages funding, budget, and timelines.",
    photo: "/headshot-arnav.jpeg",
  },
]

export default function TeamCards() {
  return (
    <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-4">
      {team.map((m) => (
        <Card key={m.name} className="rounded-none bg-warm-white transition-colors hover:bg-accent/[0.02]">
          <CardHeader>
            {m.photo ? (
              <div className="h-24 w-24 overflow-hidden border border-ink/20 transition-colors">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="flex h-24 w-24 items-center justify-center border border-ink/20 text-xs font-bold uppercase tracking-widest text-ink/40">
                VA
              </div>
            )}
            <div className="mt-2">
              <p className="font-display text-lg font-bold tracking-tight">{m.name}</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-accent">{m.role}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-ink/50">{m.bio}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
