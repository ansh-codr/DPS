"use client"

import type React from "react"

import { useState } from "react"
import Layout from "../../components/Layout"
import CardSection from "../../components/CardSection"
import { Phone, Mail, MapPin, Instagram, Send, CheckCircle } from "lucide-react"

// Import the new components at the top
import CosmicLoader from "../../components/CosmicLoader"
import { usePageLoading } from "../../hooks/usePageLoading"

// Add loading state to Contact component
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { isLoading } = usePageLoading()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: ["8532850782", "9997783484"],
      color: "#FFD700",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: ["dhruv.public.school.adeeng@gmail.com"],
      color: "#8B5CF6",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Aring, Mathura"],
      color: "#06B6D4",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Social Media",
      details: ["@dps_aring"],
      color: "#F59E0B",
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
              <h1 className="text-5xl font-bold text-[#FFD700] mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300">
                Get in touch with us for admissions, inquiries, or any questions you may have
              </p>
            </div>
          </section>

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-[#FFD700] mb-8">Get In Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <CardSection key={index} glowColor={info.color}>
                      <div className="flex items-start space-x-4">
                        <div
                          className="p-3 rounded-full"
                          style={{
                            color: info.color,
                            backgroundColor: `${info.color}20`,
                          }}
                        >
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-300">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardSection>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <CardSection>
                  <h2 className="text-3xl font-bold text-[#FFD700] mb-8">Send us a Message</h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                      <h3 className="text-2xl font-semibold text-green-400 mb-4">Message Sent Successfully!</h3>
                      <p className="text-gray-300">
                        Thank you for contacting Dhruv Public School. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:border-[#FFD700] focus:outline-none transition-colors text-white placeholder-gray-400"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:border-[#FFD700] focus:outline-none transition-colors text-white placeholder-gray-400"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:border-[#FFD700] focus:outline-none transition-colors text-white placeholder-gray-400"
                          placeholder="Your phone number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:border-[#FFD700] focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                          placeholder="Tell us about your inquiry, admission questions, or any other message..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black font-semibold py-4 px-6 rounded-lg hover:from-yellow-600 hover:to-[#FFD700] transition-all duration-300 flex items-center justify-center space-x-2 group"
                      >
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                      </button>
                    </form>
                  )}
                </CardSection>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
