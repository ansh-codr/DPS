"use client"

import { motion } from "framer-motion"
import { Users, Volume2 } from "lucide-react"
import { useSpeech } from "../hooks/useSpeech"
import { useDeviceDetection } from "../hooks/useDeviceDetection"
import { useState } from "react"

export default function PrincipalCard() {
  const { speak } = useSpeech()
  const { isMobile, supportsHover } = useDeviceDetection()
  const [isPlaying, setIsPlaying] = useState(false)

  const handleNameInteraction = () => {
    if (isPlaying) return

    setIsPlaying(true)
    speak("Mahesh Chand Yadav")

    // Reset playing state after a delay
    setTimeout(() => setIsPlaying(false), 2000)
  }

  return (
    <motion.div
      className="grid md:grid-cols-2 gap-8 items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="w-64 h-64 mx-auto bg-gradient-to-br from-[#FFD700]/20 to-purple-500/20 rounded-full flex items-center justify-center border border-[#FFD700]/30 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          {/* Animated background particles */}
          {!isMobile && (
            <>
              {Array.from({ length: 8 }).map((_, i) => (
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
                    duration: 3,
                    delay: i * 0.4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </>
          )}

          <div className="w-56 h-56 bg-gray-700 rounded-full flex items-center justify-center relative">
            <Users className="w-24 h-24 text-[#FFD700]" />

            {/* Floating education symbols around the avatar */}
            {!isMobile && (
              <>
                <motion.div
                  className="absolute -top-4 -right-4 text-2xl"
                  animate={{ rotate: 360, y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  🎓
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 text-xl"
                  animate={{ rotate: -360, y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  📚
                </motion.div>
                <motion.div
                  className="absolute top-1/2 -left-6 text-lg"
                  animate={{ x: [-3, 3, -3], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  ✨
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.h2
          className="text-3xl font-bold text-[#FFD700] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Principal
        </motion.h2>

        <motion.div
          className="group cursor-pointer inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={isMobile ? handleNameInteraction : undefined}
          onMouseEnter={supportsHover ? handleNameInteraction : undefined}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative">
            <motion.h3
              className="text-2xl font-semibold text-white mb-2 relative"
              animate={
                isPlaying
                  ? {
                      textShadow: [
                        "0 0 5px rgba(255, 215, 0, 0.5)",
                        "0 0 20px rgba(255, 215, 0, 0.8)",
                        "0 0 5px rgba(255, 215, 0, 0.5)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.5 }}
            >
              Mahesh Chand Yadav
              {/* Sound indicator */}
              <motion.div
                className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isPlaying
                    ? {
                        opacity: 1,
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.3 }}
              >
                <Volume2 className="w-5 h-5 text-[#FFD700]" />
              </motion.div>
            </motion.h3>

            {/* Hover/tap indicator */}
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-purple-500 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Sound waves animation */}
            {isPlaying && (
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={`wave-${i}`}
                    className="absolute inset-0 border-2 border-[#FFD700]/30 rounded-lg"
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{
                      scale: [1, 1.5, 2],
                      opacity: [0.6, 0.3, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: 1,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Mobile tap hint */}
          {isMobile && (
            <motion.p
              className="text-xs text-gray-400 mt-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Tap to hear name
            </motion.p>
          )}
        </motion.div>

        <motion.p
          className="text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          B.Sc, B.Ed, M.A, Dip.in.Comp, LL.B
        </motion.p>

        <motion.blockquote
          className="text-lg text-gray-200 italic border-l-4 border-[#FFD700] pl-4 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          "Education is not just about acquiring knowledge, but about nurturing the complete personality of every
          student. At Dhruv Public School, we believe in creating future leaders who will make a positive impact on
          society."
          {/* Floating quote marks */}
          <motion.span
            className="absolute -left-6 -top-2 text-4xl text-[#FFD700]/30"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            "
          </motion.span>
        </motion.blockquote>
      </motion.div>
    </motion.div>
  )
}
