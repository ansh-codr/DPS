"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function useOptimizedLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)

    // Simulate realistic loading time based on page
    const loadingTime = pathname === "/" ? 1500 : 800

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, loadingTime)

    return () => clearTimeout(timer)
  }, [pathname])

  return { isLoading, setIsLoading }
}