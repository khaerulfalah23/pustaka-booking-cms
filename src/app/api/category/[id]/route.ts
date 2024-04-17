import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const result = await prisma.category.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(result);
}
