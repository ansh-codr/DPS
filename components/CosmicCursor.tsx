"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useDeviceDetection } from "../hooks/useDeviceDetection"

export default function CosmicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const { isMobile, supportsHover } = useDeviceDetection()

  useEffect(() => {
    // Don't show custom cursor on mobile or devices without hover
    if (isMobile || !supportsHover) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea')

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [isMobile, supportsHover])

  // Don't render on mobile
  if (isMobile || !supportsHover) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-[#FFD700]/60 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Trailing particles */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`trail-${i}`}
          className="fixed top-0 left-0 w-2 h-2 bg-[#FFD700]/30 rounded-full pointer-events-none z-40"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
          }}
          transition={{
            type: "spring",
            stiffness: 300 - i * 50,
            damping: 30 + i * 5,
          }}
        />
      ))}
    </>
  )
}
