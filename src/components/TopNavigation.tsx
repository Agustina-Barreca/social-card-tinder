import { ArrowLeft } from "lucide-react";

export const TopNavigation = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      {/* Back button */}
      <button className="nav-icon">
        <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
      </button>

      {/* Clock in center */}
      <div className="flex items-center justify-center">
        <div className="w-14 h-14 rounded-full border-2 border-foreground bg-background/50 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
            <line x1="16" y1="16" x2="16" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Spacer for symmetry */}
      <div className="w-6" />
    </div>
  );
};
