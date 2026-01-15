import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InstagramSetupGuide } from "@/components/instagram-setup-guide"

export default function InstagramSetupPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <section className="bg-black py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">INSTAGRAM KURULUM</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Instagram feed entegrasyonu kurulum rehberi
            </p>
          </div>

          <InstagramSetupGuide />
        </div>
      </section>

      <Footer />
    </div>
  )
}
