'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Ticket, Gift } from 'lucide-react';
import { Button } from '@/components/ui/8bit/button';
import Container from '@/components/ui/Container';
import { WALLPAPERS } from '@/lib/data/wallpapers';

// Pre-generate ore positions
const ORE_POSITIONS = [
  { left: 5, top: 20, type: 'diamond', size: 10 },
  { left: 15, top: 60, type: 'gold', size: 8 },
  { left: 25, top: 35, type: 'emerald', size: 9 },
  { left: 35, top: 75, type: 'redstone', size: 7 },
  { left: 45, top: 15, type: 'lapis', size: 8 },
  { left: 55, top: 55, type: 'diamond', size: 9 },
  { left: 65, top: 25, type: 'gold', size: 10 },
  { left: 75, top: 70, type: 'emerald', size: 8 },
  { left: 85, top: 40, type: 'redstone', size: 9 },
  { left: 95, top: 80, type: 'lapis', size: 7 },
];

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Wallpaper Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={WALLPAPERS.summerDrop}
          alt=""
          fill
          className="object-cover object-center"
          quality={85}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>
      
      {/* Animated ore particles floating up like we're at the bottom of a mine */}
      <div className="absolute inset-0 overflow-hidden">
        {ORE_POSITIONS.map((ore, i) => (
          <motion.div
            key={i}
            className={`absolute ore-${ore.type}`}
            style={{
              left: `${ore.left}%`,
              top: `${ore.top}%`,
              width: ore.size,
              height: ore.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Pig and Sheep at the bottom - they found a cave! */}
      <motion.div
        className="absolute left-[10%] bottom-8 w-20 h-16 md:w-28 md:h-24 z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="float" style={{ animationDelay: '0.4s' }}>
          <Image
            src="/minecraft/minecraft-pig.webp"
            alt="Pig"
            fill
            className="object-contain pixelated"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[10%] bottom-8 w-20 h-16 md:w-28 md:h-24 z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="float" style={{ animationDelay: '0.6s' }}>
          <Image
            src="/minecraft/minecraft-sheep.webp"
            alt="Sheep"
            fill
            className="object-contain pixelated"
          />
        </div>
      </motion.div>

      {/* Creeper lurking */}
      <motion.div
        className="absolute left-[30%] bottom-4 w-12 h-20 md:w-16 md:h-28 z-10 opacity-60"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Image
          src="/minecraft/creeper.webp"
          alt="Creeper"
          fill
          className="object-contain pixelated"
        />
      </motion.div>

      <Container className="relative z-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="retro text-lg md:text-xl text-white mb-2">
              Ready to Start Your{' '}
              <span className="text-diamond diamond-glow">Adventure?</span>
            </h2>
            <p className="retro text-[9px] text-white/60 mb-10 leading-relaxed">
              Join over a million visitors who have explored The Blockworks. 
              Your journey through Minecraft history awaits.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button asChild size="lg" className="bg-emerald text-white hover:bg-emerald/90 text-[10px] shadow-lg shadow-emerald/30">
              <Link href="/tickets">Buy Tickets Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-gold border-gold/50 hover:bg-gold/10 text-[10px]">
              <Link href="/shop">Visit Gift Shop</Link>
            </Button>
          </motion.div>

          <motion.p
            className="mt-8 retro text-[7px] text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Open daily 10AM - 8PM • 701 E St NW, Washington DC • Children under 4 free
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
