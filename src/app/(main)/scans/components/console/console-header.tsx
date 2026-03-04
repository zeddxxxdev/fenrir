import { MdOutlineTimer } from "react-icons/md"
import { ChevronDown, X } from "lucide-react"

type Props = { onCollapse?: () => void; onClose?: () => void }

export default function ConsoleHeader({ onCollapse, onClose }: Props) {
  return (
    <div className="flex w-full items-center justify-between border-b border-muted-foreground/20 bg-page px-6 py-4 dark:bg-card">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-primary" />
          <p className="text-sm font-medium">Live Scan Console</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-muted-foreground/10 px-3 py-1 text-xs text-muted-foreground">
          <MdOutlineTimer />
          Running...
        </div>
      </div>

      <div className="flex items-center gap-2 text-muted-foreground">
        <button onClick={onCollapse}>
          <ChevronDown className="size-4.5" />
        </button>
        <button onClick={onClose}>
          <X className="size-4" />
        </button>
      </div>
    </div>
  )
}
