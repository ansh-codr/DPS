"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Layout from "../components/Layout"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const quickLinks = [
    {
      href: "/",
      label: "Home",
      description: "Return to homepage",
      color: "#FFD700",
    },
    {
      href: "/about",
      label: "About Us",
      description: "Learn about our school",
      color: "#8B5CF6",
    },
    {
      href: "/gallery",
      label: "Gallery",
      description: "View our photo gallery",
      color: "#06B6D4",
    },
    {
      href: "/achievements",
      label: "Achievements",
      description: "See our accomplishments",
      color: "#F59E0B",
    },
  ]

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
          {/* 404 Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-9xl md:text-[12rem] font-bold text-[#FFD700] mb-4 font-orbitron">
              404
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist in our cosmic database.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-600 hover:to-[#FFD700] transition-all duration-300 flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Return Home</span>
              </motion.button>
            </Link>

            {isClient && (
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Go Back</span>
              </motion.button>
            )}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-8">Quick Navigation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={link.href}>
                    <div
                      className="p-6 rounded-lg border border-white/10 hover:border-[#FFD700]/50 transition-all duration-300 group cursor-pointer"
                      style={{
                        background: `linear-gradient(135deg, ${link.color}10, ${link.color}05)`,
                      }}
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FFD700] transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* School Branding */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFD700]/10 to-purple-500/10 rounded-full border border-[#FFD700]/30">
              <span className="text-[#FFD700] font-semibold">
                🌟 Dhruv Public School - Where Learning Meets Vision 🌟
              </span>
            </div>
          </motion.div>
        </div>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523FFD700%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div>
      </div>
    </Layout>
  )
}
