'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';

const testimonials = [
  {
    id: 1,
    name: 'Alex_Builder',
    avatar: '🧑‍🎤',
    role: 'Minecraft Veteran since 2011',
    content: 'The First Night exhibit brought back so many memories. I literally teared up hearing those zombie sounds again. This museum is a love letter to the game.',
    rating: 5,
    color: '#4AEDD9'
  },
  {
    id: 2,
    name: 'RedstoneQueen',
    avatar: '👩‍🔬',
    role: 'Technical Minecraft YouTuber',
    content: 'The Redstone Revolution exhibit is mind-blowing! They have a working ALU on display. This is what happens when engineers love Minecraft.',
    rating: 5,
    color: '#FF3333'
  },
  {
    id: 3,
    name: 'BlockDad42',
    avatar: '👨‍👧‍👦',
    role: 'Parent of 3 young builders',
    content: 'Perfect family outing! The kids loved the interactive exhibits and I got to share my Minecraft memories with them. The family pass is great value.',
    rating: 5,
    color: '#FCEE4B'
  },
  {
    id: 4,
    name: 'EnderSpeedrun',
    avatar: '🏃',
    role: 'Speedrunner',
    content: 'Tried the speedrun challenge and got destroyed by a 12-year-old. 10/10 would get humbled again. The Speedrunner\'s Sanctum is incredibly well done.',
    rating: 5,
    color: '#9B5FC0'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Deep underground / bedrock level */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#151515] to-[#0D0D0D]" />
      
      {/* Bedrock texture pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, #2D2D2D 2px, transparent 2px),
          radial-gradient(circle at 75% 75%, #0A0A0A 3px, transparent 3px),
          radial-gradient(circle at 50% 50%, #1A1A1A 2px, transparent 2px)
        `,
        backgroundSize: '30px 30px'
      }} />

      {/* Rare ores glowing in the darkness */}
      <motion.div 
        className="absolute top-10 left-[10%] w-12 h-12 ore-diamond opacity-80"
        animate={{ 
          boxShadow: ['0 0 20px #4AEDD9', '0 0 40px #4AEDD9', '0 0 20px #4AEDD9']
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-[15%] w-10 h-10 ore-emerald opacity-80"
        animate={{ 
          boxShadow: ['0 0 15px #17DD62', '0 0 35px #17DD62', '0 0 15px #17DD62']
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-1/3 right-8 w-8 h-8 ore-redstone opacity-70"
        animate={{ 
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />

      {/* Alex character */}
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-24 md:w-24 md:h-36 z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.9, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="bob" style={{ animationDelay: '0.8s' }}>
          <Image
            src="/minecraft/Minecraft_Alex.webp"
            alt="Alex"
            fill
            className="object-contain pixelated"
          />
        </div>
      </motion.div>

      <Container className="relative z-20">
        <SectionHeader
          title="What Visitors Say"
          subtitle="Real stories from our community of explorers"
          dark
        />

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="bg-black/50 backdrop-blur-sm border-2 p-6 h-full transition-all hover:border-opacity-100"
                style={{ 
                  borderColor: `${testimonial.color}40`,
                  boxShadow: `4px 4px 0 rgba(0,0,0,0.5), inset 0 0 30px ${testimonial.color}10`
                }}
              >
                {/* Quote icon */}
                <Quote 
                  className="absolute top-4 right-4 w-8 h-8 opacity-30"
                  style={{ color: testimonial.color }}
                />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="retro text-[8px] text-white/80 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 flex items-center justify-center text-2xl border-2 pixelated"
                    style={{ 
                      backgroundColor: `${testimonial.color}20`,
                      borderColor: testimonial.color,
                      boxShadow: `2px 2px 0 rgba(0,0,0,0.5)`
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="retro text-[9px]" style={{ color: testimonial.color }}>
                      {testimonial.name}
                    </div>
                    <div className="retro text-[6px] text-white/50">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Transition to bedrock */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-[#0D0D0D] to-[#050505]" />
    </section>
  );
}
