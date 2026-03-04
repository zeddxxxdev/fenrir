import ProjectOverviewBar from "./components/project-overview-bar"
import SeverityGrid from "./components/severity-grid"
import ScansTable from "./components/table/dashboard-table"
import ScansToolbar from "./components/table/table-toolbar"

export default function Page() {
  return (
    <div className="min-h-[calc(100svh-80px)] w-full bg-page pt-3 dark:bg-background">
      <div className="mb-3 w-full space-y-10 bg-card px-6 py-5">
        <ProjectOverviewBar />
        <SeverityGrid />
      </div>

      <div className="w-full p-3">
        <div className="w-full rounded-lg bg-card">
          <ScansToolbar />
          <ScansTable />
        </div>
      </div>
    </div>
  )
}
