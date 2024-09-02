"use client";

import React, { useState, useEffect } from "react";
import { addColor, colorsApproxEqual, colorsEqual, getRandomColor, RGBColor, rgbToString } from "./rgb";
import ColorDisplay from './ColorDisplay';
import PaletteButton from './PaletteButton';

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
//      Ensure they are some minimum distance away.
// TODO Add advertisement. I need money.
// TODO Calculate the minimum possible score for the current target color, so we can see
//      if someone got a perfect score or grade them? It's fine without this, there can
//      be an "organic" high score on social media. "How many steps did it take you?"
// TODO Handle holding down the button to increase/decrease faster.
// TODO "Pressed" button display state and "Unpressed" button display state.
//      I'm sure there's a standard mechanism.
// TODO "Hover" button display state as well, possibly. Lower priority, because I expect touch devices more.

const Puzzle = () => {
  const fixedSeed = 0;

  const [currentColor, setCurrentColor] = useState<{ r: number; g: number; b: number; }>({ r: 0, g: 0, b: 0 });
  const [targetColor, setTargetColor] = useState<{ r: number; g: number; b: number; }>({ r: 0, g: 0, b: 0 });
  const [score, setScore] = useState(0);

  // TODO Similar to the tik-tak-toe example, check for a win condition: the colors match.
  //      If they do, display a "You win!" message with the score.
  //      While they haven't won, display the current score: the number of times any of the buttons has been clicked.
  //      (the goal is to get the lowest score possible)

  // Note that [] as the second argument means that this effect will only run once on Mount.
  useEffect(() => {
    setCurrentColor(getRandomColor());
    setTargetColor(getRandomColor());
  }, []);

  const addWhite = () => {
    setCurrentColor(prev => addColor(prev, { r: 1, g: 1, b: 1 }));
    setScore(prev => prev + 1);
  };
  const removeWhite = () => {
    setCurrentColor(prev => addColor(prev, { r: -1, g: -1, b: -1 }));
    setScore(prev => prev + 1);
  };

  const addRed = () => {
    setCurrentColor(prev => addColor(prev, { r: 1, g: 0, b: 0 }));
    setScore(prev => prev + 1);
  };
  const addGreen = () => {
    setCurrentColor(prev => addColor(prev, { r: 0, g: 1, b: 0 }));
    setScore(prev => prev + 1);
  };
  const addBlue = () => {
    setCurrentColor(prev => addColor(prev, { r: 0, g: 0, b: 1 }));
    setScore(prev => prev + 1);
  };

  const removeRed = () => {
    setCurrentColor(prev => addColor(prev, { r: -1, g: 0, b: 0 }));
    setScore(prev => prev + 1);
  };
  const removeGreen = () => {
    setCurrentColor(prev => addColor(prev, { r: 0, g: -1, b: 0 }));
    setScore(prev => prev + 1);
  };
  const removeBlue = () => {
    setCurrentColor(prev => addColor(prev, { r: 0, g: 0, b: -1 }));
    setScore(prev => prev + 1);
  };

  // TODO More similar to wordle, I might expect that we lift the state up
  //   and display a win "card" over the puzzle? Go check out wordle.
  const win = colorsApproxEqual(currentColor, targetColor, 0);
  if (win) {
    return (
      <div>
        <h1>You win!</h1>
        <p>Score: {score}</p>
      </div>
    );
  }
  
  // TODO Reference tik-tak-toe and create a running list of all the currentColors as they change.
  //      This will let us store the history of the game and replay it, or create a gradient on win.

  // TODO Fix button positionings, make it pretty.
  return (
    <div className="flex flex-col items-stretch gap-1">
      <h1 className="items-center text-4xl font-bold">{score}</h1>
      <ColorDisplay targetColor={targetColor} currentColor={currentColor} rgbToString={rgbToString} />
      <p>Target: {rgbToString(targetColor)}</p>
      <p>Current: {rgbToString(currentColor)}</p>
      <PaletteButton increase={true} onClick={addWhite} className="
        bg-game-button-white
        active:bg-game-button-white-active
        text-game-button-black
      " />
      <div className="grid grid-cols-3 items-center">
        <PaletteButton increase={true} onClick={addRed} className="
          bg-game-button-red
          active:bg-game-button-red-active
          text-game-button-white
        "/>
        <PaletteButton increase={true} onClick={addGreen} className="
          bg-game-button-green
          active:bg-game-button-green-active
          text-game-button-white
        "/>
        <PaletteButton increase={true} onClick={addBlue} className="
          bg-game-button-blue
          active:bg-game-button-blue-active
          text-game-button-white
        "/>
        <PaletteButton increase={false} onClick={removeRed} className="
          bg-game-button-red
          active:bg-game-button-red-active
          text-game-button-white
        "/>
        <PaletteButton increase={false} onClick={removeGreen} className="
          bg-game-button-green
          active:bg-game-button-green-active
          text-game-button-white
        "/>
        <PaletteButton increase={false} onClick={removeBlue} className="
          bg-game-button-blue
          active:bg-game-button-blue-active
          text-game-button-white
        "/>
      </div>
      <PaletteButton increase={false} onClick={removeWhite} className="
        bg-game-button-black
        active:bg-game-button-black-active
        text-game-button-white
      " />
    </div>
  );
};

export default Puzzle;