import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Does the radar actually work through bedding and clothes?",
    a: "60 GHz mmWave passes through fabric, foam, and most non-metallic materials. Won't work through a wall or metal-frame headboard between the clock and the bed, but for a normal nightstand setup it's been reliable in 100% of pilot tests.",
  },
  {
    q: "What if I share the bed with someone who works late?",
    a: "Aveira's heartbeat signature pairs to a specific person on setup - about a 40-second calibration on the first night. If the other person is awake but you're not, the system stays idle. Two paired users on one clock is supported; more than two isn't recommended.",
  },
  {
    q: "Is there a camera or microphone?",
    a: "No. By deliberate choice, not omission. The only sensors are the mmWave radar (motion and respiration only, no image), an ambient light photodiode, and the magnetic dock contacts.",
  },
  {
    q: "What if I genuinely need my phone in the middle of the night?",
    a: 'Calls from contacts marked "Always allow" pass through the dock without un-docking the phone. The dock has a 30-second tap-to-release for emergencies - used more than three times in a week, the app gently checks in to make sure something isn\'t wrong.',
  },
  {
    q: "Why $89?",
    a: "Honest answer: because cast aluminum, a 60 GHz radar module, a Qi 2.0 wireless dock, an N52 magnet ring, and a 40 mm full-range driver don't cost less than that to make in small batches. Right now we're not selling - we're trying to finish the prototype. Every donation gets us closer to a sustainable unit cost.",
  },
  {
    q: "How will I know my donation is being used well?",
    a: "We post weekly build updates on Instagram (@aveirasmartclocks). Every donor gets a personal email - a photo, a short note, and progress on whatever component your money helped buy. If we can't deliver, we refund.",
  },
]

export default function FaqAccordion() {
  return (
    <Accordion className="mt-16">
      {faqs.map(({ q, a }) => (
        <AccordionItem key={q} className="border-b border-ink/10 py-2">
          <AccordionTrigger className="text-sm font-medium text-ink hover:text-accent">
            {q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-ink/60">
            {a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
