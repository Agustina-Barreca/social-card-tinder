import { Heart } from "lucide-react";

export const GreatJobScreen = () => {
  return (
    <div className="h-full flex items-center justify-center px-6">
      <div className="text-center space-y-12 max-w-md animate-fade-in">
        {/* Decorative elements */}
        <div className="relative">
          {/* Large icon with gradient background */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150 animate-pulse" />
              {/* Icon container */}
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center backdrop-blur-sm border border-primary/10">
                <Heart className="w-16 h-16 text-primary fill-primary/20" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Main message with refined typography */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-foreground tracking-tight">
            Great Job
          </h1>
          <p className="text-2xl text-foreground/70 font-light">
            You reconnected today
          </p>
        </div>
        
        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
        </div>
        
        {/* Supportive message with better spacing */}
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-sm mx-auto">
            You've reached out to 5 people today. 
          </p>
          <p className="text-base text-muted-foreground/80 leading-relaxed max-w-sm mx-auto">
            Take a moment to breathe and appreciate the connections you're nurturing.
          </p>
        </div>
        
        {/* Bottom message with elegant styling */}
        <div className="pt-12">
          <div className="inline-block px-6 py-3 bg-muted/30 rounded-full backdrop-blur-sm border border-muted-foreground/10">
            <p className="text-sm text-muted-foreground">
              Come back tomorrow to continue reconnecting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
