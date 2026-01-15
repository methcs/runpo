import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bizimle Çalışan Her Koşucunun</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nabız aralıkları, haftalık toplam yük, uyku, beslenme ve toparlanma kalitesi, mental dayanıklılık seviyesi
            göz önünde bulundurularak programı hazırlanır.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">İletişime Geçin</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                  <Input placeholder="Adınızı girin" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                  <Input type="email" placeholder="E-posta adresinizi girin" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                <Input placeholder="Telefon numaranızı girin" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Koşu Deneyiminiz</label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Başlangıç seviyesi</option>
                  <option>Orta seviye (1-3 yıl)</option>
                  <option>İleri seviye (3+ yıl)</option>
                  <option>Yarışmacı</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                <Textarea placeholder="Hedeflerinizi ve beklentilerinizi paylaşın..." rows={4} />
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">Mesaj Gönder</Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Adres</h3>
                    <p className="text-gray-600">
                      Atatürk Mahallesi, Spor Caddesi No:123
                      <br />
                      Beşiktaş, İstanbul 34353
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
                    <p className="text-gray-600">+90 555 123 4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">E-posta</h3>
                    <p className="text-gray-600">info@runpocoaching.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Çalışma Saatleri</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Pazartesi - Cuma: 06:00 - 21:00</p>
                      <p>Cumartesi: 07:00 - 19:00</p>
                      <p>Pazar: 08:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
