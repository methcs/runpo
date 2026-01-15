import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Clock, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function YarisTecrubelerimPage() {
  const raceExperiences = [
    {
      id: 1,
      title: "Uludağ Ultra Trail 42K – İlk Edisyon Deneyimi",
      date: "Temmuz 25, 2025",
      location: "Uludağ Kayak Merkezi",
      distance: "42K",
      elevation: "2250m+",
      time: "5:11:00",
      category: "Ultra Trail",
      difficulty: "Zor",
      image: "/images/fikretozgur-trail-running.jpg",
      excerpt:
        "Türkiye'nin en köklü ve prestijli dağ yarışlarından biri olan Uludağ Ultra Trail'de, bu yıl ilk kez koşulan 42 kilometrelik parkurun start çizgisindeydim...",
      highlights: [
        "İlk kez koşulan 42K mesafede deneyim",
        "Teknik parkur ve zorlu hava koşulları",
        "Beklentilerin üzerinde performans",
        "Mental dayanıklılık testi",
      ],
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Kolay":
        return "bg-green-500"
      case "Orta":
        return "bg-yellow-500"
      case "Zor":
        return "bg-orange-500"
      case "Çok Zor":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Maraton":
        return "bg-purple-500"
      case "Yarı Maraton":
        return "bg-blue-500"
      case "Ultra Trail":
        return "bg-red-500"
      case "10K":
        return "bg-green-500"
      case "5K":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            YARIŞ
            <span className="text-yellow-400"> TECRÜBELERİM</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Her yarış bir öğrenme deneyimi. Başarılar, zorluklar ve kazanılan tecrübeler...
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-sm text-gray-300">Tamamlanan Yarış</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">800+</div>
              <div className="text-sm text-gray-300">Toplam KM</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">12</div>
              <div className="text-sm text-gray-300">Kişisel Rekor</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
              <div className="text-sm text-gray-300">Yıl Deneyim</div>
            </div>
          </div>
        </div>
      </section>

      {/* Race Experiences */}
      <section className="bg-black text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
            {raceExperiences.map((race, index) => (
              <Card
                key={race.id}
                className="bg-gray-900/20 backdrop-blur-sm border-gray-700/30 hover:border-yellow-400/50 transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={race.image || "/placeholder.svg"}
                        alt={race.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className={`${getCategoryColor(race.category)} text-white border-0`}>
                          {race.category}
                        </Badge>
                        <Badge className={`${getDifficultyColor(race.difficulty)} text-white border-0`}>
                          {race.difficulty}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{race.title}</h3>

                      {/* Race Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{race.date}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{race.location}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Target className="w-4 h-4 mr-2" />
                          <span>{race.distance}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{race.time}</span>
                        </div>
                      </div>

                      {/* Excerpt */}
                      <p className="text-gray-300 leading-relaxed mb-6">{race.excerpt}</p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Öne Çıkan Noktalar:</h4>
                        <ul className="space-y-2">
                          {race.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-center text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <a
                        href="https://runpocoaching.blogspot.com/2025/07/uludag-ultra-trail-42k-ilk-edisyon.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300">
                          Detayları Oku
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
