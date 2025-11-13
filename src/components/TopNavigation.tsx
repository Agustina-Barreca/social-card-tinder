import { ArrowLeft } from "lucide-react";

interface TopNavigationProps {
  showClock?: boolean;
}

export const TopNavigation = ({ showClock = false }: TopNavigationProps) => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 py-4 sm:py-5">
      {/* Clock in center - only shown on Great Job screen */}
      {showClock && (
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-foreground bg-background/50 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="sm:w-8 sm:h-8">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
              <line x1="16" y1="16" x2="16" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="16" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
