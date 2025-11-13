import { useEffect, useRef, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioReady, setAudioReady] = useState(false);

  const handleCardClick = () => {
    if (!audioReady) {
      const audio = new Audio('/card-shuffle.mp3');
      audio.volume = 0.7;
      audio.play().catch(e => console.log('Audio play failed:', e));
      audioRef.current = audio;
      setAudioReady(true);
    }
  };

  useEffect(() => {
    // Preload audio
    const audio = new Audio('/card-shuffle.mp3');
    audio.volume = 0.7;
    audio.preload = 'auto';
    audioRef.current = audio;

    // Show splash for 3 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#3d9999] p-4 sm:p-8 overflow-hidden">
      {/* Top text "It's Been" - curved upward */}
      <div className="relative mb-8 sm:mb-12 animate-fade-in w-full max-w-sm px-4" style={{ animationDelay: '0.2s' }}>
        <svg viewBox="0 0 400 120" className="w-full">
          <defs>
            <path
              id="arc-up"
              d="M 50,100 Q 200,30 350,100"
              fill="transparent"
            />
          </defs>
          <text 
            className="fill-white font-bebas tracking-[0.15em]" 
            style={{ 
              fontSize: '64px',
              paintOrder: 'stroke fill',
              stroke: 'rgba(0,0,0,0.2)',
              strokeWidth: '1px'
            }}
          >
            <textPath href="#arc-up" startOffset="50%" textAnchor="middle">
              IT'S BEEN
            </textPath>
          </text>
        </svg>
      </div>

      {/* Card stack with shuffling animation */}
      <div 
        className="relative mb-8 sm:mb-12 cursor-pointer w-full max-w-[260px] aspect-[13/18]" 
        onClick={handleCardClick}
      >
        {/* Animated shuffling cards */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-white rounded-2xl shadow-2xl animate-shuffle-card"
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: '3s',
              zIndex: i,
            }}
          >
            {/* Spade at top left */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-4xl sm:text-5xl leading-none">♠</div>
            
            {/* Clock in center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-[5px] sm:border-[6px] border-black flex items-center justify-center">
                {/* Clock marks */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, j) => (
                    <div
                      key={j}
                      className="absolute bg-black"
                      style={{
                        width: j % 3 === 0 ? '3px' : '2px',
                        height: j % 3 === 0 ? '10px' : '6px',
                        top: '6px',
                        left: '50%',
                        transformOrigin: '50% 50px',
                        transform: `translateX(-50%) rotate(${j * 30}deg)`,
                      }}
                    />
                  ))}
                </div>
                
                {/* Hour hand - pointing to 12 */}
                <div 
                  className="absolute w-1.5 sm:w-2 h-8 sm:h-10 bg-black rounded-full"
                  style={{
                    bottom: '50%',
                    left: '50%',
                    transformOrigin: 'bottom center',
                    transform: 'translateX(-50%) rotate(0deg)',
                  }}
                />
                
                {/* Minute hand - pointing to 3 */}
                <div 
                  className="absolute w-1 sm:w-1.5 h-11 sm:h-14 bg-black rounded-full"
                  style={{
                    bottom: '50%',
                    left: '50%',
                    transformOrigin: 'bottom center',
                    transform: 'translateX(-50%) rotate(90deg)',
                  }}
                />
                
                {/* Center dot */}
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full z-10" />
              </div>
            </div>
            
            {/* Spade at bottom right - rotated */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-4xl sm:text-5xl leading-none transform rotate-180">♠</div>
          </div>
        ))}
      </div>

      {/* Bottom text "a Minute" - curved downward */}
      <div className="relative animate-fade-in w-full max-w-sm px-4" style={{ animationDelay: '0.6s' }}>
        <svg viewBox="0 0 400 120" className="w-full">
          <defs>
            <path
              id="arc-down"
              d="M 50,20 Q 200,90 350,20"
              fill="transparent"
            />
          </defs>
          <text 
            className="fill-white font-bebas tracking-[0.15em]"
            style={{ 
              fontSize: '64px',
              paintOrder: 'stroke fill',
              stroke: 'rgba(0,0,0,0.2)',
              strokeWidth: '1px'
            }}
          >
            <textPath href="#arc-down" startOffset="50%" textAnchor="middle">
              A MINUTE
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};
