import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Website company profile yang dibuat EHF Creative sangat memuaskan. Desainnya modern dan profesional, sesuai dengan brand perusahaan kami.",
      name: "CEO Perusahaan IT",
      project: "Website Company Profile"
    },
    {
      id: 2,
      rating: 5,
      text: "Landing page untuk kampanye produk kami berhasil meningkatkan konversi hingga 300%. Tim EHF Creative sangat memahami digital marketing.",
      name: "Marketing Director",
      project: "Landing Page"
    },
    {
      id: 3,
      rating: 5,
      text: "Portal berita yang dibangun sangat user-friendly dan mudah dikelola. Sistem CMS-nya powerful dan sesuai kebutuhan redaksi kami.",
      name: "Chief Editor Media Online",
      project: "Portal Berita"
    },
    {
      id: 4,
      rating: 5,
      text: "Setup email profesional dan hosting domain sangat cepat dan mudah. Support teamnya responsif dan membantu 24/7.",
      name: "Owner UKM Digital",
      project: "Email Professional & Hosting"
    },
    {
      id: 5,
      rating: 5,
      text: "Maintenance website rutin dan reliable. Tidak pernah ada masalah downtime sejak menggunakan jasa EHF Creative.",
      name: "IT Manager Startup",
      project: "Website Maintenance"
    },
    {
      id: 6,
      rating: 5,
      text: "Pelayanan sangat profesional dari konsultasi hingga launching. Harga kompetitif dengan hasil yang melampaui ekspektasi.",
      name: "Founder E-commerce",
      project: "Website Company Profile"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Apa Kata <span className="brand-gradient bg-clip-text text-transparent">Klien</span> Kami?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Lihat apa yang mereka katakan tentang layanan EHF Creative
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-border/20"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-border/20"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl text-foreground mb-8 font-medium leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div className="space-y-2">
                  <p className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].project}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;