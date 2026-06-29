import { Navbar } from '@/components/shared/Navbar';
import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Services } from '@/components/home/Services';
import { Contact } from '@/components/home/Contact';
import { Footer } from '@/components/shared/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
