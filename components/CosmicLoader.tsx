"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Zap } from "lucide-react"
import EducationIcon from "./EducationIcon"
import { useDeviceDetection } from "../hooks/useDeviceDetection"

interface CosmicLoaderProps {
  isLoading: boolean
  onComplete?: () => void
}

export default function CosmicLoader({ isLoading, onComplete }: CosmicLoaderProps) {
  const { isMobile, isLowEnd, prefersReducedMotion } = useDeviceDetection()

  const orbitElements = [
    { icon: EducationIcon, delay: 0, radius: 60, color: "#FFD700" },
    { icon: Zap, delay: 0.3, radius: 80, color: "#8B5CF6" },
    { icon: Sparkles, delay: 0.6, radius: 100, color: "#06B6D4" },
  ]

  // Reduce particle count on mobile/low-end devices
  const particleCount = isMobile ? 15 : isLowEnd ? 20 : 30

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: particleCount }).map((_, i) => (
              <motion.div
                key={`bg-particle-${i}`}
                className="absolute w-1 h-1 bg-[#FFD700]/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  delay: Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Central Loading Animation */}
          <div className="relative">
            {/* Central Education Icon */}
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-to-r from-[#FFD700]/30 to-purple-500/30 border border-[#FFD700]/50 flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 20px rgba(255, 215, 0, 0.3)",
                  "0 0 40px rgba(255, 215, 0, 0.6)",
                  "0 0 20px rgba(255, 215, 0, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <EducationIcon size={32} animated={!prefersReducedMotion} />
            </motion.div>

            {/* Orbiting Elements */}
            {!prefersReducedMotion &&
              orbitElements.map((element, index) => {
                const IconComponent = element.icon
                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      width: element.radius * 2,
                      height: element.radius * 2,
                      marginLeft: -element.radius,
                      marginTop: -element.radius,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4 + index,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: element.delay,
                    }}
                  >
                    <motion.div
                      className="absolute top-0 left-1/2 p-2 rounded-full border"
                      style={{
                        borderColor: `${element.color}40`,
                        backgroundColor: `${element.color}20`,
                        transform: "translateX(-50%)",
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          `0 0 10px ${element.color}40`,
                          `0 0 20px ${element.color}60`,
                          `0 0 10px ${element.color}40`,
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: element.delay,
                      }}
                    >
                      {index === 0 ? (
                        <EducationIcon size={16} animated={false} />
                      ) : (
                        <IconComponent className="w-4 h-4" style={{ color: element.color }} />
                      )}
                    </motion.div>
                  </motion.div>
                )
              })}

            {/* Pulse Rings */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={`ring-${i}`}
                className="absolute top-1/2 left-1/2 border border-[#FFD700]/20 rounded-full"
                style={{
                  width: 120 + i * 40,
                  height: 120 + i * 40,
                  marginLeft: -(60 + i * 20),
                  marginTop: -(60 + i * 20),
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>

          {/* Loading Text */}
          <motion.div
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.h2
              className="text-2xl font-bold text-[#FFD700] mb-4 font-orbitron text-center"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Initializing Educational Journey
            </motion.h2>

            {/* Progress Dots */}
            <div className="flex justify-center space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="w-2 h-2 bg-[#FFD700] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Cosmic Rays - Desktop only */}
          {!isMobile && !prefersReducedMotion && (
            <>
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={`cosmic-ray-${i}`}
                  className="absolute h-px bg-gradient-to-r from-transparent via-[#FFD700]/60 to-transparent"
                  style={{
                    top: "50%",
                    left: "50%",
                    width: "200px",
                    transformOrigin: "0 50%",
                    transform: `rotate(${i * 60}deg)`,
                  }}
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
