import type React from "react"
import type { Metadata } from "next"
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fraunces",
})

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Tendai Dzuda",
  description:
    "Data scientist based in Harare, working at the intersection of applied machine learning and public health.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${publicSans.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <body className="bg-paper text-ink font-body antialiased">{children}</body>
    </html>
  )
}
