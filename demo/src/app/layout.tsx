import type { Metadata } from 'next'
import './globals.css'
import Header from './Header'
import Footer from './Footer'

export const metadata: Metadata = {
  title: 'Next.js 13 Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="container mx-auto text-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
