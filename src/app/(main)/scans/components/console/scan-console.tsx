import FindingLog from "../logs/finding-logs"
import ConsoleHeader from "./console-header"
import ConsoleTabs from "./console-tabs"

export default function ScanConsole() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-muted-foreground/20 shadow-md shadow-foreground/5">
      <ConsoleHeader />
      <div className="flex w-full">
        <ConsoleTabs />
        <FindingLog />
      </div>
    </div>
  )
}
