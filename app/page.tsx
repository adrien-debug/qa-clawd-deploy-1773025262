import { Suspense } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'

export default function Home() {
  return (
    <main className="relative">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <Services />
        <Features />
        <Stats />
        <Testimonials />
        <CTA />
        <Footer />
      </Suspense>
    </main>
  )
}