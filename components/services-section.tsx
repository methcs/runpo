import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, BarChart3, Heart, Trophy, Clock } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Target,
      title: "Kişisel Antrenman Programı",
      description: "Hedeflerinize özel, bilimsel verilerle desteklenen bireysel antrenman planları",
      features: ["Kişisel hedef belirleme", "Fizyolojik test analizi", "Haftalık program güncellemeleri"],
    },
    {
      icon: Users,
      title: "Grup Antrenmanları",
      description: "Motivasyonu artıran, sosyal öğrenmeyi destekleyen grup antrenman seansları",
      features: ["Seviye grupları", "Sosyal motivasyon", "Rekabetçi ortam"],
    },
    {
      icon: BarChart3,
      title: "Performans Analizi",
      description: "Detaylı veri analizi ile gelişiminizi takip edin ve optimize edin",
      features: ["GPS analizi", "Kalp ritmi takibi", "İlerleme raporları"],
    },
    {
      icon: Heart,
      title: "Beslenme Danışmanlığı",
      description: "Koşu performansınızı destekleyecek beslenme stratejileri",
      features: ["Antrenman öncesi/sonrası", "Yarış günü stratejisi", "Toparlanma beslenmesi"],
    },
    {
      icon: Trophy,
      title: "Yarış Hazırlığı",
      description: "5K'dan maratona kadar tüm mesafeler için özel hazırlık programları",
      features: ["Mesafe-spesifik antrenman", "Taktik geliştirme", "Mental hazırlık"],
    },
    {
      icon: Clock,
      title: "Toparlanma Programları",
      description: "Sakatlanma riskini minimize eden, performansı artıran toparlanma stratejileri",
      features: ["Aktif toparlanma", "Esneklik çalışmaları", "Uyku optimizasyonu"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Runpo Coaching Hizmetleri</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Antrenmanlarını şu üç temel ilke üzerine kurar: Fizyolojik verilerle uyumlu planlama, bireye özel yüklenme
            ve toparlanma dengesi, uzun vadeli gelişim takibi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
            Ücretsiz Konsültasyon Al
          </Button>
        </div>
      </div>
    </section>
  )
}
