import { included } from "@/constants/tables.constants"
import { Check } from "lucide-react"
import { IoStarSharp } from "react-icons/io5"

export default function HeroSection() {
  return (
    <div className="space-y-6 text-white">
      <h1 className="font-inter text-4xl font-medium">
        Expert level Cybersecurity <br /> in{" "}
        <span className="text-primary">hours</span> not weeks.
      </h1>

      <div className="max-w-120 space-y-2">
        <h5 className="font-medium">What's included</h5>
        <ul className="space-y-2.5">
          {included.map((item) => (
            <li key={item} className="flex gap-2">
              <Check className="mt-1.5 size-4 text-success" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-28 space-y-3">
        <div className="flex items-center gap-1.5">
          <IoStarSharp className="text-success" />
          <p>Trustpilot</p>
        </div>
        <div className="flex items-center gap-2">
          <h6 className="text-lg font-medium">Rated 4.5/5.0</h6>
          <p className="text-sm text-white/50">(100k+ reviews)</p>
        </div>
      </div>
    </div>
  )
}
