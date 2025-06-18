"use client"

import Layout from "../../components/Layout"
import CardSection from "../../components/CardSection"
import { Target, Eye, Heart, Users, BookOpen, Trophy } from "lucide-react"

// Import the new components at the top
import CosmicLoader from "../../components/CosmicLoader"
import { usePageLoading } from "../../hooks/usePageLoading"

// Add loading state to About component
export default function About() {
  const { isLoading } = usePageLoading()

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion",
      description: "Nurturing empathy and kindness in every student",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Excellence",
      description: "Striving for the highest standards in education",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building strong relationships and teamwork",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Achievement",
      description: "Celebrating success and continuous improvement",
    },
  ]

  return (
    <>
      <CosmicLoader isLoading={isLoading} />
      <Layout>
        <div className="pt-24 pb-20">
          {/* Hero Section */}
          <section className="px-4 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-[#FFD700] mb-6">About Our School</h1>
              <p className="text-xl text-gray-300">
                Discover the story behind Dhruv Public School and our commitment to educational excellence
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="px-4 mb-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <CardSection glowColor="#FFD700">
                <div className="text-center">
                  <Target className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Our Mission</h2>
                  <p className="text-gray-300 leading-relaxed">
                    To provide quality education that empowers students with knowledge, skills, and values necessary to
                    become responsible global citizens. We strive to create an environment where every child can
                    discover their potential and achieve excellence.
                  </p>
                </div>
              </CardSection>

              <CardSection glowColor="#8B5CF6">
                <div className="text-center">
                  <Eye className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-purple-400 mb-4">Our Vision</h2>
                  <p className="text-gray-300 leading-relaxed">
                    To be a leading educational institution that nurtures innovative thinkers, compassionate leaders,
                    and lifelong learners who contribute positively to society and make a meaningful difference in the
                    world.
                  </p>
                </div>
              </CardSection>
            </div>
          </section>

          {/* Principal's Message */}
          <section className="px-4 mb-20">
            <div className="max-w-4xl mx-auto">
              <CardSection>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Principal's Message</h2>
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#FFD700]/20 to-purple-500/20 rounded-full flex items-center justify-center border border-[#FFD700]/30 mb-6">
                    <Users className="w-16 h-16 text-[#FFD700]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mahesh Chand Yadav</h3>
                  <p className="text-gray-400 mb-6">B.Sc, B.Ed, M.A, Dip.in.Comp, LL.B</p>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p>
                    "Welcome to Dhruv Public School, where we believe that every child is unique and has the potential
                    to achieve greatness. Our dedicated team of educators works tirelessly to provide a nurturing
                    environment that fosters academic excellence, character development, and personal growth."
                  </p>
                  <p>
                    "We are committed to preparing our students not just for examinations, but for life itself. Through
                    our comprehensive curriculum, innovative teaching methods, and emphasis on values, we aim to develop
                    well-rounded individuals who will be the leaders of tomorrow."
                  </p>
                  <p>
                    "I invite you to join our school family and be part of this incredible journey of learning, growth,
                    and success."
                  </p>
                </div>
              </CardSection>
            </div>
          </section>

          {/* Our Values */}
          <section className="px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#FFD700] mb-4">Our Core Values</h2>
                <p className="text-xl text-gray-300">The principles that guide everything we do</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <CardSection key={index}>
                    <div className="text-center">
                      <div className="inline-block p-4 bg-[#FFD700]/20 rounded-full mb-4">
                        <div className="text-[#FFD700]">{value.icon}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </CardSection>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
