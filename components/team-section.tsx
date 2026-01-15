"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Edit3, Plus, Save, X, Activity } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  email: string
  phone: string
  instagram: string
  strava: string
  image: string
  bio: string
}

export function TeamSection() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null)
  const [showAddMember, setShowAddMember] = useState(false)

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: "Canpolat Akbay",
      role: "Baş Antrenör & Kurucu",
      email: "can@runpocoaching.com",
      phone: "+90 555 123 4567",
      instagram: "@canpoakbay",
      strava: "https://www.strava.com/athletes/cakbay",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-V7SshRQ6IDwdJZANbCXWfcYRn7clqh.png",
      bio: "Runpo Coaching'in kurucusu ve baş antrenörü. Koşu bilimi ve performans optimizasyonu konularında uzman.",
    },
  ])

  const handleSaveMember = (memberData: Partial<TeamMember>) => {
    if (editingMember) {
      setTeamMembers(
        teamMembers.map((member) => (member.id === editingMember.id ? { ...member, ...memberData } : member)),
      )
      setEditingMember(null)
    } else {
      const newMember: TeamMember = {
        id: Date.now(),
        name: memberData.name || "",
        role: memberData.role || "",
        email: memberData.email || "",
        phone: memberData.phone || "",
        instagram: memberData.instagram || "",
        strava: memberData.strava || "",
        image: memberData.image || "/placeholder.svg?height=200&width=200&text=New",
        bio: memberData.bio || "",
      }
      setTeamMembers([...teamMembers, newMember])
      setShowAddMember(false)
    }
  }

  return (
    <>
      <section className="bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex justify-between items-center mb-16">
            <div className="text-center w-full">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent mb-6 tracking-tight">
                EKİBİMİZ
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Profesyonel ekibimizle tanışın ve koşu hedeflerinize birlikte ulaşalım
              </p>
            </div>
          </div>

          {/* Admin Controls - Only visible to admins */}
          {isAdmin && (
            <div className="flex justify-center gap-4 mb-12">
              <Button
                onClick={() => setIsEditMode(!isEditMode)}
                className={`${isEditMode ? "bg-red-500 hover:bg-red-600" : "bg-yellow-400 hover:bg-yellow-500"} text-black font-semibold`}
              >
                <Edit3 className="w-4 h-4 mr-2" />
                {isEditMode ? "Düzenlemeyi Bitir" : "Ekibi Düzenle"}
              </Button>
              {isEditMode && (
                <Button onClick={() => setShowAddMember(true)} className="bg-green-500 hover:bg-green-600 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Ekip Üyesi Ekle
                </Button>
              )}
            </div>
          )}

          {/* Admin Toggle Button - Hidden admin access */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-xs text-gray-600 hover:text-yellow-400"
              style={{ fontSize: "8px" }}
            >
              {isAdmin ? "🔒" : "🔓"}
            </button>
          </div>

          {/* Updated Grid Layout - Centered single column */}
          <div className="flex justify-center">
            <div className="max-w-md">
              {teamMembers.map((member) => (
                <Card
                  key={member.id}
                  className="bg-black/20 backdrop-blur-sm border-gray-700/30 hover:border-yellow-400/50 transition-all duration-300 group mb-8"
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-yellow-400/20 group-hover:border-yellow-400/50 transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-yellow-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">{member.bio}</p>

                    <div className="space-y-3 text-sm text-gray-400 mb-6">
                      <a
                        href={`https://instagram.com/${member.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center hover:text-yellow-400 transition-colors duration-300"
                      >
                        <Instagram className="w-4 h-4 mr-2" />
                        <span>{member.instagram}</span>
                      </a>
                      <a
                        href={member.strava}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center hover:text-yellow-400 transition-colors duration-300"
                      >
                        <Activity className="w-4 h-4 mr-2" />
                        <span>Strava Profili</span>
                      </a>
                    </div>

                    {isEditMode && (
                      <Button
                        onClick={() => setEditingMember(member)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                        size="sm"
                      >
                        <Edit3 className="w-4 h-4 mr-2" />
                        Düzenle
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            
          </div>
        </div>
      </section>

      {/* Member Edit Modal */}
      {(editingMember || showAddMember) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-gray-900 border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">
                  {editingMember ? "Ekip Üyesini Düzenle" : "Yeni Ekip Üyesi Ekle"}
                </h3>
                <Button
                  onClick={() => {
                    setEditingMember(null)
                    setShowAddMember(false)
                  }}
                  variant="ghost"
                  size="sm"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <MemberForm
                member={editingMember}
                onSave={handleSaveMember}
                onCancel={() => {
                  setEditingMember(null)
                  setShowAddMember(false)
                }}
              />
            </div>
          </Card>
        </div>
      )}
    </>
  )
}

// Member Form Component
function MemberForm({
  member,
  onSave,
  onCancel,
}: {
  member: TeamMember | null
  onSave: (data: Partial<TeamMember>) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState({
    name: member?.name || "",
    role: member?.role || "",
    email: member?.email || "",
    phone: member?.phone || "",
    instagram: member?.instagram || "",
    strava: member?.strava || "",
    image: member?.image || "/placeholder.svg?height=200&width=200&text=New",
    bio: member?.bio || "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Ad Soyad</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-gray-800 border-gray-600 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Rol</label>
          <Input
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="bg-gray-800 border-gray-600 text-white"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">E-posta</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-gray-800 border-gray-600 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Telefon</label>
          <Input
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-gray-800 border-gray-600 text-white"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Instagram</label>
        <Input
          value={formData.instagram}
          onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
          className="bg-gray-800 border-gray-600 text-white"
          placeholder="@kullaniciadi"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Strava</label>
        <Input
          value={formData.strava}
          onChange={(e) => setFormData({ ...formData, strava: e.target.value })}
          className="bg-gray-800 border-gray-600 text-white"
          placeholder="https://www.strava.com/athletes/..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Profil Resmi URL</label>
        <Input
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="bg-gray-800 border-gray-600 text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Biyografi</label>
        <Textarea
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          className="bg-gray-800 border-gray-600 text-white"
          rows={3}
          required
        />
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black">
          <Save className="w-4 h-4 mr-2" />
          Kaydet
        </Button>
        <Button
          type="button"
          onClick={onCancel}
          variant="outline"
          className="border-gray-600 text-gray-300 bg-transparent"
        >
          İptal
        </Button>
      </div>
    </form>
  )
}
