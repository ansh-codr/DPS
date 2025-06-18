"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function usePageLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [pathname])

  return { isLoading, setIsLoading }
}
