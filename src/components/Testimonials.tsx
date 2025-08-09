import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
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

        {/* Main Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative max-w-4xl mx-auto">
            <Card className="border-border/50 shadow-medium">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                  
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-foreground mb-6 font-medium leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].project}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
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
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={cardVariants}>
              <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50 group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-primary/60" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="space-y-1">
                    <p className="font-medium text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.project}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Siap Bergabung dengan Klien yang Puas?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Jadilah bagian dari 100+ klien yang telah mempercayakan project digital mereka kepada EHF Creative
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open('https://wa.me/6289675280409?text=Halo%20EHF%20Creative%2C%20saya%20ingin%20konsultasi%20project%20baru', '_blank');
              }}
              className="px-8 py-3 brand-gradient text-white rounded-lg font-medium hover:shadow-medium transition-all duration-300"
            >
              Mulai Project Sekarang
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300"
            >
              Konsultasi Gratis
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;