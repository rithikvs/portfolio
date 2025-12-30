import React, { useEffect, useRef, useState } from 'react';


interface TypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  pause?: number;
  colors?: string[]; // array of color classes
}


const TypingAnimation: React.FC<TypingAnimationProps> = ({ words, typingSpeed = 100, pause = 1200, colors = ["text-yellow-400"] }) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (!isDeleting && charIndex < currentWord.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, pause]);

 
  return (
    <span style={{ color: '#e4c52bff', background: 'transparent', fontWeight: 600 }}>
      {displayed}
      <span className="blinking-cursor" style={{ color: '#08e2ffff' }}>|</span>
    </span>
  );
};

export default TypingAnimation;
