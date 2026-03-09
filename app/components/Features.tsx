'use client'

import { useState, useEffect, useRef } from 'react'

const features = [
  {
    title: 'Advanced Test Automation',
    description: 'State-of-the-art automation frameworks that reduce testing time by 80% while increasing coverage.',
    icon: '⚙️',
    stats: '80% faster testing'
  },
  {
    title: 'Real-time Reporting',
    description: 'Comprehensive dashboards and real-time reports that provide instant visibility into test results.',
    icon: '📊',
    stats: 'Live insights'
  },
  {
    title: 'CI/CD Integration',
    description: 'Seamless integration with your existing development pipeline for continuous quality assurance.',
    icon: '🔄',
    stats: 'Zero downtime'
  },
  {
    title: 'Expert QA Team',
    description: 'Certified testing professionals with years of experience across various industries and technologies.',
    icon: '👥',
    stats: '50+ experts'
  }
]

export default function Features() {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>(new Array(features.length).fill(false))
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = featureRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleFeatures(prev => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.3 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">QA Long</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge technology with human expertise to deliver unparalleled quality assurance services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={el => featureRefs.current[index] = el}
                className={`flex items-start space-x-6 p-6 rounded-xl bg-gray-900/30 border border-gray-800 transition-all duration-700 ${
                  visibleFeatures[index] 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <span className="text-sm text-blue-400 font-mono bg-blue-400/10 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Quality Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Bug Detection Rate</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
                      </div>
                      <span className="text-green-400 font-mono text-sm">99.9%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Test Coverage</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-11/12 h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
                      </div>
                      <span className="text-blue-400 font-mono text-sm">95%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Client Satisfaction</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" />
                      </div>
                      <span className="text-purple-400 font-mono text-sm">100%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24h</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-gray-400">Tests Daily</div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}