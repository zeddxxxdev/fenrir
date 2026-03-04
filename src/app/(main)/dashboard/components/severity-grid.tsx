"use client"

import SeverityCard from "@/components/shared/cards/severity.card"
import { SEVERITIES } from "@/constants/dashboard.constants"
import { useIsLoading } from "@/hooks/use-is-loading"

export default function SeverityGrid() {
  const { isPending } = useIsLoading(1.1)

  if (isPending) {
    return (
      <div className="grid w-full grid-cols-4 gap-14">
        {SEVERITIES.map((severity) => (
          <SeverityCard key={severity.type} loading {...severity} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid w-full grid-cols-4 gap-14">
      {SEVERITIES.map((severity) => (
        <SeverityCard key={severity.type} {...severity} />
      ))}
    </div>
  )
}
