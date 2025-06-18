"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Layout from "../components/Layout"
import AnimatedSection from "../components/AnimatedSection"
import AnimatedCard from "../components/AnimatedCard"
import ContactPopup from "../components/ContactPopup"
import PrincipalCard from "../components/PrincipalCard"
import EducationIcon from "../components/EducationIcon"
import { Award, Users, BookOpen, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

// Import the new hooks and components
import CosmicLoader from "../components/CosmicLoader"
import { usePageLoading } from "../hooks/usePageLoading"

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const { isLoading } = usePageLoading()

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Consistently achieving top results in board examinations",
      color: "#FFD700",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Dedicated teachers with years of experience",
      color: "#8B5CF6",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Modern Curriculum",
      description: "Updated syllabus aligned with future needs",
      color: "#06B6D4",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Holistic Development",
      description: "Focus on overall personality development",
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <CosmicLoader isLoading={isLoading} />
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0c29]/50 to-[#302b63]/80"></div>

          <motion.div
            className="relative z-10 text-center max-w-4xl mx-auto px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <motion.div
                className="inline-block p-4 bg-gradient-to-r from-[#FFD700]/20 to-purple-500/20 rounded-full border border-[#FFD700]/30 mb-6"
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <EducationIcon size={64} />
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] via-white to-purple-300 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Dhruv Public School
              </motion.h1>

              <motion.p className="text-xl md:text-2xl text-gray-300 mb-4" variants={itemVariants}>
                Aring, Mathura
              </motion.p>

              <motion.p className="text-2xl md:text-3xl font-semibold text-[#FFD700] mb-8" variants={itemVariants}>
                Where Learning Meets Vision
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <motion.button
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-600 hover:to-[#FFD700] transition-all duration-300 flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Apply Now</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <Link href="/gallery">
                <motion.button
                  className="px-8 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore School
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Principal Section */}
        <AnimatedSection className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedCard className="mb-16">
              <PrincipalCard />
            </AnimatedCard>
          </div>
        </AnimatedSection>

        {/* Highlights Section */}
        <AnimatedSection className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Why Choose DPS Aring?</h2>
              <p className="text-xl text-gray-300">Excellence in every aspect of education</p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((highlight, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AnimatedCard glowColor={highlight.color} delay={index * 0.1}>
                    <div className="text-center">
                      <motion.div
                        className="inline-block p-4 rounded-full mb-4"
                        style={{ color: highlight.color, backgroundColor: `${highlight.color}20` }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {highlight.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                      <p className="text-gray-300">{highlight.description}</p>
                    </div>
                  </AnimatedCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedCard>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Ready to Join Our Family?</h2>
                <p className="text-xl text-gray-300 mb-8">Take the first step towards your child's bright future</p>
                <motion.button
                  onClick={() => setIsContactOpen(true)}
                  className="px-12 py-4 bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-bold text-lg rounded-full hover:from-yellow-600 hover:to-[#FFD700] transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us Today
                </motion.button>
              </motion.div>
            </AnimatedCard>
          </div>
        </AnimatedSection>

        <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </Layout>
    </>
  )
}
