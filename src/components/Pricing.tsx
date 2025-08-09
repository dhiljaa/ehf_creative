import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const hostingPlans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '200K',
      period: '/tahun',
      description: 'Perfect untuk website personal dan blog',
      popular: false,
      features: [
        '1 Domain .com/.id',
        '1 GB SSD Storage',
        '10 GB Bandwidth',
        '1 Email Account',
        'SSL Certificate',
        'Daily Backup',
        'cPanel Access',
        '99.9% Uptime'
      ]
    },
    {
      name: 'Business',
      icon: Star,
      price: '400K',
      period: '/tahun',
      description: 'Ideal untuk website bisnis dan company profile',
      popular: true,
      features: [
        '1 Domain .com/.id',
        '5 GB SSD Storage',
        '50 GB Bandwidth',
        '10 Email Accounts',
        'SSL Certificate',
        'Daily Backup',
        'cPanel Access',
        '99.9% Uptime',
        'Free Migration',
        'Priority Support'
      ]
    },
    {
      name: 'Professional',
      icon: Crown,
      price: '800K',
      period: '/tahun',
      description: 'Best untuk toko online dan website dengan traffic tinggi',
      popular: false,
      features: [
        '1 Domain .com/.id',
        '15 GB SSD Storage',
        'Unlimited Bandwidth',
        'Unlimited Email',
        'SSL Certificate',
        'Daily Backup',
        'cPanel Access',
        '99.9% Uptime',
        'Free Migration',
        'Priority Support',
        'CDN Global',
        'Advanced Security'
      ]
    }
  ];

  const services = [
    {
      title: 'Setup Hosting & Domain',
      price: '300K',
      description: 'Jasa pemasangan hosting dan domain dengan konfigurasi optimal',
      features: [
        'Domain Registration/Transfer',
        'Hosting Setup & Configuration',
        'Email Account Setup',
        'SSL Installation',
        'Basic SEO Setup',
        'Google Analytics Integration'
      ]
    },
    {
      title: 'Email Profesional Google Workspace',
      price: '500K',
      description: 'Setup email bisnis dengan Google Workspace untuk produktivitas maksimal',
      features: [
        'Custom Email Domain',
        '30 GB Cloud Storage per user',
        'Google Meet Video Conferencing',
        'Google Drive, Docs, Sheets',
        'Calendar & Contact Management',
        '24/7 Google Support'
      ]
    },
    {
      title: 'Email Profesional Zoho Mail',
      price: '300K',
      description: 'Alternatif email bisnis dengan Zoho Mail yang cost-effective',
      features: [
        'Custom Email Domain',
        '5 GB Storage per user',
        'Web & Mobile Access',
        'Calendar Integration',
        'Contact Management',
        'Anti-spam Protection'
      ]
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

  return (
    <section className="py-20 bg-gradient-to-b from-background to-brand-light/10">
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
            <span className="brand-gradient bg-clip-text text-transparent">Hosting & Domain</span> Terjangkau
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Paket hosting berkualitas tinggi dengan harga yang sangat kompetitif untuk semua kebutuhan website Anda
          </p>
        </motion.div>

        {/* Hosting Plans */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {hostingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className={`relative h-full transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-primary shadow-medium ring-2 ring-primary/20' 
                    : 'border-border/50 hover:shadow-medium'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-full shadow-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader className="text-center space-y-4 pt-8">
                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
                      plan.popular ? 'brand-gradient' : 'bg-accent'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                    </div>
                    
                    <div>
                      <CardTitle className="text-2xl font-display font-bold">{plan.name}</CardTitle>
                      <CardDescription className="mt-2">{plan.description}</CardDescription>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-end justify-center">
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'brand-gradient text-white hover:scale-105 transition-bounce shadow-medium' 
                          : 'hover:bg-primary hover:text-white transition-smooth'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                      onClick={() => {
                        window.open(`https://wa.me/6289675280409?text=Halo%20EHF%20Creative%2C%20saya%20tertarik%20dengan%20paket%20hosting%20${plan.name}`, '_blank');
                      }}
                    >
                      Order Sekarang
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
              Layanan <span className="brand-gradient bg-clip-text text-transparent">Tambahan</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lengkapi kebutuhan digital Anda dengan layanan profesional kami
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-lg font-display font-semibold">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-primary hover:text-white transition-smooth"
                      onClick={() => {
                        window.open(`https://wa.me/6289675280409?text=Halo%20EHF%20Creative%2C%20saya%20tertarik%20dengan%20layanan%20${service.title}`, '_blank');
                      }}
                    >
                      Order Sekarang
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
              Butuh Konsultasi Lebih Lanjut?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda memilih paket yang tepat sesuai kebutuhan dan budget
            </p>
            <Button 
              size="lg" 
              className="brand-gradient text-white hover:scale-105 transition-bounce shadow-medium"
              onClick={() => {
                window.open('https://wa.me/6289675280409?text=Halo%20EHF%20Creative%2C%20saya%20ingin%20konsultasi%20tentang%20paket%20hosting%20dan%20layanan%20yang%20tepat%20untuk%20kebutuhan%20saya', '_blank');
              }}
            >
              Konsultasi Gratis
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;