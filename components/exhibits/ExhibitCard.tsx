'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { Exhibit } from '@/lib/data/exhibits';
import { Badge } from '@/components/ui/8bit/badge';

interface ExhibitCardProps {
  exhibit: Exhibit;
  index: number;
}

const categoryStyles: Record<string, { gradient: string; border: string; accent: string; glow: string }> = {
  survival: { 
    gradient: 'from-green-900/90 via-green-800/70 to-transparent', 
    border: 'border-grass', 
    accent: 'text-grass',
    glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]'
  },
  redstone: { 
    gradient: 'from-red-900/90 via-red-800/70 to-transparent', 
    border: 'border-red-500', 
    accent: 'text-red-400',
    glow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]'
  },
  exploration: { 
    gradient: 'from-purple-900/90 via-purple-800/70 to-transparent', 
    border: 'border-purple-500', 
    accent: 'text-purple-400',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]'
  },
  community: { 
    gradient: 'from-amber-900/90 via-amber-800/70 to-transparent', 
    border: 'border-amber-500', 
    accent: 'text-amber-400',
    glow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]'
  },
  history: { 
    gradient: 'from-cyan-900/90 via-cyan-800/70 to-transparent', 
    border: 'border-cyan-500', 
    accent: 'text-cyan-400',
    glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]'
  },
  creative: { 
    gradient: 'from-pink-900/90 via-pink-800/70 to-transparent', 
    border: 'border-pink-500', 
    accent: 'text-pink-400',
    glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]'
  },
};

export default function ExhibitCard({ exhibit, index }: ExhibitCardProps) {
  const style = categoryStyles[exhibit.category] || categoryStyles.survival;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Link href={`/exhibits/${exhibit.slug}`} className="block h-full">
        <div
          className={`h-full group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${style.glow}`}
        >
          {/* Card Container */}
          <div
            className={`h-full bg-deepslate border-4 ${style.border}/60 relative flex flex-col`}
            style={{ boxShadow: '4px 4px 0 #0a1a0a' }}
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              {/* Background Image */}
              <Image
                src={exhibit.image}
                alt={exhibit.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Pixel grid overlay */}
              <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none" />
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${style.gradient}`} />
              
              {/* Scanline effect */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
                }}
              />

              {/* Floating Category Badge - Corner element like EventCard */}
              <div
                className={`absolute -top-1 -right-1 w-14 h-14 flex flex-col items-center justify-center bg-deepslate border-4 ${style.border} z-10`}
                style={{ boxShadow: '3px 3px 0 #0a1a0a' }}
              >
                <span className="text-2xl pixelated">{exhibit.icon}</span>
              </div>

              {/* Status Badges */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                {exhibit.isFeatured && (
                  <Badge 
                    className="bg-grass text-obsidian text-[7px] uppercase tracking-wider font-bold border-2 border-grass/50"
                    style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}
                  >
                    Featured
                  </Badge>
                )}
                {exhibit.isNew && (
                  <Badge 
                    className="bg-neon-green text-obsidian text-[7px] uppercase tracking-wider font-bold border-2 border-neon-green/50"
                    style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.5)' }}
                  >
                    New
                  </Badge>
                )}
              </div>

              {/* Category Tag - Bottom of image */}
              <div className="absolute bottom-3 left-3 z-10">
                <Badge 
                  variant="outline" 
                  className={`${style.accent} border-current text-[7px] uppercase tracking-wider backdrop-blur-sm bg-obsidian/50`}
                >
                  {exhibit.category}
                </Badge>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1">
              {/* Title */}
              <h3 className={`retro text-[11px] text-white mb-2 leading-relaxed group-hover:${style.accent} transition-colors line-clamp-1`}>
                {exhibit.name}
              </h3>

              {/* Tagline */}
              <p className={`retro text-[8px] ${style.accent} mb-3 italic opacity-80`}>
                &ldquo;{exhibit.tagline}&rdquo;
              </p>

              {/* Description */}
              <p className="retro text-[8px] text-white/60 mb-4 leading-loose line-clamp-2">
                {exhibit.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-4">
                <span className={`flex items-center gap-1.5 retro text-[8px] ${style.accent}`}>
                  <Clock className="w-3.5 h-3.5" />
                  {exhibit.duration}
                </span>
                <span className={`flex items-center gap-1.5 retro text-[8px] ${style.accent}`}>
                  <MapPin className="w-3.5 h-3.5" />
                  Floor {exhibit.floor > 0 ? exhibit.floor : 'B'}
                </span>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Footer */}
              <div className={`flex items-center justify-between pt-4 border-t-2 ${style.border}/30`}>
                {/* Difficulty Badge */}
                <Badge
                  variant="outline"
                  className={`text-[7px] uppercase tracking-wider ${
                    exhibit.difficulty === 'all-ages' 
                      ? 'text-grass border-grass/50' 
                      : exhibit.difficulty === 'beginner'
                      ? 'text-cyan-400 border-cyan-400/50'
                      : exhibit.difficulty === 'intermediate'
                      ? 'text-amber-400 border-amber-400/50'
                      : 'text-red-400 border-red-400/50'
                  }`}
                >
                  {exhibit.difficulty}
                </Badge>

                {/* Explore CTA */}
                <span className={`retro ${style.accent} text-[8px] flex items-center gap-1 group-hover:gap-2 transition-all font-bold`}>
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
