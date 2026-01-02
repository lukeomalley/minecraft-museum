'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Users, 
  Check,
  Lightbulb,
  ArrowRight,
  Accessibility
} from 'lucide-react';
import { getExhibitBySlug, exhibits, Exhibit } from '@/lib/data/exhibits';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/8bit/button';
import { Badge } from '@/components/ui/8bit/badge';
import { Card, CardContent } from '@/components/ui/8bit/card';
import { getExhibitWallpaper, ExhibitCategory } from '@/lib/data/wallpapers';

interface ExhibitPageProps {
  params: Promise<{ slug: string }>;
}

export default function ExhibitPage({ params }: ExhibitPageProps) {
  const { slug } = use(params);
  const exhibit = getExhibitBySlug(slug);

  if (!exhibit) {
    notFound();
  }

  const relatedExhibits = exhibits
    .filter(e => e.category === exhibit.category && e.id !== exhibit.id)
    .slice(0, 3);

  // Get the appropriate wallpaper for this exhibit
  const wallpaper = getExhibitWallpaper(exhibit.slug, exhibit.category as ExhibitCategory);

  return (
    <div className="min-h-screen pt-20 bg-obsidian">
      {/* Hero Section with Dynamic Wallpaper */}
      <section className="relative min-h-[70vh] overflow-hidden">
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
          {/* Strong gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/60 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/40 to-transparent" />
        </div>
        
        <Container className="relative z-10 py-16">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/exhibits"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Exhibits
            </Link>
          </motion.div>

          {/* Full Width Content Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-obsidian/95 backdrop-blur-md rounded-xl p-8 md:p-10 border border-white/10 shadow-2xl"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {exhibit.isNew && <Badge className="bg-neon-green text-obsidian font-bold">New</Badge>}
              {exhibit.isFeatured && <Badge className="bg-grass text-obsidian font-bold">Featured</Badge>}
              <Badge 
                className="font-bold"
                style={{ backgroundColor: exhibit.color, color: '#1a1a2e' }}
              >
                {exhibit.category}
              </Badge>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              {exhibit.name}
            </h1>

            <p 
              className="text-lg md:text-xl italic mb-6 font-medium max-w-3xl"
              style={{ color: exhibit.color }}
            >
              &ldquo;{exhibit.tagline}&rdquo;
            </p>

            <p className="text-base text-white/80 leading-relaxed mb-8 max-w-4xl">
              {exhibit.description}
            </p>

            {/* Quick Info - Styled Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <Clock className="w-5 h-5 mb-2" style={{ color: exhibit.color }} />
                <span className="text-xs text-white/50 block mb-1">Duration</span>
                <span className="text-white font-medium text-sm">{exhibit.duration}</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <MapPin className="w-5 h-5 mb-2" style={{ color: exhibit.color }} />
                <span className="text-xs text-white/50 block mb-1">Location</span>
                <span className="text-white font-medium text-sm">{exhibit.location}</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <Users className="w-5 h-5 mb-2" style={{ color: exhibit.color }} />
                <span className="text-xs text-white/50 block mb-1">Age Group</span>
                <span className="text-white font-medium text-sm capitalize">{exhibit.difficulty}</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <MapPin className="w-5 h-5 mb-2" style={{ color: exhibit.color }} />
                <span className="text-xs text-white/50 block mb-1">Floor</span>
                <span className="text-white font-medium text-sm">
                  {exhibit.floor > 0 ? `Floor ${exhibit.floor}` : 'Basement'}
                </span>
              </div>
            </div>

            <Button asChild size="lg" className="bg-grass text-obsidian hover:bg-neon-green font-bold">
              <Link href="/tickets">
                Book Your Visit
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Detailed Content */}
      <section className="py-16 bg-obsidian">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-deepslate/80 rounded-xl p-8 border border-white/10"
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-white mb-6">
                  About This Exhibit
                </h2>
                <div className="text-white/80 leading-relaxed whitespace-pre-line text-sm">
                  {exhibit.longDescription}
                </div>
              </motion.div>

              {/* Experiences */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-deepslate/80 rounded-xl p-8 border border-white/10"
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-white mb-6">
                  What You&apos;ll Experience
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {exhibit.experiences.map((experience, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Check 
                        className="w-5 h-5 flex-shrink-0 mt-0.5" 
                        style={{ color: exhibit.color }} 
                      />
                      <span className="text-white text-sm">{experience}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Fun Facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-deepslate/80 rounded-xl p-8 border border-white/10"
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-white mb-6">
                  Did You Know?
                </h2>
                <div className="space-y-4">
                  {exhibit.facts.map((fact, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-gold/10 border border-gold/30 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Lightbulb className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-white text-sm">{fact}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Info Card */}
              <div className="sticky top-24 bg-deepslate rounded-xl p-6 border border-white/10 shadow-xl">
                <h3 className="font-[family-name:var(--font-display)] text-lg text-white mb-6">
                  Exhibit Information
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/60 text-sm">Duration</span>
                    <span className="text-white font-medium text-sm">{exhibit.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/60 text-sm">Location</span>
                    <span className="text-white font-medium text-sm">{exhibit.location}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/60 text-sm">Floor</span>
                    <span className="text-white font-medium text-sm">
                      {exhibit.floor > 0 ? `Floor ${exhibit.floor}` : 'Basement Level'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/60 text-sm">Difficulty</span>
                    <span 
                      className="px-3 py-1 rounded text-sm font-bold"
                      style={{ backgroundColor: exhibit.color, color: '#1a1a2e' }}
                    >
                      {exhibit.difficulty}
                    </span>
                  </div>
                </div>

                {/* Accessibility */}
                <div className="p-4 bg-grass/20 border border-grass/40 rounded-lg mb-6">
                  <div className="flex items-center gap-2 text-grass mb-2">
                    <Accessibility className="w-4 h-4" />
                    <span className="font-[family-name:var(--font-display)] text-sm">Accessibility</span>
                  </div>
                  <p className="text-sm text-white/80">
                    Wheelchair accessible. Audio descriptions available. Sensory-friendly hours on Sundays.
                  </p>
                </div>

                <Button asChild className="w-full bg-grass text-obsidian hover:bg-neon-green font-bold">
                  <Link href="/tickets">
                    Get Tickets
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Exhibits */}
      {relatedExhibits.length > 0 && (
        <section className="py-16 bg-deepslate">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-white">
                Related Exhibits
              </h2>
              <Link 
                href="/exhibits" 
                className="text-diamond hover:text-neon-green flex items-center gap-1 text-sm transition-colors"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedExhibits.map((related, i) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/exhibits/${related.slug}`}>
                    <div className="group bg-obsidian/80 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all hover:shadow-xl">
                      <div 
                        className="h-32 flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${related.color}40, ${related.color}10)` }}
                      >
                        <span className="text-5xl group-hover:scale-110 transition-transform drop-shadow-lg">
                          {related.icon}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-[family-name:var(--font-display)] text-white group-hover:text-diamond transition-colors text-sm mb-2">
                          {related.name}
                        </h3>
                        <p className="text-xs text-white/60 line-clamp-1">{related.tagline}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}

