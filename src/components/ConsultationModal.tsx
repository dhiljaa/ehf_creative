import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Send } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

const ConsultationModal = ({ isOpen, onClose, serviceTitle }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      return;
    }

    // Format message for WhatsApp
    const whatsappMessage = `Halo EHF Creative,

Saya: ${formData.name}
Layanan yang diminati: ${serviceTitle || 'Konsultasi Umum'}

Pesan:
${formData.message}

Mohon informasi lebih lanjut. Terima kasih!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/6289675280409?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({ name: '', message: '' });
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <MessageCircle className="w-5 h-5 text-primary" />
            Konsultasi Gratis
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Nama Lengkap
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Masukkan nama lengkap Anda"
              required
              className="w-full"
            />
          </div>

          {serviceTitle && (
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">
                Layanan yang Diminati
              </Label>
              <div className="p-3 bg-accent rounded-md border">
                <span className="text-sm font-medium text-accent-foreground">
                  {serviceTitle}
                </span>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              Pesan / Kebutuhan
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Ceritakan kebutuhan project Anda..."
              rows={4}
              required
              className="w-full resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Batal
            </Button>
            <Button
              type="submit"
              disabled={!formData.name.trim() || !formData.message.trim()}
              className="flex-1 brand-gradient text-white hover:scale-105 transition-all duration-200"
            >
              <Send className="w-4 h-4 mr-2" />
              Kirim ke WhatsApp
            </Button>
          </div>
        </form>

        <div className="text-center pt-2">
          <p className="text-xs text-muted-foreground">
            Pesan akan dikirim langsung ke WhatsApp kami
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;