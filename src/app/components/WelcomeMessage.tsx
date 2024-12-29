import React, { useState, useEffect } from 'react';

interface WelcomeMessageProps {
  className?: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ className }) => {
  const [colors, setColors] = useState(['#FF0000', '#00FF00', '#0000FF']);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every second

    return () => clearInterval(intervalId);
  }, []);

  const gradientStyle = {
    background: `linear-gradient(to right, ${colors[colorIndex]}, ${colors[(colorIndex + 1) % colors.length]})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <h2 className={`${className} text-4xl font-bold text-center mb-10`} style={gradientStyle}>
      Welcome to Textutor
    </h2>
  );
};

export default WelcomeMessage;