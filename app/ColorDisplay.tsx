import React from 'react';

interface ColorDisplayProps {
  targetColor: { r: number; g: number; b: number };
  currentColor: { r: number; g: number; b: number };
  rgbToString: (color: { r: number; g: number; b: number }) => string;
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({ targetColor, currentColor, rgbToString }) => {
  
  // TODO Consider having the gap between the elements shrink as we approach the target
  //      color, so that they *just* touch when the colors are equal (but not until then).
  
  // TODO And consider tailwind classes...

  return (
    <div className="mb-4">
      <div
        style={{
          width: "90%px",
          height: "150px",
          backgroundColor: rgbToString(targetColor),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          border: "5px solid white",
          borderRadius: "10px",
        }}
      >
        <div className="root">
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: rgbToString(currentColor),
              borderRadius: "50%",
              margin: "10px",
              border: "5px solid white",
              color: "white",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ColorDisplay;