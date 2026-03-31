'use client';

import { useEffect, useRef } from 'react';
import {
  Globe,
  User,
  ShoppingBag,
  LayoutDashboard,
  Sparkles,
  Wand2,
  Loader2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectType, Message } from '@/lib/types';

interface PromptSidebarProps {
  prompt: string;
  messages: Message[];
  isGenerating: boolean;
  projectType: ProjectType;
  onPromptChange: (text: string) => void;
  onProjectTypeChange: (type: ProjectType) => void;
  onSubmit: () => void;
}

const projectTypes: { type: ProjectType; label: string; icon: React.ElementType }[] = [
  { type: 'landing', label: 'Landing Page', icon: Globe },
  { type: 'portfolio', label: 'Portfolio', icon: User },
  { type: 'ecommerce', label: 'eCommerce', icon: ShoppingBag },
  { type: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
];

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

function StreamingDots() {
  return (
    <span className="flex gap-1">
      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
      <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
    </span>
  );
}

export function PromptSidebar({
  prompt,
  messages,
  isGenerating,
  projectType,
  onPromptChange,
  onProjectTypeChange,
  onSubmit,
}: PromptSidebarProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onPromptChange(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 160)}px`;
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 p-4 border-b border-border-custom">
        <p className="text-xs text-text-muted mb-2 uppercase tracking-wider">
          Project Type
        </p>
        <div className="grid grid-cols-2 gap-2">
          {projectTypes.map(({ type, label, icon: Icon }) => (
            <button
              key={type}
              onClick={() => onProjectTypeChange(type)}
              className={`flex items-center gap-1.5 py-2 px-3 rounded-lg text-xs transition-all duration-150 ${
                projectType === type
                  ? 'bg-accent/20 border border-accent text-accent-light'
                  : 'bg-border-custom border border-border-custom text-text-muted hover:bg-border-custom/80'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="truncate">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center mt-12">
            <Sparkles className="w-8 h-8 text-text-muted/30" />
            <p className="text-text-muted text-sm text-center mt-4">
              Describe your website to get started
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id}>
                {message.role === 'user' ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-end"
                  >
                    <div className="max-w-[85%] px-4 py-3 bg-accent/20 border border-accent/30 text-sm text-white rounded-2xl rounded-tr-sm">
                      {message.content}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-border-custom flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-accent" />
                    </div>
                    <div className="max-w-[85%] ml-2 px-4 py-3 bg-surface border border-border-custom text-sm text-primary rounded-2xl rounded-tl-sm">
                      {message.isStreaming ? <StreamingDots /> : message.content}
                    </div>
                  </motion.div>
                )}
                <p className="text-xs text-text-muted/50 mt-1 ml-9">
                  {formatTime(message.timestamp)}
                </p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="flex-shrink-0 p-4 border-t border-border-custom">
        <textarea
          ref={textareaRef}
          value={prompt}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          placeholder="Describe your website..."
          className="w-full min-[80px] max-h-[160px] p-3 bg-surface border border-border-custom rounded-xl text-sm text-white placeholder:text-text-muted resize-none focus:border-accent focus:outline-none"
        />
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-text-muted">⌘ Enter to send</span>
          <button
            onClick={onSubmit}
            disabled={isGenerating || !prompt.trim()}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              isGenerating
                ? 'bg-[#6d28d9] text-white cursor-not-allowed'
                : 'bg-accent text-white hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4" />
                <span>Build</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}