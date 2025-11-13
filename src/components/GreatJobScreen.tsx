import { PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GreatJobScreenProps {
  onKeepGoing: () => void;
}

export const GreatJobScreen = ({ onKeepGoing }: GreatJobScreenProps) => {
  return (
    <div className="h-full flex items-center justify-center px-4 bg-card">
      <div className="text-center space-y-8 max-w-sm animate-fade-in">
        {/* Concentric circles with icon */}
        <div className="relative flex justify-center py-8">
          {/* Outer circle */}
          <div className="absolute w-64 h-64 rounded-full bg-accent/10" />
          {/* Middle circle */}
          <div className="absolute w-48 h-48 rounded-full bg-accent/20" />
          {/* Inner circle with icon */}
          <div className="relative w-32 h-32 rounded-full bg-accent flex items-center justify-center z-10">
            <PartyPopper className="w-16 h-16 text-accent-foreground" strokeWidth={2} />
          </div>
        </div>
        
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-card-foreground">
            You're on a Roll!
          </h1>
          <p className="text-base text-card-foreground/70 leading-relaxed px-4">
            You've successfully sorted through a batch of contacts. Your network is looking cleaner already.
          </p>
        </div>
        
        {/* Primary button */}
        <div className="pt-4">
          <Button
            onClick={onKeepGoing}
            className="w-full max-w-xs py-6 text-base font-semibold rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Keep Sorting Contacts
          </Button>
        </div>
        
        {/* Secondary link */}
        <button
          onClick={() => window.location.reload()}
          className="text-sm text-card-foreground/60 hover:text-card-foreground/80 transition-colors"
        >
          Take a Break
        </button>
      </div>
    </div>
  );
};
