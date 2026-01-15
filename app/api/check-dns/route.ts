import { NextResponse } from "next/server"
import { promises as dns } from "dns"

export async function POST() {
  try {
    console.log("=== DNS KAYITLARI KONTROL ===")

    const domain = "runpocoaching.com"
    const results: any = {
      domain,
      timestamp: new Date().toISOString(),
      records: {},
      success: true,
      errors: [],
    }

    // MX kayıtlarını kontrol et
    try {
      const mxRecords = await dns.resolveMx(domain)
      results.records.mx = mxRecords
      console.log("MX Records:", mxRecords)

      // hosting.com.tr MX kaydını kontrol et
      const hasHostingMX = mxRecords.some((record) => record.exchange.includes("mail.runpocoaching.com"))

      if (!hasHostingMX) {
        results.errors.push("MX kaydı bulunamadı: mail.runpocoaching.com")
        results.success = false
      }
    } catch (error) {
      results.errors.push(`MX kayıt hatası: ${error}`)
      results.success = false
    }

    // A kayıtlarını kontrol et
    try {
      const mailA = await dns.resolve4("mail.runpocoaching.com")
      results.records.mailA = mailA
      console.log("Mail A Record:", mailA)

      if (!mailA.includes("77.245.159.89")) {
        results.errors.push("mail.runpocoaching.com A kaydı yanlış")
        results.success = false
      }
    } catch (error) {
      results.errors.push(`mail A kayıt hatası: ${error}`)
      results.success = false
    }

    try {
      const webmailA = await dns.resolve4("webmail.runpocoaching.com")
      results.records.webmailA = webmailA
      console.log("Webmail A Record:", webmailA)

      if (!webmailA.includes("77.245.159.89")) {
        results.errors.push("webmail.runpocoaching.com A kaydı yanlış")
        results.success = false
      }
    } catch (error) {
      results.errors.push(`webmail A kayıt hatası: ${error}`)
      results.success = false
    }

    // TXT kayıtlarını kontrol et (SPF)
    try {
      const txtRecords = await dns.resolveTxt(domain)
      results.records.txt = txtRecords
      console.log("TXT Records:", txtRecords)

      const spfRecord = txtRecords.find((record) =>
        record.some((txt) => txt.includes("v=spf1") && txt.includes("hosting.com.tr")),
      )

      if (!spfRecord) {
        results.errors.push("SPF kaydı bulunamadı: v=spf1 include:_spf.hosting.com.tr -all")
        results.success = false
      }
    } catch (error) {
      results.errors.push(`TXT kayıt hatası: ${error}`)
      results.success = false
    }

    // Sonuç mesajı
    if (results.success) {
      return NextResponse.json({
        success: true,
        message: "Tüm DNS kayıtları doğru şekilde yapılandırılmış! Email sistemi hazır.",
        details: results,
      })
    } else {
      return NextResponse.json({
        success: false,
        message: "Bazı DNS kayıtları eksik veya hatalı",
        details: results,
      })
    }
  } catch (error) {
    console.error("DNS kontrol hatası:", error)
    return NextResponse.json({
      success: false,
      error: "DNS kontrol işlemi başarısız",
      details: {
        systemError: error instanceof Error ? error.message : "Unknown error",
      },
    })
  }
}
