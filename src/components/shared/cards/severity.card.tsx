import { cn } from "@/lib/utils"
import { HiArrowNarrowUp } from "react-icons/hi"
import { TiWarningOutline } from "react-icons/ti"
import { MdBlockFlipped } from "react-icons/md"
import { useMemo } from "react"
import Icons from "@/app/icons"
import { Skeleton } from "@/components/ui/skeleton"

type Stages = "critical" | "high" | "medium" | "low"

interface SeverityCardProps {
  type: Stages
  value: number
  percentage: number
  increased?: boolean
  loading?: boolean
}

function renderIconsAndColor(type: Stages) {
  switch (type) {
    case "critical":
      return {
        icon: <MdBlockFlipped className="text-critical-severity" />,
        bg: "bg-critical-severity-foreground",
      }
    case "high":
      return {
        icon: <TiWarningOutline className="text-high-severity" />,
        bg: "bg-high-severity-foreground",
      }
    case "medium":
      return {
        icon: <TiWarningOutline className="text-medium-severity" />,
        bg: "bg-medium-severity-foreground",
      }
    case "low":
      return {
        icon: (
          <Icons.SearchInfo className="size-4 [&_path]:stroke-low-severity" />
        ),
        bg: "bg-low-severity-foreground",
      }
  }
}

const SeverityCard = ({
  type,
  value,
  percentage,
  increased = false,
  loading = false,
}: SeverityCardProps) => {
  const { bg, icon } = useMemo(() => {
    return renderIconsAndColor(type)
  }, [type])

  return (
    <div className="space-y-3 px-4">
      <div className="flex items-center justify-between">
        <h6 className="text-lg font-medium text-muted-foreground capitalize">
          {type} Severity
        </h6>

        <div className={cn("grid size-8 place-items-center rounded-lg", bg)}>
          {icon}
        </div>
      </div>

      <div className="flex w-full items-end justify-between">
        {loading ? (
          <Skeleton className="size-9" />
        ) : (
          <h6 className="text-2xl font-medium">{value}</h6>
        )}

        {loading ? (
          <Skeleton className="h-3 w-32" />
        ) : (
          <div
            className={cn(
              "mb-1 text-end text-xs font-medium",
              increased ? "text-critical-severity" : "text-success-dark"
            )}
          >
            <HiArrowNarrowUp
              className={cn(
                "mb-px inline-block size-2.5",
                !increased && "rotate-180"
              )}
            />{" "}
            +{percentage}% {increased ? "increase" : "decrease"} than yesterday
          </div>
        )}
      </div>
    </div>
  )
}

export default SeverityCard
