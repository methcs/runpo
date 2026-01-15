"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, ExternalLink, Heart, MessageCircle, Eye } from "lucide-react"

interface InstagramPost {
  id: string
  caption: string
  media_url: string
  media_type: string
  permalink: string
  timestamp: string
  like_count?: number
  comments_count?: number
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Mock data for demonstration - replace with real Instagram API
  const mockPosts: InstagramPost[] = [
    {
      id: "1",
      caption: "🏃‍♂️ Bugün 10K antrenmanı! Tempo koşusu ile hızımızı artırıyoruz. #runpocoaching #koşu #antrenman",
      media_url: "/placeholder.svg?height=400&width=400&text=Instagram+Post+1",
      media_type: "IMAGE",
      permalink: "https://instagram.com/p/example1",
      timestamp: "2025-01-20T10:00:00Z",
      like_count: 45,
      comments_count: 8,
    },
    {
      id: "2",
      caption: "🌅 Sabah antrenmanının verdiği enerji! Yeni haftaya güçlü başlıyoruz. #morningrun #motivation",
      media_url: "/placeholder.svg?height=400&width=400&text=Instagram+Post+2",
      media_type: "IMAGE",
      permalink: "https://instagram.com/p/example2",
      timestamp: "2025-01-19T06:30:00Z",
      like_count: 67,
      comments_count: 12,
    },
    {
      id: "3",
      caption: "📊 Haftalık performans analizi! Gelişiminizi takip etmek çok önemli. #performans #analiz #gelişim",
      media_url: "/placeholder.svg?height=400&width=400&text=Instagram+Post+3",
      media_type: "IMAGE",
      permalink: "https://instagram.com/p/example3",
      timestamp: "2025-01-18T15:45:00Z",
      like_count: 32,
      comments_count: 5,
    },
    {
      id: "4",
      caption: "🏆 Yarış hazırlığı devam ediyor! Hedeflerinize odaklanın. #yarışhazırlığı #hedef #başarı",
      media_url: "/placeholder.svg?height=400&width=400&text=Instagram+Post+4",
      media_type: "IMAGE",
      permalink: "https://instagram.com/p/example4",
      timestamp: "2025-01-17T12:20:00Z",
      like_count: 89,
      comments_count: 15,
    },
    {
      id: "5",
      caption: "🌟 Yeni sporcularımızla tanışma günü! Koşu ailemiz büyüyor. #yenisporcu #takım #aile",
      media_url: "/placeholder.svg?height=400&width=400&text=Instagram+Post+5",
      media_type: "IMAGE",
      permalink: "https://instagram.com/p/example5",
      timestamp: "2025-01-16T14:10:00Z",
      like_count: 56,
      comments_count: 9,
    },
    {
      id: "6",
      caption: "💪 Güç antrenmanı günü! Koşu sadece bacak işi değil, tüm vücut çalışır. #güçantrenmanı #crosstraining",
      media_url: "/placeholder.svg?height=400&width=400&text=Instagram+Post+6",
      media_type: "IMAGE",
      permalink: "https://instagram.com/p/example6",
      timestamp: "2025-01-15T16:30:00Z",
      like_count: 41,
      comments_count: 7,
    },
  ]

  useEffect(() => {
    // Simulate API call
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true)
        // In real implementation, you would call Instagram Basic Display API
        // const response = await fetch('/api/instagram-feed')
        // const data = await response.json()

        // For now, use mock data
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate loading
        setPosts(mockPosts)
        setError(null)
      } catch (err) {
        setError("Instagram gönderileri yüklenirken hata oluştu")
        setPosts(mockPosts) // Fallback to mock data
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [])

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "1 gün önce"
    if (diffDays < 7) return `${diffDays} gün önce`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} hafta önce`
    return date.toLocaleDateString("tr-TR")
  }

  const truncateCaption = (caption: string, maxLength = 100) => {
    if (caption.length <= maxLength) return caption
    return caption.substring(0, maxLength) + "..."
  }

  if (loading) {
    return (
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">INSTAGRAM</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-gray-800/20 border-gray-700/30 animate-pulse">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-700/50 rounded-t-lg"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-700/50 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-700/50 rounded w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent mb-6 tracking-tight">
            INSTAGRAM
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Günlük antrenmanlarımız, başarı hikayelerimiz ve koşu ipuçlarımız
          </p>

          <a
            href="https://instagram.com/runpocoaching"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            <span>@runpocoaching</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Error State */}
        {error && (
          <div className="text-center mb-8">
            <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Instagram Posts Carousel */}
        <div className="relative mb-12">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              {posts.slice(-3).map((post, index) => (
                <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                  <Card className="bg-gray-800/20 backdrop-blur-sm border-gray-700/30 hover:border-yellow-400/50 transition-all duration-300 group overflow-hidden h-full">
                    <CardContent className="p-0">
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={post.media_url || "/placeholder.svg"}
                          alt="Instagram post"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex items-center space-x-4 text-white">
                            {post.like_count && (
                              <div className="flex items-center space-x-1">
                                <Heart className="w-5 h-5" />
                                <span className="font-semibold">{post.like_count}</span>
                              </div>
                            )}
                            {post.comments_count && (
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="w-5 h-5" />
                                <span className="font-semibold">{post.comments_count}</span>
                              </div>
                            )}
                            <div className="flex items-center space-x-1">
                              <Eye className="w-5 h-5" />
                              <span className="text-sm">Görüntüle</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">{truncateCaption(post.caption)}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-xs">{formatDate(post.timestamp)}</span>

                          <a
                            href={post.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <a
            href="https://instagram.com/runpocoaching"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Instagram className="w-5 h-5" />
              <span>Tüm Gönderileri Instagram'da Gör</span>
              <ExternalLink className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
