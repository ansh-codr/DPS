"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useDeviceDetection } from "../hooks/useDeviceDetection"

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const { isMobile, isLowEnd, prefersReducedMotion } = useDeviceDetection()

  // Reduce effects on mobile and low-end devices
  const particleCount = isMobile ? 20 : isLowEnd ? 30 : 50
  const orbCount = isMobile ? 4 : isLowEnd ? 6 : 8
  const constellationCount = isMobile ? 6 : isLowEnd ? 8 : 12

  // Parallax transforms for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? -10 : -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? -20 : -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? -30 : -150])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 90 : 360])

  // Constellation points
  const constellationPoints = Array.from({ length: constellationCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.2,
  }))

  // Floating orbs
  const floatingOrbs = Array.from({ length: orbCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: i * 0.5,
  }))

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-purple-500/5" />
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
          `,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 60% 60%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)`,
            `radial-gradient(circle at 40% 60%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: isMobile ? 30 : 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Constellation Lines */}
      <motion.div className="absolute inset-0" style={{ y: y1 }}>
        <svg className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {constellationPoints.map((point, index) => {
            const nextPoint = constellationPoints[(index + 1) % constellationPoints.length]
            return (
              <motion.line
                key={`line-${index}`}
                x1={`${point.x}%`}
                y1={`${point.y}%`}
                x2={`${nextPoint.x}%`}
                y2={`${nextPoint.y}%`}
                stroke="url(#constellationGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                  duration: isMobile ? 3 : 2,
                  delay: point.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  repeatDelay: 3,
                }}
              />
            )
          })}
        </svg>
      </motion.div>

      {/* Constellation Points */}
      <motion.div className="absolute inset-0" style={{ y: y2 }}>
        {constellationPoints.map((point) => (
          <motion.div
            key={`point-${point.id}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              background: "radial-gradient(circle, #FFD700 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: isMobile ? 4 : 3,
              delay: point.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Floating Orbs */}
      <motion.div className="absolute inset-0" style={{ y: y3 }}>
        {floatingOrbs.map((orb) => (
          <motion.div
            key={`orb-${orb.id}`}
            className="absolute rounded-full"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: `radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, rgba(139, 92, 246, 0.3) 50%, transparent 100%)`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: orb.duration,
              delay: orb.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Orbital Ring - Reduced on mobile */}
      {!isMobile && (
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 border border-[#FFD700]/10 rounded-full"
          style={{
            x: "-50%",
            y: "-50%",
            rotate,
          }}
        >
          <motion.div
            className="absolute top-0 left-1/2 w-2 h-2 bg-[#FFD700]/60 rounded-full"
            style={{ x: "-50%", y: "-50%" }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}

      {/* Particle Field */}
      <div className="absolute inset-0">
        {Array.from({ length: particleCount }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-[#FFD700]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              delay: Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Cosmic Rays - Desktop only */}
      {!isMobile && (
        <motion.div className="absolute inset-0 opacity-20">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
              style={{
                top: `${20 + i * 30}%`,
                left: "-100%",
                width: "200%",
                transform: `rotate(${i * 15}deg)`,
              }}
              animate={{
                x: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                delay: i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  )
}
