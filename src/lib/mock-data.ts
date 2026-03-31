import { Project } from "./types";

const now = new Date();
const daysAgo = (days: number) => new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Portfolio Site",
    type: "portfolio",
    createdAt: daysAgo(30),
    updatedAt: daysAgo(2),
    code: `<div class="portfolio">
  <header class="hero">
    <h1>John Doe</h1>
    <p>Full Stack Developer</p>
  </header>
  <section class="projects">
    <!-- Project cards -->
  </section>
</div>`,
    prompt: "Create a modern portfolio website with dark theme",
  },
  {
    id: "2",
    name: "SaaS Landing Page",
    type: "landing",
    createdAt: daysAgo(15),
    updatedAt: daysAgo(5),
    code: `<div class="landing-page">
  <nav class="navbar">
    <div class="logo">SaaSPro</div>
    <div class="nav-links">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <button class="cta">Get Started</button>
    </div>
  </nav>
  <section class="hero">
    <h1>Build faster with AI</h1>
    <p>The ultimate platform for developers</p>
  </section>
</div>`,
    prompt: "Create a SaaS landing page with hero section and features",
  },
  {
    id: "3",
    name: "Agency Website",
    type: "landing",
    createdAt: daysAgo(7),
    updatedAt: daysAgo(1),
    code: `<div class="agency">
  <header>
    <nav class="flex justify-between items-center p-6">
      <h1 class="text-2xl font-bold">AgencyPro</h1>
      <div class="flex gap-4">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <button>Contact</button>
      </div>
    </nav>
  </header>
  <main>
    <section class="services">
      <!-- Service cards -->
    </section>
    <section class="portfolio">
      <!-- Case studies -->
    </section>
  </main>
</div>`,
    prompt: "Create a modern agency website with case studies",
  },
];