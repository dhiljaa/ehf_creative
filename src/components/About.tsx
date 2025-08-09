import { motion } from 'framer-motion';
import { Award, Heart, Zap, Users, Target, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      subtitle: "Keunggulan",
      description: "Kami berkomitmen memberikan hasil terbaik dengan standar kualitas tinggi dalam setiap project yang kami kerjakan."
    },
    {
      icon: Heart,
      title: "Harmony",
      subtitle: "Keharmonisan",
      description: "Membangun hubungan yang harmonis dengan klien melalui komunikasi yang baik dan pemahaman mendalam akan kebutuhan bisnis."
    },
    {
      icon: Zap,
      title: "Freedom",
      subtitle: "Kebebasan",
      description: "Memberikan kebebasan bagi bisnis Anda untuk berkembang dengan solusi digital yang fleksibel dan inovatif."
    }
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Tentang <span className="text-primary">EHF Creative</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            EHF Creative adalah partner digital terpercaya yang menghadirkan solusi kreatif dan inovatif 
            untuk mengembangkan bisnis Anda di era digital.
          </p>
        </motion.div>

        {/* EHF Meaning */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={48} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {value.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Company Story */}
        

       
      </div>
    </section>
  );
};

export default About;