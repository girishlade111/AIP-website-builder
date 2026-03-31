'use client';

import { useEffect, useRef, useState } from 'react';
import { BuilderNavbar } from '@/components/builder/BuilderNavbar';
import { PromptSidebar } from '@/components/builder/PromptSidebar';
import { PreviewPanel } from '@/components/builder/PreviewPanel';
import { useBuilder } from '@/hooks/useBuilder';

export default function BuilderPage() {
  const { state, actions, canSubmit } = useBuilder();
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const [isEditingName, setIsEditingName] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        if (canSubmit) {
          actions.submitPrompt();
        }
      }

      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        saveButtonRef.current?.click();
      }

      if (e.key === 'Escape' && isEditingName) {
        setIsEditingName(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canSubmit, actions, isEditingName]);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <BuilderNavbar
        projectName={state.projectName}
        onProjectNameChange={actions.setProjectName}
        isGenerating={state.isGenerating}
        onEditingChange={setIsEditingName}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-[380px] border-r border-border-custom bg-surface overflow-y-auto">
          <PromptSidebar
            prompt={state.prompt}
            messages={state.messages}
            isGenerating={state.isGenerating}
            projectType={state.projectType}
            onPromptChange={actions.setPrompt}
            onProjectTypeChange={actions.setProjectType}
            onSubmit={actions.submitPrompt}
            canSubmit={canSubmit}
          />
        </aside>

        <main className="flex-1 bg-background overflow-hidden">
          <PreviewPanel
            activeTab={state.activeTab}
            deviceView={state.deviceView}
            isGenerating={state.isGenerating}
            hasContent={state.generatedCode !== ''}
            onTabChange={actions.setActiveTab}
            onDeviceChange={actions.setDeviceView}
          />
        </main>
      </div>

      <button
        ref={saveButtonRef}
        className="hidden"
        onClick={() => console.log('Save triggered')}
      />
    </div>
  );
}