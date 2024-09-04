import { colorDistance, getRandomColor, RGBColor, rgbToHexString } from '../../rgb';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// TODO Consider another endpoint that uses the url search params to set the colors instead of (semi-randomly)
//      selecting them as in this endpoint. That would allow us to curate the colors.
//      But I don't have the energy to curate colors forever, so this will be able to run "forever" with a cron job.
export async function GET(request: Request) {
  const startColor: RGBColor = getRandomColor();
  // Generate an endColor until it's not the same as the startColor
  let endColor: RGBColor = getRandomColor();
  while (startColor.r === endColor.r && startColor.g === endColor.g && startColor.b === endColor.b
    || colorDistance(startColor, endColor) < 100
  ) {
    endColor = getRandomColor();
  }

  // Get hex strings
  const startColorHex = rgbToHexString(startColor);
  const endColorHex = rgbToHexString(endColor);

  try {
    if (!startColor || !endColor) throw new Error('Start and end colors are required');
    await sql`INSERT INTO daily_colors_rgb (start_color, end_color) VALUES (${startColorHex}, ${endColorHex});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const colors = await sql`SELECT * FROM daily_colors_rgb;`;
  return NextResponse.json({ colors }, { status: 200 });
}