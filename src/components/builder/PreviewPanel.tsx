'use client';

import { useState } from 'react';
import {
  Monitor,
  Tablet,
  Smartphone,
  Globe,
  RefreshCw,
  Copy,
  Loader2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { MockPreview } from './MockPreview';

type Tab = 'preview' | 'code' | 'responsive';
type Device = 'desktop' | 'tablet' | 'mobile';

interface PreviewPanelProps {
  activeTab: Tab;
  deviceView: Device;
  isGenerating: boolean;
  hasContent: boolean;
  onTabChange: (tab: Tab) => void;
  onDeviceChange: (device: Device) => void;
}

const mockCode = `import React from 'react';

interface ProjectFlowProps {
  title?: string;
}

export default function ProjectFlow({ 
  title = "ProjectFlow" 
}: ProjectFlowProps) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between p-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg" />
          <span className="font-semibold text-lg">{title}</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </nav>

      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Manage your projects
          <span className="text-blue-600"> with clarity</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          ProjectFlow helps teams stay organized.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Start Free Trial
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-xl">
            Watch Demo
          </button>
        </div>
      </section>
    </div>
  );
}`;

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-[#0d0d0d]">
      <Globe className="w-10 h-10 text-text-muted/20" />
      <p className="text-text-muted text-sm mt-3">Your preview will appear here</p>
      <p className="text-text-muted/50 text-xs mt-1">Describe your website and click Build</p>
    </div>
  );
}

function GeneratingState() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-background">
      <Loader2 className="w-6 h-6 text-accent animate-spin" />
      <p className="text-text-muted text-sm mt-3">Building your website...</p>
      <p className="text-text-muted/50 text-xs mt-1">This takes a few seconds</p>
    </div>
  );
}

function BrowserChrome() {
  return (
    <div className="h-9 bg-surface border-b border-border-custom flex items-center px-3">
      <div className="flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="bg-border-custom rounded-md px-3 py-1 text-xs text-text-muted w-[240px] text-center">
          localhost:3000
        </div>
      </div>
      <RefreshCw className="w-3.5 h-3.5 text-text-muted" />
    </div>
  );
}

export function PreviewPanel({
  activeTab,
  deviceView,
  isGenerating,
  hasContent,
  onTabChange,
  onDeviceChange,
}: PreviewPanelProps) {
  const [copied, setCopied] = useState(false);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'preview', label: 'Preview' },
    { id: 'code', label: 'Code' },
    { id: 'responsive', label: 'Responsive' },
  ];

  const devices: { id: Device; icon: React.ElementType }[] = [
    { id: 'desktop', icon: Monitor },
    { id: 'tablet', icon: Tablet },
    { id: 'mobile', icon: Smartphone },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(mockCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getWidthClass = () => {
    switch (deviceView) {
      case 'tablet':
        return 'max-w-[768px] mx-auto';
      case 'mobile':
        return 'max-w-[390px] mx-auto';
      default:
        return 'w-full';
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="h-11 bg-background border-b border-border-custom flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center h-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 h-full text-sm transition-colors ${
                activeTab === tab.id
                  ? 'text-white border-b-2 border-accent'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {(activeTab === 'responsive' || activeTab === 'preview') && (
          <div className="flex items-center gap-1">
            {devices.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onDeviceChange(id)}
                className={`p-2 rounded-lg transition-colors ${
                  deviceView === id
                    ? 'text-accent-light bg-border-custom'
                    : 'text-text-muted hover:text-white hover:bg-border-custom'
                }`}
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 overflow-hidden">
        {isGenerating ? (
          <GeneratingState />
        ) : activeTab === 'code' ? (
          hasContent ? (
            <div className="h-full bg-[#0d0d0d] overflow-y-auto">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border-custom">
                <span className="text-xs text-text-muted">App.tsx</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-text-muted hover:text-white transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-xs">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-6 font-mono text-sm">
                <pre className="flex">
                  <span className="text-text-muted/30 select-none mr-4 text-right min-w-[32px]">
                    {mockCode.split('\n').map((_, i) => (
                      <span key={i} className="block leading-6">
                        {i + 1}
                      </span>
                    ))}
                  </span>
                  <code className="text-primary leading-6 whitespace-pre">
                    {mockCode}
                  </code>
                </pre>
              </div>
            </div>
          ) : (
            <EmptyState />
          )
        ) : hasContent ? (
          <div className="h-full bg-gray-100 overflow-auto">
            <BrowserChrome />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`transition-all duration-300 ${getWidthClass()}`}
            >
              {deviceView === 'mobile' && (
                <div className="bg-white min-h-full rounded-[24px] overflow-hidden shadow-lg">
                  <MockPreview />
                </div>
              )}
              {deviceView === 'tablet' && (
                <div className="bg-white min-h-full shadow-lg">
                  <MockPreview />
                </div>
              )}
              {deviceView === 'desktop' && (
                <div className="bg-white min-h-full">
                  <MockPreview />
                </div>
              )}
            </motion.div>
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}