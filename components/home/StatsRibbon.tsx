'use client';

import { motion } from 'framer-motion';
import { Users, Box, Calendar, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '1M+',
    label: 'Happy Visitors',
    color: '#4AEDD9',
  },
  {
    icon: Box,
    value: '2.8M+',
    label: 'Blocks Placed',
    color: '#17DD62',
  },
  {
    icon: Calendar,
    value: '15+',
    label: 'Years of History',
    color: '#FCEE4B',
  },
  {
    icon: Trophy,
    value: '47',
    label: 'Awards Won',
    color: '#C77DFF',
  },
];

export default function StatsRibbon() {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      {/* Grass layer top */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-[#5D8C3A]" />
      <div className="absolute top-6 left-0 right-0 h-2 bg-[#4A7030]" />

      {/* Sand/Dirt gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#C2A45E] via-[#B89B52] to-[#A88D48]" />

      {/* Sand texture - pixel dots */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, #D4B76A 2px, transparent 2px),
            radial-gradient(circle at 45% 65%, #9A8040 2px, transparent 2px),
            radial-gradient(circle at 75% 35%, #D4B76A 2px, transparent 2px),
            radial-gradient(circle at 25% 75%, #9A8040 2px, transparent 2px),
            radial-gradient(circle at 85% 85%, #D4B76A 1px, transparent 1px),
            radial-gradient(circle at 55% 15%, #9A8040 2px, transparent 2px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="max-w-6xl mx-auto px-4 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon container - Minecraft inventory slot style */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-[#8B8B8B] border-4"
                style={{
                  borderColor: '#373737 #ffffff #ffffff #373737',
                  boxShadow: 'inset 2px 2px 0 #C6C6C6, inset -2px -2px 0 #555555',
                }}
                whileHover={{ scale: 1.1 }}
              >
                <stat.icon
                  className="w-8 h-8"
                  style={{ color: stat.color, filter: `drop-shadow(2px 2px 0 rgba(0,0,0,0.4))` }}
                />
              </motion.div>

              {/* Value */}
              <div
                className="retro text-2xl md:text-3xl text-white mb-2"
                style={{
                  textShadow: '3px 3px 0 rgba(0,0,0,0.5), 0 0 20px ' + stat.color + '60',
                }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <div
                className="retro text-[10px] md:text-xs uppercase tracking-wider"
                style={{
                  color: '#fff',
                  textShadow: '2px 2px 0 rgba(0,0,0,0.6)',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stone transition at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-b from-[#A88D48] to-[#6B6B6B]" />
    </section>
  );
}
