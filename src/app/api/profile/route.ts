import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(request: Request) {
  const data = await request.json();

  const profile = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  const result = await prisma.user.update({
    where: {
      id: profile?.id,
    },
    data: data,
  });

  return NextResponse.json(result);
}
