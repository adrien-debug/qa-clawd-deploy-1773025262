'use client'

import { useState } from 'react'

const services = [
  {
    title: 'Manual Testing',
    description: 'Comprehensive manual testing by experienced QA professionals to identify usability issues and edge cases.',
    icon: '🔍',
    features: ['User Experience Testing', 'Exploratory Testing', 'Regression Testing', 'Cross-browser Testing']
  },
  {
    title: 'Automated Testing',
    description: 'Scalable automated test suites that run continuously to catch bugs early in the development cycle.',
    icon: '🤖',
    features: ['Unit Testing', 'Integration Testing', 'End-to-End Testing', 'Performance Testing']
  },
  {
    title: 'Security Testing',
    description: 'Thorough security assessments to protect your applications from vulnerabilities and threats.',
    icon: '🛡️',
    features: ['Penetration Testing', 'Vulnerability Assessment', 'Security Audits', 'Compliance Testing']
  },
  {
    title: 'Performance Testing',
    description: 'Load and stress testing to ensure your applications perform optimally under various conditions.',
    icon: '⚡',
    features: ['Load Testing', 'Stress Testing', 'Volume Testing', 'Scalability Testing']
  },
  {
    title: 'Mobile Testing',
    description: 'Specialized testing for mobile applications across different devices and operating systems.',
    icon: '📱',
    features: ['Device Compatibility', 'OS Testing', 'App Store Optimization', 'Mobile Performance']
  },
  {
    title: 'API Testing',
    description: 'Comprehensive API testing to ensure reliable data exchange and system integration.',
    icon: '🔗',
    features: ['REST API Testing', 'GraphQL Testing', 'Data Validation', 'Error Handling']
  }
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive quality assurance solutions tailored to meet your specific testing needs and ensure exceptional software quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm transition-all duration-500 hover:border-gray-600 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2 ${
                hoveredIndex === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}