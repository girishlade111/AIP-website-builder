'use client';

import { useState, useCallback } from 'react';
import { BuilderState, ProjectType } from '@/lib/types';

type Tab = 'preview' | 'code' | 'responsive';
type Device = 'desktop' | 'tablet' | 'mobile';

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
    console.log('Submitting prompt:', state.prompt);
    setState((prev) => ({ ...prev, isGenerating: true }));
    
    setTimeout(() => {
      setState((prev) => ({ ...prev, isGenerating: false }));
    }, 5000);
  }, [state.prompt]);

  const actions: BuilderActions = {
    setPrompt,
    setProjectType,
    setProjectName,
    setActiveTab,
    setDeviceView,
    submitPrompt,
  };

  return { state, actions };
}