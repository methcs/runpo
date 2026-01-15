import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/runners-motion-blur.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Slogan Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-yellow-400 font-bold text-sm tracking-widest">AEROBIC POWER, SMART PACING</span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full ml-3 animate-pulse"></div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-white">KOŞU</span>
              <br />
              <span className="text-yellow-400">HEDEFLERİNİZE</span>
              <br />
              <span className="text-white">ULAŞIN</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
              Bilimsel antrenman metodları ile 5K'dan maratona kadar tüm mesafelerde
              <span className="text-yellow-400 font-semibold"> kişisel rekorunuzu kırın</span>
            </p>

            {/* Stats */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-black/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Kişiselleştirilmiş Program</h3>
                  <p className="text-gray-300">Seviyenize ve hedeflerinize özel hazırlanmış antrenman planları</p>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-black/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bilimsel Takip</h3>
                  <p className="text-gray-300">Nabız, tempo ve performans verilerinizin profesyonel analizi</p>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-black/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Yarış Hazırlığı</h3>
                  <p className="text-gray-300">5K'dan maratona kadar tüm mesafeler için özel stratejiler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 text-gray-300">Aşağı Kaydır</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 border-2 border-yellow-400/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 border-2 border-yellow-400/20 rounded-full animate-bounce hidden lg:block"></div>
      <div className="absolute top-1/2 right-32 w-8 h-8 bg-yellow-400/20 rounded-full animate-ping hidden lg:block"></div>
    </section>
  )
}
