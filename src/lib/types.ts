export type ProjectType = "landing" | "portfolio" | "ecommerce" | "dashboard";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
};

export type Project = {
  id: string;
  name: string;
  type: ProjectType;
  createdAt: Date;
  updatedAt: Date;
  code: string;
  prompt: string;
};

export type BuilderState = {
  prompt: string;
  messages: Message[];
  isGenerating: boolean;
  generatedCode: string;
  projectType: ProjectType;
  projectName: string;
  activeTab: "preview" | "code" | "responsive";
  deviceView: "desktop" | "tablet" | "mobile";
};