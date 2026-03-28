import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../../assets/57e7f8de8c10fe24d8c6006eb979991e2f041261.png';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="relative pt-32 pb-12 px-4" style={{ background: '#060912' }}>
      {/* CTA Banner */}
      <div className="relative z-10 max-w-5xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="sfa-glass-card p-12 rounded-[28px] relative overflow-hidden"
          style={{
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(78, 207, 179, 0.2)'
          }}
        >
          {/* Left glow effect */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4ECFB3] to-[#72A6F5] rounded-l-[28px]" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#4ECFB3] opacity-30 blur-[80px]" />

          <div className="relative text-center mb-8">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-[#F0F4FF] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Begin Your Journey Today.
            </h2>
            <p className="text-lg text-[#9BA8C0] max-w-2xl mx-auto">
              Take the first step towards a stress-free life. Reserve your spot for a complimentary consultation.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1 sfa-glass-card rounded-full px-6 py-4 flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#4ECFB3]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-none outline-none text-[#F0F4FF] placeholder:text-[#9BA8C0]"
                required
              />
            </div>
            <button
              type="submit"
              className="sfa-gradient-btn px-8 py-4 rounded-full text-[#0A0F1E] font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Reserve My Spot
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="SFA - Stress Free All" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-[#9BA8C0] leading-relaxed">
              Empowering individuals to live mindfully, stress-free, and with purpose.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' }
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full sfa-glass-card flex items-center justify-center hover:bg-[#4ECFB3]/20 hover:border-[#4ECFB3]/50 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-[#9BA8C0] group-hover:text-[#4ECFB3] transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F0F4FF] font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Coaching Programs', 'Mindfulness Training', 'Testimonials', 'FAQs'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#9BA8C0] hover:text-[#4ECFB3] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[#F0F4FF] font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Blog Articles', 'Webinars', 'Video Library', 'Audio Meditations', 'Free Guides', 'Book a Session'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#9BA8C0] hover:text-[#4ECFB3] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F0F4FF] font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+97150123456"
                  className="flex items-start gap-3 text-[#9BA8C0] hover:text-[#4ECFB3] transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 text-[#4ECFB3] mt-0.5 flex-shrink-0" />
                  <span>+971 50 123 4567</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@stressfreeall.com"
                  className="flex items-start gap-3 text-[#9BA8C0] hover:text-[#4ECFB3] transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 text-[#4ECFB3] mt-0.5 flex-shrink-0" />
                  <span>hello@stressfreeall.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#9BA8C0]">
                <MapPin className="w-5 h-5 text-[#4ECFB3] mt-0.5 flex-shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>

            {/* Map Placeholder */}
            <div className="mt-6 h-32 rounded-2xl overflow-hidden sfa-glass-card">
              <div className="w-full h-full bg-gradient-to-br from-[#4ECFB3]/20 to-[#C9B8F0]/20 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#4ECFB3]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9BA8C0] text-sm">
            © 2026 Stress Free All. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="#privacy"
              className="text-[#9BA8C0] hover:text-[#4ECFB3] transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms"
              className="text-[#9BA8C0] hover:text-[#4ECFB3] transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}