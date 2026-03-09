'use client'

import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-3xl p-8 sm:p-12 border border-gray-700 backdrop-blur-sm">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Elevate</span> Your Quality?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of companies that trust QA Long for their quality assurance needs. 
            Get started with a free consultation and see the difference professional testing makes.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-sm">No Setup Fees</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  Get Started
                </button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto mb-8 p-4 bg-green-900/20 border border-green-700 rounded-lg">
              <div className="flex items-center justify-center space-x-2 text-green-400">
                <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
                  <span className="text-green-900 text-xs">✓</span>
                </div>
                <span className="font-medium">Thank you! We'll be in touch soon.</span>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">Schedule Demo</span>
            </button>
            
            <button className="group relative px-8 py-4 text-blue-400 font-semibold hover:text-blue-300 transition-all duration-300">
              <span className="relative z-10">View Case Studies →</span>
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-sm text-muted-foreground">
              Trusted by 500+ companies worldwide • 99.9% uptime guarantee • GDPR compliant
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}