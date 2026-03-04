"use client"

import { useEffect, useTransition } from "react"

export const useIsLoading = (duration = 1) => {
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, duration * 1000))
    })
  }, [])

  return { isPending }
}
