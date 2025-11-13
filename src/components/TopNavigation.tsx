import { ArrowLeft } from "lucide-react";

export const TopNavigation = () => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
      {/* Back button */}
      <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-foreground flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer">
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
      </button>

      {/* Clock in center */}
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-foreground bg-background/50 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="sm:w-8 sm:h-8">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
            <line x1="16" y1="16" x2="16" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Spacer for symmetry */}
      <div className="w-10 sm:w-12" />
    </div>
  );
};
