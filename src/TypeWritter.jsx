import { useState, useEffect } from 'react';

function Typewriter ({ text, delay = 50 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay, currentIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prevShow => !prevShow);
    }, 500); // Blinking speed, change as needed

    return () => clearInterval(cursorInterval);
  }, []);

  return <span>{displayText} {showCursor && '|'}</span>;
}

export default Typewriter;