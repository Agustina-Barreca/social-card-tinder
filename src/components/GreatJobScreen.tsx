import { PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GreatJobScreenProps {
  onKeepGoing: () => void;
}

export const GreatJobScreen = ({ onKeepGoing }: GreatJobScreenProps) => {
  return (
    <div className="h-full flex items-center justify-center px-4 sm:px-6 bg-card">
      <div className="text-center space-y-6 sm:space-y-8 max-w-sm animate-fade-in">
        {/* Concentric circles with icon */}
        <div className="relative flex justify-center items-center py-6 sm:py-8">
          <div className="relative flex items-center justify-center">
            {/* Outer circle */}
            <div className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-primary/10" />
            {/* Middle circle */}
            <div className="absolute w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-primary/20" />
            {/* Inner circle with icon */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-primary flex items-center justify-center z-10">
              <PartyPopper className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary-foreground" strokeWidth={2} />
            </div>
          </div>
        </div>
        
        {/* Title */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-card-foreground">
            Great Job
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-card-foreground/70 leading-relaxed px-2 sm:px-4">
            You reconnected today
          </p>
        </div>
        
        {/* Primary button */}
        <div className="pt-2 sm:pt-4 flex justify-center">
          <button
            onClick={onKeepGoing}
            className="w-[280px] sm:w-[320px] bg-card rounded-3xl p-6 card-stack-shadow border-4 border-foreground/10 transition-transform active:scale-95 hover:scale-105"
          >
            <div className="bg-primary text-primary-foreground font-bold text-base sm:text-lg py-4 rounded-2xl">
              Keep Going
            </div>
          </button>
        </div>
        
        {/* Secondary message */}
        <p className="text-xs sm:text-sm text-card-foreground/60 px-2">
          Or come back tomorrow to continue reconnecting
        </p>
      </div>
    </div>
  );
};
