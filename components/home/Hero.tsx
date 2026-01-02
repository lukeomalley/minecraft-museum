'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/8bit/button';
import { Badge } from '@/components/ui/8bit/badge';

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax transforms for depth effect
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Minecraft Wallpaper Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <Image
          src="/minecraft/wallpapers/wallpaper_minecraft_bedrock_edition_2058x1440.png"
          alt="Minecraft World"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient overlays for text readability - top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </motion.div>

      {/* Top Content - Title only */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20 pt-24 md:pt-28 px-4"
        style={{ opacity: opacityFade }}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-4"
          >
            <Badge className="bg-emerald text-white text-[8px] shadow-lg">Now Open • Washington DC</Badge>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src="/minecraft/The-Blockworks (1).png"
              alt="The Blockworks"
              width={500}
              height={100}
              className="mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Content - Subtitle, description, buttons, stats */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 pb-8 px-4"
        style={{ opacity: opacityFade }}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtitle */}
          <motion.p
            className="retro text-sm md:text-base text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            MINECRAFT MUSEUM
          </motion.p>

          {/* Description */}
          <motion.p
            className="retro text-[8px] md:text-[9px] text-white/90 mb-5 max-w-lg mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Discover the world&apos;s first museum dedicated to Minecraft. Explore interactive exhibits and
            celebrate the community.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-emerald text-white hover:bg-emerald/90 text-[10px] shadow-xl"
            >
              <Link href="/tickets">Get Tickets</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white/60 hover:bg-white/20 backdrop-blur-sm text-[10px] shadow-xl"
            >
              <Link href="/exhibits">Explore Exhibits</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              { value: '12', label: 'Exhibits', color: 'text-diamond' },
              { value: '1M+', label: 'Visitors', color: 'text-gold' },
              { value: '∞', label: 'Blocks', color: 'text-emerald' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20"
              >
                <div className={`retro text-base md:text-lg ${stat.color} mb-1`}>{stat.value}</div>
                <div className="retro text-[6px] text-white/80 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 2 },
              y: { duration: 1.5, repeat: Infinity },
            }}
          >
            <ChevronDown className="w-6 h-6 text-white/60 mx-auto" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
