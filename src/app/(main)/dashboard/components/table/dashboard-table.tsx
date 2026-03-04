"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import TableStatusBadge from "@/components/shared/badge/table-status.badge"
import { tables } from "@/mocks"
import { VULNERABILITY_COLORS } from "@/constants/dashboard.constants"
import { useIsLoading } from "@/hooks/use-is-loading"
import { Skeleton } from "@/components/ui/skeleton"
import { Loader } from "lucide-react"

{
  /* <Loader className="absolute top-1/2 left-1/2 animate-spin text-muted" /> */
}

export default function ScansTable() {
  const { isPending } = useIsLoading(1.5)

  return (
    <div className="relative w-full">
      {isPending && (
        <div className="absolute top-0 grid min-h-124 w-full place-items-center">
          <Loader className="absolute top-1/2 left-1/2 animate-spin text-muted" />
        </div>
      )}
      <Table className="h-full min-h-129">
        <TableCaption className="sr-only">A list of all scans.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Scan Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-40">Progress</TableHead>
            <TableHead className="text-center">Vulnerability</TableHead>
            <TableHead className="w-20">Last scan</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {isPending
            ? null
            : tables.map(
                (
                  { scanName, type, progress, vulnerability, lastScan, status },
                  idx
                ) => (
                  <TableRow key={idx} className="h-15 border-b-0">
                    <TableCell className="pl-8 font-medium">
                      {scanName}
                    </TableCell>
                    <TableCell>{type}</TableCell>
                    <TableCell>
                      <TableStatusBadge status={status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Progress
                          value={progress}
                          failed={status === "failed"}
                          className="h-2 w-24"
                        />
                        <span className="text-sm font-medium">{progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-2">
                        {Object.entries(vulnerability).map(
                          ([key, value], i) => (
                            <div
                              key={key}
                              style={{ background: VULNERABILITY_COLORS[i] }}
                              className="grid h-7.5 w-8 place-items-center rounded-md text-sm text-white"
                            >
                              {value}
                            </div>
                          )
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="pr-5 text-end text-base text-muted-foreground">
                      {lastScan}
                    </TableCell>
                  </TableRow>
                )
              )}
        </TableBody>
      </Table>
    </div>
  )
}
