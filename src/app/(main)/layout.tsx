import PageHeader from "@/components/shared/page.header"
import { AppSidebar } from "@/components/shared/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { PropsWithChildren } from "react"

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider className="min-h-svh bg-page">
      <AppSidebar />
      <main className="min-h-svh w-full">
        <PageHeader />
        {children}
      </main>
    </SidebarProvider>
  )
}
