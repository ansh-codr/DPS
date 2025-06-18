"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "../../components/Layout"
import AnimatedSection from "../../components/AnimatedSection"
import AnimatedCard from "../../components/AnimatedCard"
import {
  Trophy,
  Medal,
  Star,
  Calendar,
  Users,
  BookOpen,
  Award,
  Target,
  Zap,
  Crown,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Import the new components at the top
import CosmicLoader from "../../components/CosmicLoader"
import { usePageLoading } from "../../hooks/usePageLoading"

// Add loading state to Achievements component
export default function Achievements() {
  const [activeTab, setActiveTab] = useState("awards")
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const { isLoading } = usePageLoading()

  const awards = [
    {
      title: "Best Academic Performance",
      year: "2023",
      description: "Recognized for outstanding board exam results with 98% pass rate",
      icon: <Trophy className="w-8 h-8" />,
      color: "#FFD700",
      category: "Academic",
    },
    {
      title: "Excellence in Science Education",
      year: "2023",
      description: "State-level recognition for innovative science teaching methods",
      icon: <Medal className="w-8 h-8" />,
      color: "#8B5CF6",
      category: "Academic",
    },
    {
      title: "Best Sports Achievement",
      year: "2022",
      description: "District championship in inter-school sports competition",
      icon: <Award className="w-8 h-8" />,
      color: "#06B6D4",
      category: "Sports",
    },
    {
      title: "Cultural Excellence Award",
      year: "2022",
      description: "Outstanding performance in regional cultural competitions",
      icon: <Star className="w-8 h-8" />,
      color: "#F59E0B",
      category: "Cultural",
    },
    {
      title: "Digital Innovation Award",
      year: "2023",
      description: "Recognition for implementing modern teaching technologies",
      icon: <Zap className="w-8 h-8" />,
      color: "#10B981",
      category: "Innovation",
    },
    {
      title: "Community Service Excellence",
      year: "2023",
      description: "Honored for outstanding community outreach programs",
      icon: <Crown className="w-8 h-8" />,
      color: "#EF4444",
      category: "Community",
    },
  ]

  const events = [
    {
      title: "Annual Science Fair 2023",
      date: "March 15, 2023",
      description: "Students showcased innovative projects in science and technology",
      participants: "200+ Students",
      highlights: ["50+ Projects", "Guest Judges", "Innovation Awards"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Sports Day Championship",
      date: "February 20, 2023",
      description: "Inter-house sports competition with various athletic events",
      participants: "300+ Students",
      highlights: ["Track & Field", "Team Sports", "Individual Events"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Cultural Festival 2023",
      date: "January 10, 2023",
      description: "Celebration of arts, music, dance, and cultural diversity",
      participants: "400+ Students",
      highlights: ["Dance Performances", "Music Concerts", "Art Exhibition"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Academic Excellence Ceremony",
      date: "April 5, 2023",
      description: "Recognition ceremony for top-performing students",
      participants: "150+ Students",
      highlights: ["Merit Awards", "Scholarships", "Special Recognition"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const accomplishments = [
    {
      metric: "98%",
      label: "Board Pass Rate",
      description: "Exceptional academic performance in board examinations",
      icon: <BookOpen className="w-6 h-6" />,
      color: "#FFD700",
    },
    {
      metric: "500+",
      label: "Happy Students",
      description: "Students currently enrolled and thriving",
      icon: <Users className="w-6 h-6" />,
      color: "#8B5CF6",
    },
    {
      metric: "25+",
      label: "Expert Teachers",
      description: "Qualified and experienced faculty members",
      icon: <Target className="w-6 h-6" />,
      color: "#06B6D4",
    },
    {
      metric: "15+",
      label: "Years of Excellence",
      description: "Serving the community with quality education",
      icon: <Sparkles className="w-6 h-6" />,
      color: "#F59E0B",
    },
  ]

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length)
  }

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  const tabs = [
    { id: "awards", label: "Awards & Recognition", icon: <Trophy className="w-5 h-5" /> },
    { id: "events", label: "Events & Activities", icon: <Calendar className="w-5 h-5" /> },
    { id: "stats", label: "Accomplishments", icon: <Target className="w-5 h-5" /> },
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const counterVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
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
        <div className="pt-24 pb-20">
          {/* Hero Section */}
          <AnimatedSection className="px-4 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className="inline-block p-4 bg-gradient-to-r from-[#FFD700]/20 to-purple-500/20 rounded-full border border-[#FFD700]/30 mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Trophy className="w-16 h-16 text-[#FFD700]" />
                </motion.div>
              </motion.div>
              <motion.h1
                className="text-5xl font-bold text-[#FFD700] mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Achievements
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Celebrating excellence, innovation, and success in education
              </motion.p>
            </div>
          </AnimatedSection>

          {/* Navigation Tabs */}
          <AnimatedSection className="px-4 mb-12">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {tabs.map((tab, index) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black"
                        : "bg-black/40 text-gray-300 hover:bg-black/60 hover:text-[#FFD700] border border-white/10"
                    }`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Awards Section */}
          <AnimatePresence mode="wait">
            {activeTab === "awards" && (
              <motion.section
                className="px-4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Awards & Recognition</h2>
                    <p className="text-gray-300">Honoring our commitment to excellence</p>
                  </motion.div>

                  <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {awards.map((award, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <AnimatedCard glowColor={award.color} delay={index * 0.1}>
                          <div className="text-center">
                            <motion.div
                              className="inline-block p-4 rounded-full mb-4"
                              style={{
                                color: award.color,
                                backgroundColor: `${award.color}20`,
                              }}
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              {award.icon}
                            </motion.div>
                            <motion.div
                              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                              style={{
                                color: award.color,
                                backgroundColor: `${award.color}20`,
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {award.category}
                            </motion.div>
                            <h3 className="text-xl font-semibold text-white mb-2">{award.title}</h3>
                            <p className="text-[#FFD700] font-semibold mb-3">{award.year}</p>
                            <p className="text-gray-300 text-sm">{award.description}</p>
                          </div>
                        </AnimatedCard>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.section>
            )}

            {/* Events Section */}
            {activeTab === "events" && (
              <motion.section
                className="px-4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Events & Activities</h2>
                    <p className="text-gray-300">Memorable moments and celebrations</p>
                  </motion.div>

                  {/* Featured Event Carousel */}
                  <div className="mb-12">
                    <AnimatedCard className="relative overflow-hidden">
                      <motion.div
                        className="grid md:grid-cols-2 gap-8 items-center"
                        key={currentEventIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div>
                          <motion.div
                            className="flex items-center space-x-2 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Calendar className="w-5 h-5 text-[#FFD700]" />
                            <span className="text-[#FFD700] font-semibold">{events[currentEventIndex].date}</span>
                          </motion.div>
                          <motion.h3
                            className="text-2xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {events[currentEventIndex].title}
                          </motion.h3>
                          <motion.p
                            className="text-gray-300 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {events[currentEventIndex].description}
                          </motion.p>
                          <motion.div
                            className="flex items-center space-x-2 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <Users className="w-4 h-4 text-purple-400" />
                            <span className="text-purple-400 font-semibold">
                              {events[currentEventIndex].participants}
                            </span>
                          </motion.div>
                          <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <p className="text-sm font-semibold text-gray-300">Highlights:</p>
                            <div className="flex flex-wrap gap-2">
                              {events[currentEventIndex].highlights.map((highlight, idx) => (
                                <motion.span
                                  key={idx}
                                  className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-xs font-semibold"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.6 + idx * 0.1 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {highlight}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                        <motion.div
                          className="relative"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <img
                            src={events[currentEventIndex].image || "/placeholder.svg"}
                            alt={events[currentEventIndex].title}
                            className="w-full h-64 object-cover rounded-lg border border-[#FFD700]/30"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                        </motion.div>
                      </motion.div>

                      {/* Navigation Buttons */}
                      <motion.div className="absolute top-1/2 left-4 transform -translate-y-1/2" whileHover={{ x: -5 }}>
                        <button
                          onClick={prevEvent}
                          className="p-2 bg-black/60 hover:bg-black/80 rounded-full text-[#FFD700] transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                      </motion.div>
                      <motion.div className="absolute top-1/2 right-4 transform -translate-y-1/2" whileHover={{ x: 5 }}>
                        <button
                          onClick={nextEvent}
                          className="p-2 bg-black/60 hover:bg-black/80 rounded-full text-[#FFD700] transition-colors"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </motion.div>
                    </AnimatedCard>
                  </div>

                  {/* Event Grid */}
                  <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {events.map((event, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <AnimatedCard
                          className={`cursor-pointer transition-all duration-300 ${
                            index === currentEventIndex ? "ring-2 ring-[#FFD700]" : ""
                          }`}
                          onClick={() => setCurrentEventIndex(index)}
                        >
                          <div className="text-center">
                            <motion.img
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              className="w-full h-32 object-cover rounded-lg mb-3"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            />
                            <h4 className="text-sm font-semibold text-white mb-1">{event.title}</h4>
                            <p className="text-xs text-[#FFD700]">{event.date}</p>
                          </div>
                        </AnimatedCard>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.section>
            )}

            {/* Accomplishments Section */}
            {activeTab === "stats" && (
              <motion.section
                className="px-4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-6xl mx-auto">
                  <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Our Accomplishments</h2>
                    <p className="text-gray-300">Numbers that speak of our success</p>
                  </motion.div>

                  <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {accomplishments.map((stat, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <AnimatedCard glowColor={stat.color}>
                          <div className="text-center">
                            <motion.div
                              className="inline-block p-3 rounded-full mb-4"
                              style={{
                                color: stat.color,
                                backgroundColor: `${stat.color}20`,
                              }}
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              {stat.icon}
                            </motion.div>
                            <motion.div
                              className="text-4xl font-bold mb-2"
                              style={{ color: stat.color }}
                              variants={counterVariants}
                              whileInView="visible"
                              viewport={{ once: true }}
                            >
                              {stat.metric}
                            </motion.div>
                            <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
                            <p className="text-gray-300 text-sm">{stat.description}</p>
                          </div>
                        </AnimatedCard>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Additional Stats */}
                  <AnimatedCard>
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold text-[#FFD700] mb-8">More Achievements</h3>
                      <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.div variants={itemVariants}>
                          <motion.div className="text-3xl font-bold text-purple-400 mb-2" variants={counterVariants}>
                            100%
                          </motion.div>
                          <p className="text-white font-semibold mb-1">Teacher Qualification</p>
                          <p className="text-gray-300 text-sm">All faculty members are professionally qualified</p>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <motion.div className="text-3xl font-bold text-blue-400 mb-2" variants={counterVariants}>
                            50+
                          </motion.div>
                          <p className="text-white font-semibold mb-1">Extracurricular Activities</p>
                          <p className="text-gray-300 text-sm">Diverse programs for holistic development</p>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <motion.div className="text-3xl font-bold text-green-400 mb-2" variants={counterVariants}>
                            95%
                          </motion.div>
                          <p className="text-white font-semibold mb-1">Parent Satisfaction</p>
                          <p className="text-gray-300 text-sm">High satisfaction rate among parents</p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </AnimatedCard>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </Layout>
    </>
  )
}
