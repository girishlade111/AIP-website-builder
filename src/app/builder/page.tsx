'use client';

import { BuilderNavbar } from '@/components/builder/BuilderNavbar';
import { PromptSidebar } from '@/components/builder/PromptSidebar';
import { useBuilder } from '@/hooks/useBuilder';

export default function BuilderPage() {
  const { state, actions } = useBuilder();

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <BuilderNavbar
        projectName={state.projectName}
        onProjectNameChange={actions.setProjectName}
        isGenerating={state.isGenerating}
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
          />
        </aside>

        <main className="flex-1 bg-background overflow-y-auto">
          {/* TODO: Add PreviewPanel component */}
        </main>
      </div>
    </div>
  );
}