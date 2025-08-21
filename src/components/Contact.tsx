import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Facebook, MapPin, Phone, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '089675280409',
      description: 'Chat langsung untuk konsultasi cepat',
      link: 'https://wa.me/6289675280409?text=Halo%20EHF%20Creative%2C%20saya%20ingin%20konsultasi',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@ehfcreative.xyz',
      description: 'Untuk pertanyaan detail dan proposal',
      link: 'mailto:info@ehfcreative.xyz',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Facebook,
      title: 'Facebook',
      info: '@ehfcreative.id',
      description: 'Follow untuk update terbaru',
      link: 'https://facebook.com/ehfcreative.id',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Mohon isi semua field yang wajib diisi",
        variant: "destructive"
      });
      return;
    }

    // Format message untuk WhatsApp
    const message = `Halo EHF Creative,

Saya ${formData.name} ingin berkonsultasi:

📧 Email: ${formData.email}
📱 No. HP: ${formData.phone || 'Tidak dicantumkan'}
📝 Subject: ${formData.subject || 'Konsultasi Umum'}

Pesan:
${formData.message}

Terima kasih!`;

    const whatsappUrl = `https://wa.me/6289675280409?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Pesan Terkirim!",
      description: "Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan"
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-brand-light/10 to-background">
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
            Mari <span className="brand-gradient bg-clip-text text-transparent">Berkolaborasi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Siap mewujudkan project digital impian Anda? Hubungi kami sekarang untuk konsultasi gratis
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                Kontak Langsung
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="group cursor-pointer"
                      onClick={() => window.open(contact.link, '_blank')}
                    >
                      <div className="flex items-start space-x-4 p-4 rounded-xl border border-border/50 hover:shadow-medium transition-all duration-300 hover:bg-accent/50">
                        <div className="w-12 h-12 brand-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                            {contact.title}
                          </h4>
                          <p className="text-primary font-medium">{contact.info}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div variants={itemVariants}>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Jam Operasional
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Senin - Jumat</span>
                    <span className="font-medium">08:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sabtu</span>
                    <span className="font-medium">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Minggu</span>
                    <span className="font-medium">Emergency Only</span>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      💬 WhatsApp support 24/7 untuk urgent matters
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="border-border/50 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-semibold">
                  Kirim Pesan
                </CardTitle>
                <CardDescription>
                  Isi form di bawah ini dan kami akan menghubungi Anda segera
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Nama Lengkap <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nama@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        No. WhatsApp
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Topik konsultasi"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Pesan <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Ceritakan tentang project yang ingin Anda buat..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full brand-gradient text-white hover:scale-105 transition-bounce shadow-medium group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-smooth" />
                    Kirim Pesan via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Dengan mengirim pesan ini, Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;