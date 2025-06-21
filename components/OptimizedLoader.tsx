"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface OptimizedLoaderProps {
  isLoading: boolean
  onComplete?: () => void
}

export default function OptimizedLoader({ isLoading, onComplete }: OptimizedLoaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => onComplete?.(), 300)
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [isLoading, onComplete])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Simple Progress Bar */}
          <div className="w-80 max-w-[90vw]">
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[#FFD700] mb-2 font-orbitron">
                Dhruv Public School
              </h2>
              <p className="text-gray-300 text-sm">Loading...</p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
              <motion.div
                className="bg-gradient-to-r from-[#FFD700] to-yellow-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Progress Text */}
            <div className="text-center text-gray-400 text-sm">
              {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}