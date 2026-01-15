"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertTriangle, RefreshCw, Copy, ExternalLink } from "lucide-react"

export function ResendSetupGuide() {
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<any>(null)

  const handleVerifyApiKey = async () => {
    setIsVerifying(true)
    try {
      const response = await fetch("/api/verify-resend", { method: "POST" })
      const result = await response.json()
      setVerificationResult(result)
    } catch (error) {
      setVerificationResult({
        success: false,
        error: "Network error",
        details: { systemError: "Failed to connect to verification endpoint" },
      })
    } finally {
      setIsVerifying(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card className="bg-gray-900/20 backdrop-blur-sm border-gray-700/30 max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-white text-center">🔧 Resend API Key Kurulum Rehberi</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Step 1: Get API Key */}
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">1. Resend API Key Alın</h3>
          <div className="space-y-2 text-gray-300">
            <p>
              •{" "}
              <a
                href="https://resend.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                resend.com <ExternalLink className="w-3 h-3 ml-1" />
              </a>{" "}
              adresine gidin ve giriş yapın
            </p>
            <p>• Dashboard'da "API Keys" bölümüne gidin</p>
            <p>• "Create API Key" butonuna tıklayın</p>
            <p>• Key'e bir isim verin (örn: "Runpo Coaching Website")</p>
            <p>• "Full access" seçin</p>
            <p>• API key'i kopyalayın</p>
          </div>
        </div>

        {/* Step 2: API Key Format */}
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">2. Doğru API Key Formatı</h3>
          <div className="bg-gray-900/50 p-3 rounded border border-gray-600">
            <p className="text-gray-400 text-sm mb-2">Doğru format:</p>
            <code className="text-green-400 font-mono text-sm">re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</code>
            <Button
              onClick={() => copyToClipboard("re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
              variant="ghost"
              size="sm"
              className="ml-2 text-gray-400 hover:text-white"
            >
              <Copy className="w-3 h-3" />
            </Button>
          </div>
          <div className="mt-3 text-gray-300 text-sm">
            <p>✅ "re_" ile başlamalı</p>
            <p>✅ Toplam 43 karakter uzunluğunda olmalı</p>
            <p>✅ Sadece harf, rakam ve alt çizgi içermeli</p>
          </div>
        </div>

        {/* Step 3: Vercel Environment Variable */}
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">3. Vercel'de Environment Variable Ekleyin</h3>
          <div className="space-y-3">
            <p className="text-gray-300">Vercel Dashboard'da:</p>
            <div className="bg-gray-900/50 p-3 rounded border border-gray-600">
              <p className="text-gray-400 text-sm mb-2">Settings &gt; Environment Variables &gt; Add New</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Name:</p>
                  <code className="text-blue-400 font-mono">RESEND_API_KEY</code>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Value:</p>
                  <code className="text-green-400 font-mono">re_your_actual_key_here</code>
                </div>
              </div>
            </div>
            <p className="text-orange-400 text-sm">
              ⚠️ Environment variable ekledikten sonra projeyi yeniden deploy edin!
            </p>
          </div>
        </div>

        {/* Verification Button */}
        <div className="text-center">
          <Button
            onClick={handleVerifyApiKey}
            disabled={isVerifying}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-3"
          >
            {isVerifying ? (
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Kontrol Ediliyor...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>API Key'i Kontrol Et</span>
              </div>
            )}
          </Button>
        </div>

        {/* Verification Results */}
        {verificationResult && (
          <div
            className={`p-4 rounded-lg border ${
              verificationResult.success
                ? "bg-green-400/10 border-green-400/20 text-green-400"
                : "bg-red-400/10 border-red-400/20 text-red-400"
            }`}
          >
            <div className="flex items-start space-x-3">
              {verificationResult.success ? (
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              )}
              <div className="flex-1">
                <p className="font-semibold mb-2">
                  {verificationResult.success ? "✅ API Key Doğrulandı!" : "❌ API Key Sorunu"}
                </p>
                <p className="text-sm mb-3">{verificationResult.error || verificationResult.message}</p>

                {verificationResult.details && (
                  <div className="bg-gray-900/30 p-3 rounded text-xs">
                    <p className="font-semibold mb-2">Detaylar:</p>
                    <pre className="whitespace-pre-wrap overflow-x-auto">
                      {JSON.stringify(verificationResult.details, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Common Issues */}
        <div className="bg-orange-400/10 p-4 rounded-lg border border-orange-400/20">
          <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Yaygın Sorunlar ve Çözümleri
          </h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <div>
              <p className="font-semibold text-orange-300">❌ "API key not found"</p>
              <p>→ Environment variable'ı Vercel'de ekleyin ve projeyi redeploy edin</p>
            </div>
            <div>
              <p className="font-semibold text-orange-300">❌ "Invalid API key format"</p>
              <p>→ API key'in "re_" ile başladığından ve 43 karakter olduğundan emin olun</p>
            </div>
            <div>
              <p className="font-semibold text-orange-300">❌ "Authentication failed"</p>
              <p>→ Resend dashboard'da yeni bir API key oluşturun</p>
            </div>
            <div>
              <p className="font-semibold text-orange-300">❌ "Domain not verified"</p>
              <p>→ Şimdilik onboarding@resend.dev kullanıyoruz, sorun olmamalı</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
