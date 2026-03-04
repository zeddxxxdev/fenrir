import { PiGlobeHemisphereWestFill } from "react-icons/pi"
import { LuWorkflow } from "react-icons/lu"
import { RiFlaskLine } from "react-icons/ri"
import { MdOutlineFactCheck } from "react-icons/md"
import { TbReportSearch } from "react-icons/tb"
import { JSX } from "react"
import { ILogs } from "@/types/scan.types"

export type FlowStep = { label: string; icon: JSX.Element }
export type ScanDetail = { key: string; value: string }
export type SeverityLevel = { label: string; colorClass: string; count: number }
export const CONSOLE_TABS = ["active_log", "verification_loops"] as const
export type ConsoleTab = (typeof CONSOLE_TABS)[number]

export const FLOW_STEPS: FlowStep[] = [
  {
    label: "Spidering",
    icon: <PiGlobeHemisphereWestFill className="size-4.5" />,
  },
  { label: "Mapping", icon: <LuWorkflow className="size-4.5" /> },
  { label: "Testing", icon: <RiFlaskLine className="size-4.5" /> },
  { label: "Validating", icon: <MdOutlineFactCheck className="size-4.5" /> },
  { label: "Reporting", icon: <TbReportSearch className="size-4.5" /> },
]

export const SCAN_DETAILS: ScanDetail[] = [
  { key: "Scan Type", value: "Grey Box" },
  { key: "Targets", value: "google.com" },
  { key: "Started At", value: "Nov 22, 09:00AM" },
  { key: "Credentials", value: "2 Active" },
  { key: "Files", value: "Control.pdf" },
  { key: "Checklists", value: "40/350" },
]

export const SEVERITY_LEVELS: SeverityLevel[] = [
  { label: "Critical", colorClass: "text-destructive", count: 0 },
  { label: "High", colorClass: "text-high", count: 0 },
  { label: "Medium", colorClass: "text-medium", count: 0 },
  { label: "Low", colorClass: "text-low", count: 0 },
]

export const logs: Array<ILogs> = [
  {
    state: "critical",
    route: "/api/user/profile",
    title: "SQL Injection in Authentication Endpoint",
    detail:
      "Time - based blind SQL injectioncon firmed on user - controlled input during authentication flow. Exploitation allows database - level access.",
    time: "10:45:2",
  },
  {
    state: "high",
    route: "/api/auth/login",
    title: "Unauthorized Access to User Metadata",
    detail:
      "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
    time: "10:45:2",
  },
  {
    state: "medium",
    route: "/api/search",
    title: "Broken Authentication Rate Limiting",
    detail:
      "No effective rate limiting detected on login attempts. Automated brute - force attempts possible.",
    time: "10:45:2",
  },
]
