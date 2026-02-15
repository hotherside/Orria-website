"use client";

interface BrowserFrameProps {
  children: React.ReactNode;
  url: string;
  accent?: string;
}

export function BrowserFrame({ children, url, accent = "#0891B2" }: BrowserFrameProps) {
  return (
    <div className="w-full max-w-[380px] mx-auto rounded-xl overflow-hidden border border-cream-300/50 shadow-lg">
      {/* Browser chrome */}
      <div className="h-8 bg-cream-200/80 flex items-center px-3 gap-1.5">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-cream-400/60" />
          <div className="w-2 h-2 rounded-full bg-cream-400/60" />
          <div className="w-2 h-2 rounded-full bg-cream-400/60" />
        </div>
        <div className="flex-1 mx-3 h-4 bg-white/70 rounded-full flex items-center px-2.5">
          <span className="text-[7px] text-text-muted truncate font-mono">{url}</span>
        </div>
      </div>
      {/* Content */}
      <div className="bg-white p-4 min-h-[220px]">
        {children}
      </div>
    </div>
  );
}
