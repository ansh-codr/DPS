"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "../../components/Layout"
import AnimatedSection from "../../components/AnimatedSection"
import AnimatedCard from "../../components/AnimatedCard"
import OptimizedLoader from "../../components/OptimizedLoader"
import LazyImage from "../../components/LazyImage"
import ReducedMotionWrapper from "../../components/ReducedMotionWrapper"
import { useOptimizedLoading } from "../../hooks/useOptimizedLoading"
import { Search, X, ChevronLeft, ChevronRight, Camera, Building, Users, BookOpen, Trophy, Filter } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  title: string
  description: string
  category: string
  tags: string[]
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { isLoading } = useOptimizedLoading()

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/assets/Name_wise/group photo.jpeg",
      title: "School Group Photo",
      description: "Our vibrant school community together",
      category: "facilities",
      tags: ["group", "students", "community"],
    },
    {
      id: 2,
      src: "/assets/Name_wise/assembly3.jpeg",
      title: "Morning Assembly",
      description: "Daily morning assembly with students",
      category: "student-life",
      tags: ["assembly", "morning", "students"],
    },
    {
      id: 3,
      src: "/assets/Name_wise/prize.jpeg",
      title: "Prize Distribution",
      description: "Celebrating student achievements",
      category: "events",
      tags: ["awards", "ceremony", "achievement"],
    },
    {
      id: 4,
      src: "/assets/Name_wise/staff.jpeg",
      title: "Teaching Staff",
      description: "Our dedicated faculty members",
      category: "facilities",
      tags: ["teachers", "faculty", "staff"],
    },
    {
      id: 5,
      src: "/assets/Name_wise/Stage.jpeg",
      title: "School Stage",
      description: "Main stage for events and programs",
      category: "facilities",
      tags: ["stage", "events", "auditorium"],
    },
    {
      id: 6,
      src: "/assets/Name_wise/prayer.jpeg",
      title: "Prayer Session",
      description: "Students in prayer session",
      category: "student-life",
      tags: ["prayer", "spiritual", "students"],
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

  return (
    <>
      <OptimizedLoader isLoading={isLoading} />
      <Layout>
        <div className="pt-24 pb-20">
          {/* Hero Section */}
          <AnimatedSection className="px-4 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <ReducedMotionWrapper
                fallback={
                  <div className="inline-block p-4 bg-gradient-to-r from-[#FFD700]/20 to-purple-500/20 rounded-full border border-[#FFD700]/30 mb-6">
                    <Camera className="w-16 h-16 text-[#FFD700]" />
                  </div>
                }
              >
                <motion.div
                  className="inline-block p-4 bg-gradient-to-r from-[#FFD700]/20 to-purple-500/20 rounded-full border border-[#FFD700]/30 mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Camera className="w-16 h-16 text-[#FFD700]" />
                </motion.div>
              </ReducedMotionWrapper>
              <h1 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-6">Photo Gallery</h1>
              <p className="text-lg md:text-xl text-gray-300">
                Explore our vibrant school life, modern facilities, and memorable moments
              </p>
            </div>
          </AnimatedSection>

          {/* Search and Filter */}
          <AnimatedSection className="px-4 mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search photos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:border-[#FFD700] focus:outline-none transition-colors text-white placeholder-gray-400"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <ReducedMotionWrapper
                      key={category.id}
                      fallback={
                        <button
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
                        >
                          {category.icon}
                          <span>{category.label}</span>
                        </button>
                      }
                    >
                      <motion.button
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
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {category.icon}
                        <span>{category.label}</span>
                      </motion.button>
                    </ReducedMotionWrapper>
                  ))}
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-center">
                <p className="text-gray-400">
                  Showing {filteredImages.length} of {galleryImages.length} photos
                  {searchTerm && <span className="text-[#FFD700]"> for "{searchTerm}"</span>}
                </p>
              </div>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredImages.map((image, index) => (
                      <AnimatedCard
                        key={image.id}
                        className="group cursor-pointer overflow-hidden"
                        delay={index * 0.05}
                        onClick={() => openLightbox(image)}
                      >
                        <div className="relative">
                          <LazyImage
                            src={image.src}
                            alt={image.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <ReducedMotionWrapper
                            fallback={
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                <div className="absolute bottom-4 left-4 right-4">
                                  <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                                  <p className="text-gray-300 text-sm line-clamp-2">{image.description}</p>
                                </div>
                              </div>
                            }
                          >
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
                          </ReducedMotionWrapper>
                          <div className="absolute top-2 right-2">
                            <div
                              className="px-2 py-1 rounded-full text-xs font-semibold"
                              style={{
                                backgroundColor: `${categories.find((cat) => cat.id === image.category)?.color}20`,
                                color: categories.find((cat) => cat.id === image.category)?.color,
                              }}
                            >
                              {categories.find((cat) => cat.id === image.category)?.label}
                            </div>
                          </div>
                        </div>
                      </AnimatedCard>
                    ))}
                  </div>
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
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Navigation Buttons */}
                  {filteredImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Image */}
                  <div className="relative">
                    <LazyImage
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Image Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-[#FFD700] mb-2">{selectedImage.title}</h2>
                        <p className="text-gray-300">{selectedImage.description}</p>
                      </div>
                      <div
                        className="px-3 py-1 rounded-full text-sm font-semibold"
                        style={{
                          backgroundColor: `${categories.find((cat) => cat.id === selectedImage.category)?.color}20`,
                          color: categories.find((cat) => cat.id === selectedImage.category)?.color,
                        }}
                      >
                        {categories.find((cat) => cat.id === selectedImage.category)?.label}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {selectedImage.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-gray-300 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Image Counter */}
                    {filteredImages.length > 1 && (
                      <div className="mt-4 text-center text-gray-400 text-sm">
                        {currentImageIndex + 1} of {filteredImages.length}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Layout>
    </>
  )
}