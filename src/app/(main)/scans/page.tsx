import ScanConsole from "./components/console/scan-console"
import ScanFooter from "./components/scan-footer"
import ScanHeader from "./components/scan-header"

export default function ScanPage() {
  return (
    <div className="w-full space-y-3 bg-background">
      <div className="space-y-3 p-3">
        <ScanHeader />
        <ScanConsole />
      </div>
      <ScanFooter />
    </div>
  )
}
