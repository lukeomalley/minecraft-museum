'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, MapPin, Users } from 'lucide-react';
import { getUpcomingEvents } from '@/lib/data/events';
import { Card, CardContent } from '@/components/ui/8bit/card';
import { Badge } from '@/components/ui/8bit/badge';
import { Button } from '@/components/ui/8bit/button';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';

const typeColors: Record<string, string> = {
  workshop: '#4AEDD9',
  competition: '#FCEE4B',
  special: '#17DD62',
  screening: '#9B5FC0',
  meetup: '#FF6B35'
};

export default function UpcomingEvents() {
  const upcomingEvents = getUpcomingEvents().slice(0, 4);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Deepslate/dark cave background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A4A4A] via-[#3A3A3A] to-[#2D2D2D]" />
      
      {/* Cave texture with stalactites effect */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          radial-gradient(ellipse at 10% 0%, #1A1A1A 0%, transparent 50%),
          radial-gradient(ellipse at 30% 0%, #1A1A1A 0%, transparent 40%),
          radial-gradient(ellipse at 60% 0%, #1A1A1A 0%, transparent 45%),
          radial-gradient(ellipse at 85% 0%, #1A1A1A 0%, transparent 50%)
        `
      }} />

      {/* More ore veins - deeper = rarer ores */}
      <div className="absolute top-16 left-[15%] w-10 h-10 ore-diamond opacity-70 diamond-glow" />
      <div className="absolute bottom-20 right-[20%] w-8 h-8 ore-emerald opacity-70 emerald-glow" />
      <div className="absolute top-1/3 left-8 w-6 h-6 ore-lapis opacity-60" />
      <div className="absolute top-1/2 right-12 w-7 h-7 ore-redstone opacity-60 redstone-pulse" />
      <div className="absolute bottom-1/3 left-[40%] w-5 h-5 ore-gold opacity-50 gold-glow" />

      {/* Steve mining in corner */}
      <motion.div
        className="absolute left-4 bottom-10 w-20 h-28 md:w-28 md:h-40 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bob" style={{ animationDelay: '0.2s' }}>
          <Image
            src="/minecraft/minecraft-steve.webp"
            alt="Steve Mining"
            fill
            className="object-contain pixelated"
          />
        </div>
      </motion.div>

      <Container className="relative z-20">
        <SectionHeader
          title="Upcoming Events"
          subtitle="Workshops, competitions, and special experiences await"
          dark
        />

        <div className="grid md:grid-cols-2 gap-6">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group bg-black/40 backdrop-blur-sm border-white/10 hover:border-diamond/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Date block */}
                    <div 
                      className="flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center border-2"
                      style={{ 
                        backgroundColor: `${typeColors[event.type]}20`,
                        borderColor: typeColors[event.type],
                        boxShadow: `4px 4px 0 rgba(0,0,0,0.5), 0 0 15px ${typeColors[event.type]}40`
                      }}
                    >
                      <span className="retro text-[6px] uppercase text-white/80">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="retro text-lg text-white">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge 
                          className="text-[5px]"
                          style={{ 
                            backgroundColor: typeColors[event.type],
                            color: '#1a1a2e'
                          }}
                        >
                          {event.type}
                        </Badge>
                        {event.price === 0 && <Badge className="bg-emerald text-white text-[5px]">Free</Badge>}
                      </div>
                      
                      <h3 className="retro text-[9px] text-white mb-2 group-hover:text-diamond transition-colors truncate">
                        {event.name}
                      </h3>
                      
                      <p className="retro text-[6px] text-white/60 mb-3 line-clamp-1">
                        {event.description}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-3 retro text-[5px] text-white/50">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.time} - {event.endTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {event.spotsLeft} spots left
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex-shrink-0 text-right">
                      {event.price > 0 ? (
                        <div className="retro text-sm text-gold gold-glow">
                          ${event.price}
                        </div>
                      ) : (
                        <div className="retro text-sm text-emerald emerald-glow">
                          FREE
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button asChild variant="outline" size="lg" className="text-white border-white/50 hover:bg-white/10 text-[10px]">
            <Link href="/events">View Full Calendar</Link>
          </Button>
        </motion.div>
      </Container>

      {/* Transition to even darker */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-[#2D2D2D] to-[#1A1A1A]" />
    </section>
  );
}
