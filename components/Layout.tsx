"use client"

import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
// Import the new components at the top
import ParallaxBackground from "./ParallaxBackground"
import PageTransition from "./PageTransition"

interface LayoutProps {
  children: ReactNode
}

// Update the Layout component to remove cosmic cursor
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-x-hidden">
      {/* Parallax Background Effects */}
      <ParallaxBackground />

      {/* Animated background stars (keep existing) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523FFD700%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#FFD700] rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </div>
    </div>
  )
}