"use client";

export type RGBColor = {
  r: number;
  g: number;
  b: number;
};

// Implement equality for RGBColor
export function colorsEqual(a: RGBColor, b: RGBColor) {
  return a.r === b.r && a.g === b.g && a.b === b.b;
}

// Approximate equality; tolerance is element-wise
export function colorsApproxEqual(a: RGBColor, b: RGBColor, tolerance: number) {
  return (
    Math.abs(a.r - b.r) <= tolerance &&
    Math.abs(a.g - b.g) <= tolerance &&
    Math.abs(a.b - b.b) <= tolerance
  );
}

// Get the euclidian distance between two colors
export function colorDistance(a: RGBColor, b: RGBColor) {
  return Math.sqrt(
    Math.pow(a.r - b.r, 2) + Math.pow(a.g - b.g, 2) + Math.pow(a.b - b.b, 2)
  );
}


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