import { motion } from 'motion/react';
import { Award, Globe, Calendar, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const credentials = [
  'PCC - Professional Certified Coach',
  'MBCT - Mindfulness-Based Cognitive Therapy',
  'MBSR - Mindfulness-Based Stress Reduction',
  'Executive Coach',
  'Emotional Wellbeing Coach'
];

export function AboutSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Create floating particles around a central glow
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Central lavender glow
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = 100 + Math.sin(time * 0.001) * 20;

      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, 'rgba(201, 184, 240, 0.6)');
      gradient.addColorStop(0.5, 'rgba(201, 184, 240, 0.3)');
      gradient.addColorStop(1, 'rgba(201, 184, 240, 0.05)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Animate particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = `rgba(201, 184, 240, ${0.3 + Math.sin(time * 0.002) * 0.2})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      time += 16;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative py-32 px-4" id="about">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9B8F0]/30 bg-[#C9B8F0]/5">
              <span className="text-[#C9B8F0] uppercase tracking-wider text-sm font-semibold">
                MEET YOUR GUIDE
              </span>
            </div>

            {/* Heading */}
            <h2 
              className="text-5xl lg:text-6xl font-bold text-[#F0F4FF]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Coached by Reenu
            </h2>

            {/* Bio Card */}
            <div className="sfa-glass-card p-8 rounded-[28px] space-y-6">
              <p className="text-[#F0F4FF] leading-relaxed text-lg">
                With over 12 years of experience transforming lives across the globe, Reenu brings a unique 
                blend of Eastern mindfulness wisdom and Western coaching science to help you achieve lasting change.
              </p>
              <p className="text-[#9BA8C0] leading-relaxed">
                Her holistic approach combines evidence-based mindfulness practices with personalized coaching 
                to address the root causes of stress and cultivate genuine wellbeing.
              </p>

              {/* Credentials */}
              <div className="space-y-3">
                <h4 className="text-[#F0F4FF] font-semibold mb-4">Certifications & Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {credentials.map((cred) => {
                    const [abbr, full] = cred.split(' - ');
                    return (
                      <div
                        key={cred}
                        className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
                        style={{
                          background: 'linear-gradient(135deg, rgba(201, 184, 240, 0.15), rgba(78, 207, 179, 0.15))',
                          borderColor: 'rgba(201, 184, 240, 0.3)',
                          color: '#C9B8F0'
                        }}
                        title={full || abbr}
                      >
                        {abbr}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-[#4ECFB3]" />
                    <div className="text-3xl font-bold text-[#4ECFB3]">12+</div>
                  </div>
                  <div className="text-sm text-[#9BA8C0]">Years</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-[#4ECFB3]" />
                    <div className="text-3xl font-bold text-[#4ECFB3]">500+</div>
                  </div>
                  <div className="text-sm text-[#9BA8C0]">Clients</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-[#4ECFB3]" />
                    <div className="text-3xl font-bold text-[#4ECFB3]">40+</div>
                  </div>
                  <div className="text-sm text-[#9BA8C0]">Countries</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="sfa-ghost-btn px-8 py-4 rounded-full text-[#F0F4FF] font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">
              Learn More About Reenu
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* RIGHT - 3D AVATAR CANVAS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background glow orb */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#C9B8F0] opacity-20 blur-[120px]" />
            </div>

            {/* 3D Canvas Frame */}
            <div className="relative aspect-square max-w-lg mx-auto sfa-glass-card p-8 rounded-[32px] border-2 border-[#C9B8F0]/30 shadow-[0_0_60px_rgba(201,184,240,0.3)]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1758797316117-8d133af25f8c?w=600"
                  alt="Reenu - Mindfulness Coach"
                  className="relative z-10 w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Dev Handoff Note */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A0F1E]/90 backdrop-blur-sm p-3 rounded-xl border border-[#C9B8F0]/30">
                <p className="text-xs text-[#C9B8F0] font-mono">
                  🎨 DEV NOTE: Replace with 3D Avatar Model with Lavender Glow
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
