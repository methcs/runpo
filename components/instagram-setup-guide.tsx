"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertTriangle, RefreshCw, Copy, ExternalLink, Instagram } from "lucide-react"

export function InstagramSetupGuide() {
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<any>(null)

  const handleVerifyInstagram = async () => {
    setIsVerifying(true)
    try {
      const response = await fetch("/api/instagram-feed", { method: "GET" })
      const result = await response.json()
      setVerificationResult(result)
    } catch (error) {
      setVerificationResult({
        success: false,
        error: "Network error",
        details: { systemError: "Failed to connect to Instagram API" },
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
        <CardTitle className="text-2xl text-white text-center flex items-center justify-center space-x-2">
          <Instagram className="w-6 h-6 text-pink-500" />
          <span>Instagram Feed Kurulum Rehberi</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Step 1: Facebook Developer Account */}
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">1. Facebook Developer Hesabı Oluşturun</h3>
          <div className="space-y-2 text-gray-300">
            <p>
              •{" "}
              <a
                href="https://developers.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                developers.facebook.com <ExternalLink className="w-3 h-3 ml-1" />
              </a>{" "}
              adresine gidin
            </p>
            <p>• "Get Started" butonuna tıklayın</p>
            <p>• Facebook hesabınızla giriş yapın</p>
            <p>• Developer hesabınızı doğrulayın</p>
          </div>
        </div>

        {/* Step 2: Create App */}
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">2. Facebook App Oluşturun</h3>
          <div className="space-y-2 text-gray-300">
            <p>• "Create App" butonuna tıklayın</p>
            <p>• "Consumer" seçeneğini seçin</p>
            <p>• App adı: "Runpo Coaching Website"</p>
            <p>• Contact email: info@runpocoaching.com</p>
            <p>• "Create App" ile oluşturun</p>
          </div>
        </div>

        {/* Step 3: Instagram Basic Display */}
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">3. Instagram Basic Display Ekleyin</h3>
          <div className="space-y-2 text-gray-300">
            <p>• App Dashboard'da "Add Product" butonuna tıklayın</p>
            <p>• "Instagram Basic Display" seçin</p>
            <p>• "Set Up" butonuna tıklayın</p>
            <p>• "Create New App" seçin</p>
          </div>
        </div>

        {/* Step 4: Configure Settings */}
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">4. Instagram App Ayarları</h3>
          <div className="bg-gray-900/50 p-3 rounded border border-gray-600 mb-3">
            <p className="text-gray-400 text-sm mb-2">Redirect URI'ları ekleyin:</p>
            <div className="space-y-1">
              <code className="text-green-400 font-mono text-sm block">
                https://runpo-coaching.vercel.app/auth/instagram
              </code>
              <Button
                onClick={() => copyToClipboard("https://runpo-coaching.vercel.app/auth/instagram")}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white text-xs"
              >
                <Copy className="w-3 h-3 mr-1" />
                Kopyala
              </Button>
            </div>
          </div>
          <div className="space-y-2 text-gray-300 text-sm">
            <p>• Instagram Basic Display → Basic Display → Settings</p>
            <p>• "Valid OAuth Redirect URIs" kısmına yukarıdaki URL'i ekleyin</p>
            <p>• "Save Changes" ile kaydedin</p>
          </div>
        </div>

        {/* Step 5: Get Access Token */}
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">5. Access Token Alın</h3>
          <div className="space-y-2 text-gray-300 text-sm">
            <p>• Instagram Basic Display → Basic Display → User Token Generator</p>
            <p>• "Add or Remove Instagram Testers" kısmına Instagram hesabınızı ekleyin</p>
            <p>• Instagram hesabınızdan test davetini kabul edin</p>
            <p>• "Generate Token" ile token oluşturun</p>
            <p>• Token'ı kopyalayın (60 gün geçerli)</p>
          </div>
        </div>

        {/* Step 6: Add to Vercel */}
        <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">6. Vercel Environment Variable</h3>
          <div className="bg-gray-900/50 p-3 rounded border border-gray-600">
            <p className="text-gray-400 text-sm mb-2">Vercel'de ekleyin:</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Name:</p>
                <code className="text-blue-400 font-mono">INSTAGRAM_ACCESS_TOKEN</code>
              </div>
              <div>
                <p className="text-xs text-gray-500">Value:</p>
                <code className="text-green-400 font-mono">your_instagram_token_here</code>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Button */}
        <div className="text-center">
          <Button
            onClick={handleVerifyInstagram}
            disabled={isVerifying}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3"
          >
            {isVerifying ? (
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Instagram Feed Kontrol Ediliyor...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4" />
                <span>Instagram Feed'i Test Et</span>
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
                  {verificationResult.success ? "✅ Instagram Feed Çalışıyor!" : "❌ Instagram Feed Sorunu"}
                </p>
                <p className="text-sm mb-3">
                  {verificationResult.error || `${verificationResult.count} gönderi yüklendi`}
                </p>

                {verificationResult.fallback && (
                  <p className="text-sm text-yellow-400">⚠️ API çalışmıyor, demo veriler gösteriliyor</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Alternative: Simple Instagram Link */}
        <div className="bg-blue-400/10 p-4 rounded-lg border border-blue-400/20">
          <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Alternatif: Basit Instagram Linki
          </h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p>Instagram API kurulumu karmaşık geliyorsa, şimdilik basit bir Instagram linki kullanabilirsiniz:</p>
            <div className="bg-gray-900/50 p-3 rounded">
              <p className="text-blue-400 font-semibold mb-2">Mevcut durum:</p>
              <p>✅ Instagram feed bileşeni hazır</p>
              <p>✅ Demo verilerle çalışıyor</p>
              <p>✅ Instagram linkine yönlendiriyor</p>
              <p>⏳ Gerçek API entegrasyonu opsiyonel</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
