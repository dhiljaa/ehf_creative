import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Pricing />
         <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;