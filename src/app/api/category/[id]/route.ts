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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  const result = await prisma.category.update({
    where: {
      id: params.id,
    },
    data,
  });

  return NextResponse.json(result);
}
