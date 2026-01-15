"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  instagram: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    console.log("=== CONTACT FORM SUBMISSION ===")
    console.log("Form data:", data)

    // Validate required fields
    if (!data.name.trim() || !data.message.trim()) {
      return {
        success: false,
        message: "Ad soyad ve mesaj alanları zorunludur.",
      }
    }

    // Option 1: EmailJS (Frontend-based, very easy)
    // Option 2: Formspree (Form handling service)
    // Option 3: Netlify Forms (if using Netlify)
    // Option 4: Web3Forms (Simple form API)

    // For now, we'll use Web3Forms - it's the easiest
    const formData = new FormData()
    formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY || "your-access-key-here")
    formData.append("name", data.name)
    formData.append("email", "info@runpocoaching.com") // Your email
    formData.append("subject", `🏃‍♂️ Yeni İletişim Mesajı - ${data.name}`)
    formData.append(
      "message",
      `
Ad Soyad: ${data.name}
Instagram: ${data.instagram || "Belirtilmemiş"}
Gönderim Tarihi: ${new Date().toLocaleString("tr-TR")}

Mesaj:
${data.message}

---
Bu mesaj Runpo Coaching web sitesi iletişim formundan gönderilmiştir.
Aerobic Power, Smart Pacing 🏃‍♂️
    `,
    )

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const result = await response.json()

    if (result.success) {
      console.log("Email sent successfully via Web3Forms")
      return {
        success: true,
        message: "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
      }
    } else {
      console.error("Web3Forms error:", result)
      return {
        success: false,
        message: "Email gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
      }
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    }
  }
}
