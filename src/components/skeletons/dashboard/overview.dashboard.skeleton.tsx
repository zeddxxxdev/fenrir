import { Skeleton } from "@/components/ui/skeleton"
import { OVERVIEWS } from "@/constants/dashboard.constants"
import { RefreshCcw } from "lucide-react"

export default function OverviewDashboardSkeleton() {
  return (
    <div className="flex w-full items-center gap-5 text-sm">
      <div className="grid w-full grid-cols-6 divide-x">
        {Object.entries(OVERVIEWS).map(([key, value]) => (
          <div
            key={key}
            className="gap-2 text-center text-muted-foreground first:text-start"
          >
            {key}: <Skeleton className="mt-px ml-2 inline-block h-4 w-14" />
          </div>
        ))}
      </div>

      <p className="flex shrink-0 items-center gap-1 text-muted-foreground">
        <RefreshCcw className="size-4 animate-spin text-primary" />
        10 mins ago
      </p>
    </div>
  )
}
