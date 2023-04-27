import React, { useState, useEffect } from 'react';

interface Props {
  text: string;
}

const FlashingText: React.FC<Props> = ({ text }) => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const colors = ['white', 'blue', 'lightgreen', 'black'];

  return (
    <h1 style={{ color: colors[colorIndex] }}>
      {text}
    </h1>
  );
};

export default FlashingText;
