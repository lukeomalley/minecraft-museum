'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Newspaper,
  HelpCircle,
  CheckCircle
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent } from '@/components/ui/8bit/card';
import PageHero from '@/components/shared/PageHero';
import { PAGE_WALLPAPERS } from '@/lib/data/wallpapers';

const contactReasons = [
  { id: 'general', label: 'General Inquiry', icon: MessageSquare },
  { id: 'tickets', label: 'Tickets & Booking', icon: HelpCircle },
  { id: 'groups', label: 'Group Visits', icon: Users },
  { id: 'press', label: 'Press & Media', icon: Newspaper },
  { id: 'partnerships', label: 'Partnerships', icon: Users },
  { id: 'feedback', label: 'Feedback', icon: MessageSquare },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'general',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen pb-16 bg-obsidian">
      {/* Hero */}
      <PageHero
        wallpaper={PAGE_WALLPAPERS.contact}
        title="Contact Us"
        subtitle="Have a question, suggestion, or just want to say hello? We'd love to hear from you!"
        icon={<Mail className="w-8 h-8 text-grass" />}
        size="md"
      />

      <Container>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-deepslate">
              <CardContent className="p-6">
              {isSubmitted ? (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="w-16 h-16 text-grass mx-auto mb-4" />
                  <h2 className="retro text-sm text-grass mb-2">
                    Message Sent!
                  </h2>
                  <p className="retro text-[8px] text-muted-foreground mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
                  </p>
                  <Button 
                    variant="outline"
                    className="text-grass border-grass hover:bg-grass/10 text-[8px]"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        reason: 'general',
                        subject: '',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="retro text-[10px] text-grass mb-6">
                    Send Us a Message
                  </h2>

                  {/* Reason Selection */}
                  <div className="mb-6">
                    <label className="block retro text-[7px] text-muted-foreground mb-2">What can we help you with?</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {contactReasons.map((reason) => (
                        <button
                          key={reason.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, reason: reason.id })}
                          className={`
                            flex items-center gap-2 px-3 py-2 retro text-[6px] transition-all border-2
                            ${formData.reason === reason.id 
                              ? 'bg-grass text-obsidian border-grass' 
                              : 'bg-stone/50 text-muted-foreground hover:bg-stone hover:text-grass border-grass/30'
                            }
                          `}
                          style={{ boxShadow: formData.reason === reason.id ? '2px 2px 0 #0a1a0a' : 'none' }}
                        >
                          <reason.icon className="w-4 h-4" />
                          {reason.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block retro text-[7px] text-muted-foreground mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="retro w-full px-4 py-3 bg-stone/50 border-2 border-grass/30 text-grass placeholder:text-muted-foreground text-[8px] focus:outline-none focus:border-grass transition-colors"
                        placeholder="Steve"
                      />
                    </div>
                    <div>
                      <label className="block retro text-[7px] text-muted-foreground mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="retro w-full px-4 py-3 bg-stone/50 border-2 border-grass/30 text-grass placeholder:text-muted-foreground text-[8px] focus:outline-none focus:border-grass transition-colors"
                        placeholder="steve@minecraft.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-4">
                    <label className="block retro text-[7px] text-muted-foreground mb-2">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="retro w-full px-4 py-3 bg-stone/50 border-2 border-grass/30 text-grass placeholder:text-muted-foreground text-[8px] focus:outline-none focus:border-grass transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block retro text-[7px] text-muted-foreground mb-2">Your Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="retro w-full px-4 py-3 bg-stone/50 border-2 border-grass/30 text-grass placeholder:text-muted-foreground text-[8px] focus:outline-none focus:border-grass transition-colors resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="bg-grass text-obsidian hover:bg-neon-green text-[9px]">
                    Send Message
                  </Button>
                </form>
              )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="bg-deepslate">
              <CardContent className="p-6">
              <h3 className="retro text-[10px] text-grass mb-4">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="tel:202-646-3272" 
                  className="flex items-start gap-3 text-muted-foreground hover:text-grass transition-colors group"
                >
                  <Phone className="w-5 h-5 text-grass mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="retro text-[8px] text-grass">(202) MINE-CRAFT</p>
                    <p className="retro text-[6px]">Mon-Fri 9AM-6PM</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:hello@theblockworks.museum" 
                  className="flex items-start gap-3 text-muted-foreground hover:text-grass transition-colors group"
                >
                  <Mail className="w-5 h-5 text-grass mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="retro text-[8px] text-grass">hello@theblockworks.museum</p>
                    <p className="retro text-[6px]">We reply within 24-48 hours</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-grass mt-0.5" />
                  <div>
                    <p className="retro text-[8px] text-grass">701 E Street NW</p>
                    <p className="retro text-[6px]">Washington, DC 20004</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-grass mt-0.5" />
                  <div>
                    <p className="retro text-[8px] text-grass">Open Daily</p>
                    <p className="retro text-[6px]">10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-deepslate">
              <CardContent className="p-6">
              <h3 className="retro text-[10px] text-grass mb-4">
                Quick Help
              </h3>
              
              <div className="space-y-3">
                <a 
                  href="/visit#faq" 
                  className="block p-3 bg-stone/30 border-2 border-grass/30 text-grass hover:bg-stone/50 transition-colors"
                >
                  <p className="retro text-[8px]">FAQs</p>
                  <p className="retro text-[6px] text-muted-foreground">Find answers to common questions</p>
                </a>
                <a 
                  href="/visit" 
                  className="block p-3 bg-stone/30 border-2 border-grass/30 text-grass hover:bg-stone/50 transition-colors"
                >
                  <p className="retro text-[8px]">Plan Your Visit</p>
                  <p className="retro text-[6px] text-muted-foreground">Hours, directions, and tips</p>
                </a>
                <a 
                  href="/tickets" 
                  className="block p-3 bg-stone/30 border-2 border-grass/30 text-grass hover:bg-stone/50 transition-colors"
                >
                  <p className="retro text-[8px]">Buy Tickets</p>
                  <p className="retro text-[6px] text-muted-foreground">Book your visit online</p>
                </a>
              </div>
              </CardContent>
            </Card>

            {/* Social */}
            <Card className="bg-deepslate">
              <CardContent className="p-6">
              <h3 className="retro text-[10px] text-grass mb-4">
                Follow Us
              </h3>
              <p className="retro text-muted-foreground text-[7px] mb-4">
                Stay updated with the latest museum news, events, and behind-the-scenes content.
              </p>
              <div className="flex gap-3">
                {['🐦', '📸', '📺', '👥'].map((emoji, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-10 h-10 bg-stone/30 border-2 border-grass/30 flex items-center justify-center hover:bg-stone/50 transition-colors text-xl pixelated"
                  >
                    {emoji}
                  </a>
                ))}
              </div>
              </CardContent>
            </Card>

            {/* Emergency */}
            <div className="p-4 bg-nether/10 border-2 border-nether" style={{ boxShadow: '4px 4px 0 #0a1a0a' }}>
              <h4 className="retro text-nether text-[8px] mb-1">
                Urgent Matters
              </h4>
              <p className="retro text-[6px] text-muted-foreground">
                For same-day booking issues or urgent accessibility needs, 
                please call us directly at (202) MINE-CRAFT.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

