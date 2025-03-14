
import { useState, useEffect } from 'react';

/**
 * A hook that helps manage page transitions to prevent blinking
 * by controlling when animations and content should become visible
 */
export const usePageTransition = (delay = 100) => {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Start with not ready state
    setIsReady(false);
    
    // Set a small timeout to ensure DOM is ready before animations
    const timer = setTimeout(() => {
      setIsReady(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return isReady;
};
