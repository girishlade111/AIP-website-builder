'use client';

import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const router = useRouter();

  const handleStartBuilding = () => {
    router.push('/builder');
  };

  return (
    <section className="pt-20 pb-16 flex flex-col items-center text-center relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial-gradient from-accent/10 to-transparent pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-custom bg-surface"
      >
        <Sparkles className="w-3.5 h-3.5 text-accent" />
        <span className="text-text-muted text-sm">AI-Powered Website Builder</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl font-bold mt-8"
      >
        Build websites{' '}
        <span className="text-accent-light">with AI</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-text-muted text-lg max-w-[480px] mx-auto mt-4"
      >
        Describe your website in plain English. LadeStack builds it instantly.
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={handleStartBuilding}
        className="mt-8 flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-xl transition-all duration-150 hover:scale-[1.02]"
      >
        Start Building for Free
        <ArrowRight className="w-4 h-4" />
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-text-muted text-sm mt-3"
      >
        No credit card required · Free 5 projects
      </motion.p>
    </section>
  );
}