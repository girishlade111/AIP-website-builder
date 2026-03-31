'use client';

import { Navbar } from '@/components/home/Navbar';
import { Hero } from '@/components/home/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
    </div>
  );
}