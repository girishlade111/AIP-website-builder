'use client';

import { Navbar } from '@/components/home/Navbar';
import { Hero } from '@/components/home/Hero';
import { ProjectGrid } from '@/components/home/ProjectGrid';
import { mockProjects } from '@/lib/mock-data';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="border-t border-border-custom" />
      <ProjectGrid projects={mockProjects} />
    </div>
  );
}