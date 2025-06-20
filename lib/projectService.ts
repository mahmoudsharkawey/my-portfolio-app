import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getProjects = async () => prisma.project.findMany();

export const createProject = async (data: any) => {
  const { title, description, image, url, technologies } = data;
  if (!title || !description || !image || !url || !Array.isArray(technologies)) {
    throw new Error('Missing required fields.');
  }
  return prisma.project.create({ data: { title, description, image, url, technologies } });
};

export const updateProject = async (id: string, data: any) => {
  const updateData: any = {};
  if (data.title !== undefined) updateData.title = data.title;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.image !== undefined) updateData.image = data.image;
  if (data.url !== undefined) updateData.url = data.url;
  if (data.technologies !== undefined) updateData.technologies = data.technologies;
  return prisma.project.update({ where: { id }, data: updateData });
};

export const deleteProject = async (id: string) => {
  return prisma.project.delete({ where: { id } });
}; 