"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
}

export default function LazyImage({ src, alt, className = "", placeholder = "/placeholder.svg" }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <motion.div
        className="absolute inset-0 bg-gray-800 flex items-center justify-center"
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-8 h-8 border-2 border-[#FFD700] border-t-transparent rounded-full animate-spin" />
      </motion.div>

      {/* Actual Image */}
      {isInView && (
        <motion.img
          src={src || placeholder}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  )
}