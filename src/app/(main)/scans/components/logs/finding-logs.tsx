import LogsCard from "./logs-card"
import { logs } from "@/constants/scans.constants"

export default function FindingLog() {
  return (
    <div className="w-md shrink-0 bg-page dark:bg-background">
      <div className="flex w-full items-center border-b border-muted-foreground/20 px-5 py-4">
        <p className="text-sm font-medium">Finding Log</p>
      </div>
      {/* findings list goes here */}
      <div className="h-[calc(100svh-485px)] space-y-4 overflow-y-auto p-4">
        {logs.map((log) => (
          <LogsCard key={log.title} {...log} />
        ))}
      </div>
    </div>
  )
}
