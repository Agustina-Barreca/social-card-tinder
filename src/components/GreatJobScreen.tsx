import { Sparkles } from "lucide-react";

export const GreatJobScreen = () => {
  return (
    <div className="h-full flex items-center justify-center px-6 animate-fade-in">
      <div className="text-center space-y-8 max-w-md">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-scale-in">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        {/* Main message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Great Job
          </h1>
          <p className="text-xl text-muted-foreground">
            You reconnected today
          </p>
        </div>
        
        {/* Supportive message */}
        <div className="pt-4">
          <p className="text-base text-muted-foreground leading-relaxed">
            You've reached out to 5 people today. Take a moment to breathe and appreciate the connections you're nurturing.
          </p>
        </div>
        
        {/* Calm indicator */}
        <div className="pt-8">
          <div className="text-sm text-muted-foreground/60">
            Come back tomorrow to continue reconnecting
          </div>
        </div>
      </div>
    </div>
  );
};
