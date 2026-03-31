'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/home/Navbar';
import { Hero } from '@/components/home/Hero';
import { ProjectGrid } from '@/components/home/ProjectGrid';
import { mockProjects } from '@/lib/mock-data';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'linear-gradient(#1e1e1e 1px, transparent 1px), linear-gradient(90deg, #1e1e1e 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <Navbar />
      <Hero />
      <div className="border-t border-border-custom" />
      <ProjectGrid projects={isLoading ? [] : mockProjects} isLoading={isLoading} />
    </div>
  );
}