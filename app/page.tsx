"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Layout from "../components/Layout"
import AnimatedSection from "../components/AnimatedSection"
import AnimatedCard from "../components/AnimatedCard"
import ContactPopup from "../components/ContactPopup"
import PrincipalCard from "../components/PrincipalCard"
import EducationIcon from "../components/EducationIcon"
import OptimizedLoader from "../components/OptimizedLoader"
import ReducedMotionWrapper from "../components/ReducedMotionWrapper"
import { useOptimizedLoading } from "../hooks/useOptimizedLoading"
import { Award, Users, BookOpen, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const { isLoading } = useOptimizedLoading()

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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <OptimizedLoader isLoading={isLoading} />
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
              <ReducedMotionWrapper
                fallback={
                  <div className="inline-block p-4 bg-gradient-to-r from-[#FFD700]/20 to-purple-500/20 rounded-full border border-[#FFD700]/30 mb-6">
                    <EducationIcon size={64} animated={false} />
                  </div>
                }
              >
                <motion.div
                  className="inline-block p-4 bg-gradient-to-r from-[#FFD700]/20 to-purple-500/20 rounded-full border border-[#FFD700]/30 mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <EducationIcon size={64} />
                </motion.div>
              </ReducedMotionWrapper>

              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] via-white to-purple-300 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Dhruv Public School
              </motion.h1>

              <motion.p className="text-lg md:text-xl text-gray-300 mb-4" variants={itemVariants}>
                Aring, Mathura
              </motion.p>

              <motion.p className="text-xl md:text-2xl font-semibold text-[#FFD700] mb-8" variants={itemVariants}>
                Where Learning Meets Vision
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
              <ReducedMotionWrapper
                fallback={
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-600 hover:to-[#FFD700] transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                }
              >
                <motion.button
                  onClick={() => setIsContactOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-600 hover:to-[#FFD700] transition-all duration-300 flex items-center justify-center space-x-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </ReducedMotionWrapper>

              <Link href="/gallery">
                <ReducedMotionWrapper
                  fallback={
                    <button className="px-8 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300">
                      Explore School
                    </button>
                  }
                >
                  <motion.button
                    className="px-8 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-full hover:bg-[#FFD700] hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore School
                  </motion.button>
                </ReducedMotionWrapper>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4">Why Choose DPS Aring?</h2>
              <p className="text-lg md:text-xl text-gray-300">Excellence in every aspect of education</p>
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
                      <ReducedMotionWrapper
                        fallback={
                          <div
                            className="inline-block p-4 rounded-full mb-4"
                            style={{ color: highlight.color, backgroundColor: `${highlight.color}20` }}
                          >
                            {highlight.icon}
                          </div>
                        }
                      >
                        <motion.div
                          className="inline-block p-4 rounded-full mb-4"
                          style={{ color: highlight.color, backgroundColor: `${highlight.color}20` }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {highlight.icon}
                        </motion.div>
                      </ReducedMotionWrapper>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base">{highlight.description}</p>
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
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-4">Ready to Join Our Family?</h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8">Take the first step towards your child's bright future</p>
                <ReducedMotionWrapper
                  fallback={
                    <button
                      onClick={() => setIsContactOpen(true)}
                      className="px-12 py-4 bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-bold text-lg rounded-full hover:from-yellow-600 hover:to-[#FFD700] transition-all duration-300"
                    >
                      Contact Us Today
                    </button>
                  }
                >
                  <motion.button
                    onClick={() => setIsContactOpen(true)}
                    className="px-12 py-4 bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-bold text-lg rounded-full hover:from-yellow-600 hover:to-[#FFD700] transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us Today
                  </motion.button>
                </ReducedMotionWrapper>
              </motion.div>
            </AnimatedCard>
          </div>
        </AnimatedSection>

        <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </Layout>
    </>
  )
}