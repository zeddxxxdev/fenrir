import Icons from "@/app/icons"
import { LucideProps } from "lucide-react"
import { JSX } from "react"
import { HiOutlineDocumentReport } from "react-icons/hi"
import { IconType } from "react-icons/lib"

export const sidebar_items: Record<
  string,
  Array<{
    icon: ((props: LucideProps) => JSX.Element) | IconType
    label: string
    href: string
    isNew?: boolean
  }>
> = {
  pages: [
    {
      icon: Icons.Dashboard,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: Icons.Projects,
      label: "Projects",
      href: "/projects",
    },
    {
      icon: HiOutlineDocumentReport,
      label: "Scans",
      href: "/scans",
      isNew: true,
    },
    {
      icon: Icons.Schedule,
      label: "Schedule",
      href: "/schedule",
    },
  ],
  utilities: [
    {
      icon: Icons.Bell,
      label: "Notifications",
      href: "/notification",
      isNew: true,
    },
    {
      icon: Icons.Setting,
      label: "Settings",
      href: "/settings",
    },
    {
      icon: Icons.Info,
      label: "Support",
      href: "/support",
    },
  ],
}
