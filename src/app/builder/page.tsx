'use client';

import { BuilderNavbar } from '@/components/builder/BuilderNavbar';
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
        {/* LEFT PANEL - PromptSidebar will go here */}
        <aside className="w-[380px] border-r border-border-custom bg-surface overflow-y-auto">
          {/* TODO: Add PromptSidebar component */}
        </aside>

        {/* RIGHT PANEL - PreviewPanel will go here */}
        <main className="flex-1 bg-background overflow-y-auto">
          {/* TODO: Add PreviewPanel component */}
        </main>
      </div>
    </div>
  );
}