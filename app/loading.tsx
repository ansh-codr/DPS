"use client"

import { motion } from "framer-motion"
import { Star, Zap, Sparkles } from "lucide-react"

export default function Loading() {
  const loadingElements = [
    { icon: Star, delay: 0, color: "#FFD700" },
    { icon: Zap, delay: 0.2, color: "#8B5CF6" },
    { icon: Sparkles, delay: 0.4, color: "#06B6D4" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Loading Animation */}
        <div className="relative mb-8">
          <motion.div
            className="w-24 h-24 border-4 border-[#FFD700]/30 border-t-[#FFD700] rounded-full mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Floating Icons */}
          <div className="absolute inset-0 flex items-center justify-center">
            {loadingElements.map((element, index) => {
              const IconComponent = element.icon
              return (
                <motion.div
                  key={index}
                  className="absolute"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: element.delay },
                  }}
                  style={{
                    transform: `rotate(${index * 120}deg) translateY(-40px)`,
                  }}
                >
                  <IconComponent className="w-6 h-6" style={{ color: element.color }} />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Loading Text */}
        <motion.h2
          className="text-2xl font-bold text-[#FFD700] mb-4 font-orbitron"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.h2>

        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Preparing your cosmic journey
        </motion.p>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-[#FFD700] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
