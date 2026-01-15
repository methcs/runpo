import { Calendar, MapPin, Users, Trophy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MarathonBanner() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-16 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white/25 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-20 h-20 border-3 border-white/15 rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Trophy className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold">ÖZEL ETKINLIK</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              İSTANBUL
              <br />
              <span className="text-black">MARATON</span>
              <br />
              CHALLENGE
            </h2>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Runpo Coaching ile birlikte İstanbul'un en prestijli maraton yarışına hazırlanın!
            </p>

            {/* Event Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="w-6 h-6 mr-3 text-yellow-200" />
                  <span className="font-semibold">Tarih</span>
                </div>
                <p className="text-2xl font-bold">12 Kasım 2024</p>
                <p className="text-sm text-white/80">Pazar, 09:00</p>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="w-6 h-6 mr-3 text-yellow-200" />
                  <span className="font-semibold">Lokasyon</span>
                </div>
                <p className="text-2xl font-bold">Sultanahmet</p>
                <p className="text-sm text-white/80">İstanbul, Türkiye</p>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  <Users className="w-6 h-6 mr-3 text-yellow-200" />
                  <span className="font-semibold">Katılımcı</span>
                </div>
                <p className="text-2xl font-bold">15,000+</p>
                <p className="text-sm text-white/80">Koşucu bekleniyor</p>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  <Trophy className="w-6 h-6 mr-3 text-yellow-200" />
                  <span className="font-semibold">Mesafe</span>
                </div>
                <p className="text-2xl font-bold">42.2 KM</p>
                <p className="text-sm text-white/80">Full Maraton</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black text-white hover:bg-gray-900 px-8 py-4 text-lg font-bold rounded-2xl group">
                <span>Hemen Kayıt Ol</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg font-bold rounded-2xl bg-transparent"
              >
                Detayları Gör
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Özel Antrenman Paketi</h3>
                <p className="text-white/90">16 haftalık profesyonel maraton hazırlık programı</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-white">
                  <div className="w-2 h-2 bg-yellow-200 rounded-full mr-4"></div>
                  <span>Kişiselleştirilmiş antrenman planı</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-2 h-2 bg-yellow-200 rounded-full mr-4"></div>
                  <span>Haftalık performans takibi</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-2 h-2 bg-yellow-200 rounded-full mr-4"></div>
                  <span>Beslenme danışmanlığı</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-2 h-2 bg-yellow-200 rounded-full mr-4"></div>
                  <span>Yarış günü stratejisi</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-2 h-2 bg-yellow-200 rounded-full mr-4"></div>
                  <span>24/7 koç desteği</span>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">
                  <span className="line-through text-white/50 text-2xl mr-2">₺2,500</span>
                  ₺1,999
                </div>
                <p className="text-sm text-white/80">Erken kayıt indirimi</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-black text-yellow-400 rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg animate-bounce">
              %20
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold animate-pulse">
              🏃‍♂️
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-white mb-2">500+</div>
              <div className="text-sm text-white/80">Başarılı Maraton</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-2">95%</div>
              <div className="text-sm text-white/80">Bitiş Oranı</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-2">3:45</div>
              <div className="text-sm text-white/80">Ortalama Süre</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-2">1000+</div>
              <div className="text-sm text-white/80">Mutlu Koşucu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
