"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

// EmailJS kullanımı için script tag'i head'e eklenmeli
declare global {
  interface Window {
    emailjs: any
  }
}

export function ContactFormEmailJS() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

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
      // EmailJS ile email gönder
      const result = await window.emailjs.sendForm(
        "YOUR_SERVICE_ID", // EmailJS service ID
        "YOUR_TEMPLATE_ID", // EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY", // EmailJS public key
      )

      console.log("EmailJS result:", result)

      if (result.status === 200) {
        setSubmitStatus("success")
        setFormData({ name: "", instagram: "", message: "" })
      } else {
        setSubmitStatus("error")
        setErrorMessage("Email gönderilirken bir hata oluştu.")
      }
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
      setErrorMessage("Email servisi ile bağlantı kurulamadı.")
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
    <>
      {/* EmailJS Script */}
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" async />

      <Card className="bg-gray-900/20 backdrop-blur-sm border-gray-700/30">
        <CardHeader>
          <CardTitle className="text-2xl text-white text-center">Mesaj Gönder</CardTitle>
          <p className="text-gray-400 text-center text-sm">EmailJS ile kolay email gönderimi</p>
        </CardHeader>
        <CardContent>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Ad Soyad <span className="text-red-400">*</span>
              </label>
              <Input
                type="text"
                name="from_name"
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
                name="instagram"
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
                name="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Koşu hedeflerinizi ve sorularınızı paylaşın..."
                rows={6}
                className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400/25 resize-none"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Hidden fields for EmailJS */}
            <input type="hidden" name="to_email" value="info@runpocoaching.com" />
            <input type="hidden" name="subject" value="Runpo Coaching - Yeni İletişim Mesajı" />

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
        </CardContent>
      </Card>
    </>
  )
}
