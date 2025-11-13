import { useState, useRef } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    if (hasStarted) return;
    setHasStarted(true);
    
    // Play shuffle sound
    audioRef.current = new Audio('/card-shuffle.mp3');
    audioRef.current.play().catch(e => console.log('Audio play failed:', e));

    // Show splash for 3 seconds
    timerRef.current = setTimeout(() => {
      onComplete();
    }, 3000);
  };

  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-teal-600 to-teal-700 animate-fade-in cursor-pointer p-8"
      onClick={handleStart}
    >
      {/* Top text "It's Been" */}
      <div className="text-white text-6xl font-bold tracking-wider mb-8" style={{ fontFamily: 'Impact, sans-serif' }}>
        <span className="inline-block transform -rotate-12">I</span>
        <span className="inline-block transform -rotate-8">t</span>
        <span className="inline-block transform -rotate-4">'</span>
        <span className="inline-block transform rotate-0">s</span>
        <span className="inline-block w-4"></span>
        <span className="inline-block transform rotate-4">B</span>
        <span className="inline-block transform rotate-8">e</span>
        <span className="inline-block transform rotate-12">e</span>
        <span className="inline-block transform rotate-16">n</span>
      </div>

      {/* Card with clock */}
      <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform rotate-6 mb-8" style={{ width: '280px', height: '380px' }}>
        {/* Spade at top */}
        <div className="absolute top-4 left-4 text-4xl">♠</div>
        
        {/* Clock in center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-40 h-40 rounded-full border-8 border-black flex items-center justify-center">
            {/* Clock marks */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-3 bg-black"
                  style={{
                    top: '10%',
                    left: '50%',
                    transformOrigin: '0 170%',
                    transform: `translateX(-50%) rotate(${i * 30}deg)`,
                  }}
                />
              ))}
            </div>
            
            {/* Hour hand */}
            <div 
              className="absolute w-2 h-12 bg-black rounded-full"
              style={{
                bottom: '50%',
                left: '50%',
                transformOrigin: 'bottom center',
                transform: 'translateX(-50%) rotate(90deg)',
              }}
            />
            
            {/* Minute hand */}
            <div 
              className="absolute w-1.5 h-16 bg-black rounded-full"
              style={{
                bottom: '50%',
                left: '50%',
                transformOrigin: 'bottom center',
                transform: 'translateX(-50%) rotate(180deg)',
              }}
            />
            
            {/* Center dot */}
            <div className="absolute w-3 h-3 bg-black rounded-full" />
          </div>
        </div>
        
        {/* Spade at bottom */}
        <div className="absolute bottom-4 right-4 text-4xl transform rotate-180">♠</div>
        
        {/* Card edge lines */}
        <div className="absolute -right-2 top-0 bottom-0 w-8 bg-black/20 rounded-r-2xl" />
      </div>

      {/* Bottom text "a Minute" */}
      <div className="text-white text-6xl font-bold tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>
        <span className="inline-block transform -rotate-16">a</span>
        <span className="inline-block w-6"></span>
        <span className="inline-block transform -rotate-8">M</span>
        <span className="inline-block transform -rotate-4">i</span>
        <span className="inline-block transform rotate-0">n</span>
        <span className="inline-block transform rotate-4">u</span>
        <span className="inline-block transform rotate-8">t</span>
        <span className="inline-block transform rotate-12">e</span>
      </div>

      {/* Tap to start hint */}
      {!hasStarted && (
        <div className="absolute bottom-8 text-white/80 text-sm animate-pulse">
          Toca para comenzar
        </div>
      )}
    </div>
  );
};
