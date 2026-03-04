export const included = [
  "Effortlessly spider and map targets to uncover hidden security flaws",
  "Deliver high-quality, validated findings in hours, not weeks.",
  "Generate professional, enterprise-grade security reports automatically.",
]

export const tables: Array<{
  scanName: string
  type: string
  status: "completed" | "scheduled" | "failed"
  progress: number
  vulnerability: {
    critical?: number
    high?: number
    medium?: number
    low?: number
  }
  lastScan: string
}> = [
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 28,
    },
    lastScan: "4d ago",
  },
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 28,
    },
    lastScan: "4d ago",
  },
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 28,
    },
    lastScan: "4d ago",
  },
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 28,
    },
    lastScan: "4d ago",
  },
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 28,
    },
    lastScan: "4d ago",
  },
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 28,
    },
    lastScan: "4d ago",
  },
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 28,
    },
    lastScan: "4d ago",
  },
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "completed",
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 28,
    },
    lastScan: "4d ago",
  },
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "scheduled",
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 28,
    },
    lastScan: "3d ago",
  },
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "scheduled",
    progress: 100,
    vulnerability: {
      critical: 5,
      high: 12,
    },
    lastScan: "3d ago",
  },
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "failed",
    progress: 10,
    vulnerability: {
      critical: 5,
      high: 12,
    },
    lastScan: "3d ago",
  },
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "failed",
    progress: 10,
    vulnerability: {
      critical: 2,
      high: 4,
      medium: 8,
      low: 1,
    },
    lastScan: "3d ago",
  },
  {
    scanName: "Web App Servers",
    type: "Greybox",
    status: "failed",
    progress: 10,
    vulnerability: {
      critical: 2,
      high: 4,
      medium: 8,
      low: 1,
    },
    lastScan: "3d ago",
  },
]
