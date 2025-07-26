export default function ChatHeader() {
  return (
    <header className="glass-card border-none border-b border-white/10 px-8 py-6" role="banner">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative animate-slideIn" aria-hidden="true">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg hover-scale">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-pulse shadow-lg" aria-hidden="true"></div>
          </div>
          <div className="animate-slideIn" style={{animationDelay: '0.1s'}}>
            <h1 className="text-2xl font-bold gradient-text tracking-tight">Chat Assistant</h1>
            <p className="text-sm text-gray-500/80 font-medium">AI-powered conversation experience</p>
          </div>
        </div>
        <div className="flex items-center gap-3 animate-slideIn" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full hover-lift" role="status" aria-label="AI Assistant Status">
            <div className="relative" aria-hidden="true">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm font-semibold gradient-text-accent">Online</span>
          </div>
        </div>
      </div>
    </header>
  );
} 