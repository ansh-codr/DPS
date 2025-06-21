"use client"

import { useState, useEffect } from "react"

interface DeviceInfo {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isLowEnd: boolean
  prefersReducedMotion: boolean
}

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLowEnd: false,
    prefersReducedMotion: false,
  })

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      const isTablet = /ipad|android(?!.*mobile)/i.test(userAgent)
      const isDesktop = !isMobile && !isTablet

      // Check for low-end devices
      const isLowEnd =
        navigator.hardwareConcurrency <= 2 ||
        (navigator as any).deviceMemory <= 2 ||
        /android.*version\/[0-4]/i.test(userAgent)

      // Check motion preferences
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isLowEnd,
        prefersReducedMotion,
      })
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  return deviceInfo
}