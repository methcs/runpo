import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { CoachingPhilosophy } from "@/components/coaching-philosophy"
import { RaceExperiences } from "@/components/race-experiences"
import { InstagramFeed } from "@/components/instagram-feed"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroBanner />
      <CoachingPhilosophy />
      <RaceExperiences />
      <InstagramFeed />
      <TeamSection />
      <Footer />
    </div>
  )
}
