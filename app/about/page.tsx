'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Users, 
  Award, 
  MapPin,
  Briefcase,
  Sparkles,
  Quote
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/8bit/button';

const team = [
  {
    name: 'Marcus Chen',
    role: 'Founder & Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Former Mojang developer with 15 years of gaming industry experience. Started playing Minecraft during Alpha.',
    color: '#5cb85c',
    accent: 'emerald'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Chief Curator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    bio: 'Art historian specializing in interactive media. Previously curated exhibitions at the Smithsonian.',
    color: '#4fc3f7',
    accent: 'diamond'
  },
  {
    name: 'James Rodriguez',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    bio: 'Social media strategist and content creator with a passion for building gaming communities.',
    color: '#7fff00',
    accent: 'grass'
  },
  {
    name: 'Dr. Emily Park',
    role: 'Technology Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    bio: 'PhD in Human-Computer Interaction. Designs our immersive VR and AR exhibit experiences.',
    color: '#9b59b6',
    accent: 'amethyst'
  },
  {
    name: 'Michael Thompson',
    role: 'Education Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Former educator with 10 years developing STEM curricula. Makes learning feel like play.',
    color: '#f44336',
    accent: 'redstone'
  },
  {
    name: 'Lisa Nakamura',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    bio: 'Operations expert with museum and entertainment venue experience. Ensures every visit runs smoothly.',
    color: '#4fc3f7',
    accent: 'diamond'
  }
];

const timeline = [
  { year: '2019', title: 'The Dream Begins', description: 'Founder Marcus Chen sketches the first museum concept' },
  { year: '2020', title: 'Community Backing', description: 'Successful crowdfunding campaign raises $2M from 50,000 backers' },
  { year: '2021', title: 'Construction Starts', description: 'Ground broken on our 100,000 sq ft facility in Washington DC' },
  { year: '2022', title: 'Partnerships Formed', description: 'Official partnerships with Mojang and major community creators' },
  { year: '2023', title: 'Soft Opening', description: 'First visitors experience The Blockworks during preview period' },
  { year: '2024', title: 'Grand Opening', description: 'Full museum opens to public acclaim, 100,000 visitors in first month' },
  { year: '2025', title: 'Expansion', description: 'New wing added featuring Nether Chronicles and The End Gallery' },
  { year: '2026', title: 'Today', description: 'Over 1 million visitors served and counting!' },
];

const awards = [
  { name: 'Best Gaming Museum 2024', org: 'Museum Association of America' },
  { name: 'Interactive Experience Award', org: 'International Design Awards' },
  { name: 'Community Impact Award', org: 'Gaming Industry Foundation' },
  { name: 'Accessibility Excellence', org: 'Universal Design Council' },
];

const press = [
  { outlet: 'The New York Times', quote: 'A groundbreaking celebration of gaming culture' },
  { outlet: 'Wired Magazine', quote: 'The museum Minecraft deserves' },
  { outlet: 'IGN', quote: 'An absolute must-visit for any Minecraft fan' },
  { outlet: 'Polygon', quote: 'Captures the magic and community of Minecraft perfectly' },
];

const values = [
  { 
    icon: '🎨', 
    title: 'Inspire Creativity', 
    description: 'We believe everyone has the potential to create amazing things.' 
  },
  { 
    icon: '📚', 
    title: 'Preserve History', 
    description: 'Documenting the game\'s evolution and its impact on gaming culture.' 
  },
  { 
    icon: '🤝', 
    title: 'Build Community', 
    description: 'Creating spaces where Minecraft fans can connect and share their passion.' 
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-obsidian">
      {/* Hero Section with DC Building */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/minecraft/washintgon-dc-minecraft.png"
            alt="The Blockworks Museum in Washington DC"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />
        </div>

        {/* Content */}
        <Container className="relative z-10 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald/20 border border-emerald/40 px-4 py-2 mb-8">
                <MapPin className="w-4 h-4 text-emerald" />
                <span className="text-emerald text-xs font-[family-name:var(--font-display)]">
                  Washington, D.C.
                </span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-6 leading-relaxed">
                About The
                <span className="block text-diamond">Blockworks</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-white/80 mb-8 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
                The world&apos;s first and largest museum dedicated entirely to 
                Minecraft — preserving gaming history and inspiring creativity 
                for generations to come.
              </p>

              {/* Stats */}
              <div className="flex gap-8">
                <div>
                  <div className="font-[family-name:var(--font-display)] text-2xl text-gold">1M+</div>
                  <div className="text-white/60 text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>Visitors</div>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-display)] text-2xl text-diamond">100K</div>
                  <div className="text-white/60 text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>Sq Ft</div>
                </div>
                <div>
                  <div className="font-[family-name:var(--font-display)] text-2xl text-emerald">50+</div>
                  <div className="text-white/60 text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>Exhibits</div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-obsidian to-deepslate">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amethyst/20 border-2 border-amethyst flex items-center justify-center">
                  <Heart className="w-6 h-6 text-amethyst" />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-white">
                  Our Story
                </h2>
              </div>
              
              <div className="space-y-5 text-white/80 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
                <p className="text-lg">
                  The Blockworks began as a dream shared by Minecraft players everywhere: 
                  a place where the game&apos;s incredible history, community creations, and 
                  cultural impact could be experienced in person.
                </p>
                <p>
                  Founded in 2019 by lifelong Minecraft fan Marcus Chen, our museum 
                  grew from a small community project into the world&apos;s first and largest 
                  museum dedicated entirely to Minecraft.
                </p>
                <p>
                  Today, we welcome visitors from every corner of the globe, offering 
                  interactive exhibits, educational programs, and a celebration of the 
                  creativity that has defined Minecraft for over a decade.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] rounded-none overflow-hidden border-4 border-stone">
                <Image
                  src="/minecraft/museum-grand-opening.png"
                  alt="Grand Opening of The Blockworks Museum"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 bg-diamond px-6 py-3">
                <span className="font-[family-name:var(--font-display)] text-obsidian text-sm">Est. 2019</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-deepslate relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 pixel-grid opacity-5" />
        
        <Container className="relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-gold font-[family-name:var(--font-display)] text-xs">OUR MISSION</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
              To inspire creativity, preserve gaming history, and bring 
              the Minecraft community together through immersive experiences.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="bg-obsidian/50 border border-white/10 p-8 hover:border-diamond/30 transition-colors">
                  <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">{value.icon}</span>
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/60" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-deepslate to-obsidian">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
              Our Journey
            </h2>
            <p className="text-white/60" style={{ fontFamily: 'system-ui, sans-serif' }}>
              From dream to reality — building block by block
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-grass via-diamond to-amethyst" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div className="bg-obsidian/50 border border-white/10 p-6 hover:border-diamond/30 transition-colors">
                      <span className="font-[family-name:var(--font-display)] text-diamond text-sm">
                        {item.year}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-white text-base mt-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm" style={{ fontFamily: 'system-ui, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-diamond ring-4 ring-obsidian" />
                  
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-obsidian relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 32px, rgba(255,255,255,0.1) 32px, rgba(255,255,255,0.1) 33px), repeating-linear-gradient(90deg, transparent, transparent 32px, rgba(255,255,255,0.1) 32px, rgba(255,255,255,0.1) 33px)'
          }} 
        />
        
        <Container className="relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-emerald" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white">
                Meet Our Team
              </h2>
            </div>
            <p className="text-white/60 max-w-xl mx-auto" style={{ fontFamily: 'system-ui, sans-serif' }}>
              The passionate professionals behind The Blockworks, dedicated to bringing the world of Minecraft to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative bg-gradient-to-b from-deepslate/80 to-deepslate/40 backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">
                  {/* Colored top accent bar */}
                  <div 
                    className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                    style={{ backgroundColor: member.color }}
                  />
                  
                  <div className="p-8">
                    {/* Image container with pixel-style frame */}
                    <div className="relative w-28 h-28 mx-auto mb-6">
                      {/* Outer pixel frame */}
                      <div 
                        className="absolute -inset-1 opacity-30 transition-opacity duration-300 group-hover:opacity-60"
                        style={{ 
                          backgroundColor: member.color,
                          clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)'
                        }}
                      />
                      {/* Image */}
                      <div 
                        className="relative w-full h-full overflow-hidden"
                        style={{ 
                          clipPath: 'polygon(4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px), 0 4px)'
                        }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="text-center mb-4">
                      <h3 className="font-[family-name:var(--font-display)] text-lg text-white mb-1 tracking-wide">
                        {member.name}
                      </h3>
                      <p 
                        className="text-sm font-medium tracking-wider uppercase"
                        style={{ color: member.color, fontFamily: 'system-ui, sans-serif' }}
                      >
                        {member.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-white/50 text-sm text-center leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
                      {member.bio}
                    </p>

                    {/* Decorative pixel blocks */}
                    <div 
                      className="absolute bottom-4 right-4 w-2 h-2 opacity-20 group-hover:opacity-40 transition-opacity"
                      style={{ backgroundColor: member.color }}
                    />
                    <div 
                      className="absolute bottom-4 right-8 w-2 h-2 opacity-10 group-hover:opacity-30 transition-opacity"
                      style={{ backgroundColor: member.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-gradient-to-b from-obsidian to-deepslate">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-gold" />
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white">
                Recognition
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((award, i) => (
              <motion.div
                key={award.name}
                className="bg-gold/5 border border-gold/20 p-6 text-center hover:bg-gold/10 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Award className="w-8 h-8 text-gold mx-auto mb-4" />
                <h4 className="font-[family-name:var(--font-display)] text-white text-xs mb-2 leading-relaxed">
                  {award.name}
                </h4>
                <p className="text-white/50 text-xs" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  {award.org}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Press Section */}
      <section id="press" className="py-24 bg-deepslate">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
              In the Press
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {press.map((item, i) => (
              <motion.div
                key={item.outlet}
                className="bg-obsidian/50 border border-white/10 p-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Quote className="w-8 h-8 text-diamond/30 absolute top-4 left-4" />
                <p className="text-lg text-white mb-4 relative z-10 pt-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-diamond font-[family-name:var(--font-display)] text-sm">
                  — {item.outlet}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">
              Press Inquiries
            </Button>
          </div>
        </Container>
      </section>

      {/* Careers CTA */}
      <section id="careers" className="py-24 bg-gradient-to-b from-deepslate to-obsidian">
        <Container>
          <motion.div
            className="text-center max-w-2xl mx-auto bg-grass/10 border border-grass/30 p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Briefcase className="w-12 h-12 text-grass mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-xl text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-white/70 mb-8" style={{ fontFamily: 'system-ui, sans-serif' }}>
              We&apos;re always looking for passionate people who love Minecraft 
              and want to help us create amazing experiences.
            </p>
            <Button asChild className="bg-grass text-obsidian hover:bg-emerald">
              <Link href="/contact">View Open Positions</Link>
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-obsidian relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-diamond/5 via-transparent to-emerald/5" />
        
        <Container className="relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-white mb-4">
              Come Visit Us
            </h2>
            <p className="text-white/70 mb-8" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Experience everything The Blockworks has to offer. 
              Book your tickets today and join our adventure!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-diamond text-obsidian hover:bg-diamond/90">
                <Link href="/tickets">
                  Get Tickets
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
