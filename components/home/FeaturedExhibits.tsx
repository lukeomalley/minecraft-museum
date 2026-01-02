'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedExhibits } from '@/lib/data/exhibits';
import { Button } from '@/components/ui/8bit/button';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import ExhibitCard from '@/components/exhibits/ExhibitCard';
import { WALLPAPERS } from '@/lib/data/wallpapers';

export default function FeaturedExhibits() {
  const featuredExhibits = getFeaturedExhibits();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Wallpaper Background */}
      <div className="absolute inset-0 z-0">
        <Image src={WALLPAPERS.wildUpdate} alt="" fill className="object-cover object-center" quality={85} />
        {/* Dark overlay for text readability - maintains the cave atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75" />
      </div>

      {/* Stone texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-10 z-[1]"
        style={{
          backgroundImage: `
          linear-gradient(45deg, #5D5D5D 25%, transparent 25%),
          linear-gradient(-45deg, #5D5D5D 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #5D5D5D 75%),
          linear-gradient(-45deg, transparent 75%, #5D5D5D 75%)
        `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        }}
      />

      {/* Ore veins decoration */}
      <div className="absolute top-20 left-10 w-8 h-8 ore-diamond opacity-60 z-[2]" />
      <div className="absolute top-40 right-20 w-6 h-6 ore-gold opacity-60 z-[2]" />
      <div className="absolute bottom-32 left-1/4 w-7 h-7 ore-emerald opacity-60 z-[2]" />
      <div className="absolute top-1/2 right-10 w-5 h-5 ore-redstone opacity-60 redstone-pulse z-[2]" />

      {/* Enderman lurking in corner */}
      <motion.div
        className="absolute right-0 top-20 w-20 h-40 md:w-28 md:h-56 z-[5] opacity-70"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.7, x: 10 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image src="/minecraft/Enderman.webp" alt="Enderman" fill className="object-contain pixelated" />
      </motion.div>

      <Container className="relative z-20">
        <SectionHeader
          title="Featured Exhibits"
          subtitle="Immerse yourself in our most popular interactive experiences"
          dark
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExhibits.map((exhibit, index) => (
            <ExhibitCard key={exhibit.id} exhibit={exhibit} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-white border-white/50 hover:bg-white/10 text-[10px]"
          >
            <Link href="/exhibits">View All 12 Exhibits</Link>
          </Button>
        </motion.div>
      </Container>

      {/* Transition to darker section */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-obsidian z-[3]" />
    </section>
  );
}
