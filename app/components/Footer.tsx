'use client'

const footerLinks = {
  Services: [
    'Manual Testing',
    'Automated Testing',
    'Security Testing',
    'Performance Testing',
    'Mobile Testing',
    'API Testing'
  ],
  Company: [
    'About Us',
    'Our Team',
    'Careers',
    'Case Studies',
    'Blog',
    'Contact'
  ],
  Resources: [
    'Documentation',
    'API Reference',
    'Testing Guides',
    'Best Practices',
    'Webinars',
    'Support'
  ],
  Legal: [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'GDPR Compliance',
    'Security',
    'SLA'
  ]
}

const socialLinks = [
  { name: 'Twitter', icon: '🐦', href: '#' },
  { name: 'LinkedIn', icon: '💼', href: '#' },
  { name: 'GitHub', icon: '🐙', href: '#' },
  { name: 'Discord', icon: '💬', href: '#' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-background to-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">QA Long</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professional quality assurance services that ensure your software meets the highest standards of quality, performance, and reliability.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-gray-600"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-2xl p-8 mb-12 border border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold text-white mb-4">
              Stay Updated with QA Best Practices
            </h4>
            <p className="text-muted-foreground mb-6">
              Get the latest insights, testing strategies, and industry trends delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} QA Long. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>All systems operational</span>
            </span>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-white transition-colors">Status</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-blue-400">🛡️</span>
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-400">🔒</span>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-purple-400">⚡</span>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}