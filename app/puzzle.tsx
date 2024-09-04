"use client";

import React, { useState, useEffect } from "react";
import { colorsApproxEqual, RGBColor, rgbToString } from "./rgb";
import ColorDisplay from './ColorDisplay';
import PaletteButton from './PaletteButton';

// TODO Add a timer to give time along with score on win.

// TODO Calculate the minimum possible score for the current target color, so we can see
//      if someone got a perfect score or grade them? It's fine without this, there can
//      be an "organic" high score on social media. "How many steps did it take you?"

const Puzzle = () => {
  const fixedSeed = 0;

  const [currentColor, setCurrentColor] = useState<RGBColor>({ r: 0, g: 0, b: 0 });
  const [targetColor, setTargetColor] = useState<RGBColor>({ r: 0, g: 0, b: 0 });
  const [history, setHistory] = useState<RGBColor[]>([]); 
  const [score, setScore] = useState(0);

  // Note that [] as the second argument means that this effect will only run once on Mount.
  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await fetch("/api/get-daily-colors");
        if (response.ok) {
          // Example response:
          // {"colors":[{"start_color":"#7352ef","end_color":"#9eec59"}]}
          const { colors } = await response.json();
          const startColorHexStr = colors[0].start_color;
          const endColorHexStr = colors[0].end_color;
          const startColor = {
            r: parseInt(startColorHexStr.slice(1, 3), 16),
            g: parseInt(startColorHexStr.slice(3, 5), 16),
            b: parseInt(startColorHexStr.slice(5, 7), 16),
          };
          const endColor = {
            r: parseInt(endColorHexStr.slice(1, 3), 16),
            g: parseInt(endColorHexStr.slice(3, 5), 16),
            b: parseInt(endColorHexStr.slice(5, 7), 16),
          };
          setCurrentColor(startColor);
          setTargetColor(endColor);
        } else {
          console.error("Failed to fetch daily colors");
        }
      } catch (error) {
        console.error("Error fetching daily colors", error);
      }
    };

    fetchColors();
  }, []);

  function playTurn(colorChange: RGBColor) {
    const stepSizes = [8, 4, 2, 1];

    const adjustColorComponent = (current: number, target: number, change: number) => {
      if (change === 0) {
        return current;
      }
      let distance = Math.abs(target - current);
      let step = stepSizes.find(size => size < distance) || 1;
      return current + Math.sign(change) * step;
    };

    const nextColor = {
      r: adjustColorComponent(currentColor.r, targetColor.r, colorChange.r),
      g: adjustColorComponent(currentColor.g, targetColor.g, colorChange.g),
      b: adjustColorComponent(currentColor.b, targetColor.b, colorChange.b),
    };

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

  // TODO Social sharing
  // TODO About page? Links to my stuff?
  
  // TODO Indicate new puzzle in X time to match our daily reset
  
  if (!currentColor || !targetColor) {
    return <div>Loading...</div>;
  }

  const win = colorsApproxEqual(currentColor, targetColor, 1);
  if (win) {
    // Note that we send the target color for both, to ensure they match
    // even if they user has only gotten an approximate match.
    return (
      <div className="px-8 md:w-1/2 lg:w-1/4 mx-auto">
      <ColorDisplay targetColor={targetColor} currentColor={targetColor} score={score} />
      <p className="flex justify-center mx-auto text-3xl">You win!</p>
      <p className="flex justify-center mx-auto text-xl">Score: {score}</p>
      <div className="flex-col justify-center my-2 border-4 border-slate-800 rounded-lg mx-8">
        {history.map((color, index) => (
        <div key={index}>
          <div
          className="mx-auto justify-center"
          style={{
            width: "100%",
            height: "15px",
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

  return (
    <div className="flex-col gap-1 items-center justify-center md:w-1/2 lg:w-1/4 mx-auto">
      <div className="px-8">
        <ColorDisplay targetColor={targetColor} currentColor={currentColor} score={score} />
        <PaletteButton increase={true} onClick={addWhite} className="
          bg-game-button-white
          active:bg-game-button-white-active
          text-game-button-black
          border-game-button-black
          border-2
          w-full
          active:ring-1
          active:ring-gray-500
        "/>
        <div className="grid grid-cols-3 items-center">
          <PaletteButton increase={true} onClick={addRed} className="
            bg-game-button-red
            active:bg-game-button-red-active
            text-game-button-white
            active:ring-2
            active:ring-red-500
          "/>
          <PaletteButton increase={true} onClick={addGreen} className="
            bg-game-button-green
            active:bg-game-button-green-active
            text-game-button-white
            active:ring-2
            active:ring-green-500
          "/>
          <PaletteButton increase={true} onClick={addBlue} className="
            bg-game-button-blue
            active:bg-game-button-blue-active
            text-game-button-white
            active:ring-2
            active:ring-blue-500
          "/>
          <PaletteButton increase={false} onClick={removeRed} className="
            bg-game-button-red
            active:bg-game-button-red-active
            text-game-button-white
            active:ring-2
            active:ring-red-500
          "/>
          <PaletteButton increase={false} onClick={removeGreen} className="
            bg-game-button-green
            active:bg-game-button-green-active
            text-game-button-white
            active:ring-2
            active:ring-green-500
          "/>
          <PaletteButton increase={false} onClick={removeBlue} className="
            bg-game-button-blue
            active:bg-game-button-blue-active
            text-game-button-white
            active:ring-2
            active:ring-blue-500
          "/>
        </div>
        <PaletteButton increase={false} onClick={removeWhite} className="
          bg-game-button-black
          active:bg-game-button-black-active
          text-game-button-white
          w-full
          active:ring-1
          active:ring-gray-500
        " />
      </div>
    </div>
  );
};

export default Puzzle;