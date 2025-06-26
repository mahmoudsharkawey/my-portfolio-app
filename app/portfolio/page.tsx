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
import { EyeIcon } from '@/components/icons';

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);

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
    setDescExpanded(false);
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

  if (loading) return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mt-0 mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="card-modern animate-fade-in-up p-5 min-h-[300px] flex flex-col">
            <div className="w-full h-40 rounded-xl mb-4 bg-gray-200 dark:bg-neutral-800 animate-pulse" />
            <div className="h-6 w-2/3 bg-gray-200 dark:bg-neutral-800 rounded mb-3 animate-pulse" />
            <div className="h-4 w-full bg-gray-200 dark:bg-neutral-800 rounded mb-2 animate-pulse" />
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-neutral-800 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="container mx-auto px-4 py-10 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-primary-950">
      <h1 className="text-4xl font-bold mt-0 mb-8 text-center">My Projects</h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
              className={
                `card-modern animate-fade-in-up cursor-pointer overflow-hidden p-5 relative select-none` +
                ` shadow-2xl` +
                ` transition-all duration-500`
              }
              style={{
                minHeight: "300px",
                backdropFilter: "blur(12px)",
              }}
              aria-label={`Open details for ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl mb-4 bg-default-200 dark:bg-default-700 shadow-md"
              />
              <div className="p-2">
                <h2 className="text-2xl font-bold mb-2 text-primary-700 dark:text-primary-400">
                  {project.title}
                </h2>
                <p className="text-default-600 dark:text-default-400 line-clamp-3 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
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
        <ModalContent className="bg-white/90 dark:bg-neutral-900/90 rounded-2xl shadow-2xl p-6">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center">
                {selectedProject && (
                  <>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-56 object-cover rounded-xl mb-4 shadow-lg"
                    />
                    <span className="text-xl font-bold mb-2 text-primary-700 dark:text-primary-400">
                      {selectedProject.title}
                    </span>
                  </>
                )}
              </ModalHeader>
              <ModalBody>
                {selectedProject && (
                  <>
                    <div className="mb-4 text-gray-700 dark:text-gray-200 text-lg relative">
                      <p className={descExpanded ? undefined : "line-clamp-2"}>
                        {selectedProject.description}
                      </p>
                      {selectedProject.description.length > 60 && (
                        <button
                          className="text-primary-600 dark:text-primary-400 font-semibold ml-1 focus:outline-none underline text-sm"
                          onClick={() => setDescExpanded((prev) => !prev)}
                        >
                          {descExpanded ? "Show less" : "Show more"}
                        </button>
                      )}
                    </div>
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
                    className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-400 to-primary-600 text-white rounded-lg shadow hover:from-primary-500 hover:to-primary-700 transition"
                  >
                    <EyeIcon className="w-5 h-5" />
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
