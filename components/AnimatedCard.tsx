"use client"

import type React from "react"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  glowColor?: string
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  glowColor = "#FFD700",
}: AnimatedCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      variants={{
        hidden: { y: 50, opacity: 0, scale: 0.9 },
        visible: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut",
            delay,
          },
        },
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      style={
        {
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[var(--glow-color)]/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 group-hover:border-[var(--glow-color)]/50 transition-all duration-300">
        {children}
      </div>
    </motion.div>
  )
}
