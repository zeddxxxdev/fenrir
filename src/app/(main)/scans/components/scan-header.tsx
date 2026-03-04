import { Separator } from "@/components/ui/separator"
import ScanProgress from "./scan-progress"
import FlowStepper from "./flow-stepper"
import ScanDetails from "./scan-details"

export default function ScanHeader() {
  return (
    <div className="flex w-full items-center rounded-lg border border-muted/20 bg-card shadow-sm shadow-foreground/5">
      <div className="h-full py-7 pr-4 pl-10">
        <ScanProgress percent={0} status="In Progress" />
      </div>

      <Separator orientation="vertical" className="h-32 w-px" />

      <div className="w-full grow py-4 pr-8 pl-14">
        <div className="w-full divide-y divide-muted-foreground/20">
          <FlowStepper activeIndex={0} />
          <ScanDetails />
        </div>
      </div>
    </div>
  )
}
