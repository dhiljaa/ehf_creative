import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import portfolioWebsite from '@/assets/portfolio-website.jpg';
import portfolioLanding from '@/assets/portfolio-landing.jpg';
import portfolioNews from '@/assets/portfolio-news.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'PT Teknologi Maju',
      category: 'Company Profile',
      description: 'Website company profile modern dengan fitur lengkap untuk perusahaan teknologi.',
      image: portfolioWebsite,
      tech: ['React', 'Tailwind CSS', 'Node.js'],
      features: ['Responsive Design', 'SEO Optimized', 'Admin Panel', 'Contact Form']
    },
    {
      id: 2,
      title: 'Campaign Digital Marketing',
      category: 'Landing Page',
      description: 'Landing page dengan konversi tinggi untuk kampanye digital marketing.',
      image: portfolioLanding,
      tech: ['Next.js', 'TypeScript', 'Analytics'],
      features: ['High Conversion', 'A/B Testing', 'Fast Loading', 'Mobile First']
    },
    {
      id: 3,
      title: 'Berita Teknologi ID',
      category: 'Portal Berita',
      description: 'Portal berita teknologi dengan sistem manajemen konten yang powerful.',
      image: portfolioNews,
      tech: ['WordPress', 'Custom Theme', 'MySQL'],
      features: ['CMS Advanced', 'Multi Author', 'Comment System', 'Social Share']
    },
    {
      id: 4,
      title: 'Startup Innovation Hub',
      category: 'Company Profile',
      description: 'Website modern untuk startup dengan fokus pada user experience.',
      image: portfolioWebsite,
      tech: ['Vue.js', 'Tailwind CSS', 'Firebase'],
      features: ['Modern UI/UX', 'Real-time Data', 'Cloud Integration', 'Progressive Web App']
    },
    {
      id: 5,
      title: 'E-commerce Launch',
      category: 'Landing Page',
      description: 'Landing page untuk peluncuran produk e-commerce dengan desain yang menarik.',
      image: portfolioLanding,
      tech: ['React', 'Framer Motion', 'Stripe'],
      features: ['Product Showcase', 'Payment Integration', 'Inventory Management', 'Order Tracking']
    },
    {
      id: 6,
      title: 'Media Online Nasional',
      category: 'Portal Berita',
      description: 'Portal berita skala nasional dengan traffic tinggi dan performa optimal.',
      image: portfolioNews,
      tech: ['Laravel', 'MySQL', 'Redis'],
      features: ['High Performance', 'CDN Integration', 'Caching System', 'Mobile App API']
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
    <section id="portfolio" className="py-20 bg-background">
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
            <span className="brand-gradient bg-clip-text text-transparent">Portfolio</span> Terbaru Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Lihat hasil karya terbaik kami yang telah membantu berbagai klien mencapai tujuan digital mereka
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card className="group overflow-hidden border-border/50 hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="bg-white/90 hover:bg-white text-black"
                        onClick={() => {
                          window.open('https://wa.me/6289675280409?text=Halo%20EHF%20Creative%2C%20saya%20tertarik%20dengan%20portfolio%20Anda%20dan%20ingin%20konsultasi', '_blank');
                        }}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Detail
                      </Button>
                      <Button 
                        size="sm"
                        className="brand-gradient text-white"
                        onClick={() => {
                          window.open('https://wa.me/6289675280409?text=Halo%20EHF%20Creative%2C%20saya%20ingin%20membuat%20project%20serupa', '_blank');
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Order
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
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
            Siap Wujudkan Project Impian Anda?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Bergabunglah dengan 50+ klien yang telah mempercayakan project digital mereka kepada kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="brand-gradient text-white hover:scale-105 transition-bounce shadow-medium"
              onClick={() => {
                window.open('https://wa.me/6289675280409?text=Halo%20EHF%20Creative%2C%20saya%20ingin%20membuat%20project%20baru', '_blank');
              }}
            >
              Mulai Project Baru
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="hover:bg-accent border-2 hover:border-primary transition-smooth"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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

export default Portfolio;