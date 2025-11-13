import { useEffect, useRef, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioReady, setAudioReady] = useState(false);

  useEffect(() => {
    // Preload and play shuffle sound
    const audio = new Audio('/card-shuffle.mp3');
    audio.volume = 0.7;
    audio.preload = 'auto';
    
    // Try to play immediately
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setAudioReady(true);
        })
        .catch(() => {
          // If autoplay fails, add click listener to play on first interaction
          const handleInteraction = () => {
            audio.play().catch(e => console.log('Audio play failed:', e));
            setAudioReady(true);
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
          };
          document.addEventListener('click', handleInteraction);
          document.addEventListener('touchstart', handleInteraction);
        });
    }
    
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
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#3d9999] p-8 overflow-hidden">
      {/* Top text "It's Been" - curved upward */}
      <div className="relative mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <svg viewBox="0 0 400 80" className="w-full max-w-sm">
          <defs>
            <path
              id="arc-up"
              d="M 50,70 Q 200,10 350,70"
              fill="transparent"
            />
          </defs>
          <text className="fill-white font-bebas text-7xl tracking-[0.15em]">
            <textPath href="#arc-up" startOffset="50%" textAnchor="middle">
              IT'S BEEN
            </textPath>
          </text>
        </svg>
      </div>

      {/* Card stack with shuffling animation */}
      <div className="relative mb-12" style={{ width: '260px', height: '360px' }}>
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
            <div className="absolute top-4 left-4 text-5xl leading-none">♠</div>
            
            {/* Clock in center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-36 h-36 rounded-full border-[6px] border-black flex items-center justify-center">
                {/* Clock marks */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, j) => (
                    <div
                      key={j}
                      className="absolute bg-black"
                      style={{
                        width: j % 3 === 0 ? '3px' : '2px',
                        height: j % 3 === 0 ? '12px' : '8px',
                        top: '8px',
                        left: '50%',
                        transformOrigin: '50% 64px',
                        transform: `translateX(-50%) rotate(${j * 30}deg)`,
                      }}
                    />
                  ))}
                </div>
                
                {/* Hour hand - pointing to 12 */}
                <div 
                  className="absolute w-2 h-10 bg-black rounded-full"
                  style={{
                    bottom: '50%',
                    left: '50%',
                    transformOrigin: 'bottom center',
                    transform: 'translateX(-50%) rotate(0deg)',
                  }}
                />
                
                {/* Minute hand - pointing to 3 */}
                <div 
                  className="absolute w-1.5 h-14 bg-black rounded-full"
                  style={{
                    bottom: '50%',
                    left: '50%',
                    transformOrigin: 'bottom center',
                    transform: 'translateX(-50%) rotate(90deg)',
                  }}
                />
                
                {/* Center dot */}
                <div className="absolute w-4 h-4 bg-black rounded-full z-10" />
              </div>
            </div>
            
            {/* Spade at bottom right - rotated */}
            <div className="absolute bottom-4 right-4 text-5xl leading-none transform rotate-180">♠</div>
          </div>
        ))}
      </div>

      {/* Bottom text "a Minute" - curved downward */}
      <div className="relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <svg viewBox="0 0 400 80" className="w-full max-w-sm">
          <defs>
            <path
              id="arc-down"
              d="M 50,10 Q 200,70 350,10"
              fill="transparent"
            />
          </defs>
          <text className="fill-white font-bebas text-7xl tracking-[0.15em]">
            <textPath href="#arc-down" startOffset="50%" textAnchor="middle">
              A MINUTE
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};
