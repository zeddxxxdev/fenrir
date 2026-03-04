export const OVERVIEWS: Record<string, string> = {
  Org: "Project X",
  Owner: "Nammagiri",
  "Total Scans": "100",
  Scheduled: "1000",
  Rescans: "100",
  "Failed Scans": "100",
}

export const SEVERITIES = [
  { type: "critical" as const, value: 86, percentage: 2, increased: true },
  { type: "high" as const, value: 16, percentage: 0.9, increased: true },
  { type: "medium" as const, value: 26, percentage: 0.9 },
  { type: "low" as const, value: 16, percentage: 0.9, increased: true },
]

export const VULNERABILITY_COLORS = ["#EF4444", "#F97316", "#FCBF24", "#21C55E"]
