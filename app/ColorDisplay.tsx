import React from 'react';
import { colorDistance, RGBColor } from './rgb';
import { exponential01 } from './math';
import { rgbToString, contrastColor } from './rgb';

interface ColorDisplayProps {
  targetColor: RGBColor;
  currentColor: RGBColor;
  score: number;
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({ targetColor, currentColor, score }) => {
  const distance = colorDistance(targetColor, currentColor);
  const distanceRatio = distance / 441.673;

  var borderWidth = distance === 0 
    ? 0
    : Math.max(1, exponential01(distanceRatio, 1.5) * 90);
  if (isNaN(borderWidth)) {
    borderWidth = 0;
  }

  const textColor = contrastColor(currentColor);

  // Calculate the text size based on the distance. Lower distance
  // means larger text and vice-versa.
  // Scale from 1em to 3em.
  const textSize = 1 + (2 * (1 - distanceRatio));

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
          borderRadius: "50%",
        }}
      >
        <div
          className="align-middle"
          style={{
            width: "70%",
            height: "70%",
            backgroundColor: rgbToString(currentColor),
            borderRadius: "50%", // This makes the circle.
            border: `${borderWidth}px solid white`,
            color: rgbToString(textColor),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="mt-2" style={{ fontSize: `${textSize}em` }}>{score}</div>
        </div>
      </div>
    </div>
  );
};

export default ColorDisplay;