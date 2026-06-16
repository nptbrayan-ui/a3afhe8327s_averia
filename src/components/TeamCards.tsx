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
        <Card key={m.name} className="group rounded-none bg-accent-light transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-lg hover:shadow-accent/5">
          <CardHeader>
            {m.photo ? (
              <div className="h-32 w-32 overflow-hidden border border-white/20 transition-all duration-300 group-hover:border-white">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="flex h-32 w-32 items-center justify-center border border-white/20 text-xs font-bold uppercase tracking-widest text-white/50 transition-all duration-300 group-hover:border-white">
                VA
              </div>
            )}
            <div className="mt-4">
              <p className="font-display text-xl font-bold tracking-tight text-white">{m.name}</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-white/70">{m.role}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-white/70">{m.bio}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
