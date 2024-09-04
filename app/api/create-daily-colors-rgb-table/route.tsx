import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE daily_colors_rgb (
        id SERIAL PRIMARY KEY,
        start_color VARCHAR(7) NOT NULL,
        end_color VARCHAR(7) NOT NULL,
        CHECK (start_color ~ '^#[0-9A-Fa-f]{6}$'),
        CHECK (end_color ~ '^#[0-9A-Fa-f]{6}$')
      );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}