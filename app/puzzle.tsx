"use client";

import React, { useState, useEffect } from "react";
import { addColor, getRandomColor, RGBColor, rgbToString } from "./rgb";
import ColorDisplay from './ColorDisplay';
import PaletteButton from './PaletteButton';

// TODO A component that takes props to affectColor() (which we'll pass e.g. addRed() or addBlue())
//      and the button's display color.
//      We can use that to define the buttons once.
// TODO A white button and a black button that adds/subtracts all elements equally to just
//      get brighter or darker.
// TODO Display the current score; the number of times any of the buttons has been clicked.
// TODO Make steps smaller if you're closer. 1 at minimum, maybe log: 1, 2, 4, 8, 16, 32?
//       If the larger step would make you overstep, use the next smaller one?
// TODO Add a timer. wordle does similarly. Score and time.
// TODO Different mixing models? This is a literal RGB. HSL? CMYK?
//      A "paint-like" model based on some subtractive color model?
//      I think that having 3 different "puzzles" for RGB, HSL, and CMYK would be a good
//      starting point. Then we can expand into other stuff later too.
// TODO e.g. we could make another puzzle that's the same, but you're matching two *gradients*.
//      So you need to match the start and the end color. That could be interesting.
// TODO Generate a new start and target color each day (currentColor becomes separate from the start color).
// TODO Add advertisement. I need money.
// TODO Calculate the minimum possible score for the current target color, so we can see
//      if someone got a perfect score or grade them? It's fine without this, there can
//      be an "organic" high score on social media. "How many steps did it take you?"

const Puzzle = () => {
  const fixedSeed = 0;

  const [currentColor, setCurrentColor] = useState<{ r: number; g: number; b: number; }>({ r: 0, g: 0, b: 0 });
  const [targetColor, setTargetColor] = useState<{ r: number; g: number; b: number; }>({ r: 0, g: 0, b: 0 });

  // Note that [] as the second argument means that this effect will only run once on Mount.
  useEffect(() => {
    setCurrentColor(getRandomColor());
    setTargetColor(getRandomColor());
  }, []);

  const addRed = () => setCurrentColor(prev => addColor(prev, { r: 50, g: 0, b: 0 }));
  const addGreen = () => setCurrentColor(prev => addColor(prev, { r: 0, g: 50, b: 0 }));
  const addBlue = () => setCurrentColor(prev => addColor(prev, { r: 0, g: 0, b: 50 }));

  const removeRed = () => setCurrentColor(prev => addColor(prev, { r: -50, g: 0, b: 0 }));
  const removeGreen = () => setCurrentColor(prev => addColor(prev, { r: 0, g: -50, b: 0 }));
  const removeBlue = () => setCurrentColor(prev => addColor(prev, { r: 0, g: 0, b: -50 }));

  return (
    <div className="flex flex-col items-center">
      <ColorDisplay targetColor={targetColor} currentColor={currentColor} rgbToString={rgbToString} />
      <div className="grid grid-cols-3 gap-1">
        <PaletteButton increase={true} backgroundColor="red" onClick={addRed} />
        <PaletteButton increase={true} backgroundColor="green" onClick={addGreen} />
        <PaletteButton increase={true} backgroundColor="blue" onClick={addBlue} />
        <PaletteButton increase={false} backgroundColor="red" onClick={removeRed} />
        <PaletteButton increase={false} backgroundColor="green" onClick={removeGreen} />
        <PaletteButton increase={false} backgroundColor="blue" onClick={removeBlue} />
      </div>
    </div>
  );
};

export default Puzzle;