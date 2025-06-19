import { title } from "@/components/primitives";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4  flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <Image
            src="https://lh3.googleusercontent.com/a/ACg8ocIqGEtb3ONENhYaRQbeQOfYeHr9kqDIBixq8qR8A2ST76qf9_o=s360-c-no"
            alt="Profile picture"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary-500 shadow-lg object-cover w-40 h-40 md:w-56 md:h-56"
            priority
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className={title({ color: "violet", size: "lg" })}>
            Hi, I&apos;m Mahmoud Gamal
          </h1>
        </div>
      </div>

      <div className="text-default-700 text-base leading-relaxed">
        <p className="mt-2 text-lg text-default-600 font-medium my-2">
          Web Developer & Designer
        </p>
        <p>
          I&apos;m a passionate developer with a love for building beautiful,
          performant web applications. I enjoy working with modern technologies
          and turning ideas into reality. My focus is on creating user-centric,
          accessible, and delightful digital experiences.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3 text-primary-500 my-4">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-3">
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
            React
          </li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
            Next.js
          </li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
            TypeScript
          </li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
            Tailwind CSS
          </li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
            Node.js
          </li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
            Express
          </li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
            MongoDB
          </li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
            PostgreSQL
          </li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
            Docker
          </li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
            Git
          </li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
            GitHub
          </li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
            UI/UX Design
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3 text-primary-500">
          Interests
        </h2>
        <p className="text-default-700">
          Open source, design systems, accessibility, learning new tech, and
          collaborating with creative people.
        </p>
      </div>
    </section>
  );
}
