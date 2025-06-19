import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: 'Modern Portfolio',
        description: 'A modern portfolio built with Next.js, Prisma, and MongoDB.',
        image: '/images/portfolio1.png',
        url: 'https://yourportfolio.com',
        technologies: ['Next.js', 'Prisma', 'MongoDB', 'Tailwind CSS'],
        createdAt: new Date('2024-12-01T12:00:00.000Z'),
      },
      {
        title: 'E-commerce App',
        description: 'A full-stack e-commerce application.',
        image: '/images/ecommerce.png',
        url: 'https://ecommerce.com',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        createdAt: new Date('2024-11-15T09:30:00.000Z'),
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
