import { cn } from "@/lib/utils"
import { ILogs } from "@/types/scan.types"

const LogsCard = ({ state, title, route, detail, time }: ILogs) => {
  return (
    <div className="w-full rounded-xl border border-muted-foreground/10 bg-card p-4 shadow-md shadow-foreground/10">
      <div className="flex w-full items-center justify-between">
        <div
          className={cn("rounded-md px-2 py-px text-xs", {
            "bg-destructive": state === "critical",
            "bg-high": state === "high",
            "bg-medium": state === "medium",
          })}
        >
          {state}
        </div>

        <p className="font-mono text-xs text-muted">{time}</p>
      </div>

      <div className="mt-2 space-y-1">
        <p className="font-semibold">{title}</p>
        <p className="font-mono text-xs text-primary">{route}</p>
        <p className="pt-1 text-xs text-muted">{detail}</p>
      </div>
    </div>
  )
}

export default LogsCard
