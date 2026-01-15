"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, Loader2, Mail, Instagram } from "lucide-react"

export function ContactFormSimple() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission
    setTimeout(() => {
      // Create mailto link
      const subject = encodeURIComponent(`🏃‍♂️ Runpo Coaching - Yeni Mesaj: ${formData.name}`)
      const body = encodeURIComponent(`
🏃‍♂️ RUNPO COACHING - YENİ İLETİŞİM MESAJI

👤 Ad Soyad: ${formData.name}
📱 Instagram: ${formData.instagram || "Belirtilmemiş"}
📅 Tarih: ${new Date().toLocaleString("tr-TR")}

💬 Mesaj:
${formData.message}

---
Bu mesaj runpo-coaching.com web sitesinden gönderilmiştir.
Aerobic Power, Smart Pacing 🏃‍♂️
      `)

      const mailtoLink = `mailto:info@runpocoaching.com?subject=${subject}&body=${body}`

      // Open email client
      window.location.href = mailtoLink

      setSubmitStatus("success")
      setFormData({ name: "", instagram: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submitStatus === "error") {
      setSubmitStatus("idle")
    }
  }

  const handleDirectEmail = () => {
    window.location.href = "mailto:info@runpocoaching.com?subject=Runpo Coaching İletişim"
  }

  const handleInstagramContact = () => {
    window.open("https://instagram.com/runpocoaching", "_blank")
  }

  return (
    <Card className="bg-gray-900/20 backdrop-blur-sm border-gray-700/30">
      <CardHeader>
        <CardTitle className="text-2xl text-white text-center">İletişime Geçin</CardTitle>
        <p className="text-gray-400 text-center text-sm">En kolay yöntemle bize ulaşın</p>
      </CardHeader>
      <CardContent>
        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Button
            onClick={handleDirectEmail}
            variant="outline"
            className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 bg-transparent p-4 h-auto flex flex-col items-center space-y-2"
          >
            <Mail className="w-6 h-6" />
            <span className="text-sm">Direkt Email</span>
          </Button>

          <Button
            onClick={handleInstagramContact}
            variant="outline"
            className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 bg-transparent p-4 h-auto flex flex-col items-center space-y-2"
          >
            <Instagram className="w-6 h-6" />
            <span className="text-sm">Instagram</span>
          </Button>
        </div>

        <div className="text-center mb-6">
          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-4 text-gray-400 text-sm">veya formu doldurun</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Ad Soyad <span className="text-red-400">*</span>
            </label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Adınızı ve soyadınızı girin"
              className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400/25"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Instagram Hesabı</label>
            <Input
              type="text"
              value={formData.instagram}
              onChange={(e) => handleInputChange("instagram", e.target.value)}
              placeholder="@kullaniciadi (opsiyonel)"
              className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400/25"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Mesajınız <span className="text-red-400">*</span>
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Koşu hedeflerinizi ve sorularınızı paylaşın..."
              rows={6}
              className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400/25 resize-none"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="flex items-start space-x-3 text-green-400 bg-green-400/10 p-4 rounded-lg border border-green-400/20">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Email uygulamanız açıldı! 📧</p>
                <p className="text-sm text-green-300 mt-1">Mesajınızı email uygulamanızdan gönderin.</p>
              </div>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting || !formData.name.trim() || !formData.message.trim()}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Email Uygulaması Açılıyor...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Email Uygulamasında Aç</span>
              </div>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400 mb-4">
            Form doldurduğunuzda email uygulamanız açılacak ve mesajınız hazır halde gelecek.
          </p>
          <div className="bg-gray-800/30 p-3 rounded-lg">
            <p className="text-xs text-gray-500">
              📧 <strong>Email:</strong> info@runpocoaching.com
              <br />📱 <strong>Instagram:</strong> @runpocoaching
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
