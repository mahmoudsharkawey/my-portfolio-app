import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: 'Health System',
        description: 'Designed and developed a comprehensive health management system for improved patient engagement and streamlined healthcare workflows. Implemented secure API connections for reliable data exchange and compliance with healthcare standards. Built intuitive, user-friendly interfaces to enhance accessibility for patients and healthcare providers. Utilized React.js and TypeScript to ensure responsive, high-performance web applications. Focused on data security, performance optimization, and seamless user experience throughout the project.',
        image: '/images/health-system.png',
        url: 'https://your-health-system.com',
        technologies: ['React.js', 'Tailwind', 'Shadcn-UI', 'React Query'],
        createdAt: new Date('2024-10-01T12:00:00.000Z'),
      },
      {
        title: 'Furniture E-commerce',
        description: 'Developed a full-stack e-commerce platform tailored for furniture retail, enabling seamless browsing, purchasing, and management of furniture products. Designed a dual-interface architecture supporting both customer-facing operations and administrative functions. Ensured a responsive and user-friendly shopping experience, integrating payment processing, search optimization, and performance enhancements. Utilized MERN stack technologies for robust functionality, scalability, and efficient data handling across the platform.',
        image: '/images/furniture-ecommerce.png',
        url: 'https://your-furniture-ecommerce.com',
        technologies: ['React.js', 'Tailwind', 'React-Context', 'MERN'],
        createdAt: new Date('2024-09-01T12:00:00.000Z'),
      },
      {
        title: 'Blog Application',
        description: 'Developed a full-stack blog application with dynamic content management using React.js and Next.js 14, ensuring a seamless and responsive user experience. Styled the application using Tailwind CSS, resulting in a modern and visually appealing design. Integrated Sanity CMS for content management, allowing for easy creation, editing, and organization of blog posts with a user-friendly interface.',
        image: '/images/blog-application.png',
        url: 'https://your-blog-application.com',
        technologies: ['React.js', 'Next.js 14', 'Tailwind', 'Sanity CMS'],
        createdAt: new Date('2023-07-01T12:00:00.000Z'),
      },
    ],
  });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
