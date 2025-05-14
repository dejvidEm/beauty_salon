import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "GIGI Beauty Studio",
  description: "Luxury beauty salon offering premium services for hair, face, and body.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#f8f5f2",
  openGraph: {
    title: "GIGI Beauty Studio",
    description: "Luxury beauty salon offering premium services for hair, face, and body.",
    type: "website",
    locale: "en_US",
    url: "https://bagira-beauty.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'