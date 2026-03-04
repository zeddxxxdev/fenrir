import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { Columns2Icon, ListFilterIcon, PlusIcon } from "lucide-react"

export default function ScansToolbar() {
  return (
    <div className="flex w-full items-center gap-3 px-4 pt-5 pb-2">
      <div className="relative w-full grow">
        <FaMagnifyingGlass className="absolute top-1/2 left-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search scans by name or type..."
          className="h-10 pl-10 text-base"
        />
      </div>

      <Button
        variant="outline"
        size="lg"
        className="flex h-10 gap-3 pr-4.5 pl-4 text-muted-foreground hover:text-foreground"
      >
        <ListFilterIcon /> Filter
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="flex h-10 gap-3 pr-4.5 pl-4 text-muted-foreground hover:text-foreground"
      >
        <Columns2Icon /> Column
      </Button>
      <Button size="lg" className="h-10 pr-4.5 pl-4 text-white">
        <PlusIcon /> New scan
      </Button>
    </div>
  )
}
