"use client"

import { useState } from "react"
import { Facebook, Instagram, Twitter, Youtube, Mail, ChevronUp, ChevronDown } from "lucide-react"

export function Footer() {
  const [isLinksOpen, setIsLinksOpen] = useState(false)

  return (
    <footer className="bg-black text-white">
      {/* Top border */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Logo and Description - Takes more space */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <img src="/images/runpo-logo.jpg" alt="Runpo Coaching" className="h-20 w-auto object-contain mb-6" />
              </div>
              <p className="text-gray-300 mb-8 max-w-2xl leading-relaxed text-lg">
                Bilimsel yaklaşımla koşu antrenmanları. Her koşucunun potansiyelini maksimuma çıkarmak için
                kişiselleştirilmiş programlar sunuyoruz.
              </p>

              {/* Slogan */}
              <div className="mb-8">
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/10 to-orange-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-yellow-400 font-bold text-sm tracking-wider">AEROBIC POWER, SMART PACING</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full ml-3 animate-pulse"></div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-6">
                <a href="/iletisim" className="group">
                  <Instagram className="w-10 h-10 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12" />
                </a>
                <a
                  href="https://facebook.com/runpocoaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Facebook className="w-9 h-9 text-gray-400 hover:text-yellow-400 cursor-pointer transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12" />
                </a>
                <a href="https://twitter.com/runpocoaching" target="_blank" rel="noopener noreferrer" className="group">
                  <Twitter className="w-9 h-9 text-gray-400 hover:text-yellow-400 cursor-pointer transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12" />
                </a>
                <a
                  href="https://youtube.com/@runpocoaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Youtube className="w-9 h-9 text-gray-400 hover:text-yellow-400 cursor-pointer transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12" />
                </a>
              </div>
            </div>

            {/* Quick Links - Desktop */}
            <div className="hidden lg:block">
              <div className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                <h3 className="font-bold mb-6 text-yellow-400 text-xl">Hızlı Linkler</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a href="/" className="hover:text-yellow-400 transition-all duration-300 flex items-center group">
                      <span className="w-2 h-2 bg-yellow-400/50 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-300"></span>
                      Ana Sayfa
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hakkimizda"
                      className="hover:text-yellow-400 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-yellow-400/50 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-300"></span>
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a
                      href="/yaris-takvimi"
                      className="hover:text-yellow-400 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-yellow-400/50 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-300"></span>
                      Yarış Takvimi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/yaris-tecrubelerim"
                      className="hover:text-yellow-400 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-yellow-400/50 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-300"></span>
                      Yarış Tecrübelerimiz
                    </a>
                  </li>
                  <li>
                    <a
                      href="/iletisim"
                      className="hover:text-yellow-400 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-yellow-400/50 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-300"></span>
                      İletişim
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile Collapsible Sections */}
            <div className="md:hidden space-y-4">
              {/* Quick Links Mobile */}
              <div>
                <button
                  onClick={() => setIsLinksOpen(!isLinksOpen)}
                  className="flex items-center justify-between w-full text-yellow-400 font-semibold py-2"
                >
                  <span>Hızlı Linkler</span>
                  {isLinksOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {isLinksOpen && (
                  <ul className="space-y-2 text-gray-400 mt-2">
                    <li>
                      <a href="/" className="hover:text-yellow-400 transition-colors duration-300 block py-1">
                        Ana Sayfa
                      </a>
                    </li>
                    <li>
                      <a href="/hakkimizda" className="hover:text-yellow-400 transition-colors duration-300 block py-1">
                        Hakkımızda
                      </a>
                    </li>
                    <li>
                      <a
                        href="/yaris-takvimi"
                        className="hover:text-yellow-400 transition-colors duration-300 block py-1"
                      >
                        Yarış Takvimi
                      </a>
                    </li>
                    <li>
                      <a
                        href="/yaris-tecrubelerim"
                        className="hover:text-yellow-400 transition-colors duration-300 block py-1"
                      >
                        Yarış Tecrübelerimiz
                      </a>
                    </li>
                    <li>
                      <a href="/iletisim" className="hover:text-yellow-400 transition-colors duration-300 block py-1">
                        İletişim
                      </a>
                    </li>
                  </ul>
                )}
              </div>

              {/* Contact Info Mobile */}
              <div className="pt-4 border-t border-gray-800">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <span>info@runpocoaching.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Runpo Coaching. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
