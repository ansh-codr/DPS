"use client"

import { Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-black/30 backdrop-blur-md border-t border-[#FFD700]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FFD700]">Dhruv Public School</h3>
            <p className="text-gray-300">Aring, Mathura</p>
            <p className="text-sm text-gray-400">Where Learning Meets Vision</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-[#FFD700]" />
                <span className="text-sm">8532850782 / 9997783484</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4 text-[#FFD700]" />
                <span className="text-sm">dhruv.public.school.adeeng@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Instagram className="w-4 h-4 text-[#FFD700]" />
                <span className="text-sm">@dps_aring</span>
              </div>
            </div>
          </div>

          {/* Made By */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Credits</h3>
            <div className="text-gray-300">
              <p className="text-sm">
                🪄 Made by: <span className="text-[#FFD700]">Havoc_Erebus</span>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                © {new Date().getFullYear()} Dhruv Public School Aring Mathura
              </p>
            </div>
          </div>
        </div>

        {/* Glowing border */}
        <div className="mt-8 pt-8 border-t border-[#FFD700]/20">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFD700]/10 to-purple-500/10 rounded-full border border-[#FFD700]/30">
              <span className="text-sm text-gray-300">Empowering minds, shaping futures</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
