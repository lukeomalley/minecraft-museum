'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import { Badge } from '@/components/ui/8bit/badge';

interface PageHeroProps {
  /** Wallpaper image path */
  wallpaper: string;
  /** Main title text */
  title: string;
  /** Subtitle/description text */
  subtitle?: string;
  /** Optional badge text (e.g., "Now Open", "12 Exhibits") */
  badge?: string;
  /** Badge color class (default: bg-grass) */
  badgeColor?: string;
  /** Icon element to display above title */
  icon?: ReactNode;
  /** Icon background color class */
  iconBgColor?: string;
  /** Children to render below the subtitle */
  children?: ReactNode;
  /** Additional className for the section */
  className?: string;
  /** Height variant */
  size?: 'sm' | 'md' | 'lg';
  /** Gradient overlay style */
  overlayStyle?: 'dark' | 'light' | 'gradient';
}

export default function PageHero({
  wallpaper,
  title,
  subtitle,
  badge,
  badgeColor = 'bg-grass text-obsidian',
  icon,
  iconBgColor = 'bg-grass/20',
  children,
  className = '',
  size = 'md',
  overlayStyle = 'dark',
}: PageHeroProps) {
  const sizeClasses = {
    sm: 'py-12 pt-28',
    md: 'py-16 pt-32',
    lg: 'py-24 pt-36',
  };

  const overlayClasses = {
    dark: 'bg-gradient-to-b from-black/70 via-black/50 to-obsidian',
    light: 'bg-gradient-to-b from-black/40 via-black/20 to-transparent',
    gradient: 'bg-gradient-to-b from-obsidian/80 via-transparent to-obsidian',
  };

  return (
    <section className={`relative overflow-hidden ${sizeClasses[size]} ${className}`}>
      {/* Wallpaper Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={wallpaper}
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Overlay for text readability */}
        <div className={`absolute inset-0 ${overlayClasses[overlayStyle]}`} />
      </div>

      {/* Pixel grid pattern overlay */}
      <div className="absolute inset-0 pixel-grid opacity-10 z-[1]" />

      {/* Content */}
      <Container className="relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <Badge className={`${badgeColor} text-[8px]`}>
                {badge}
              </Badge>
            </motion.div>
          )}

          {/* Icon */}
          {icon && (
            <motion.div
              className={`inline-flex items-center justify-center w-16 h-16 ${iconBgColor} mb-6 border-4 border-grass`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              style={{ boxShadow: '4px 4px 0 #0a1a0a' }}
            >
              {icon}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            className="retro text-xl md:text-2xl lg:text-3xl text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              className="retro text-[10px] text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Additional content */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

