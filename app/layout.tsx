import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import ErrorBoundary from "../components/ErrorBoundary"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "Dhruv Public School Aring, Mathura - Where Learning Meets Vision",
  description:
    "Premier educational institution in Aring, Mathura, providing quality education and holistic development for students.",
  keywords: "school, education, Mathura, Aring, Dhruv Public School, quality education",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-sans`}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  )
}
