"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "../../components/Layout"
import AnimatedSection from "../../components/AnimatedSection"
import AnimatedCard from "../../components/AnimatedCard"
import { Search, X, ChevronLeft, ChevronRight, Camera, Building, Users, BookOpen, Trophy, Filter } from "lucide-react"

// Import the new components at the top
import CosmicLoader from "../../components/CosmicLoader"
import { usePageLoading } from "../../hooks/usePageLoading"

interface GalleryImage {
  id: number
  src: string
  title: string
  description: string
  category: string
  tags: string[]
}

// Add loading state to Gallery component
export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { isLoading } = usePageLoading()

  const galleryImages: GalleryImage[] = [
    // School Building & Facilities
    {
      id: 1,
      src: "/assets/Name_wise/group photo.jpeg",
      title: "Main School Building",
      description: "Our modern and well-equipped main academic building",
      category: "facilities",
      tags: ["building", "architecture", "modern"],
    },
    {
      id: 2,
      src: "/assets/Name_wise/assembly3.jpeg",
      title: "Science Laboratory",
      description: "State-of-the-art science lab with modern equipment",
      category: "facilities",
      tags: ["laboratory", "science", "equipment"],
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      title: "Computer Lab",
      description: "Modern computer laboratory with latest technology",
      category: "facilities",
      tags: ["computer", "technology", "learning"],
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      title: "Library",
      description: "Well-stocked library with thousands of books",
      category: "facilities",
      tags: ["library", "books", "reading"],
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      title: "Sports Ground",
      description: "Spacious playground for various sports activities",
      category: "facilities",
      tags: ["sports", "playground", "activities"],
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      title: "Auditorium",
      description: "Large auditorium for events and assemblies",
      category: "facilities",
      tags: ["auditorium", "events", "assembly"],
    },

    // Student Life
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      title: "Morning Assembly",
      description: "Students participating in daily morning assembly",
      category: "student-life",
      tags: ["assembly", "students", "morning"],
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600",
      title: "Classroom Learning",
      description: "Interactive learning session in progress",
      category: "student-life",
      tags: ["classroom", "learning", "teaching"],
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      title: "Group Study",
      description: "Students collaborating in group study session",
      category: "student-life",
      tags: ["study", "collaboration", "teamwork"],
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600",
      title: "Art Class",
      description: "Creative art session with students",
      category: "student-life",
      tags: ["art", "creativity", "painting"],
    },

    // Events & Activities
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600",
      title: "Annual Sports Day",
      description: "Students participating in sports day events",
      category: "events",
      tags: ["sports", "competition", "athletics"],
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600",
      title: "Science Fair",
      description: "Students presenting their science projects",
      category: "events",
      tags: ["science", "projects", "innovation"],
    },
    {
      id: 13,
      src: "/placeholder.svg?height=400&width=600",
      title: "Cultural Program",
      description: "Students performing in cultural event",
      category: "events",
      tags: ["culture", "performance", "dance"],
    },
    {
      id: 14,
      src: "/placeholder.svg?height=400&width=600",
      title: "Prize Distribution",
      description: "Award ceremony for outstanding students",
      category: "events",
      tags: ["awards", "ceremony", "achievement"],
    },

    // Academic Activities
    {
      id: 15,
      src: "/placeholder.svg?height=400&width=600",
      title: "Mathematics Class",
      description: "Interactive mathematics learning session",
      category: "academics",
      tags: ["mathematics", "learning", "education"],
    },
    {
      id: 16,
      src: "/placeholder.svg?height=400&width=600",
      title: "Science Experiment",
      description: "Students conducting science experiments",
      category: "academics",
      tags: ["science", "experiment", "practical"],
    },
    {
      id: 17,
      src: "/placeholder.svg?height=400&width=600",
      title: "English Literature",
      description: "English literature discussion in classroom",
      category: "academics",
      tags: ["english", "literature", "discussion"],
    },
    {
      id: 18,
      src: "/placeholder.svg?height=400&width=600",
      title: "Computer Programming",
      description: "Students learning computer programming",
      category: "academics",
      tags: ["programming", "computer", "coding"],
    },
  ]

  const categories = [
    { id: "all", label: "All Photos", icon: <Camera className="w-5 h-5" />, color: "#FFD700" },
    { id: "facilities", label: "Facilities", icon: <Building className="w-5 h-5" />, color: "#8B5CF6" },
    { id: "student-life", label: "Student Life", icon: <Users className="w-5 h-5" />, color: "#06B6D4" },
    { id: "academics", label: "Academics", icon: <BookOpen className="w-5 h-5" />, color: "#10B981" },
    { id: "events", label: "Events", icon: <Trophy className="w-5 h-5" />, color: "#F59E0B" },
  ]

  const filteredImages = useMemo(() => {
    let filtered = galleryImages

    if (selectedCategory !== "all") {
      filtered = filtered.filter((image) => image.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (image) =>
          image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    return filtered
  }, [selectedCategory, searchTerm])

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id))
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

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
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Camera className="w-16 h-16 text-[#FFD700]" />
                </motion.div>
              </motion.div>
              <motion.h1
                className="text-5xl font-bold text-[#FFD700] mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Photo Gallery
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Explore our vibrant school life, modern facilities, and memorable moments
              </motion.p>
            </div>
          </AnimatedSection>

          {/* Search and Filter */}
          <AnimatedSection className="px-4 mb-12">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="flex flex-col lg:flex-row gap-6 items-center justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Search Bar */}
                <motion.div
                  className="relative flex-1 max-w-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search photos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:border-[#FFD700] focus:outline-none transition-colors text-white placeholder-gray-400"
                  />
                </motion.div>

                {/* Category Filter */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {categories.map((category, index) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "text-black"
                          : "bg-black/40 text-gray-300 hover:bg-black/60 hover:text-white border border-white/10"
                      }`}
                      style={
                        selectedCategory === category.id
                          ? {
                              background: `linear-gradient(45deg, ${category.color}, ${category.color}dd)`,
                            }
                          : {}
                      }
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category.icon}
                      <span>{category.label}</span>
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>

              {/* Results Count */}
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-400">
                  Showing {filteredImages.length} of {galleryImages.length} photos
                  {searchTerm && <span className="text-[#FFD700]"> for "{searchTerm}"</span>}
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Gallery Grid */}
          <section className="px-4">
            <div className="max-w-7xl mx-auto">
              <AnimatePresence mode="wait">
                {filteredImages.length === 0 ? (
                  <motion.div
                    className="text-center py-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Filter className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">No photos found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                  </motion.div>
                ) : (
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    key={selectedCategory + searchTerm}
                  >
                    {filteredImages.map((image, index) => (
                      <motion.div key={image.id} variants={itemVariants}>
                        <AnimatedCard
                          className="group cursor-pointer overflow-hidden"
                          delay={index * 0.05}
                          onClick={() => openLightbox(image)}
                        >
                          <div className="relative">
                            <motion.img
                              src={image.src || "/placeholder.svg"}
                              alt={image.title}
                              className="w-full h-48 object-cover rounded-lg"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            />
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                            >
                              <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                                <p className="text-gray-300 text-sm line-clamp-2">{image.description}</p>
                              </div>
                            </motion.div>
                            <div className="absolute top-2 right-2">
                              <motion.div
                                className="px-2 py-1 rounded-full text-xs font-semibold"
                                style={{
                                  backgroundColor: `${categories.find((cat) => cat.id === image.category)?.color}20`,
                                  color: categories.find((cat) => cat.id === image.category)?.color,
                                }}
                                whileHover={{ scale: 1.1 }}
                              >
                                {categories.find((cat) => cat.id === image.category)?.label}
                              </motion.div>
                            </div>
                          </div>
                        </AnimatedCard>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* Lightbox Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative max-w-4xl w-full max-h-[90vh] bg-gradient-to-br from-[#0f0c29] to-[#302b63] rounded-2xl border border-[#FFD700]/30 overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Close Button */}
                  <motion.button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>

                  {/* Navigation Buttons */}
                  {filteredImages.length > 1 && (
                    <>
                      <motion.button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </motion.button>
                      <motion.button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </motion.button>
                    </>
                  )}

                  {/* Image */}
                  <div className="relative">
                    <motion.img
                      src={selectedImage.src || "/placeholder.svg"}
                      alt={selectedImage.title}
                      className="w-full h-96 object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Image Info */}
                  <motion.div
                    className="p-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-[#FFD700] mb-2">{selectedImage.title}</h2>
                        <p className="text-gray-300">{selectedImage.description}</p>
                      </div>
                      <motion.div
                        className="px-3 py-1 rounded-full text-sm font-semibold"
                        style={{
                          backgroundColor: `${categories.find((cat) => cat.id === selectedImage.category)?.color}20`,
                          color: categories.find((cat) => cat.id === selectedImage.category)?.color,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {categories.find((cat) => cat.id === selectedImage.category)?.label}
                      </motion.div>
                    </div>

                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {selectedImage.tags.map((tag, index) => (
                        <motion.span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-gray-300 rounded-full text-xs"
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                        >
                          #{tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Image Counter */}
                    {filteredImages.length > 1 && (
                      <motion.div
                        className="mt-4 text-center text-gray-400 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {currentImageIndex + 1} of {filteredImages.length}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Layout>
    </>
  )
}
