import { PropsWithChildren } from "react"

export default function RootAuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh bg-black auth_layout_background">
      <nav className="mx-auto flex w-full max-w-8xl items-center px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="grid size-4 place-items-center rounded-full bg-primary">
            <div className="size-1.5 rounded-full bg-white" />
          </div>

          <p className="font-medium text-white">aps</p>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  )
}
