"use client";
import { useEffect, useState } from "react";
import { Project } from "@/types/Projects";
import ProjectForm from "@/components/ProjectForm";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
    technologies: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    await fetch(`/api/projects?id=${id}`, { method: "DELETE" });
    fetchProjects();
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openAddModal = () => {
    setForm({ title: "", description: "", image: "", url: "", technologies: "" });
    setEditId(null);
    setShowModal(true);
  };

  const openEditModal = (project: Project) => {
    setForm({
      title: project.title,
      description: project.description,
      image: project.image,
      url: project.url,
      technologies: project.technologies.join(", "),
    });
    setEditId(project.id);
    setShowModal(true);
  };

  const handleProjectFormSubmit = async (data: Omit<Project, "id" | "createdAt">) => {
    setFormLoading(true);
    setFormMessage("");
    let res;
    if (editId) {
      res = await fetch("/api/projects", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editId, ...data }),
      });
    } else {
      res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
    setFormLoading(false);
    if (res.ok) {
      setFormMessage(editId ? "Project updated successfully!" : "Project added successfully!");
      fetchProjects();
      setTimeout(() => {
        setShowModal(false);
        setEditId(null);
      }, 1000);
    } else {
      setFormMessage(editId ? "Failed to update project." : "Failed to add project.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin: Projects</h1>
      <button
        className="mb-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
        onClick={openAddModal}
      >
        + Add New Project
      </button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-neutral-900 rounded-xl shadow-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Technologies</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="py-2 px-4 border-b font-semibold">{project.title}</td>
                  <td className="py-2 px-4 border-b max-w-xs truncate">{project.description}</td>
                  <td className="py-2 px-4 border-b">{project.technologies.join(", ")}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="text-blue-600 hover:text-blue-800 mr-2"
                      title="Edit"
                      onClick={() => openEditModal(project)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 1 1 3.182 3.182L7.5 19.213l-4 1 1-4 12.362-12.726z" />
                      </svg>
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                      onClick={() => handleDelete(project.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Modal for Add Project */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8 w-full max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
              title="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4">{editId ? "Edit Project" : "Add New Project"}</h2>
            <ProjectForm
              initialData={editId ? projects.find(p => p.id === editId) : undefined}
              onSubmit={handleProjectFormSubmit}
              loading={formLoading}
              message={formMessage}
            />
          </div>
        </div>
      )}
    </div>
  );
} 