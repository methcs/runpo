"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertTriangle, RefreshCw, Copy, ExternalLink, Globe } from "lucide-react"

export function DNSSetupGuide() {
  const [isChecking, setIsChecking] = useState(false)
  const [dnsStatus, setDnsStatus] = useState<any>(null)

  const dnsRecords = [
    {
      name: "mail",
      type: "A",
      value: "77.245.159.89",
      description: "Mail sunucusu A kaydı",
    },
    {
      name: "webmail",
      type: "A",
      value: "77.245.159.89",
      description: "Webmail A kaydı",
    },
    {
      name: "@",
      type: "MX",
      priority: "10",
      value: "mail.runpocoaching.com",
      description: "Mail exchange kaydı",
    },
    {
      name: "@",
      type: "TXT",
      value: "v=spf1 include:_spf.hosting.com.tr -all",
      description: "SPF spam koruması",
    },
  ]

  const handleCheckDNS = async () => {
    setIsChecking(true)
    try {
      const response = await fetch("/api/check-dns", { method: "POST" })
      const result = await response.json()
      setDnsStatus(result)
    } catch (error) {
      setDnsStatus({
        success: false,
        error: "DNS kontrol hatası",
        details: { systemError: "Network error" },
      })
    } finally {
      setIsChecking(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card className="bg-gray-900/20 backdrop-blur-sm border-gray-700/30 max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-white text-center">🌐 Vercel DNS Kayıtları Kurulum Rehberi</CardTitle>
        <p className="text-gray-400 text-center">hosting.com.tr email sistemi için gerekli DNS kayıtları</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Step 1: Vercel Dashboard */}
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            1. Vercel Dashboard'a Gidin
          </h3>
          <div className="space-y-2 text-gray-300 text-sm">
            <p>
              •{" "}
              <a
                href="https://vercel.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                vercel.com/dashboard <ExternalLink className="w-3 h-3 ml-1" />
              </a>{" "}
              adresine gidin
            </p>
            <p>
              • <strong>runpo-coaching-website</strong> projenizi seçin
            </p>
            <p>
              • <strong>Settings</strong> → <strong>Domains</strong> bölümüne gidin
            </p>
            <p>
              • <code className="bg-gray-700 px-2 py-1 rounded text-yellow-400">runpocoaching.com</code> domain'ini
              bulun
            </p>
            <p>
              • <strong>Manage</strong> veya <strong>DNS Records</strong> butonuna tıklayın
            </p>
          </div>
        </div>

        {/* Step 2: DNS Records */}
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">2. DNS Kayıtlarını Ekleyin</h3>

          <div className="space-y-4">
            {dnsRecords.map((record, index) => (
              <div key={index} className="bg-gray-900/50 p-4 rounded border border-gray-600">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white">{record.description}</h4>
                  <Button
                    onClick={() => copyToClipboard(record.value)}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Name:</p>
                    <code className="text-blue-400 font-mono">{record.name}</code>
                  </div>
                  <div>
                    <p className="text-gray-500">Type:</p>
                    <code className="text-green-400 font-mono">{record.type}</code>
                  </div>
                  {record.priority && (
                    <div>
                      <p className="text-gray-500">Priority:</p>
                      <code className="text-orange-400 font-mono">{record.priority}</code>
                    </div>
                  )}
                  <div className={record.priority ? "col-span-1" : "col-span-2"}>
                    <p className="text-gray-500">Value:</p>
                    <code className="text-yellow-400 font-mono text-xs break-all">{record.value}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Verification */}
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">3. DNS Kayıtlarını Kontrol Edin</h3>
          <div className="text-center">
            <Button
              onClick={handleCheckDNS}
              disabled={isChecking}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 py-3"
            >
              {isChecking ? (
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>DNS Kontrol Ediliyor...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>DNS Kayıtlarını Kontrol Et</span>
                </div>
              )}
            </Button>
          </div>
        </div>

        {/* DNS Status Results */}
        {dnsStatus && (
          <div
            className={`p-4 rounded-lg border ${
              dnsStatus.success
                ? "bg-green-400/10 border-green-400/20 text-green-400"
                : "bg-red-400/10 border-red-400/20 text-red-400"
            }`}
          >
            <div className="flex items-start space-x-3">
              {dnsStatus.success ? (
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              )}
              <div className="flex-1">
                <p className="font-semibold mb-2">
                  {dnsStatus.success ? "✅ DNS Kayıtları Doğru!" : "❌ DNS Kayıt Sorunu"}
                </p>
                <p className="text-sm mb-3">{dnsStatus.error || dnsStatus.message}</p>

                {dnsStatus.details && (
                  <div className="bg-gray-900/30 p-3 rounded text-xs">
                    <p className="font-semibold mb-2">Detaylar:</p>
                    <pre className="whitespace-pre-wrap overflow-x-auto">
                      {JSON.stringify(dnsStatus.details, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Important Notes */}
        <div className="bg-orange-400/10 p-4 rounded-lg border border-orange-400/20">
          <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Önemli Notlar
          </h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <div>
              <p className="font-semibold text-orange-300">⏱️ DNS Propagation Süresi</p>
              <p>→ DNS değişiklikleri 15 dakika - 48 saat arasında yayılır</p>
              <p>→ hosting.com.tr için genellikle 30 dakika - 2 saat yeterli</p>
            </div>
            <div>
              <p className="font-semibold text-orange-300">📧 Email Test</p>
              <p>→ DNS kayıtları aktif olduktan sonra email testi yapın</p>
              <p>
                → Webmail'e <code className="bg-gray-700 px-1 rounded">webmail.runpocoaching.com</code> adresinden
                erişebilirsiniz
              </p>
            </div>
            <div>
              <p className="font-semibold text-orange-300">🔧 Sorun Giderme</p>
              <p>→ DNS kayıtları 2 saat sonra hala çalışmıyorsa hosting.com.tr ile iletişime geçin</p>
              <p>→ Vercel DNS ayarlarını tekrar kontrol edin</p>
            </div>
          </div>
        </div>

        {/* Environment Variables Update */}
        <div className="bg-blue-400/10 p-4 rounded-lg border border-blue-400/20">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">4. Environment Variables Güncelleyin</h3>
          <div className="bg-gray-900/50 p-3 rounded border border-gray-600">
            <p className="text-gray-400 text-sm mb-2">Vercel Environment Variables:</p>
            <div className="space-y-1 text-xs font-mono">
              <div className="text-blue-400">EMAIL_USER=info@runpocoaching.com</div>
              <div className="text-green-400">EMAIL_PASS=your-hosting-email-password</div>
              <div className="text-yellow-400">SMTP_HOST=mail.runpocoaching.com</div>
              <div className="text-orange-400">SMTP_PORT=587</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
