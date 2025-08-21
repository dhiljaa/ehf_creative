import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/digital-services-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-brand-light/20 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              <span className="mr-2">🚀</span>
              Solusi Digital Terpercaya
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight"
            >
              Wujudkan{' '}
              <span className="brand-gradient bg-clip-text text-transparent">
                Visi Digital
              </span>{' '}
              Bisnis Anda
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Dari website company profile hingga portal berita, kami menghadirkan solusi digital lengkap 
              dengan teknologi modern, desain profesional, dan harga terjangkau.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="brand-gradient text-white hover:scale-105 transition-bounce shadow-medium group"
                onClick={() => {
                  window.open('https://wa.me/6289675280409?text=Halo%20EHF%20Creative%2C%20saya%20ingin%20konsultasi%20tentang%20jasa%20digital%20Anda', '_blank');
                }}
              >
                Mulai Konsultasi
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Project Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Garansi</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                src={heroImage}
                alt="EHF Creative Digital Solutions"
                className="w-full h-auto rounded-2xl shadow-strong"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 brand-gradient rounded-2xl flex items-center justify-center shadow-medium"
              >
                <span className="text-white font-bold text-xl">💻</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-secondary rounded-xl flex items-center justify-center shadow-medium"
              >
                <span className="text-white font-bold text-lg">🎨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;