import { motion } from 'motion/react';
import { ArrowRight, Play, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Create breathing orb animation
    let animationFrame: number;
    let time = 0;

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Main breathing orb
      const radius = 80 + Math.sin(time * 0.002) * 20;
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        radius
      );
      gradient.addColorStop(0, 'rgba(78, 207, 179, 0.8)');
      gradient.addColorStop(0.5, 'rgba(114, 166, 245, 0.4)');
      gradient.addColorStop(1, 'rgba(201, 184, 240, 0.1)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
      ctx.fill();

      // Outer glow rings
      for (let i = 0; i < 3; i++) {
        const ringRadius = radius + 30 * (i + 1) + Math.sin(time * 0.001 + i) * 10;
        const ringGradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          ringRadius - 2,
          width / 2,
          height / 2,
          ringRadius + 2
        );
        ringGradient.addColorStop(0, `rgba(78, 207, 179, ${0.3 - i * 0.1})`);
        ringGradient.addColorStop(1, 'rgba(78, 207, 179, 0)');

        ctx.strokeStyle = ringGradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, ringRadius, 0, Math.PI * 2);
        ctx.stroke();
      }

      time += 16;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-4">
      {/* Background Gradient Blooms */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#4ECFB3] opacity-15 blur-[150px]" />
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-[#C9B8F0] opacity-15 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#F4A7A3] opacity-15 blur-[150px]" />
        
        {/* Particle field overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(240, 244, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4ECFB3]/30 bg-[#4ECFB3]/5">
            <span className="text-[#4ECFB3] uppercase tracking-wider text-sm font-semibold">
              MINDFULNESS · COACHING · WELLBEING
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Experience the{' '}
            <span className="bg-gradient-to-r from-[#4ECFB3] to-[#C9B8F0] bg-clip-text text-transparent">
              Joy
            </span>{' '}
            of Living.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#9BA8C0] max-w-xl leading-relaxed">
            Transform your relationship with stress, cultivate mindfulness, and unlock the abundant life 
            you deserve. Personalized coaching for lasting change.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
            <button className="w-full sm:w-auto sfa-gradient-btn px-8 py-4 rounded-full text-[#0A0F1E] font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              Book a Free Call
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto sfa-ghost-btn px-8 py-4 rounded-full text-[#F0F4FF] font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Our Story
            </button>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1658288098101-84f074c292a8?w=100',
                'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?w=100',
                'https://images.unsplash.com/photo-1758797316117-8d133af25f8c?w=100',
                'https://images.unsplash.com/photo-1698047681452-08eba22d0c64?w=100',
                'https://images.unsplash.com/photo-1695370992947-ece92da51cd2?w=100'
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Client ${i + 1}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#0A0F1E] object-cover"
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-[#F0F4FF] text-sm sm:text-base">
              <Users className="w-5 h-5 text-[#4ECFB3]" />
              <span className="font-semibold">500+ Lives Transformed</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - 3D CANVAS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Background glow orb */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#4ECFB3] opacity-20 blur-[120px]" />
          </div>

          {/* 3D Canvas Frame */}
          <div className="relative aspect-square max-w-lg mx-auto sfa-glass-card p-8 rounded-[32px] border-2 border-[#4ECFB3]/30 shadow-[0_0_60px_rgba(78,207,179,0.3)]">
            <canvas
              ref={canvasRef}
              className="w-full h-full rounded-2xl"
            />
            
            {/* Dev Handoff Note */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#0A0F1E]/90 backdrop-blur-sm p-3 rounded-xl border border-[#4ECFB3]/30">
              <p className="text-xs text-[#4ECFB3] font-mono">
                🎨 DEV NOTE: Replace with 3D Interactive Breathing Orb / Floating Zen Stones
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}