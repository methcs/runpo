export function CoachingPhilosophy() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden py-20 px-4">
      {/* Golden circular design elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large outer circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-4 border-yellow-500 rounded-full opacity-30"></div>

        {/* Medium circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-3 border-yellow-500 rounded-full opacity-40"></div>

        {/* Inner circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-yellow-500 rounded-full opacity-50"></div>

        {/* Small accent circles */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-yellow-500 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 border-2 border-yellow-500 rounded-full opacity-40"></div>
        <div className="absolute top-1/3 right-20 w-8 h-8 border-2 border-yellow-500 rounded-full opacity-50"></div>

        {/* Curved lines */}
        <div className="absolute top-1/4 left-0 w-64 h-64 border-l-4 border-yellow-500 rounded-full opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 border-r-4 border-yellow-500 rounded-full opacity-25 transform -rotate-45"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Professional Hero Section */}

        {/* Slogan Hero */}
        <div className="text-center mb-20">
          
          
        </div>

        {/* Philosophy Statement */}
        <div className="bg-gray-900/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-20 border border-gray-700/30">
          <div className="text-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-6xl mx-auto">
              Koşmak doğal bir eylem gibi görünse de, doğru koşmak, planlı ilerlemek ve sakatlanmadan gelişmek ciddi bir{" "}
              <span className="text-yellow-400 font-bold bg-yellow-400/10 px-2 py-1 rounded-lg">bilgi birikimi</span> ve
              takip gerektirir.
            </p>
          </div>
        </div>

        {/* Three Principles - Modern Grid Layout */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-8 leading-tight">
              Runpo Coaching antrenmanlarını
              <br />
              <span className="text-yellow-400">üç temel ilke</span> üzerine kurar
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-yellow-400/50 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-black">01</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Fizyolojik Verilerle Uyumlu Planlama</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Bilimsel veriler ışığında kişiselleştirilmiş antrenman programları
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-yellow-400/50 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-black">02</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Bireye Özel Yüklenme ve Toparlanma</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Her sporcunun kendine özgü kapasitesine uygun dengeli yaklaşım
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-yellow-400/50 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-black">03</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Uzun Vadeli Gelişim Takibi</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sürdürülebilir performans artışı için sistematik izleme
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/30">
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-8">
              Bizimle çalışan her koşucunun
            </h3>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-5xl mx-auto mb-8">
              nabız aralıkları, haftalık toplam yük, uyku, beslenme ve toparlanma kalitesi, mental dayanıklılık seviyesi
              göz önünde bulundurularak{" "}
              <span className="text-yellow-400 font-bold bg-yellow-400/10 px-3 py-1 rounded-lg">
                programı hazırlanır
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
