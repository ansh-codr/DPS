"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

interface EducationIconProps {
  size?: number
  className?: string
  animated?: boolean
}

export default function EducationIcon({ size = 64, className = "", animated = true }: EducationIconProps) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      {/* Main Book */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={animated ? { rotate: [0, 5, -5, 0] } : {}}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="relative">
          {/* Book Base */}
          <div
            className="bg-gradient-to-br from-[#FFD700] to-yellow-600 rounded-lg shadow-lg border-2 border-[#FFD700]/30"
            style={{ width: size * 0.7, height: size * 0.5 }}
          >
            {/* Book Pages */}
            <div className="absolute top-1 right-1 bottom-1 left-1 bg-white/90 rounded-md">
              {/* Page Lines */}
              <div className="p-1 space-y-0.5">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-0.5 bg-gray-300 rounded" style={{ width: `${80 - i * 10}%` }} />
                ))}
              </div>
            </div>

            {/* Book Spine */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-700 to-yellow-800 rounded-l-lg" />
          </div>

          {/* Floating Knowledge Particles */}
          {animated && (
            <>
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-[#FFD700] rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    delay: i * 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Graduation Cap */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                {/* Cap Base */}
                <div className="w-5 h-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-t-lg" />
                {/* Cap Top */}
                <div className="absolute -top-1 -left-1 w-7 h-1 bg-gradient-to-r from-purple-700 to-purple-800 rounded-full" />
                {/* Tassel */}
                <motion.div
                  className="absolute top-0 right-0 w-0.5 h-3 bg-[#FFD700]"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              {/* Sparkles */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-2 h-2 text-[#FFD700]" />
                </motion.div>
              ))}
            </>
          )}
        </div>
      </motion.div>
    </div>
  )
}
