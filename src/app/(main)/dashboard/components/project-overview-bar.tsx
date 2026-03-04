"use client"

import OverviewDashboardSkeleton from "@/components/skeletons/dashboard/overview.dashboard.skeleton"
import { OVERVIEWS } from "@/constants/dashboard.constants"
import { useIsLoading } from "@/hooks/use-is-loading"
import { RefreshCcw } from "lucide-react"

export default function ProjectOverviewBar() {
  const { isPending } = useIsLoading()

  if (isPending) {
    return <OverviewDashboardSkeleton />
  }

  return (
    <div className="flex w-full items-center gap-5 text-sm">
      <div className="grid w-full grid-cols-6 divide-x">
        {Object.entries(OVERVIEWS).map(([key, value]) => (
          <p
            key={key}
            className="text-center text-muted-foreground first:text-start"
          >
            {key}: <span className="text-foreground">{value}</span>
          </p>
        ))}
      </div>

      <p className="flex shrink-0 items-center gap-1 text-muted-foreground">
        <RefreshCcw className="size-4 text-primary" />
        10 mins ago
      </p>
    </div>
  )
}
