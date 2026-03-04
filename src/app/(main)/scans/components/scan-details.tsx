import { SCAN_DETAILS } from "@/constants/scans.constants"

export default function ScanDetails() {
  return (
    <div className="flex w-full items-center justify-between gap-4 py-4">
      {SCAN_DETAILS.map(({ key, value }) => (
        <div key={key} className="space-y-1 text-sm font-medium">
          <p className="text-muted-foreground">{key}</p>
          <p>{value}</p>
        </div>
      ))}
    </div>
  )
}
