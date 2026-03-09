'use client'

import { useState, useEffect, useRef } from 'react'

const stats = [
  { number: 500, suffix: '+', label: 'Projects Completed', description: 'Successfully tested applications' },
  { number: 99.9, suffix: '%', label: 'Bug Detection Rate', description: 'Industry-leading accuracy' },
  { number: 50, suffix: '+', label: 'Expert QA Engineers', description: 'Certified professionals' },
  { number: 24, suffix: '/7', label: 'Support Available', description: 'Round-the-clock assistance' },
  { number: 95, suffix: '%', label: 'Client Retention', description: 'Long-term partnerships' },
  { number: 80, suffix: '%', label: 'Faster Testing', description: 'Through automation' }
]

function AnimatedNumber({ target, suffix, isVisible }: { target: number, suffix: string, isVisible: boolean }) {
  const [current, setCurrent] = useState(0)
  
  useEffect(() => {
    if (!isVisible) return
    
    const increment = target / 100
    const timer = setInterval(() => {
      setCurrent(prev => {
        const next = prev + increment
        if (next >= target) {
          clearInterval(timer)
          return target
        }
        return next
      })
    }, 20)
    
    return () => clearInterval(timer)
  }, [target, isVisible])
  
  return (
    <span className="text-4xl sm:text-5xl font-bold gradient-text">
      {current.toFixed(target % 1 === 0 ? 0 : 1)}{suffix}
    </span>
  )
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our track record speaks for itself. Here are the numbers that demonstrate our commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 backdrop-blur-sm transition-all duration-700 hover:border-gray-600 hover:shadow-xl hover:shadow-blue-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <AnimatedNumber 
                  target={stat.number} 
                  suffix={stat.suffix} 
                  isVisible={isVisible}
                />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {stat.label}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-600" />
            <span className="text-sm font-medium">Trusted by industry leaders worldwide</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-600" />
          </div>
        </div>
      </div>
    </section>
  )
}