import { motion } from 'motion/react';
import { Play, Pause, SkipBack, SkipForward, Calendar, BookOpen, Video, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function MediaSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-32 px-4">
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
            Media & Resources
          </h2>
          <p className="text-lg text-[#9BA8C0] max-w-2xl mx-auto">
            Explore our library of transformative content
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Large Video Card - 6 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 lg:row-span-2 sfa-3d-card group relative overflow-hidden cursor-pointer"
            style={{
              minHeight: '400px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(78, 207, 179, 0.2)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1772801974466-16908658183c?w=800"
              alt="Therapeutic Yoga"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/50 to-transparent" />
            
            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ECFB3]/20 border border-[#4ECFB3]/30 w-fit mb-4">
                <Video className="w-4 h-4 text-[#4ECFB3]" />
                <span className="text-[#4ECFB3] text-sm font-semibold">FEATURED VIDEO</span>
              </div>
              <h3 className="text-3xl font-bold text-[#F0F4FF] mb-3">
                Therapeutic Yoga Masterclass
              </h3>
              <p className="text-[#9BA8C0] mb-4">
                Join our comprehensive guide to stress-relieving yoga practices
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4ECFB3] text-[#0A0F1E] font-semibold hover:scale-105 transition-transform duration-300 w-fit">
                <Play className="w-5 h-5" />
                Watch Now
              </button>
            </div>

            {/* Top edge highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-white/15" />
          </motion.div>

          {/* Webinars Card - 6 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 sfa-3d-card group cursor-pointer"
            style={{
              minHeight: '200px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(201, 184, 240, 0.2)'
            }}
          >
            <div className="p-8 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <Calendar className="w-8 h-8 text-[#C9B8F0]" />
                <div className="px-3 py-1 rounded-full bg-[#C9B8F0]/20 border border-[#C9B8F0]/30">
                  <span className="text-[#C9B8F0] text-xs font-semibold">NEXT: APRIL 15</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#F0F4FF] mb-2">
                Upcoming Webinars
              </h3>
              <p className="text-[#9BA8C0] mb-4 flex-grow">
                Join our live sessions on mindfulness and stress management
              </p>
              <a 
                href="#webinars"
                className="inline-flex items-center gap-2 text-[#C9B8F0] font-semibold hover:gap-4 transition-all duration-300"
              >
                View Schedule
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="absolute top-0 left-0 right-0 h-px bg-white/15" />
          </motion.div>

          {/* Articles Card - 3 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 sfa-3d-card group cursor-pointer"
            style={{
              minHeight: '200px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(244, 167, 163, 0.2)'
            }}
          >
            <div className="p-6 h-full flex flex-col">
              <BookOpen className="w-8 h-8 text-[#F4A7A3] mb-4" />
              <div className="px-3 py-1 rounded-full bg-[#F4A7A3]/20 border border-[#F4A7A3]/30 w-fit mb-3">
                <span className="text-[#F4A7A3] text-xs font-semibold">WELLNESS</span>
              </div>
              <h3 className="text-xl font-bold text-[#F0F4FF] mb-2">
                Latest Articles
              </h3>
              <p className="text-[#9BA8C0] text-sm flex-grow">
                Insights on mindful living
              </p>
            </div>
            <div className="absolute top-0 left-0 right-0 h-px bg-white/15" />
          </motion.div>

          {/* Audio Player Card - 9 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-9 sfa-glass-card"
            style={{
              minHeight: '160px',
              background: 'rgba(15, 20, 35, 0.8)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(78, 207, 179, 0.2)'
            }}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4ECFB3] to-[#72A6F5] flex items-center justify-center shadow-lg shadow-[#4ECFB3]/30">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F0F4FF]">
                    Listen Now — Stress Buster
                  </h3>
                  <p className="text-[#9BA8C0] text-sm">
                    10-minute guided meditation for instant calm
                  </p>
                </div>
              </div>

              {/* Waveform Visualization */}
              <div className="flex items-center gap-1 mb-4 h-12">
                {Array.from({ length: 50 }).map((_, i) => {
                  const height = 20 + Math.sin(i * 0.5) * 15 + Math.random() * 10;
                  return (
                    <div
                      key={i}
                      className="flex-1 bg-[#4ECFB3] opacity-30 hover:opacity-100 transition-opacity duration-150 rounded-full"
                      style={{
                        height: `${height}px`,
                        maxWidth: '4px'
                      }}
                    />
                  );
                })}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                    <SkipBack className="w-5 h-5 text-[#F0F4FF]" />
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4ECFB3] to-[#72A6F5] flex items-center justify-center shadow-lg shadow-[#4ECFB3]/30 hover:scale-105 transition-transform duration-300"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    )}
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                    <SkipForward className="w-5 h-5 text-[#F0F4FF]" />
                  </button>
                </div>

                <div className="text-[#9BA8C0] text-sm">
                  <span className="text-[#4ECFB3]">02:45</span> / 10:00
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#4ECFB3] to-[#72A6F5] rounded-full transition-all duration-300"
                  style={{ width: '27.5%' }}
                />
              </div>
            </div>
            <div className="absolute top-0 left-0 right-0 h-px bg-white/15" />
          </motion.div>

          {/* CTA Card - 3 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 sfa-gradient-btn group cursor-pointer flex items-center justify-center text-center p-6"
            style={{
              minHeight: '160px',
              borderRadius: '28px',
              boxShadow: '0 20px 60px rgba(78, 207, 179, 0.4)'
            }}
          >
            <div>
              <Calendar className="w-10 h-10 text-[#0A0F1E] mx-auto mb-3" />
              <h3 className="text-xl font-bold text-[#0A0F1E] mb-2">
                Book a Webinar
              </h3>
              <ArrowRight className="w-6 h-6 text-[#0A0F1E] mx-auto group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
