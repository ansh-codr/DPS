"use client"

import type React from "react"

import type { ReactNode } from "react"

interface CardSectionProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export default function CardSection({ children, className = "", glowColor = "#FFD700" }: CardSectionProps) {
  return (
    <div
      className={`relative group ${className}`}
      style={
        {
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--glow-color)]/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 group-hover:border-[var(--glow-color)]/50 transition-all duration-300">
        {children}
      </div>
    </div>
  )
}
