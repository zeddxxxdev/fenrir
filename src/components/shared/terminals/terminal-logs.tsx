"use client"

import { useEffect, useRef, useState } from "react"

type LogToken =
  | { type: "text"; content: string }
  | { type: "link"; content: string }
  | { type: "server"; content: string }
  | { type: "server-link"; content: string }
  | { type: "highlight"; content: string }
  | { type: "highlight-bg"; content: string }
  | { type: "code"; content: string }
  | { type: "error"; content: string }

type LogEntry = {
  timestamp: string
  tokens: LogToken[]
}

const logs: LogEntry[] = [
  {
    timestamp: "09:00:00",
    tokens: [
      { type: "text", content: "I'll begin a systematic penetration test on " },
      { type: "link", content: "helpdesk.democorp.com" },
      {
        type: "text",
        content: ". Let me start with reconnaissance and enumeration.",
      },
    ],
  },
  {
    timestamp: "09:01:00",
    tokens: [
      {
        type: "text",
        content:
          "Good! target is online. Now let me perform port scanning to identify running services.",
      },
    ],
  },
  {
    timestamp: "09:02:00",
    tokens: [
      { type: "text", content: "Excellent reconnaissance results:" },
      { type: "server-link", content: "\n- helpdesk.democorp.com" },
      {
        type: "server",
        content: ": Apache httpd 2.4.65 on port 80 (web server)\n",
      },
      {
        type: "text",
        content:
          "Let me probe the web server on target first to understand its structure",
      },
    ],
  },
  {
    timestamp: "09:03:00",
    tokens: [
      {
        type: "text",
        content:
          "Great! I found a login page for a Help Desk Platform. I can see a useful comment: ",
      },
      {
        type: "highlight",
        content: '"TODO: Delete the testing account (test:test)"',
      },
      {
        type: "text",
        content: "Let me test this credential. The login redirects to ",
      },
      { type: "code", content: "/password/test" },
      { type: "text", content: ". Let me follow that path an explore it." },
    ],
  },
  {
    timestamp: "09:04:00",
    tokens: [
      {
        type: "text",
        content:
          "The POST meth od is not allowed on /password/test. Let me check what the JavaScript does - it posts to ",
      },
      { type: "highlight", content: '"#"' },
      {
        type: "text",
        content:
          " which means the current page. Let me try a different approach.",
      },
    ],
  },
  {
    timestamp: "09:05:00",
    tokens: [
      {
        type: "text",
        content:
          "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the ",
      },
      { type: "highlight", content: "test:test" },
      { type: "text", content: " password directly on other endpoints." },
    ],
  },
  {
    timestamp: "09:06:00",
    tokens: [
      { type: "text", content: "Great! I can access the dashboard using the " },
      { type: "highlight-bg", content: '"X-UserId: 10032"' },
      {
        type: "text",
        content:
          ' header. The dashboard shows "Welcome, John Doe". This suggests an ',
      },
      { type: "error", content: "**IDOR vulnerability**" },
      {
        type: "text",
        content:
          " - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application..",
      },
    ],
  },
]

const TerminalLogs = () => {
  const [visibleLogs, setVisibleLogs] = useState<LogEntry[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeouts = logs.map((log, index) =>
      setTimeout(() => {
        setVisibleLogs((prev) => [...prev, log])
      }, index * 1200)
    )

    return () => timeouts.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [visibleLogs])

  return (
    <div
      ref={containerRef}
      className="h-[calc(100svh-515px)] space-y-3 overflow-auto leading-relaxed scrollbar-gutter"
    >
      {visibleLogs.map((log, i) => (
        <pre
          key={i}
          className="translate-y-2 text-sm leading-relaxed text-wrap whitespace-pre-wrap fade-in-100"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span className="mr-2 text-muted-foreground">[{log.timestamp}]</span>

          {log.tokens.map((token, idx) => {
            switch (token.type) {
              case "link":
                return (
                  <a
                    key={idx}
                    href="#"
                    className="text-primary hover:underline"
                  >
                    {token.content}
                  </a>
                )
              case "highlight":
                return (
                  <span key={idx} className="text-primary">
                    {token.content}
                  </span>
                )
              case "code":
                return (
                  <span
                    key={idx}
                    className="rounded-full bg-foreground px-2 py-0.5 text-background dark:bg-muted dark:text-foreground"
                  >
                    {token.content}
                  </span>
                )
              case "server":
                return (
                  <span key={idx} className="text-muted-foreground">
                    {token.content}
                  </span>
                )
              case "server-link":
                return (
                  <span key={idx} className="text-muted-foreground">
                    {token.content}
                  </span>
                )
              case "highlight-bg":
                return (
                  <span
                    key={idx}
                    className="rounded bg-primary-foreground px-1 py-0.5 font-medium text-primary dark:bg-primary/20"
                  >
                    {token.content}
                  </span>
                )
              case "error":
                return (
                  <span key={idx} className="font-medium text-destructive">
                    {token.content}
                  </span>
                )
              default:
                return (
                  <span key={idx} className="">
                    {token.content}
                  </span>
                )
            }
          })}
        </pre>
      ))}
    </div>
  )
}

export default TerminalLogs
