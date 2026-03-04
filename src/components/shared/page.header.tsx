import Icons from "@/app/icons"
import { Button } from "../ui/button"

const PageHeader = () => {
  return (
    <div className="sticky top-0 z-999 flex w-full items-center justify-between border-b border-b-muted/20 bg-background px-6 py-3">
      <div className="flex items-center gap-5">
        <p className="text-base">Scan</p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icons.Home className="size-2.5 [&_path]:stroke-muted" />{" "}
          <span>/</span> <p>Private Assets</p> <span>/</span>{" "}
          <p className="text-primary">New Scan</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button size="lg" variant="outline" className="px-5 dark:border-white">
          Export Report
        </Button>

        <Button size="lg" variant="destructive" className="px-5">
          Stop Scan
        </Button>
      </div>
    </div>
  )
}

export default PageHeader
