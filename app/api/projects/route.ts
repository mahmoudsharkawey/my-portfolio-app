import { NextResponse } from 'next/server';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject
} from '@/lib/projectService';

export async function GET() {
  return NextResponse.json(await getProjects());
}

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json(await createProject(data));
}

export async function PATCH(req: Request) {
  const data = await req.json();
  if (!data.id) {
    return NextResponse.json({ error: 'Project id is required.' }, { status: 400 });
  }
  return NextResponse.json(await updateProject(data.id, data));
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Project id is required.' }, { status: 400 });
  }
  return NextResponse.json(await deleteProject(id));
}