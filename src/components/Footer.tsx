import { motion } from 'framer-motion';
import { MessageCircle, Mail, Facebook, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Website Company Profile',
    'Landing Page',
    'Portal Berita',
    'Email Profesional',
    'Hosting & Domain',
    'Setup & Maintenance'
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/6289675280409',
      color: 'hover:text-green-500'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:ehfcreative@zohomail.com',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/ehfcreative.id',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/6d4792c8-ada1-4c35-8980-11d128b0ec10.png" 
                  alt="EHF Creative Logo" 
                  className="w-12 h-12 object-contain"
                />
                <span className="text-2xl font-display font-bold text-foreground">
                  EHF Creative
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Solusi digital terpercaya untuk kebutuhan website, hosting, dan email profesional bisnis Anda. 
                Wujudkan visi digital dengan teknologi modern dan harga terjangkau.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-6">
                Layanan Kami
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-muted-foreground block py-1">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-6">
                Hubungi Kami
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                  <a 
                    href="https://wa.me/6289675280409" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-smooth font-medium"
                  >
                    089675280409
                  </a>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a 
                    href="mailto:ehfcreative@zohomail.com"
                    className="text-primary hover:text-primary/80 transition-smooth font-medium"
                  >
                    ehfcreative@zohomail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Jam Operasional</p>
                  <p className="text-foreground text-sm">
                    Senin - Jumat: 09:00 - 18:00<br />
                    Sabtu: 09:00 - 15:00
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Button 
                  className="w-full brand-gradient text-white hover:scale-105 transition-bounce shadow-medium"
                  onClick={() => {
                    window.open('https://wa.me/6289675280409?text=Halo%20EHF%20Creative%2C%20saya%20ingin%20konsultasi', '_blank');
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Konsultasi Sekarang
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} EHF Creative. All rights reserved.
              </p>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group hover:bg-primary hover:text-white transition-smooth"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-smooth" />
              Back to Top
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;