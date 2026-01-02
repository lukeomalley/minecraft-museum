'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/8bit/button';

const footerLinks = {
  visit: [
    { name: 'Plan Your Visit', href: '/visit' },
    { name: 'Hours & Location', href: '/visit#hours' },
    { name: 'Accessibility', href: '/visit#accessibility' },
    { name: 'Group Visits', href: '/visit#groups' },
    { name: 'The Furnace Café', href: '/visit#cafe' },
  ],
  explore: [
    { name: 'All Exhibits', href: '/exhibits' },
    { name: 'Events Calendar', href: '/events' },
    { name: 'Workshops', href: '/events?type=workshop' },
    { name: 'Membership', href: '/tickets#membership' },
  ],
  about: [
    { name: 'Our Story', href: '/about' },
    { name: 'Meet the Team', href: '/about#team' },
    { name: 'Press', href: '/about#press' },
    { name: 'Careers', href: '/about#careers' },
    { name: 'Contact Us', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t-4 border-diamond">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-48">
                <Image
                  src="/minecraft/The-Blockworks (1).png"
                  alt="The Blockworks"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="retro text-[8px] text-white/60 mb-6 max-w-sm leading-relaxed">
              The world&apos;s first museum dedicated to Minecraft. Explore interactive exhibits, discover the
              game&apos;s rich history, and celebrate the community that made it legendary.
            </p>

            {/* Contact Info - Washington DC */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-emerald" />
                <span className="retro text-[7px]">701 E Street NW, Washington, DC 20004</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4 text-diamond" />
                <span className="retro text-[7px]">(202) MINE-CRAFT</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4 text-gold" />
                <span className="retro text-[7px]">hello@theblockworks.museum</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Clock className="w-4 h-4 text-redstone" />
                <span className="retro text-[7px]">Open Daily 10AM - 8PM</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="retro text-diamond mb-4 uppercase tracking-wider text-[8px]">Visit</h3>
            <ul className="space-y-2">
              {footerLinks.visit.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="retro text-white/50 hover:text-diamond text-[7px] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="retro text-emerald mb-4 uppercase tracking-wider text-[8px]">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="retro text-white/50 hover:text-emerald text-[7px] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="retro text-gold mb-4 uppercase tracking-wider text-[8px]">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="retro text-white/50 hover:text-gold text-[7px] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-12 border-t-2 border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="retro text-white mb-2 text-[10px]">Join Our Newsletter</h3>
              <p className="retro text-white/50 text-[7px]">
                Get updates on new exhibits, events, and exclusive member offers.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="retro flex-1 md:w-64 px-4 py-3 bg-black/50 border-2 border-white/20 text-white placeholder:text-white/30 text-[8px] focus:outline-none focus:border-diamond transition-colors"
              />
              <Button className="bg-emerald text-white hover:bg-emerald/90 text-[8px]">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4 retro text-[6px] text-white/40">
              <span>© 2026 The Blockworks Museum. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-diamond transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-diamond transition-colors">
                Terms of Service
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const colors = ['text-diamond', 'text-emerald', 'text-redstone', 'text-gold'];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white/40 hover:${colors[index]} transition-colors`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
