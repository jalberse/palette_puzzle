import React from 'react';
import { colorDistance } from './rgb';
import { exponential01 } from './math';
import { rgbToString } from './rgb';

interface ColorDisplayProps {
  targetColor: { r: number; g: number; b: number };
  currentColor: { r: number; g: number; b: number };
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({ targetColor, currentColor }) => {
  const distance = colorDistance(targetColor, currentColor);
  const distanceRatio = distance / 441.673;

  var borderWidth = distance === 0 
    ? 0
    : Math.max(1, exponential01(distanceRatio, 1.5) * 90);
  if (isNaN(borderWidth)) {
    borderWidth = 0;
  }

  return (
    <div className="aspect-square m-1 my-3">
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: rgbToString(targetColor),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          borderRadius: "35%",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "70%",
            backgroundColor: rgbToString(currentColor),
            borderRadius: "50%", // This makes the circle.
            border: `${borderWidth}px solid white`,
            color: "white",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ColorDisplay;