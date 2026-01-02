'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Map } from 'lucide-react';
import { exhibits } from '@/lib/data/exhibits';
import Container from '@/components/ui/Container';
import ExhibitCard from '@/components/exhibits/ExhibitCard';
import ExhibitFilters from '@/components/exhibits/ExhibitFilters';
import PageHero from '@/components/shared/PageHero';
import { PAGE_WALLPAPERS } from '@/lib/data/wallpapers';

export default function ExhibitsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredExhibits = activeCategory === 'all' 
    ? exhibits 
    : exhibits.filter(exhibit => exhibit.category === activeCategory);

  return (
    <div className="min-h-screen pb-16 bg-obsidian">
      {/* Hero Section */}
      <PageHero
        wallpaper={PAGE_WALLPAPERS.exhibits}
        title="Our Exhibits"
        subtitle="From your first survival night to the depths of the End, explore every corner of Minecraft's incredible history and community."
        badge="12 Interactive Experiences"
        icon={<Map className="w-8 h-8 text-grass" />}
        size="md"
      />

      {/* Exhibits Grid */}
      <section className="py-12">
        <Container>
          <ExhibitFilters 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory}
          />

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredExhibits.map((exhibit, index) => (
              <ExhibitCard 
                key={exhibit.id} 
                exhibit={exhibit} 
                index={index}
              />
            ))}
          </motion.div>

          {filteredExhibits.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="retro text-muted-foreground text-[10px]">No exhibits found in this category.</p>
            </motion.div>
          )}
        </Container>
      </section>

      {/* Floor Guide */}
      <section className="py-16 bg-deepslate/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="retro text-sm text-grass mb-2">
              Museum Floor Guide
            </h2>
            <p className="retro text-[8px] text-muted-foreground">Find your way through our three floors of exhibits</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { floor: 3, name: 'Champions Gallery', exhibits: ['Speedrunner\'s Sanctum', 'Community Legends', 'The Marketplace'], color: '#00ff00' },
              { floor: 2, name: 'Innovation Hall', exhibits: ['Redstone Revolution', 'Block Evolution', 'Mining Through Time'], color: '#39ff14' },
              { floor: 1, name: 'Main Hall', exhibits: ['The First Night', 'Mob Hall of Fame', 'The Sound of Blocks'], color: '#7fff00' },
              { floor: -1, name: 'Deep Dark', exhibits: ['Nether Chronicles', 'The End Gallery', 'Herobrine\'s Vault'], color: '#50c878' },
            ].map((level) => (
              <motion.div
                key={level.floor}
                className="bg-deepslate border-2 border-grass/30 p-6"
                style={{ boxShadow: '4px 4px 0 #0a1a0a' }}
                whileHover={{ y: -4, borderColor: level.color }}
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center retro text-lg text-grass mb-4 border-2 border-grass/50"
                  style={{ 
                    backgroundColor: `${level.color}30`,
                    boxShadow: '2px 2px 0 #0a1a0a'
                  }}
                >
                  {level.floor > 0 ? level.floor : 'B'}
                </div>
                <h3 className="retro text-[9px] text-grass mb-2">
                  {level.name}
                </h3>
                <ul className="space-y-1">
                  {level.exhibits.map((exhibit) => (
                    <li key={exhibit} className="retro text-[6px] text-muted-foreground">
                      • {exhibit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
