'use client';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div className={`animate-shimmer bg-gradient-to-r from-surface via-border-custom to-surface ${className}`} />
  );
}