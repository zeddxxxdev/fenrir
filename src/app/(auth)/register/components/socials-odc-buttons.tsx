import { OAUTH_PROVIDERS } from "@/constants/auth.constants"
import { cn } from "@/lib/utils"

export default function SocialODCButtons() {
  return (
    <div className="mt-4 grid w-full grid-cols-3 gap-3">
      {Object.entries(OAUTH_PROVIDERS).map(([key, { icon, className }]) => (
        <button
          key={key}
          aria-label={key}
          className={cn(
            "flex h-10 w-full items-center justify-center gap-2 rounded-full",
            className
          )}
        >
          {icon}
        </button>
      ))}
    </div>
  )
}
