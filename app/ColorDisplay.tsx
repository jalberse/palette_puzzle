import React from 'react';
import { colorDistance } from './rgb';
import { exponential01 } from './math';

interface ColorDisplayProps {
  targetColor: { r: number; g: number; b: number };
  currentColor: { r: number; g: number; b: number };
  rgbToString: (color: { r: number; g: number; b: number }) => string;
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({ targetColor, currentColor, rgbToString }) => {
  const distance = colorDistance(targetColor, currentColor);
  const distanceRatio = distance / 441.673;

  var borderWidth = distance === 0 
    ? 0
    : Math.max(1, exponential01(distanceRatio, 1.5) * 90);
  if (isNaN(borderWidth)) {
    borderWidth = 0;
  }

  // TODO Make the inner circle display larger.
  ///     That also means we can probably play with the border width interpolation more.

  return (
    <div className="aspect-square">
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: rgbToString(targetColor),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          border: "5px solid white",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "70%",
            backgroundColor: rgbToString(currentColor),
            borderRadius: "50%",
            border: `${borderWidth}px solid white`,
            color: "white",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ColorDisplay;