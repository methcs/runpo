import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResendSetupGuide } from "@/components/resend-setup-guide"

export default function ResendSetupPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <section className="bg-black py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">RESEND KURULUM</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Email servisi kurulumu ve sorun giderme rehberi
            </p>
          </div>

          <ResendSetupGuide />
        </div>
      </section>

      <Footer />
    </div>
  )
}
