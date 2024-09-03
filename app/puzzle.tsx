"use client";

import React, { useState, useEffect } from "react";
import { addColor, colorsApproxEqual, colorsEqual, getRandomColor, RGBColor, rgbToString } from "./rgb";
import ColorDisplay from './ColorDisplay';
import PaletteButton from './PaletteButton';

// TODO Add a timer. wordle does similarly. Score and time.

// TODO Generate a new start and target color each day (currentColor becomes separate from the start color).
//      Ensure they are some minimum distance away.

// TODO Add advertisement. I need money.

// TODO Calculate the minimum possible score for the current target color, so we can see
//      if someone got a perfect score or grade them? It's fine without this, there can
//      be an "organic" high score on social media. "How many steps did it take you?"

// TODO Make steps smaller if you're closer. 1 at minimum, maybe log: 1, 2, 4, 8, 16, 32?
//       If the larger step would make you overstep, use the next smaller one?
// TODO Handle holding down the button to increase/decrease faster.
//      Though, maybe we instead do the "smaller step if you're closer" thing.
//      That way, you still just do single clicks but we get rid of click spamming when we know we just want a bunch of blue etc.

const Puzzle = () => {
  const fixedSeed = 0;

  const [currentColor, setCurrentColor] = useState<RGBColor>({ r: 0, g: 0, b: 0 });
  const [targetColor, setTargetColor] = useState<RGBColor>({ r: 0, g: 0, b: 0 });
  const [history, setHistory] = useState<RGBColor[]>([]); 
  const [score, setScore] = useState(0);

  // Note that [] as the second argument means that this effect will only run once on Mount.
  useEffect(() => {
    // setCurrentColor({ r: 255, g: 255, b: 255 });
    // setTargetColor({ r: 0, g: 0, b: 0 });
    setCurrentColor(getRandomColor());
    setTargetColor(getRandomColor());
  }, []);

  function playTurn(colorChange: RGBColor) {
    const nextColor = addColor(currentColor, colorChange);
    setHistory([...history, nextColor]);
    setCurrentColor(nextColor);
    setScore(prev => prev + 1);
  }

  const addWhite = () => { playTurn({ r: 1, g: 1, b: 1 }); };
  const removeWhite = () => { playTurn({ r: -1, g: -1, b: -1 }); };
  const addRed = () => { playTurn({ r: 1, g: 0, b: 0 }); };
  const addGreen = () => { playTurn({ r: 0, g: 1, b: 0 }); };
  const addBlue = () => { playTurn({ r: 0, g: 0, b: 1 }); };
  const removeRed = () => { playTurn({ r: -1, g: 0, b: 0 }); };
  const removeGreen = () => { playTurn({ r: 0, g: -1, b: 0 }); };
  const removeBlue = () => { playTurn({ r: 0, g: 0, b: -1 }); };

  // TODO Disable a color button when we can't add/remove any more?

  // TODO More similar to wordle, I might expect that we lift the state up
  //   and display a win "card" over the puzzle? Go check out wordle.
  
  // TODO I think that when we add/remove a color, we should jump by 664, 32, 16, 8, 4, 2, 1.
  //      If adding that much would cause us to equal or jump past the target,
  //      then we do the smaller jump (until we get to 1, obviously).
  //      That way you quickly get to approximately the right answer, but need to
  //      but need to be more precise to get the exact answer.
  
  // TODO Display time
  // TODO Display another gradient with the "minimum path" to the target?
  //      So they can compare (and if it's very off, maybe they laugh and share it).
  // TODO Indicate new puzzle in X time.
  const win = colorsApproxEqual(currentColor, targetColor, 1);
  if (win) {
    // Note that we send the target color for both, to ensure they match
    // even if they user has only gotten an approximate match.
    return (
      <div className="px-8 md:w-1/2 lg:w-1/4 mx-auto">
        <ColorDisplay targetColor={targetColor} currentColor={targetColor} score={score} />
        <h1 className="flex justify-center mx-auto">You win!</h1>
        <p className="flex justify-center mx-auto">Score: {score}</p>
        <div className="flex-col justify-center my-2 border-4 border-slate-800 rounded-lg mx-8">
          {history.map((color, index) => (
            <div key={index}>
              <div
                className="mx-auto justify-center"
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: rgbToString(color),
                }}
              >
              </div>
            </div>
          ))}
          </div>
      </div>
    );
  }

  // TODO I think we're too strict on match. Go up to 2 or something?
  //      It's gotten frustrating.

  return (
    <div className="flex-col gap-1 items-center justify-center md:w-1/2 lg:w-1/4 mx-auto">
      <div className="px-8">
        <p>{rgbToString(targetColor)}</p>
        <p>{rgbToString(currentColor)}</p>
        <ColorDisplay targetColor={targetColor} currentColor={currentColor} score={score} />
        <PaletteButton increase={true} onClick={addWhite} className="
          bg-game-button-white
          active:bg-game-button-white-active
          text-game-button-black
          border-game-button-black
          border-2
          w-full
        "/>
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
          w-full
        " />
      </div>
    </div>
  );
};

export default Puzzle;