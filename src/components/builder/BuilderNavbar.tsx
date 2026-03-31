'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Edit2, Download, Save, Share2 } from 'lucide-react';

interface BuilderNavbarProps {
  projectName: string;
  onProjectNameChange: (name: string) => void;
  isGenerating: boolean;
}

export function BuilderNavbar({
  projectName,
  onProjectNameChange,
  isGenerating,
}: BuilderNavbarProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(projectName);

  const handleBack = () => {
    router.push('/');
  };

  const handleNameClick = () => {
    setEditValue(projectName);
    setIsEditing(true);
  };

  const handleNameSave = () => {
    const trimmed = editValue.trim().slice(0, 40);
    if (trimmed) {
      onProjectNameChange(trimmed);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNameSave();
    }
  };

  return (
    <nav className="sticky top-0 z-50 h-[52px] bg-background border-b border-border-custom px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={handleBack}
          className="p-2 hover:bg-border-custom rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-text-muted" />
        </button>

        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value.slice(0, 40))}
            onBlur={handleNameSave}
            onKeyDown={handleKeyDown}
            className="font-medium text-white bg-transparent border-b border-accent outline-none max-w-[200px]"
            autoFocus
          />
        ) : (
          <div
            onClick={handleNameClick}
            className="font-medium text-white cursor-pointer hover:opacity-80 flex items-center"
          >
            {projectName}
            <Edit2 className="w-3.5 h-3.5 text-text-muted ml-1 opacity-0 hover:opacity-100 transition-opacity" />
          </div>
        )}

        {isGenerating && (
          <span className="text-text-muted text-sm animate-pulse">
            Generating...
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-3 py-1.5 border border-border-custom text-text-muted hover:text-white rounded-lg transition-colors">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 border border-border-custom text-text-muted hover:text-white rounded-lg transition-colors">
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-accent hover:bg-[#6d28d9] text-white rounded-lg transition-colors">
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>
    </nav>
  );
}