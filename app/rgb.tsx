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
export function colorsApproxEqual(a: RGBColor, b: RGBColor, tolerance: number = 10): boolean {
  if (!a || !b) {
    throw new Error('Both color parameters must be provided');
  }

  const diffR = Math.abs(a.r - b.r);
  const diffG = Math.abs(a.g - b.g);
  const diffB = Math.abs(a.b - b.b);

  return diffR <= tolerance && diffG <= tolerance && diffB <= tolerance;
}

export function contrastColor(color: RGBColor): RGBColor {
  let d = 0;

  // Counting the perceptive luminance - human eye favors green color...
  const luminance = (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255;

  if (luminance > 0.5) {
    d = 0; // bright colors - black font
  } else {
    d = 255; // dark colors - white font
  }

  return { r: d, g: d, b: d };
}

// Get the euclidian distance between two colors
export function colorDistance(a: RGBColor, b: RGBColor) {
  return Math.sqrt(
    Math.pow(a.r - b.r, 2) + Math.pow(a.g - b.g, 2) + Math.pow(a.b - b.b, 2)
  );
}

export function getRandomColor(): RGBColor {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

// Implement a function for getting the string representation of an RGBColor
export function rgbToString(color: RGBColor) {
  return `rgb(${color.r},${color.g},${color.b})`;
}

// Get a hex string representation of an RGBColor
export function rgbToHexString(color: RGBColor) {
  return `#${color.r.toString(16).padStart(2, '0')}${color.g.toString(16).padStart(2, '0')}${color.b.toString(16).padStart(2, '0')}`;
}

export function addColor(color: RGBColor, amount: RGBColor) {
  return {
    r: Math.max(0, Math.min(color.r + amount.r, 255)),
    g: Math.max(0, Math.min(color.g + amount.g, 255)),
    b: Math.max(0, Math.min(color.b + amount.b, 255)),
  };
}