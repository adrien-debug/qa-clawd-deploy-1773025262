import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QA Long - Quality Assurance Excellence',
  description: 'Professional quality assurance services for modern software development. Comprehensive testing solutions to ensure your applications meet the highest standards.',
  keywords: 'quality assurance, QA, software testing, test automation, bug testing, quality control',
  authors: [{ name: 'QA Long Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'QA Long - Quality Assurance Excellence',
    description: 'Professional quality assurance services for modern software development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QA Long - Quality Assurance Excellence',
    description: 'Professional quality assurance services for modern software development.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}