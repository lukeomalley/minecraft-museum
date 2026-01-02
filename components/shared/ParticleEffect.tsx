'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface ParticleEffectProps {
  count?: number;
  colors?: string[];
  className?: string;
}

const DEFAULT_COLORS = ['#5cb85c', '#4fc3f7', '#ffb300', '#9b59b6'];

export default function ParticleEffect({
  count = 20,
  colors,
  className = ''
}: ParticleEffectProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const colorArray = useMemo(() => colors ?? DEFAULT_COLORS, [colors]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
        color: colorArray[Math.floor(Math.random() * colorArray.length)]
      });
    }
    setParticles(newParticles);
  }, [count, colorArray]);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-sm"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
          initial={{ y: '100vh', opacity: 0, rotate: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 1, 1, 0],
            rotate: 720
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
}

