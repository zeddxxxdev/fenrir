import { cn } from "@/lib/utils"

type Status = "completed" | "scheduled" | "failed"

const TableStatusBadge = ({ status }: { status: Status }) => {
  return (
    <div
      aria-label="scan-status"
      className={cn(
        "w-fit rounded-md border border-success/30 bg-success-foreground px-2 py-0.5 text-xs text-success capitalize dark:bg-success/10",
        status === "scheduled" &&
          "border-[#64748B]/10 bg-[#F1F5F9] text-[#64748B] dark:bg-white/1",
        status === "failed" &&
          "border-destructive/30 bg-destructive-foreground text-destructive dark:bg-destructive/10"
      )}
    >
      {status}
    </div>
  )
}

export default TableStatusBadge
