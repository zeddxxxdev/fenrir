export type ILogs = {
  state: "critical" | "high" | "medium"
  title: string
  route: string
  detail: string
  time: string
}
