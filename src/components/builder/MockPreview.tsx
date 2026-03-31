'use client';

export function MockPreview() {
  return (
    <div className="min-h-full bg-white text-gray-900 font-sans">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-semibold text-lg">ProjectFlow</span>
        </div>
        <div className="flex items-center gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Features</a>
          <a href="#" className="hover:text-gray-900">Pricing</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Get Started</a>
        </div>
      </nav>

      <section className="relative px-8 py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/4" />
        <div className="relative text-center max-w-3xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Manage your projects<br />
            <span className="text-blue-600">with complete clarity</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            ProjectFlow helps teams stay organized, track progress, and deliver projects on time. No more chaos—just flow.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Everything you need</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Task Management</h3>
              <p className="text-gray-600 text-sm">Organize tasks with kanban boards, lists, and timelines that keep everyone aligned.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">Real-time dashboards show exactly where your project stands at any moment.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Team Collaboration</h3>
              <p className="text-gray-600 text-sm">Built-in comments, file sharing, and real-time updates keep everyone in sync.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Simple pricing</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-lg">Free</h3>
              <p className="text-3xl font-bold mt-2">$0<span className="text-base font-normal text-gray-500">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>Up to 3 projects</li>
                <li>5 team members</li>
                <li>Basic features</li>
              </ul>
              <button className="mt-6 w-full border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-50">Get Started</button>
            </div>
            <div className="border-2 border-blue-600 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Most Popular</div>
              <h3 className="font-semibold text-lg">Pro</h3>
              <p className="text-3xl font-bold mt-2">$12<span className="text-base font-normal text-gray-500">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>Unlimited projects</li>
                <li>Unlimited team members</li>
                <li>Advanced features</li>
                <li>Priority support</li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">Start Free Trial</button>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-lg">Enterprise</h3>
              <p className="text-3xl font-bold mt-2">$49<span className="text-base font-normal text-gray-500">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>Everything in Pro</li>
                <li>Custom integrations</li>
                <li>Dedicated support</li>
                <li>SSO & security</li>
              </ul>
              <button className="mt-6 w-full border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-50">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 px-8 py-12 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-medium">ProjectFlow</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
          <p className="text-sm text-gray-400">© 2025 ProjectFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}