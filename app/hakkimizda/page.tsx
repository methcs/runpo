import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="bg-black py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">HAKKIMIZDA</h1>
          {/* Slogan Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/10 to-orange-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-8 py-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse"></div>
              <span className="text-yellow-400 font-bold text-lg tracking-widest">AEROBIC POWER, SMART PACING</span>
              <div className="w-3 h-3 bg-yellow-400 rounded-full ml-4 animate-pulse"></div>
            </div>
          </div>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-black text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Main Philosophy */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8">Koşunun Arkasında Bilim Var</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">Runpo Coaching'de Koşu Tesadüfe Bırakılmaz.</p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Koşmak doğal bir eylem gibi görünse de, doğru koşmak, planlı ilerlemek ve sakatlanmadan gelişmek ciddi bir
              bilgi birikimi ve takip gerektirir.
            </p>
          </div>

          {/* Three Principles */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Runpo Coaching antrenmanlarını <span className="text-yellow-400">üç temel ilke</span> üzerine kurar:
            </h3>

            <div className="space-y-8">
              <div className="border-l-4 border-yellow-400 pl-6">
                <h4 className="text-xl font-bold text-white mb-3">Fizyolojik Verilerle Uyumlu Planlama</h4>
                <p className="text-gray-300">
                  Bilimsel veriler ışığında kişiselleştirilmiş antrenman programları hazırlıyoruz.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h4 className="text-xl font-bold text-white mb-3">Bireye Özel Yüklenme ve Toparlanma Dengesi</h4>
                <p className="text-gray-300">
                  Her sporcunun kendine özgü kapasitesine uygun dengeli yaklaşım uyguluyoruz.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h4 className="text-xl font-bold text-white mb-3">Uzun Vadeli Gelişim Takibi</h4>
                <p className="text-gray-300">Sürdürülebilir performans artışı için sistematik izleme yapıyoruz.</p>
              </div>
            </div>
          </div>

          {/* Individual Approach */}
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Bizimle çalışan her koşucunun;</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              nabız aralıkları, haftalık toplam yük, uyku, beslenme ve toparlanma kalitesi, mental dayanıklılık seviyesi
              göz önünde bulundurularak <span className="text-yellow-400 font-bold">programı hazırlanır.</span>
            </p>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Süreç boyunca;</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-yellow-400 text-2xl">🎯</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Gelişimin ölçülür.</h4>
                  <p className="text-gray-300">Her adımda ilerlemenizi takip eder ve değerlendiririz.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-yellow-400 text-2xl">📊</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    TrainingPeaks ve benzeri sistemlerle detaylı analiz yapılır.
                  </h4>
                  <p className="text-gray-300">Modern teknoloji ile performansınızı derinlemesine analiz ederiz.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-yellow-400 text-2xl">🧠</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Sadece bedenin değil, zihnin de koşuya hazırlanır.
                  </h4>
                  <p className="text-gray-300">Mental dayanıklılık ve motivasyon da antrenmanın bir parçasıdır.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Amacımız</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              sadece mesafeyi artırmak ya da süreyi kısaltmak değil. Asıl hedef,{" "}
              <span className="text-yellow-400 font-bold">
                koşuyu hayatına kalıcı ve sürdürülebilir bir alışkanlık olarak yerleştirmek.
              </span>
            </p>
          </div>

          {/* Closing */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-8">
              Koşmak bir program işidir. Ama her program herkese uymaz.
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              <span className="text-yellow-400 font-bold">Runpo, sana özel çalışan bir sistemdir.</span> İster 5K'ya
              hazırlanıyor ol, ister maraton süresini geliştirmek istiyor ol… Bilimsel yaklaşım, doğru iletişim ve
              bireysel farkındalıkla hedeflerine birlikte ilerleyebiliriz.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <Button
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg font-bold bg-transparent"
                asChild
              >
                <a href="/iletisim">İletişime Geç</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
