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
        <h2 className="text-2xl font-semibold mb-3 text-primary-500 my-4">Summary</h2>
        <p>
          Frontend Engineer with expertise in React, Next.js, and TypeScript. Skilled in building high performance, scalable web applications with a focus on user experience, performance optimization, and secure API integration. Strong problem-solving and collaboration skills. Seeking a challenging role to leverage my frontend development skills and contribute to impactful projects.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3 text-primary-500 my-4">Technical Skills</h2>
        <ul className="flex flex-wrap gap-3">
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">React.js</li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">Next.js</li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">Redux</li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">React Query</li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">Tailwind</li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">JavaScript</li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">TypeScript</li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">Java</li>
          <li className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">Git & GitHub</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3 text-primary-500 my-4">Soft Skills</h2>
        <ul className="list-disc ml-6">
          <li>Strong communication</li>
          <li>Problem-solving</li>
          <li>Teamwork abilities</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3 text-primary-500 my-4">Conceptual Knowledge</h2>
        <ul className="list-disc ml-6">
          <li>Object-Oriented Programming (OOP)</li>
          <li>Data Structures</li>
          <li>Algorithms</li>
          <li>Computer Networks</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3 text-primary-500 my-4">Work Experience</h2>
        <div className="mb-4">
          <h3 className="font-bold">Frontend Engineer, InnovateX Solution (Part-Time)</h3>
          <span className="italic">Oct 2024 - Nov 2024</span>
          <ul className="list-disc ml-6">
            <li>Collaborated with 4+ cross-functional teams to design and implement 10+ engaging features and modules, significantly enhancing user interaction and satisfaction.</li>
            <li>Architected and managed a scalable, resilient application infrastructure using React.js, Next.js, and TypeScript, resulting in a 30% improvement in performance and reliability.</li>
            <li>Developed 3+ Proof of Concepts (POCs) to explore and integrate new technologies such as React Query and Tailwind CSS, driving the app&apos;s functionality forward and adapting to evolving user needs.</li>
            <li>Evaluated and selected technology options (Redux, API integration, etc.) based on specific use cases, ensuring alignment with the app&apos;s mission and long-term product roadmap.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">MERN stack Intern, Wxora Company</h3>
          <span className="italic">Aug 2023 – Oct 2023</span>
          <ul className="list-disc ml-6">
            <li>Coordinated project tasks for a team of 5, ensuring 100% adherence to engineering standards and regulations using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
            <li>Conducted comprehensive project analyses, identifying and rectifying 15+ discrepancies in engineering designs, which improved project quality and delivery timelines.</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3 text-primary-500 my-4">Education</h2>
        <div className="mb-2">
          <h3 className="font-bold">Arab Open University</h3>
          <span className="italic">Bachelor of Computer Science (GPA: 3.3 / 4.0)</span>
          <div>Sep 2022 - Sep 2026</div>
        </div>
      </div>
    </section>
  );
}
