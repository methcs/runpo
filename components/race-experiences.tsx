import { Calendar, MapPin, Trophy, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function RaceExperiences() {
  return (
    <section className="bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Modern Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent mb-6 tracking-tight">
            YARIŞ TECRÜBELERİ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Gerçek yarış deneyimlerinden öğrenin ve ilham alın
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            

            
          </div>
        </div>

        {/* Rest of the content remains the same */}
        {/* Main Race Report */}
        <div className="grid lg:grid-cols-1 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-900/20 backdrop-blur-sm border-gray-700/30 hover:border-yellow-400/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Uludağ Ultra Trail 42K – İlk Edisyon Deneyimi
                  </h3>
                  <button className="text-gray-400 hover:text-yellow-400 p-2 rounded-full hover:bg-gray-800/50 transition-all duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center space-x-4 text-gray-400 text-sm mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Temmuz 25, 2025</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <img
                      src="/images/fikretozgur-trail-running.jpg"
                      alt="Uludağ Ultra Trail 42K - Dağlık arazide koşu"
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-4 rounded-xl border border-gray-700/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <Trophy className="w-5 h-5 text-yellow-400" />
                        <span className="font-semibold text-white">Yarış Detayları</span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex justify-between">
                          <span>Mesafe:</span>
                          <span className="text-yellow-400 font-semibold">42K</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rakım Kazanımı:</span>
                          <span className="text-yellow-400 font-semibold">2250m+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Süre:</span>
                          <span className="text-yellow-400 font-semibold">5 Saat 11 Dakika</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-4 rounded-xl border border-gray-700/50">
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-5 h-5 text-yellow-400" />
                        <span className="font-semibold text-white">Lokasyon</span>
                      </div>
                      <p className="text-sm text-gray-300">{"Uludağ Kayak Merkezi - 2.Gelişim Oteller Bölgesi"}</p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Türkiye’nin en köklü ve prestijli dağ yarışlarından biri olan Uludağ Ultra Trail’de, bu yıl ilk kez
                    koşulan 42 kilometrelik parkurun start çizgisindeydim. Asfalt maratonlar üzerine kurulu koşu
                    geçmişimle birlikte, son yıllarda arazide derinleşme çabamın bir parçasıydı bu yarış. Zihinsel ve
                    fiziksel anlamda bu kadar fazla değişken barındıran bir parkurda yer almak, kendimi test etmekten
                    öteye geçti. Hem ilk edisyonun heyecanı hem de yarışın teknik gereklilikleri bu deneyimi unutulmaz
                    kıldı.
                  </p>

                  <p className="text-gray-300 leading-relaxed">
                    Hem ilk kez koşulan 42 kilometrelik mesafede deneyim kazanmak hem de Uludağ'ın eşsiz doğasında
                    koşmanın keyfini çıkarmak i��in katıldığım bu yarışta, beklentilerimin üzerinde bir performans
                    sergiledim.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <User className="w-4 h-4" />
                      <span className="text-sm">1 yorum</span>
                    </div>
                    <a
                      href="https://runpocoaching.blogspot.com/2025/07/uludag-ultra-trail-42k-ilk-edisyon.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105">
                        DEVAMI
                      </button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Race Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

        {/* Modern View All Button */}
        <div className="text-center mt-16">
          <a
            href="https://runpocoaching.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105 mb-8 inline-block"
          >
            <span className="relative z-10">Tüm Yarış Tecrübelerini Görüntüle</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          {/* Instagram Gallery CTA */}
        </div>
      </div>
    </section>
  )
}
