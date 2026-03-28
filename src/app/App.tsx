import { FloatingNav } from './components/FloatingNav';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MediaSection } from './components/MediaSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-[#F0F4FF] overflow-x-hidden">
      <ScrollProgress />
      <FloatingNav />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <MediaSection />
      </main>
      <Footer />
    </div>
  );
}