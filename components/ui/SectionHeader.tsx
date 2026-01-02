'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = '',
  dark = false
}: SectionHeaderProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <motion.div
      className={`mb-12 ${alignStyles[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`retro text-lg md:text-xl lg:text-2xl mb-4 ${dark ? 'text-white' : 'text-diamond diamond-glow'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`retro text-[8px] max-w-2xl mx-auto ${dark ? 'text-white/60' : 'text-muted-foreground'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-1 w-24 bg-gradient-to-r from-diamond to-emerald ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`} />
    </motion.div>
  );
}
