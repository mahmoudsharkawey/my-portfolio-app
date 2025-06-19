"use client";

import { Project } from "@/types/Projects";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) {
          console.log("Failed to fetch projects");
        }else {
          console.log("Projects fetched successfully");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const noteVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 14 },
    },
    hover: { scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)" },
    tap: { scale: 0.98 },
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mt-0 mb-8 text-center">My Projects</h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openModal(project);
                }
              }}
              variants={noteVariants}
              whileHover="hover"
              whileTap="tap"
              className={`cursor-pointer bg-primary-50 dark:bg-neutral-900 border border-primary-200 dark:border-primary-700 rounded-xl shadow-lg transition-shadow duration-300 overflow-hidden p-4 relative transform select-none animate-fade-in sticky-note-${idx % 5}`}
              style={{
                rotate: `${(Math.random() - 0.5) * 4}deg`,
                boxShadow: "0 4px 20px 0 rgba(0,0,0,0.10)",
                minHeight: "260px",
              }}
              aria-label={`Open details for ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded mb-3 bg-default-200 dark:bg-default-700"
              />
              <div className="p-2">
                <h2 className="text-xl font-semibold mb-1 text-primary-700 dark:text-primary-400">
                  {project.title}
                </h2>
                <p className="text-default-600 dark:text-default-400 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onClose={closeModal}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center">
                {selectedProject && (
                  <>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <span className="text-2xl font-bold mb-2">
                      {selectedProject.title}
                    </span>
                  </>
                )}
              </ModalHeader>
              <ModalBody>
                {selectedProject && (
                  <>
                    <p className="mb-4 text-gray-700">
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {selectedProject.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          color="primary"
                          variant="flat"
                          size="sm"
                          className="font-semibold"
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                {selectedProject && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-yellow-300 text-yellow-900 rounded shadow hover:bg-yellow-400 transition"
                  >
                    Visit Project
                  </a>
                )}
                <Button
                  color="danger"
                  variant="light"
                  onClick={onClose}
                  className="ml-2"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

// Add animation (fade-in) via Tailwind CSS in your globals.css or tailwind.config.js if not present:
// .animate-fade-in { @apply transition-opacity duration-500 opacity-0; animation: fadeIn 0.5s forwards; }
// @keyframes fadeIn { to { opacity: 1; } }
