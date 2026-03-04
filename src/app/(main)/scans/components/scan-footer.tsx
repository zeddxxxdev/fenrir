import { SEVERITY_LEVELS } from "@/constants/scans.constants"

type Props = {
  subAgents?: number
  parallelExecutions?: number
  operations?: number
  severities?: typeof SEVERITY_LEVELS
}

export default function ScanFooter({
  subAgents = 0,
  parallelExecutions = 2,
  operations = 1,
  severities = SEVERITY_LEVELS,
}: Props) {
  const stats = [
    { label: "Sub-Agents", value: subAgents },
    { label: "Parallel Executions", value: parallelExecutions },
    { label: "Operations", value: operations },
  ]

  return (
    <div className="flex w-full items-center justify-between border-t border-muted-foreground/20 bg-card px-5 py-3">
      <div className="flex items-center gap-12">
        {stats.map(({ label, value }) => (
          <div key={label} className="flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-muted" />
            <p className="text-xs font-medium text-muted">
              {label}: {value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-12 text-xs">
        {severities.map(({ label, colorClass, count }) => (
          <p key={label} className={colorClass}>
            {label}: {count}
          </p>
        ))}
      </div>
    </div>
  )
}
