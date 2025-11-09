import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST() {
  try {
    // 🔁 Revalida la raíz "/"
    revalidatePath('/');
    console.log('✅ Página / revalidada correctamente');
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error('❌ Error al revalidar:', err);
    return NextResponse.json(
      { revalidated: false, error: (err as Error).message },
      { status: 500 },
    );
  }
}
