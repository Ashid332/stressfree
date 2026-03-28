import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Working with Reenu transformed my approach to stress management. I've gained tools that have changed my life completely.",
    name: "Sarah Mitchell",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1658288098101-84f074c292a8?w=200",
    rating: 5
  },
  {
    quote: "The mindfulness practices I learned have helped me become a better leader and a more present parent. Truly life-changing.",
    name: "David Chen",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?w=200",
    rating: 5
  },
  {
    quote: "I came feeling overwhelmed and lost. Today, I have clarity, purpose, and genuine peace. Reenu's guidance is invaluable.",
    name: "Priya Sharma",
    location: "Dubai, UAE",
    avatar: "https://images.unsplash.com/photo-1758797316117-8d133af25f8c?w=200",
    rating: 5
  },
  {
    quote: "The coaching sessions gave me practical tools to manage anxiety and build resilience. I'm finally living stress-free.",
    name: "Michael Roberts",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1698047681452-08eba22d0c64?w=200",
    rating: 5
  },
  {
    quote: "Reenu's holistic approach addresses mind, body, and spirit. I've never felt more balanced and at peace with myself.",
    name: "Emma Thompson",
    location: "Melbourne, Australia",
    avatar: "https://images.unsplash.com/photo-1695370992947-ece92da51cd2?w=200",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Center card

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl lg:text-6xl font-bold text-[#F0F4FF] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lives Transformed
          </h2>
          <p className="text-lg text-[#9BA8C0] max-w-2xl mx-auto">
            Real stories from real people who've experienced profound change
          </p>
        </motion.div>

        {/* 3D Coverflow Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-8 perspective-1000">
            {testimonials.map((testimonial, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;
              
              // Calculate position and scale
              const scale = isActive ? 1 : 0.85;
              const translateX = offset * 280;
              const translateZ = isActive ? 0 : -100;
              const rotateY = offset * 15;
              const opacity = Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.5;
              const zIndex = isActive ? 10 : 5 - Math.abs(offset);

              return (
                <motion.div
                  key={testimonial.name}
                  initial={false}
                  animate={{
                    scale,
                    x: translateX,
                    z: translateZ,
                    rotateY,
                    opacity
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    zIndex,
                    transformStyle: 'preserve-3d'
                  }}
                  className={`w-[400px] ${Math.abs(offset) > 2 ? 'pointer-events-none' : ''}`}
                >
                  <div 
                    className={`sfa-glass-card p-8 rounded-[28px] transition-all duration-500 ${
                      isActive ? 'shadow-[0_30px_80px_rgba(78,207,179,0.3)]' : 'shadow-[0_20px_40px_rgba(0,0,0,0.5)]'
                    }`}
                  >
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#4ECFB3] text-[#4ECFB3]" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-[#F0F4FF] text-lg italic leading-relaxed mb-6 min-h-[120px]">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#4ECFB3]/30"
                      />
                      <div>
                        <div className="text-[#F0F4FF] font-semibold">
                          {testimonial.name}
                        </div>
                        <div className="text-[#9BA8C0] text-sm">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-64">
            <button
              onClick={handlePrev}
              className="sfa-ghost-btn w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-[#F0F4FF]" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-[#4ECFB3]'
                      : 'bg-[#4ECFB3]/30 hover:bg-[#4ECFB3]/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="sfa-ghost-btn w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-[#F0F4FF]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
