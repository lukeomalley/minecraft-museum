'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Clock,
  MapPin,
  Car,
  Train,
  Accessibility,
  Utensils,
  Wifi,
  Camera,
  ChevronDown,
  Phone,
  Mail,
  Baby,
  Dog,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/8bit/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/8bit/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/8bit/accordion';
import { Badge } from '@/components/ui/8bit/badge';
import PageHero from '@/components/shared/PageHero';
import { PAGE_WALLPAPERS } from '@/lib/data/wallpapers';

const hours = [
  { day: 'Monday', hours: '10:00 AM - 8:00 PM', isToday: false },
  { day: 'Tuesday', hours: '10:00 AM - 8:00 PM', isToday: false },
  { day: 'Wednesday', hours: '10:00 AM - 8:00 PM', isToday: false },
  { day: 'Thursday', hours: '10:00 AM - 10:00 PM', special: 'Late Night!' },
  { day: 'Friday', hours: '10:00 AM - 10:00 PM', special: 'Late Night!' },
  { day: 'Saturday', hours: '9:00 AM - 10:00 PM', special: 'Extended Hours' },
  { day: 'Sunday', hours: '9:00 AM - 8:00 PM', special: 'Sensory-Friendly until 11 AM' },
];

const faqs = [
  {
    question: 'How long should I plan for my visit?',
    answer:
      'We recommend planning 3-4 hours to fully experience all exhibits. If you want to participate in workshops or special events, plan for a full day!',
  },
  {
    question: 'Can I bring food and drinks?',
    answer:
      'Outside food and drinks are not permitted in exhibit areas. However, we have The Furnace Café on-site with delicious Minecraft-themed food and beverages.',
  },
  {
    question: 'Is photography allowed?',
    answer:
      'Yes! Photography for personal use is encouraged throughout most of the museum. Flash photography and tripods are not permitted. Some special exhibits may have additional restrictions.',
  },
  {
    question: 'Are there lockers available?',
    answer:
      'Yes, we have free lockers available near the entrance. Large bags and backpacks must be stored in lockers during your visit.',
  },
  {
    question: 'Can I re-enter after leaving?',
    answer:
      'Yes! Your ticket is valid for same-day re-entry. Just get your hand stamped at the exit and show it when you return.',
  },
  {
    question: 'What about accessibility?',
    answer:
      'The museum is fully wheelchair accessible. We offer wheelchairs for loan (first-come, first-served), audio guides with descriptive narration, and sensory-friendly hours on Sunday mornings.',
  },
  {
    question: 'Are pets allowed?',
    answer:
      'Only service animals are permitted inside the museum. We do not have pet-sitting facilities on site.',
  },
  {
    question: 'Is there parking available?',
    answer:
      'Yes! We partner with nearby parking garages. PMI Parking at 707 7th St NW offers discounted rates for museum visitors. Street parking and DC Metro are also great options.',
  },
];

const amenities = [
  { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet throughout' },
  { icon: Utensils, name: 'The Furnace Café', description: 'Full menu & snacks' },
  { icon: Camera, name: 'Photo Ops', description: 'Designated photo spots' },
  { icon: Accessibility, name: 'Accessible', description: 'Fully wheelchair friendly' },
  { icon: Baby, name: 'Family Rooms', description: 'Nursing & changing areas' },
  { icon: Dog, name: 'Service Animals', description: 'Service animals welcome' },
];

export default function VisitPage() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="min-h-screen pb-16 bg-obsidian">
      {/* Hero */}
      <PageHero
        wallpaper={PAGE_WALLPAPERS.visit}
        title="Plan Your Visit"
        subtitle="Everything you need to know for an amazing museum experience"
        icon={<MapPin className="w-8 h-8 text-grass" />}
        size="md"
      />

      <Container>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hours Section */}
            <section id="hours">
              <h2 className="retro text-sm text-grass mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-grass" />
                Hours of Operation
              </h2>

              <Card className="bg-deepslate">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {hours.map((item) => (
                      <div
                        key={item.day}
                        className={`flex items-center justify-between py-3 ${
                          item.day === today
                            ? 'bg-grass/10 -mx-4 px-4 border-2 border-grass'
                            : 'border-b border-grass/20 last:border-0'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`retro text-[8px] ${
                              item.day === today ? 'text-grass' : 'text-grass/80'
                            }`}
                          >
                            {item.day}
                          </span>
                          {item.day === today && (
                            <Badge className="bg-grass text-obsidian text-[6px]">TODAY</Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="retro text-[8px] text-grass/80">{item.hours}</span>
                          {item.special && (
                            <span className="block retro text-[6px] text-gold">{item.special}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gold/10 border-2 border-gold">
                    <p className="retro text-[7px] text-gold">
                      <strong>Holiday Hours:</strong> We&apos;re open every day except December 25th. Special
                      extended hours during school holidays.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Location Section - Washington DC */}
            <section id="location">
              <h2 className="retro text-sm text-grass mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-grass" />
                Location & Directions
              </h2>

              <Card className="bg-deepslate">
                <CardContent className="p-6">
                  {/* Embedded Google Map - Penn Quarter, Washington DC */}
                  <div
                    className="aspect-video mb-6 border-4 border-grass overflow-hidden"
                    style={{ boxShadow: '4px 4px 0 #0a1a0a' }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0797427837!2d-77.02311!3d38.89711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7882c4f4c7d%3A0x7e90d9a7fa1ecf!2s701%20E%20St%20NW%2C%20Washington%2C%20DC%2020004!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="The Blockworks Museum Location - 701 E Street NW, Washington, DC"
                    />
                  </div>

                  <div className="text-center mb-6 p-4 bg-grass/10 border-2 border-grass">
                    <p className="retro text-[10px] text-grass matrix-glow">701 E Street NW</p>
                    <p className="retro text-[8px] text-muted-foreground">Washington, DC 20004</p>
                    <p className="retro text-[7px] text-muted-foreground mt-2">
                      Penn Quarter • Near the National Mall
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-stone/30 border-2 border-grass/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Car className="w-5 h-5 text-grass" />
                        <h3 className="retro text-[8px] text-grass">By Car</h3>
                      </div>
                      <p className="retro text-[7px] text-muted-foreground mb-2">
                        PMI Parking at 707 7th St NW offers discounted rates for museum visitors. $12/day with
                        validation.
                      </p>
                      <p className="retro text-[7px] text-muted-foreground">
                        Street parking available on E Street and nearby blocks (metered).
                      </p>
                    </div>

                    <div className="p-4 bg-stone/30 border-2 border-grass/30">
                      <div className="flex items-center gap-2 mb-3">
                        <Train className="w-5 h-5 text-grass" />
                        <h3 className="retro text-[8px] text-grass">By Metro</h3>
                      </div>
                      <p className="retro text-[7px] text-muted-foreground mb-2">
                        <span className="text-neon-green">Gallery Place-Chinatown</span> station (Red, Yellow,
                        Green lines) - 2 blocks away.
                      </p>
                      <p className="retro text-[7px] text-muted-foreground">
                        <span className="text-neon-green">Archives-Navy Memorial</span> station (Yellow, Green
                        lines) - 3 blocks away.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Accessibility */}
            <section id="accessibility">
              <h2 className="retro text-sm text-grass mb-6 flex items-center gap-3">
                <Accessibility className="w-6 h-6 text-grass" />
                Accessibility
              </h2>

              <Card className="bg-deepslate">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-grass/10 border-2 border-grass/30">
                        <h4 className="retro text-[8px] text-grass mb-2">Mobility</h4>
                        <ul className="retro text-[7px] text-muted-foreground space-y-1">
                          <li>• Fully wheelchair accessible</li>
                          <li>• Elevators to all floors</li>
                          <li>• Wheelchairs available (free)</li>
                          <li>• Accessible restrooms on every floor</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-grass/10 border-2 border-grass/30">
                        <h4 className="retro text-[8px] text-grass mb-2">Visual</h4>
                        <ul className="retro text-[7px] text-muted-foreground space-y-1">
                          <li>• Audio guides with descriptions</li>
                          <li>• Large print guides available</li>
                          <li>• Service animals welcome</li>
                          <li>• High contrast signage</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-grass/10 border-2 border-grass/30">
                        <h4 className="retro text-[8px] text-grass mb-2">Hearing</h4>
                        <ul className="retro text-[7px] text-muted-foreground space-y-1">
                          <li>• Closed captions on all videos</li>
                          <li>• Written transcripts available</li>
                          <li>• Hearing loops installed</li>
                          <li>• ASL tours (by request)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-grass/10 border-2 border-grass/30">
                        <h4 className="retro text-[8px] text-grass mb-2">Sensory</h4>
                        <ul className="retro text-[7px] text-muted-foreground space-y-1">
                          <li>• Sensory-friendly hours: Sun 9-11 AM</li>
                          <li>• Quiet room available</li>
                          <li>• Noise-canceling headphones</li>
                          <li>• Social stories downloadable</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* The Furnace Café */}
            <section id="cafe">
              <h2 className="retro text-sm text-grass mb-6 flex items-center gap-3">
                <Utensils className="w-6 h-6 text-nether" />
                The Furnace Café
              </h2>

              <Card className="bg-deepslate relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nether/10" />

                <CardContent className="p-6 relative z-10">
                  <p className="retro text-[8px] text-muted-foreground mb-6">
                    Refuel your adventure at our Minecraft-themed café! Enjoy pixel-perfect dishes and treats
                    inspired by the game.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="retro text-[8px] text-grass mb-3">Menu Highlights</h4>
                      <ul className="retro text-[7px] text-muted-foreground space-y-2">
                        <li>🍖 Cooked Porkchop Sandwich - $14</li>
                        <li>🥕 Golden Carrot Salad - $11</li>
                        <li>🍰 Cake Slice - $7</li>
                        <li>🍪 Cookie Platter - $9</li>
                        <li>🧃 Potion of Healing (Smoothie) - $8</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="retro text-[8px] text-grass mb-3">Café Hours</h4>
                      <p className="retro text-[7px] text-muted-foreground mb-4">
                        Open during museum hours. Last orders 30 minutes before closing.
                      </p>
                      <p className="retro text-[7px] text-neon-green">
                        Vegetarian, vegan, and gluten-free options available. Please inform staff of any
                        allergies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="retro text-sm text-grass mb-6">Frequently Asked Questions</h2>

              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-deepslate border-2 border-grass/30 overflow-hidden"
                  >
                    <AccordionTrigger className="retro text-[8px] text-grass px-4 py-3 hover:bg-grass/10">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="retro text-[7px] text-muted-foreground px-4 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links Card */}
            <Card className="sticky top-24 bg-deepslate">
              <CardHeader>
                <CardTitle className="retro text-[10px] text-grass">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full bg-grass text-obsidian hover:bg-neon-green text-[8px]">
                  <Link href="/tickets">Buy Tickets</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full text-grass border-grass hover:bg-grass/10 text-[8px]"
                >
                  <Link href="/events">View Events</Link>
                </Button>

                <div className="mt-6 pt-6 border-t-2 border-grass/30">
                  <h4 className="retro text-[8px] text-grass mb-3">Contact Us</h4>
                  <div className="space-y-2">
                    <a
                      href="tel:202-646-3272"
                      className="flex items-center gap-2 retro text-[7px] text-muted-foreground hover:text-grass transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      (202) MINE-CRAFT
                    </a>
                    <a
                      href="mailto:info@theblockworks.museum"
                      className="flex items-center gap-2 retro text-[7px] text-muted-foreground hover:text-grass transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      info@theblockworks.museum
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="bg-deepslate">
              <CardHeader>
                <CardTitle className="retro text-[10px] text-grass">Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {amenities.map((amenity) => (
                    <div key={amenity.name} className="p-3 bg-stone/30 border-2 border-grass/30 text-center">
                      <amenity.icon className="w-5 h-5 text-grass mx-auto mb-1" />
                      <p className="retro text-[6px] text-grass">{amenity.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Groups */}
            <Card className="bg-deepslate">
              <CardHeader>
                <CardTitle className="retro text-[10px] text-grass">Group Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="retro text-[7px] text-muted-foreground mb-4">
                  Planning a visit for 15+ people? We offer special group rates and guided tours.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full text-grass border-grass hover:bg-grass/10 text-[7px]"
                >
                  <Link href="/contact">Contact for Groups</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
