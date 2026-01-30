import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { Products } from '@/components/Products';
import { HowItWorks } from '@/components/HowItWorks';
import { Story } from '@/components/Story';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <HowItWorks />
        <Story />
        <Testimonials />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
