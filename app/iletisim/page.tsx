import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">İLETİŞİM</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Koşu hedeflerinize ulaşmak için bizimle iletişime geçin
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-black text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Bizimle İletişime Geçin</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Koşu hedeflerinizi paylaşın, sorularınızı sorun. Size en uygun antrenman programını birlikte
                  belirleyelim.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">📧 E-posta</h3>
                  <p className="text-gray-300">info@runpocoaching.com</p>
                </div>

                <div className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">📱 Sosyal Medya</h3>
                  <p className="text-gray-300 mb-3">Bizi takip edin ve güncel kalın:</p>
                  <a
                    href="https://instagram.com/runpocoaching"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                  >
                    @runpocoaching
                  </a>
                </div>

                <div className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">⏰ Yanıt Süresi</h3>
                  <p className="text-gray-300">Mesajlarınızı genellikle 24 saat içinde yanıtlıyoruz.</p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
