import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const projects = await prisma.project.findMany()
  console.log(projects)
  return NextResponse.json(projects);
}