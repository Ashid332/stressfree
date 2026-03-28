import { motion } from 'motion/react';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../../assets/57e7f8de8c10fe24d8c6006eb979991e2f041261.png';

export function FloatingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4"
    >
      <div className="sfa-glass-card flex items-center justify-between px-6 md:px-8 py-4 rounded-full">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={logoImage} 
            alt="SFA - Stress Free All" 
            className="h-10 w-auto"
          />
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'Webinars', 'Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#F0F4FF] hover:text-[#4ECFB3] transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4ECFB3] to-[#72A6F5] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <button className="hidden md:block sfa-gradient-btn px-6 py-3 rounded-full text-[#0A0F1E] font-semibold hover:scale-105 transition-transform duration-300">
          Book a Call
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 rounded-full sfa-glass-card flex items-center justify-center"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[#F0F4FF]" />
          ) : (
            <Menu className="w-6 h-6 text-[#F0F4FF]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 sfa-glass-card rounded-3xl p-6 space-y-4"
        >
          {['Services', 'About', 'Webinars', 'Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#F0F4FF] hover:text-[#4ECFB3] transition-colors duration-300 py-2"
            >
              {item}
            </a>
          ))}
          <button className="w-full sfa-gradient-btn px-6 py-3 rounded-full text-[#0A0F1E] font-semibold mt-4">
            Book a Call
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}