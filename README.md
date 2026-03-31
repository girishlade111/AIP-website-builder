# LadeStack Builder

AI-powered website builder built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Features

- AI-powered website generation from prompts
- Multiple project types: landing pages, portfolios, e-commerce, dashboards
- Real-time preview with responsive views (desktop/tablet/mobile)
- Code editor with line numbers and copy functionality
- Chat-based interface with streaming responses
- Keyboard shortcuts (Cmd/Ctrl+Enter to build, Cmd/Ctrl+S to save)
- Modern dark theme UI with smooth animations
- Desktop-only builder (shows message on smaller screens)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home page
│   ├── builder/page.tsx   # Builder page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles + animations
│   └── fonts/             # Custom fonts
├── components/
│   ├── home/              # Home page components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   └── ProjectGrid.tsx
│   ├── builder/           # Builder page components
│   │   ├── BuilderNavbar.tsx
│   │   ├── PromptSidebar.tsx
│   │   ├── PreviewPanel.tsx
│   │   └── MockPreview.tsx
│   └── ui/                # Shared UI components
│       └── Skeleton.tsx
├── hooks/
│   └── useBuilder.ts     # Builder state management
└── lib/
    ├── types.ts           # TypeScript types
    └── mock-data.ts      # Mock project data
```

## What's Mocked vs Real

This is a frontend demonstration project. The following features are mocked:

- **AI Generation**: The "AI" responses are pre-written strings that simulate streaming. When you submit a prompt, it adds your message to chat, shows a streaming animation, then displays a mock response based on the selected project type.

- **Code Generation**: The code displayed in the Code tab is hardcoded mock code strings, not actual generated output.

- **Project Data**: The "Recent Projects" on the home page come from mock-data.ts.

- **Save/Export/Share**: These buttons have UI but no actual functionality (placeholder only).

The following features work as they would in a real app:

- Navigation between pages
- State management via useBuilder hook
- Responsive preview switching (desktop/tablet/mobile views)
- Tab switching (Preview/Code/Responsive)
- Chat message UI with animations
- Keyboard shortcuts
- Loading states and skeleton animations

## License

MIT