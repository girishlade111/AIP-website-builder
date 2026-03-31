'use client';

import { useState, useCallback } from 'react';
import { BuilderState, ProjectType, Message } from '@/lib/types';

type Tab = 'preview' | 'code' | 'responsive';
type Device = 'desktop' | 'tablet' | 'mobile';

const uuid = () => Math.random().toString(36).substr(2, 9);

const mockResponses: Record<ProjectType, string> = {
  landing: "I've built a professional landing page with hero, features, pricing, and CTA sections using a clean modern design.",
  portfolio: "Here's your portfolio with a bold hero, skills grid, project showcase, and contact section.",
  ecommerce: "Your eCommerce site has a product grid, cart, featured banner, and checkout flow.",
  dashboard: "Dashboard ready with sidebar nav, metric cards, data table, and chart placeholders.",
};

const mockCodeStrings: Record<ProjectType, string> = {
  landing: `import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between items-center p-8">
        <div className="text-2xl font-bold">Brand</div>
        <div className="flex gap-6">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Get Started
          </button>
        </div>
      </nav>
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Build something amazing
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          The best solution for your needs
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          Start Now
        </button>
      </section>
    </div>
  );
}`,
  portfolio: `import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-gray-400 mt-2">Full Stack Developer</p>
      </header>
      <section className="py-12 px-8">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold">Project One</h3>
            <p className="text-gray-400 text-sm mt-2">
              A web application built with React
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}`,
  ecommerce: `import React from 'react';

export default function EcommerceStore() {
  const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 49.99 },
    { id: 3, name: 'Product 3', price: 19.99 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between p-6 border-b">
        <div className="font-bold text-xl">Store</div>
        <div className="flex gap-4">
          <span>Cart (0)</span>
        </div>
      </nav>
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
        <div className="grid grid-cols-3 gap-6">
          {products.map((item) => (
            <div key={item.id} className="border rounded-xl p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">{"$" + item.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}`,
  dashboard: `import React from 'react';

export default function Dashboard() {
  const metrics = [
    { label: 'Users', value: '1,234' },
    { label: 'Revenue', value: '$12,345' },
    { label: 'Orders', value: '567' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r p-6">
        <div className="font-bold text-xl mb-8">Dashboard</div>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-600">Overview</a>
          <a href="#" className="block text-gray-600">Analytics</a>
          <a href="#" className="block text-gray-600">Settings</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Overview</h1>
        <div className="grid grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white p-6 rounded-xl border">
              <p className="text-gray-500 text-sm">{m.label}</p>
              <p className="text-2xl font-bold mt-2">{m.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}`,
};

const initialState: BuilderState = {
  prompt: '',
  messages: [],
  isGenerating: false,
  generatedCode: '',
  projectType: 'landing',
  projectName: 'Untitled Project',
  activeTab: 'preview',
  deviceView: 'desktop',
};

interface BuilderActions {
  setPrompt: (text: string) => void;
  setProjectType: (type: ProjectType) => void;
  setProjectName: (name: string) => void;
  setActiveTab: (tab: Tab) => void;
  setDeviceView: (device: Device) => void;
  submitPrompt: () => void;
}

export function useBuilder() {
  const [state, setState] = useState<BuilderState>(initialState);

  const setPrompt = useCallback((text: string) => {
    setState((prev) => ({ ...prev, prompt: text }));
  }, []);

  const setProjectType = useCallback((type: ProjectType) => {
    setState((prev) => ({ ...prev, projectType: type }));
  }, []);

  const setProjectName = useCallback((name: string) => {
    setState((prev) => ({ ...prev, projectName: name }));
  }, []);

  const setActiveTab = useCallback((tab: Tab) => {
    setState((prev) => ({ ...prev, activeTab: tab }));
  }, []);

  const setDeviceView = useCallback((device: Device) => {
    setState((prev) => ({ ...prev, deviceView: device }));
  }, []);

  const submitPrompt = useCallback(() => {
    const currentPrompt = state.prompt.trim();
    if (!currentPrompt || state.isGenerating) return;

    const userMessage: Message = {
      id: uuid(),
      role: 'user',
      content: currentPrompt,
      timestamp: new Date(),
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isGenerating: true,
      prompt: '',
    }));

    setTimeout(() => {
      const assistantMessage: Message = {
        id: uuid(),
        role: 'assistant',
        content: '',
        timestamp: new Date(),
        isStreaming: true,
      };

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
      }));

      const fullResponse = mockResponses[state.projectType];
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        if (currentIndex < fullResponse.length) {
          setState((prev) => {
            const updatedMessages = [...prev.messages];
            const lastMsg = updatedMessages[updatedMessages.length - 1];
            if (lastMsg && lastMsg.isStreaming) {
              lastMsg.content = fullResponse.slice(0, currentIndex + 1);
            }
            return { ...prev, messages: updatedMessages };
          });
          currentIndex++;
        } else {
          clearInterval(intervalId);

          setState((prev) => {
            const updatedMessages = [...prev.messages];
            const lastMsg = updatedMessages[updatedMessages.length - 1];
            if (lastMsg) {
              lastMsg.isStreaming = false;
            }
            return {
              ...prev,
              messages: updatedMessages,
              generatedCode: mockCodeStrings[prev.projectType],
              isGenerating: false,
              activeTab: 'preview',
            };
          });
        }
      }, 50);
    }, 800);
  }, [state.prompt, state.isGenerating, state.projectType]);

  const canSubmit = state.prompt.trim().length > 0 && !state.isGenerating;

  const actions: BuilderActions = {
    setPrompt,
    setProjectType,
    setProjectName,
    setActiveTab,
    setDeviceView,
    submitPrompt,
  };

  return { state, actions, canSubmit };
}