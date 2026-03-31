'use client';

import { useRouter } from 'next/navigation';
import { Zap, Plus } from 'lucide-react';

export function Navbar() {
  const router = useRouter();

  const handleNewProject = () => {
    router.push('/builder');
  };

  return (
    <nav className="sticky top-0 z-50 h-14 bg-background border-b border-border-custom flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 text-accent fill-accent" />
        <span className="font-semibold text-white tracking-tight">
          LadeStack
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="bg-transparent text-text-muted hover:text-white transition-colors duration-150"
        >
          Sign In
        </button>
        <button
          onClick={handleNewProject}
          className="flex items-center gap-1.5 bg-accent hover:bg-[#6d28d9] text-white font-medium rounded-lg px-4 py-2 transition-all duration-150"
        >
          <Plus className="w-4 h-4" />
          New Project
        </button>
      </div>
    </nav>
  );
}
