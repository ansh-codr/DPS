"use client"

import { Component, type ReactNode } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center p-4">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Error Icon */}
            <motion.div
              className="inline-block p-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-500/30 mb-8"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <AlertTriangle className="w-16 h-16 text-red-400" />
            </motion.div>

            {/* Error Title */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-red-400 mb-4 font-orbitron"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              System Error
            </motion.h1>

            {/* Error Message */}
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Something went wrong in our digital cosmos. Our engineers are working to restore the connection.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                onClick={() => window.location.reload()}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-600 hover:to-[#FFD700] transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                <span>Retry</span>
              </motion.button>

              <Link href="/">
                <motion.div
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>Go Home</span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Error Details (Development) */}
            {process.env.NODE_ENV === "development" && this.state.error && (
              <motion.div
                className="mt-8 p-4 bg-black/40 border border-red-500/30 rounded-lg text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <pre className="text-sm text-gray-300 overflow-auto">{this.state.error.message}</pre>
              </motion.div>
            )}
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}
