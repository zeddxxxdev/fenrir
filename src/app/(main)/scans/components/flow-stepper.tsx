import { FLOW_STEPS } from "@/constants/scans.constants"
import { cn } from "@/lib/utils"

type Props = { activeIndex?: number }

export default function FlowStepper({ activeIndex = 0 }: Props) {
  return (
    <div className="relative flex w-full items-center justify-between pb-6">
      {FLOW_STEPS.map(({ label, icon }, i) => {
        const isActive = i === activeIndex
        return (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div
              className={cn(
                "z-10 grid size-14 place-items-center rounded-full border border-muted-foreground/20",
                isActive
                  ? "bg-primary text-white outline-9 outline-primary/15"
                  : "bg-background text-muted-foreground"
              )}
            >
              {icon}
            </div>
            <p className="text-center text-sm font-medium text-muted-foreground">
              {label}
            </p>
          </div>
        )
      })}
      <div className="absolute top-0 left-0 h-px w-full translate-y-7 bg-muted-foreground/20" />
    </div>
  )
}
