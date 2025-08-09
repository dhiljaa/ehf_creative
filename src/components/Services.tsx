import { motion } from 'framer-motion';
import { Globe, FileText, Newspaper, Mail, Server, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ConsultationModal from '@/components/ConsultationModal';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const services = [
    {
      icon: Globe,
      title: 'Website Company Profile',
      description: 'Website profesional untuk meningkatkan kredibilitas dan branding perusahaan Anda.',
      features: ['Desain Responsif', 'SEO Optimized', 'Admin Panel', 'SSL Certificate'],
      price: 'Mulai 600K'
    },
    {
      icon: FileText,
      title: 'Landing Page',
      description: 'Halaman khusus untuk kampanye marketing dengan konversi tinggi.',
      features: ['Conversion Focused', 'A/B Testing', 'Analytics Integration', 'Fast Loading'],
      price: 'Mulai 200K'
    },
    {
      icon: Newspaper,
      title: 'Portal Berita',
      description: 'Platform berita lengkap dengan sistem manajemen konten yang mudah.',
      features: ['CMS Powerful', 'Multi Author', 'Social Media Integration', 'Comment System'],
      price: 'Mulai 700K'
    },
    {
      icon: Mail,
      title: 'Email Profesional',
      description: 'Setup email bisnis dengan Google Workspace dan Zoho Mail.',
      features: ['Custom Domain', 'Cloud Storage', 'Security Advanced', '24/7 Support'],
      price: 'Mulai 500rb'
    },
    {
      icon: Server,
      title: 'Hosting & Domain',
      description: 'Paket hosting berkualitas tinggi dengan harga terjangkau.',
      features: ['99.9% Uptime', 'SSD Storage', 'CDN Global', 'Daily Backup'],
      price: 'Mulai 200rb'
    },
    {
      icon: Settings,
      title: 'Setup & Maintenance',
      description: 'Jasa pemasangan dan maintenance hosting, domain, dan website.',
      features: ['Quick Setup', 'Technical Support', 'Regular Updates', 'Security Monitoring'],
      price: 'Mulai 300rb'
    }
  ];

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

  const handleConsultation = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-brand-light/10">
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
            Layanan <span className="brand-gradient bg-clip-text text-transparent">Digital</span> Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Solusi lengkap untuk kebutuhan digital bisnis Anda dengan teknologi terdepan dan harga kompetitif
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border/50 group">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 brand-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-display font-semibold group-hover:text-primary transition-smooth">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-lg font-semibold text-primary">
                        {service.price}
                      </span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="hover:bg-primary hover:text-white transition-smooth"
                        onClick={() => handleConsultation(service.title)}
                      >
                        Konsultasi
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-brand-secondary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Butuh Solusi Custom?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kami juga menyediakan solusi custom sesuai kebutuhan spesifik bisnis Anda. 
              Konsultasikan kebutuhan Anda dengan tim ahli kami.
            </p>
            <Button 
              size="lg" 
              className="brand-gradient text-white hover:scale-105 transition-bounce shadow-medium"
              onClick={() => {
                window.open('https://wa.me/6289675280409?text=Halo%20EHF%20Creative%2C%20saya%20ingin%20konsultasi%20tentang%20solusi%20custom%20untuk%20bisnis%20saya', '_blank');
              }}
            >
              Konsultasi Gratis Sekarang
            </Button>
          </div>
        </motion.div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={selectedService}
      />
    </section>
  );
};

export default Services;