import { motion } from 'framer-motion';
import { Shield, Clock, Users, Trophy, HeadphonesIcon, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Terpercaya & Berpengalaman',
      description: '50+ project berhasil diselesaikan dengan tingkat kepuasan klien 100%',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Pengerjaan Cepat',
      description: 'Timeline yang efisien tanpa mengorbankan kualitas hasil akhir',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Tim Profesional',
      description: 'Didukung oleh tim ahli dengan pengalaman di berbagai industri',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Trophy,
      title: 'Kualitas Premium',
      description: 'Menggunakan teknologi terdepan dan best practices terkini',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support 24/7',
      description: 'Layanan konsultasi dan maintenance tersedia kapan saja Anda butuhkan',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Zap,
      title: 'Harga Kompetitif',
      description: 'Solusi digital berkualitas tinggi dengan harga yang sangat terjangkau',
      color: 'from-red-500 to-red-600'
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

  const itemVariants = {
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
    <section className="py-20 bg-gradient-to-b from-brand-light/10 to-background">
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
            Mengapa Memilih <span className="brand-gradient bg-clip-text text-transparent">EHF Creative</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami berkomitmen memberikan solusi digital terbaik dengan standar kualitas internasional
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="relative p-8 bg-card rounded-2xl border border-border/50 hover:shadow-medium transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-bounce shadow-soft">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Floating decoration */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-brand-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 via-brand-secondary/10 to-primary/10 rounded-3xl p-8 lg:p-12 border border-primary/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="space-y-2"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary">50+</div>
                <div className="text-sm lg:text-base text-muted-foreground">Project Completed</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="space-y-2"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary">100%</div>
                <div className="text-sm lg:text-base text-muted-foreground">Client Satisfaction</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="space-y-2"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm lg:text-base text-muted-foreground">Support Available</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="space-y-2"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary">3+</div>
                <div className="text-sm lg:text-base text-muted-foreground">Years Experience</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;