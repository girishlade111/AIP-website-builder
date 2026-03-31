'use client';

import { useRouter } from 'next/navigation';
import { Project } from '@/lib/types';
import {
  Globe,
  User,
  ShoppingBag,
  LayoutDashboard,
  ExternalLink,
  FolderOpen,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/Skeleton';

interface ProjectGridProps {
  projects: Project[];
  isLoading?: boolean;
}

const gradientMap: Record<string, { from: string; to: string; icon: React.ElementType; color: string }> = {
  landing: { from: 'from-violet-900/40', to: 'to-purple-900/20', icon: Globe, color: 'text-violet-400' },
  portfolio: { from: 'from-blue-900/40', to: 'to-cyan-900/20', icon: User, color: 'text-blue-400' },
  ecommerce: { from: 'from-emerald-900/40', to: 'to-teal-900/20', icon: ShoppingBag, color: 'text-emerald-400' },
  dashboard: { from: 'from-orange-900/40', to: 'to-red-900/20', icon: LayoutDashboard, color: 'text-orange-400' },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const router = useRouter();
  const { from, to, icon: Icon, color } = gradientMap[project.type] || gradientMap.landing;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group bg-surface border border-border-custom rounded-xl overflow-hidden hover:border-accent transition-colors duration-200"
    >
      <div className={`h-[140px] bg-gradient-to-br ${from} ${to} relative flex items-center justify-center`}>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #71717a 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <Icon className={`w-8 h-8 ${color}`} />
      </div>

      <div className="p-4">
        <h3 className="font-medium text-white truncate">{project.name}</h3>
        <span className="inline-block mt-2 px-2 py-0.5 bg-border-custom rounded-full text-xs text-text-muted capitalize">
          {project.type}
        </span>
        <p className="text-text-muted text-xs mt-2">
          {project.createdAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      <div className="px-4 pb-4 pt-0">
        <button
          onClick={() => router.push('/builder')}
          className="w-full flex items-center justify-between bg-transparent border border-border-custom text-text-muted text-sm px-3 py-2 rounded-lg hover:bg-border-custom hover:text-white hover:border-accent transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <span>Open Project</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-surface border border-border-custom rounded-xl overflow-hidden">
      <Skeleton className="h-[140px]" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-3 w-1/4 mt-2" />
      </div>
      <div className="px-4 pb-4 pt-0">
        <Skeleton className="h-9 w-full rounded-lg" />
      </div>
    </div>
  );
}

export function ProjectGrid({ projects, isLoading = false }: ProjectGridProps) {
  const router = useRouter();

  if (isLoading) {
    return (
      <section className="px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-[60px]">
        <FolderOpen className="w-12 h-12 text-text-muted/30" />
        <p className="text-text-muted mt-4">No projects yet</p>
        <button
          onClick={() => router.push('/builder')}
          className="mt-4 bg-accent hover:bg-accent/90 text-white font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Create your first project
        </button>
      </div>
    );
  }

  return (
    <section className="px-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-primary">Recent Projects</h2>
        <a href="#" className="text-text-muted text-sm hover:text-white">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}