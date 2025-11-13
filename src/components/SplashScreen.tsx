import { useEffect, useRef } from "react";
import splashImage from "@/assets/splash-screen.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Play shuffle sound
    audioRef.current = new Audio('/card-shuffle.mp3');
    audioRef.current.play().catch(e => console.log('Audio play failed:', e));

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
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-teal-600 to-teal-700 animate-fade-in">
      <img 
        src={splashImage} 
        alt="It's Been a Minute" 
        className="w-full max-w-md px-8 animate-scale-in"
      />
    </div>
  );
};
