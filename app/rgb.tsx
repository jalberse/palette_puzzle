"use client";

export type RGBColor = {
  r: number;
  g: number;
  b: number;
};

export function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

// Implement a function for getting the string representation of an RGBColor
export function rgbToString(color: RGBColor) {
  return `rgb(${color.r},${color.g},${color.b})`;
}

export function addColor(color: RGBColor, amount: RGBColor) {
  return {
    r: Math.min(color.r + amount.r, 255),
    g: Math.min(color.g + amount.g, 255),
    b: Math.min(color.b + amount.b, 255),
  };
}