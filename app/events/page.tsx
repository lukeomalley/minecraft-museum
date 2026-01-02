'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter, Sparkles } from 'lucide-react';
import { events, MuseumEvent } from '@/lib/data/events';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/8bit/button';
import { Badge } from '@/components/ui/8bit/badge';
import { Card, CardContent } from '@/components/ui/8bit/card';
import PageHero from '@/components/shared/PageHero';
import { PAGE_WALLPAPERS } from '@/lib/data/wallpapers';

const eventTypes = [
  { id: 'all', name: 'All Events', icon: '📅' },
  { id: 'workshop', name: 'Workshops', icon: '🔧' },
  { id: 'competition', name: 'Competitions', icon: '🏆' },
  { id: 'special', name: 'Special Events', icon: '⭐' },
  { id: 'screening', name: 'Screenings', icon: '🎬' },
  { id: 'meetup', name: 'Meetups', icon: '👥' },
];

const typeColors: Record<string, string> = {
  workshop: '#00ff00',
  competition: '#ffd700',
  special: '#39ff14',
  screening: '#7fff00',
  meetup: '#50c878',
};

export default function EventsPage() {
  const [activeType, setActiveType] = useState('all');
  const [showPast, setShowPast] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const filteredEvents = useMemo(() => {
    let filtered = events;

    if (!showPast) {
      filtered = filtered.filter((event) => event.date >= today);
    }

    if (activeType !== 'all') {
      filtered = filtered.filter((event) => event.type === activeType);
    }

    return filtered.sort((a, b) => a.date.localeCompare(b.date));
  }, [activeType, showPast, today]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
      full: date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    };
  };

  return (
    <div className="min-h-screen pb-16 bg-obsidian">
      {/* Hero */}
      <PageHero
        wallpaper={PAGE_WALLPAPERS.events}
        title="Events & Workshops"
        subtitle="From hands-on workshops to epic competitions, there's always something happening at The Blockworks"
        icon={<Calendar className="w-8 h-8 text-grass" />}
        size="md"
      />

      <Container>
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`
                  px-4 py-2 retro text-[7px] uppercase tracking-wider
                  transition-all duration-200 flex items-center gap-2 border-2
                  ${
                    activeType === type.id
                      ? 'bg-grass text-obsidian border-grass'
                      : 'bg-deepslate text-grass/70 hover:bg-stone hover:text-grass border-grass/30'
                  }
                `}
                style={{ boxShadow: activeType === type.id ? '3px 3px 0 #0a1a0a' : '2px 2px 0 #0a1a0a' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="pixelated">{type.icon}</span>
                <span className="hidden sm:inline">{type.name}</span>
              </motion.button>
            ))}
          </div>

          <button
            onClick={() => setShowPast(!showPast)}
            className={`
              px-4 py-2 retro text-[7px] flex items-center gap-2 border-2
              ${
                showPast
                  ? 'bg-stone text-grass border-grass'
                  : 'bg-deepslate text-muted-foreground border-grass/30'
              }
            `}
            style={{ boxShadow: '2px 2px 0 #0a1a0a' }}
          >
            <Filter className="w-4 h-4" />
            {showPast ? 'Hide Past' : 'Show Past'}
          </button>
        </div>

        {/* Upcoming Featured Event */}
        {filteredEvents.length > 0 && filteredEvents[0].type === 'special' && (
          <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div
              className="relative overflow-hidden bg-gradient-to-r from-grass/20 to-neon-green/10 border-4 border-grass"
              style={{ boxShadow: '6px 6px 0 #0a1a0a' }}
            >
              <div className="absolute inset-0 pixel-grid opacity-20" />

              <div className="relative z-10 p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-grass" />
                  <span className="retro text-grass text-[8px] uppercase tracking-wider">Featured Event</span>
                </div>

                <h2 className="retro text-lg md:text-xl text-grass mb-4 matrix-glow">
                  {filteredEvents[0].name}
                </h2>

                <p className="retro text-muted-foreground text-[8px] mb-6 max-w-2xl">
                  {filteredEvents[0].description}
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center gap-2 retro text-[7px] text-grass">
                    <Calendar className="w-5 h-5" />
                    {formatDate(filteredEvents[0].date).full}
                  </div>
                  <div className="flex items-center gap-2 retro text-[7px] text-grass">
                    <Clock className="w-5 h-5" />
                    {filteredEvents[0].time} - {filteredEvents[0].endTime}
                  </div>
                  <div className="flex items-center gap-2 retro text-[7px] text-grass">
                    <MapPin className="w-5 h-5" />
                    {filteredEvents[0].location}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button size="lg" className="bg-grass text-obsidian hover:bg-neon-green text-[9px]">
                    Register Now - ${filteredEvents[0].price}
                  </Button>
                  <span className="retro text-[7px] text-muted-foreground">
                    {filteredEvents[0].spotsLeft} spots remaining
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="retro text-muted-foreground text-[10px] mb-2">No events found</p>
            <p className="retro text-[8px] text-muted-foreground/70">
              Try adjusting your filters or check back soon!
            </p>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <motion.section
          className="mt-16 p-8 md:p-12 bg-gradient-to-r from-deepslate to-stone border-4 border-grass text-center"
          style={{ boxShadow: '6px 6px 0 #0a1a0a' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="retro text-sm text-grass mb-4">Never Miss an Event</h3>
          <p className="retro text-muted-foreground text-[8px] mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about new workshops, special events, and
            exclusive member experiences.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="retro flex-1 px-4 py-3 bg-obsidian border-2 border-grass/30 text-grass placeholder:text-muted-foreground text-[8px] focus:outline-none focus:border-grass transition-colors"
            />
            <Button className="bg-grass text-obsidian hover:bg-neon-green text-[8px]">Subscribe</Button>
          </form>
        </motion.section>
      </Container>
    </div>
  );
}

function EventCard({ event }: { event: MuseumEvent }) {
  const date = new Date(event.date);
  const isPast = event.date < new Date().toISOString().split('T')[0];

  const typeStyles: Record<string, { bg: string; border: string; accent: string }> = {
    workshop: { bg: 'from-grass/20 to-grass/5', border: 'border-grass', accent: 'text-grass' },
    competition: { bg: 'from-gold/20 to-gold/5', border: 'border-gold', accent: 'text-gold' },
    special: { bg: 'from-diamond/20 to-diamond/5', border: 'border-diamond', accent: 'text-diamond' },
    screening: { bg: 'from-amethyst/20 to-amethyst/5', border: 'border-amethyst', accent: 'text-amethyst' },
    meetup: { bg: 'from-emerald/20 to-emerald/5', border: 'border-emerald', accent: 'text-emerald' },
  };

  const style = typeStyles[event.type] || typeStyles.workshop;

  return (
    <div
      className={`h-full group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        isPast ? 'opacity-50 grayscale-[30%]' : ''
      }`}
    >
      {/* Card Container with custom border */}
      <div
        className={`h-full bg-gradient-to-b ${style.bg} backdrop-blur-sm border-4 ${style.border}/60 relative`}
        style={{ boxShadow: '4px 4px 0 #0a1a0a' }}
      >
        {/* Pixel grid overlay */}
        <div className="absolute inset-0 pixel-grid opacity-10 pointer-events-none" />

        {/* Date Badge - Floating corner element */}
        <div
          className={`absolute -top-1 -left-1 w-16 h-16 flex flex-col items-center justify-center bg-deepslate border-4 ${style.border} z-10`}
          style={{ boxShadow: '3px 3px 0 #0a1a0a' }}
        >
          <span className={`retro text-[8px] uppercase tracking-wide ${style.accent}`}>
            {date.toLocaleDateString('en-US', { month: 'short' })}
          </span>
          <span className={`retro text-lg ${style.accent} font-bold leading-none`}>{date.getDate()}</span>
        </div>

        {/* Header Section */}
        <div className="pt-5 px-5 pl-20">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Badge
              className={`${
                style.accent === 'text-grass'
                  ? 'bg-grass'
                  : style.accent === 'text-gold'
                  ? 'bg-gold'
                  : style.accent === 'text-diamond'
                  ? 'bg-diamond'
                  : style.accent === 'text-amethyst'
                  ? 'bg-amethyst'
                  : 'bg-emerald'
              } text-obsidian text-[8px] uppercase tracking-wider`}
            >
              {event.type}
            </Badge>
            {event.price === 0 && (
              <Badge className="bg-neon-green text-obsidian text-[8px] uppercase tracking-wider">Free</Badge>
            )}
            {isPast && (
              <Badge
                variant="outline"
                className="text-muted-foreground border-muted-foreground/50 text-[8px]"
              >
                Past
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span className="flex items-center gap-1.5 retro text-[9px]">
              <Clock className="w-3.5 h-3.5" />
              {event.time}
            </span>
            <span className="flex items-center gap-1.5 retro text-[9px]">
              <Users className="w-3.5 h-3.5" />
              {event.spotsLeft} left
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-5 pt-4 flex flex-col flex-1">
          <h3
            className={`retro text-[11px] text-white mb-3 leading-relaxed group-hover:${style.accent} transition-colors line-clamp-2`}
          >
            {event.name}
          </h3>

          <p className="retro text-[9px] text-white/60 mb-4 leading-loose line-clamp-2">
            {event.description}
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 mb-3">
            <MapPin className={`w-4 h-4 ${style.accent} flex-shrink-0`} />
            <span className="retro text-[9px] text-white/80">{event.location}</span>
          </div>

          {/* Instructor if present */}
          {event.instructor && (
            <p className="retro text-[8px] text-white/50 mb-4">Instructor: {event.instructor}</p>
          )}

          {/* Spacer to push footer down */}
          <div className="flex-1" />

          {/* Footer - Price and Action */}
          <div className={`flex items-center justify-between pt-4 mt-2 border-t-2 ${style.border}/30`}>
            <div>
              {event.price > 0 ? (
                <span className={`retro text-base ${style.accent} font-bold`}>${event.price}</span>
              ) : (
                <span className="retro text-base text-neon-green font-bold">FREE</span>
              )}
            </div>

            {!isPast && (
              <Button
                size="sm"
                className={`${
                  style.accent === 'text-grass'
                    ? 'bg-grass hover:bg-grass/80'
                    : style.accent === 'text-gold'
                    ? 'bg-gold hover:bg-gold/80'
                    : style.accent === 'text-diamond'
                    ? 'bg-diamond hover:bg-diamond/80'
                    : style.accent === 'text-amethyst'
                    ? 'bg-amethyst hover:bg-amethyst/80'
                    : 'bg-emerald hover:bg-emerald/80'
                } text-obsidian font-bold text-[9px] px-4 border-2 border-black/20`}
                style={{ boxShadow: '2px 2px 0 #0a1a0a' }}
              >
                Register
              </Button>
            )}
          </div>

          {/* Recurring badge */}
          {event.isRecurring && (
            <div className={`mt-3 pt-2 border-t border-white/10`}>
              <span className={`retro text-[8px] ${style.accent} flex items-center gap-2`}>
                <span className="inline-block w-2 h-2 bg-current animate-pulse" />
                {event.recurringSchedule}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
