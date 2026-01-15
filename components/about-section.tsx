export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Koşmak Doğal Bir Eylem</h2>

          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            Koşmak doğal bir eylem gibi görünse de, doğru koşmak, planlı ilerlemek ve sakatlanmadan gelişmek ciddi bir
            bilgi birikimi ve takip gerektirir.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fizyolojik Verilerle Uyumlu Planlama</h3>
                <p className="text-gray-600">Bilimsel veriler ışığında kişiselleştirilmiş antrenman programları</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bireye Özel Yüklenme ve Toparlanma</h3>
                <p className="text-gray-600">Her sporcunun kendine özgü kapasitesine uygun dengeli yaklaşım</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Uzun Vadeli Gelişim Takibi</h3>
                <p className="text-gray-600">Sürdürülebilir performans artışı için sistematik izleme</p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Koçluk Süreci"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
