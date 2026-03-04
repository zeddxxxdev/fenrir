"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { sidebar_items } from "@/constants/sidebar.constants"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { IoExit } from "react-icons/io5"
import { useTheme } from "next-themes"
import { useState } from "react"

export function AppSidebar() {
  const { setTheme } = useTheme()
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sidebar collapsible="none" className="h-full">
      <SidebarHeader className="px-5 py-7">
        <div className="flex items-center gap-2">
          <div className="grid size-6 place-items-center rounded-full bg-primary">
            <div className="size-2 rounded-full bg-white" />
          </div>

          <p className="mb-1.5 text-2xl leading-none font-medium text-primary">
            aps
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent className="divide-y divide-muted/20 dark:divide-muted/50">
        {Object.entries(sidebar_items).map(([key, items]) => (
          <SidebarGroup key={key} className="px-3 first:pb-7">
            <SidebarGroupLabel className="sr-only">{key}</SidebarGroupLabel>
            <SidebarGroupContent className="">
              <SidebarMenu className="space-y-1">
                {items.map(({ label, href, isNew = false, ...icon }) => {
                  const active = pathname === href

                  return (
                    <SidebarMenuItem key={label} className="">
                      <SidebarMenuButton
                        isActive={active}
                        asChild
                        className="group"
                      >
                        <Link href={href} className="flex items-center gap-2">
                          <div className="relative">
                            <icon.icon className="size-4 [&_path]:stroke-muted group-data-active:[&_path]:stroke-primary" />
                            <span
                              hidden={!isNew}
                              className="absolute top-full left-0 block size-1.5 -translate-y-1 rounded-full bg-notification"
                            />
                          </div>
                          <p>{label}</p>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-muted/20 p-6 dark:border-muted/50">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-12 rounded-full bg-yellow-400" />

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">admin@edu.com</p>
              <p className="font-medium dark:text-white">Security Lead</p>
            </div>
          </div>

          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button size="icon-sm" variant="ghost">
                <ChevronRight className="size-5 dark:text-white/50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" side="right" className="w-56">
              <Button
                size="lg"
                variant="ghost"
                onClick={() => {
                  setTheme((prev) => (prev === "light" ? "dark" : "light"))
                  setIsOpen(false)
                }}
                className="font-normal"
              >
                Toggle Mode
              </Button>

              <Link
                href="/register"
                className="flex h-9 items-center justify-center gap-3 rounded text-center text-destructive hover:bg-destructive/10"
              >
                Logout <IoExit />
              </Link>
            </PopoverContent>
          </Popover>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
