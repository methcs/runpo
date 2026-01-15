"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function ContactFormFormspree() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      // Formspree endpoint - formspree.io'da hesap açıp form oluşturun
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          instagram: formData.instagram,
          message: formData.message,
          _subject: `🏃‍♂️ Runpo Coaching - Yeni Mesaj: ${formData.name}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", instagram: "", message: "" })
      } else {
        setSubmitStatus("error")
        setErrorMessage("Mesaj gönderilemedi. Lütfen tekrar deneyin.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Bağlantı hatası. Lütfen tekrar deneyin.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submitStatus === "error") {
      setSubmitStatus("idle")
      setErrorMessage("")
    }
  }

  return (
    <Card className="bg-gray-900/20 backdrop-blur-sm border-gray-700/30">
      <CardHeader>
        <CardTitle className="text-2xl text-white text-center">Mesaj Gönder</CardTitle>
        <p className="text-gray-400 text-center text-sm">Koşu hedeflerinizi paylaşın, size özel program hazırlayalım</p>
      </CardHeader>
      <CardContent>
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
              placeholder="Koşu deneyiminizi, hedeflerinizi ve sorularınızı detaylı olarak paylaşın..."
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
                <p className="font-semibold">Mesajınız başarıyla gönderildi! 🎉</p>
                <p className="text-sm text-green-300 mt-1">En kısa sürede size dönüş yapacağız.</p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-start space-x-3 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20">
              <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Mesaj gönderilemedi</p>
                <p className="text-sm text-red-300 mt-1">{errorMessage}</p>
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
                <span>Gönderiliyor...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Mesaj Gönder</span>
              </div>
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Mesajınızı göndererek, size dönüş yapabilmemiz için iletişim bilgilerinizin kullanılmasını kabul etmiş
            olursunuz.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 font-bold text-xs tracking-wider">AEROBIC POWER, SMART PACING</span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
