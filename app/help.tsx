import React, { useState, useEffect } from 'react';
import ColorDisplay from './ColorDisplay';

const Help: React.FC<{ handleHelpClose: () => void }> = ({ handleHelpClose }) => {
  const targetColor = { r: 222, g: 69, b: 0 };
  const currentColors = [
    { r: 41, g: 189, b: 173 },
    { r: 89, g: 189, b: 173 },
    { r: 137, g: 189, b: 173 },
    { r: 185, g: 189, b: 173 },
    { r: 222, g: 189, b: 173 },
    { r: 222, g: 162, b: 173 },
    { r: 222, g: 135, b: 173 },
    { r: 222, g: 102, b: 173 },
    { r: 222, g: 69, b: 173 },
    { r: 222, g: 69, b: 129 },
    { r: 222, g: 69, b: 85 },
    { r: 222, g: 69, b: 42 },
    { r: 222, g: 69, b: 0 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % currentColors.length);
    }, 1000); // Change color every second

    return () => clearInterval(interval);
  }, [currentColors.length]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg flex flex-col mx-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">How To Play</h2>
        <div className="flex-col">
          <ColorDisplay
            targetColor={targetColor}
            currentColor={currentColors[currentIndex]}
            score={currentIndex}
          />
        </div>
        <ol className="list-decimal list-inside mx-4">
          <li>Tap to mix the central color.</li>
          <li>Match the color of the ring.</li>
          <li>Minimize your score!</li>
        </ol>
        <p className="text-center my-2 text-lg">New puzzles daily!</p>
        <div className="flex justify-end">
          <button
            onClick={handleHelpClose}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;