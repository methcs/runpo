import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Instagram Basic Display API kullanımı
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

    if (!accessToken) {
      return NextResponse.json(
        {
          success: false,
          error: "Instagram access token not configured",
        },
        { status: 500 },
      )
    }

    // Instagram Basic Display API endpoint
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink,timestamp&access_token=${accessToken}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    )

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json({
      success: true,
      posts: data.data || [],
      count: data.data?.length || 0,
    })
  } catch (error) {
    console.error("Instagram feed error:", error)

    // Fallback to mock data if API fails
    const mockPosts = [
      {
        id: "1",
        caption: "🏃‍♂️ Bugün 10K antrenmanı! Tempo koşusu ile hızımızı artırıyoruz. #runpocoaching #koşu #antrenman",
        media_url: "/placeholder.svg?height=400&width=400&text=Instagram+Post+1",
        media_type: "IMAGE",
        permalink: "https://instagram.com/p/example1",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      },
      // Add more mock posts...
    ]

    return NextResponse.json({
      success: true,
      posts: mockPosts,
      count: mockPosts.length,
      fallback: true,
    })
  }
}
