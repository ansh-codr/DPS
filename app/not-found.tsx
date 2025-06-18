"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Layout from "../components/Layout"
import AnimatedSection from "../components/AnimatedSection"
import {
  Home,
  Search,
  ArrowLeft,
  Zap,
  Star,
  Sparkles,
  AlertTriangle,
  Rocket,
  Globe,
  BookOpen,
  Trophy,
  Camera,
} from "lucide-react"

export default function NotFound() {
  const [glitchText, setGlitchText] = useState("404")
  const [showAlternateText, setShowAlternateText] = useState(false)

  const glitchVariations = ["404", "4Ø4", "4０4", "４０４", "404"]

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const randomText = glitchVariations[Math.floor(Math.random() * glitchVariations.length)]
      setGlitchText(randomText)

      setTimeout(() => {
        setGlitchText("404")
      }, 150)
    }, 3000)

    const alternateInterval = setInterval(() => {
      setShowAlternateText((prev) => !prev)
    }, 4000)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(alternateInterval)
    }
  }, [])

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    icon: [Star, Sparkles, Zap, Globe][i % 4],
    delay: i * 0.5,
    duration: 3 + (i % 3),
  }))

  const quickLinks = [
    {
      href: "/",
      label: "Home",
      icon: <Home className="w-5 h-5" />,
      description: "Return to homepage",
      color: "#FFD700",
    },
    {
      href: "/about",
      label: "About Us",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Learn about our school",
      color: "#8B5CF6",
    },
    {
      href: "/gallery",
      label: "Gallery",
      icon: <Camera className="w-5 h-5" />,
      description: "View our photo gallery",
      color: "#06B6D4",
    },
    {
      href: "/achievements",
      label: "Achievements",
      icon: <Trophy className="w-5 h-5" />,
      description: "See our accomplishments",
      color: "#F59E0B",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const glitchVariants = {
    normal: {
      x: 0,
      textShadow: "0 0 0px rgba(255, 215, 0, 0)",
    },
    glitch: {
      x: [-2, 2, -2, 2, 0],
      textShadow: [
        "2px 0 0 #ff0000, -2px 0 0 #00ffff",
        "-2px 0 0 #ff0000, 2px 0 0 #00ffff",
        "2px 0 0 #ff0000, -2px 0 0 #00ffff",
        "-2px 0 0 #ff0000, 2px 0 0 #00ffff",
        "0 0 20px rgba(255, 215, 0, 0.8)",
      ],
      transition: {
        duration: 0.3,
        times: [0, 0.25, 0.5, 0.75, 1],
      },
    },
  }

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingElements.map((element) => {
            const IconComponent = element.icon
            return (
              <motion.div
                key={element.id}
                className="absolute text-[#FFD700]/20"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0,
                }}
                animate={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                  opacity: [0, 0.3, 0],
                  rotate: 360,
                }}
                transition={{
                  duration: element.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: element.delay,
                  ease: "linear",
                }}
              >
                <IconComponent className="w-8 h-8" />
              </motion.div>
            )
          })}
        </div>

        {/* Main Content */}
        <motion.div
          className="text-center max-w-4xl mx-auto px-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Title with Glitch Effect */}
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.div
              className="text-9xl md:text-[12rem] font-bold text-[#FFD700] mb-4 font-orbitron"
              variants={glitchVariants}
              animate={showAlternateText ? "glitch" : "normal"}
            >
              {glitchText}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-purple-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <div className="relative bg-black/40 backdrop-blur-md border border-[#FFD700]/30 rounded-full px-8 py-4 inline-block">
                <motion.div
                  className="flex items-center space-x-3"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <span className="text-xl font-semibold text-white">Page Not Found</span>
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Error Messages */}
          <motion.div className="mb-12" variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.h1
                key={showAlternateText ? "alt" : "main"}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {showAlternateText ? "Lost in the Digital Cosmos?" : "Oops! This Page Has Vanished Into Space"}
              </motion.h1>
            </AnimatePresence>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              The page you're looking for seems to have been transported to another dimension. Let's help you navigate
              back to familiar territory.
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-600 hover:to-[#FFD700] transition-all duration-300 group"
              >
                <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Return Home</span>
              </Link>
            </motion.div>

            <motion.button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Go Back</span>
            </motion.button>
          </motion.div>

          {/* Quick Navigation Links */}
          <AnimatedSection>
            <motion.div
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8"
              variants={itemVariants}
            >
              <motion.h2
                className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center justify-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Rocket className="w-6 h-6" />
                <span>Quick Navigation</span>
                <Rocket className="w-6 h-6" />
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {quickLinks.map((link, index) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link href={link.href}>
                      <motion.div
                        className="group relative p-4 bg-black/30 border border-white/10 rounded-xl hover:border-white/30 transition-all duration-300 cursor-pointer"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: `0 0 20px ${link.color}40`,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(45deg, ${link.color}20, ${link.color}10)`,
                          }}
                        />

                        <div className="relative text-center">
                          <motion.div
                            className="inline-block p-3 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300"
                            style={{
                              color: link.color,
                              backgroundColor: `${link.color}20`,
                            }}
                          >
                            {link.icon}
                          </motion.div>
                          <h3 className="text-white font-semibold mb-1">{link.label}</h3>
                          <p className="text-gray-400 text-sm">{link.description}</p>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Fun Interactive Element */}
          <motion.div className="mt-12" variants={itemVariants}>
            <motion.div
              className="inline-block p-4 bg-gradient-to-r from-purple-500/20 to-[#FFD700]/20 rounded-full border border-purple-500/30 cursor-pointer"
              whileHover={{
                scale: 1.1,
                rotate: 360,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                // Trigger a fun animation
                setShowAlternateText(!showAlternateText)
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Search className="w-8 h-8 text-purple-400" />
              </motion.div>
            </motion.div>
            <p className="text-gray-400 text-sm mt-2">Click to explore the cosmos!</p>
          </motion.div>

          {/* School Branding */}
          <motion.div className="mt-16 text-center" variants={itemVariants}>
            <motion.div
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFD700]/10 to-purple-500/10 rounded-full border border-[#FFD700]/30"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#FFD700] font-semibold">
                🌟 Dhruv Public School - Where Learning Meets Vision 🌟
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </Layout>
  )
}
