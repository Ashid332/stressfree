import { motion } from 'motion/react';
import { Heart, Brain, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Coaching',
    description: 'Personalized one-on-one sessions to help you navigate life transitions, set meaningful goals, and unlock your full potential.',
    icon: Sparkles,
    color: '#4ECFB3',
    glowColor: 'rgba(78, 207, 179, 0.3)'
  },
  {
    title: 'Mindfulness',
    description: 'Evidence-based mindfulness practices including MBCT and MBSR to cultivate present-moment awareness and inner peace.',
    icon: Brain,
    color: '#C9B8F0',
    glowColor: 'rgba(201, 184, 240, 0.3)'
  },
  {
    title: 'Well Being',
    description: 'Holistic wellness programs combining therapeutic yoga, emotional intelligence, and stress management techniques.',
    icon: Heart,
    color: '#F4A7A3',
    glowColor: 'rgba(244, 167, 163, 0.3)'
  }
];

export function ServicesSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden" id="services">
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
            What We Do
          </h2>
          <p className="text-lg text-[#9BA8C0] max-w-2xl mx-auto">
            Comprehensive programs designed to transform your mental, emotional, and physical wellbeing
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="sfa-3d-card group cursor-pointer"
                style={{
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.5),
                    0 0 40px ${service.glowColor}
                  `
                }}
              >
                {/* Colored Glow Zone (top 40%) */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[40%] rounded-t-[28px] opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                  style={{
                    background: `radial-gradient(circle at top, ${service.color} 0%, transparent 70%)`
                  }}
                />

                <div className="relative p-8 flex flex-col h-full min-h-[480px]">
                  {/* Icon */}
                  <div 
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                      border: `2px solid ${service.color}40`
                    }}
                  >
                    <Icon className="w-10 h-10" style={{ color: service.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#F0F4FF] mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#9BA8C0] leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href={`#${service.title.toLowerCase()}`}
                    className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-4"
                    style={{ color: service.color }}
                  >
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Top edge highlight (3D effect) */}
                <div 
                  className="absolute top-0 left-0 right-0 h-px rounded-t-[28px]"
                  style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
