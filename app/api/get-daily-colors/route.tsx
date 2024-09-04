import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const revalidate = 60; // 1 minute

export async function GET(request: Request) {
  try {
    // Fetch the start_color and end_color from the daily_colors_rgb table.
    // Get the highest id, which is the most recent entry.
    const result = await sql`
      SELECT start_color, end_color 
      FROM daily_colors_rgb 
      ORDER BY id DESC 
      LIMIT 1
    `;

    if (result.rowCount === 0) {
      return NextResponse.json({ message: 'No colors found' }, { status: 404 });
    }

    // Return the colors
    return NextResponse.json({ colors: result.rows }, { status: 200 });
  } catch (error) {
    // Handle any errors
    return NextResponse.json({ error: error }, { status: 500 });
  }
}