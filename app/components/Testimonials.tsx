'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    company: 'TechFlow Solutions',
    content: 'QA Long transformed our testing process completely. Their automated testing suite caught critical bugs that would have cost us thousands in production. The team is incredibly professional and responsive.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Developer',
    company: 'InnovateLabs',
    content: 'Working with QA Long has been a game-changer. Their comprehensive testing approach and detailed reporting helped us improve our code quality by 300%. Highly recommended!',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    name: 'Emily Watson',
    role: 'Product Manager',
    company: 'StartupXYZ',
    content: 'The security testing services provided by QA Long gave us confidence to launch our fintech product. Their thorough vulnerability assessments and compliance testing were invaluable.',
    rating: 5,
    avatar: '👩‍🚀'
  },
  {
    name: 'David Kim',
    role: 'Engineering Manager',
    company: 'ScaleUp Inc',
    content: 'QA Long\'s mobile testing expertise helped us achieve 99.9% crash-free sessions across all platforms. Their attention to detail and comprehensive device testing is unmatched.',
    rating: 5,
    avatar: '👨‍🔧'
  },
  {
    name: 'Lisa Thompson',
    role: 'Quality Director',
    company: 'Enterprise Corp',
    content: 'The performance testing conducted by QA Long revealed bottlenecks we never knew existed. Their optimization recommendations improved our application speed by 60%.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    company: 'NextGen Apps',
    content: 'QA Long\'s API testing services ensured seamless integration with our third-party services. Their automated test suites run continuously, giving us peace of mind with every deployment.',
    rating: 5,
    avatar: '👨‍💼'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about our quality assurance services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl p-8 sm:p-12 border border-gray-700 backdrop-blur-sm">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-lg sm:text-xl text-gray-200 text-center mb-8 leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-4xl">{testimonial.avatar}</div>
                      <div className="text-center">
                        <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                        <div className="text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm text-blue-400">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-gray-600"
          >
            ←
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-gray-600"
          >
            →
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        
        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">200+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-muted-foreground">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  )
}