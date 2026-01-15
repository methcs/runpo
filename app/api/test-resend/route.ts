import { NextResponse } from "next/server"

export async function POST() {
  try {
    const hasApiKey = !!process.env.RESEND_API_KEY
    const apiKeyLength = process.env.RESEND_API_KEY?.length || 0
    const apiKeyPrefix = process.env.RESEND_API_KEY?.substring(0, 10) || "none"

    return NextResponse.json({
      success: true,
      environment: {
        hasApiKey,
        apiKeyLength,
        apiKeyPrefix: apiKeyPrefix + "...",
        nodeEnv: process.env.NODE_ENV,
        vercelEnv: process.env.VERCEL_ENV,
      },
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
