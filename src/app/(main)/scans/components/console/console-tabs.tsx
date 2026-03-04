"use client"

import { useState } from "react"
import TerminalLogs from "@/components/shared/terminals/terminal-logs"
import { CONSOLE_TABS, ConsoleTab } from "@/constants/scans.constants"
import { cn } from "@/lib/utils"

export default function ConsoleTabs() {
  const [active, setActive] = useState<ConsoleTab>("active_log")

  return (
    <div className="grow bg-background">
      <div className="flex border-r border-b border-muted-foreground/20 px-5">
        {CONSOLE_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              "relative px-7 py-4 text-sm font-medium capitalize transition-colors",
              active === tab
                ? "text-foreground before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-full before:-translate-x-1/2 before:bg-primary"
                : "text-muted-foreground"
            )}
          >
            {tab.replaceAll("_", " ")}
          </button>
        ))}
      </div>

      <div className="h-[calc(100svh-485px)] w-full space-y-4 border-r border-muted-foreground/20 bg-background px-6 pt-4 pb-4">
        <div className={active === "active_log" ? "block" : "hidden"}>
          <TerminalLogs />
        </div>
        <div className={active === "verification_loops" ? "block" : "hidden"}>
          <p className="text-sm text-muted-foreground">
            No verification loops yet.
          </p>
        </div>
      </div>
    </div>
  )
}
