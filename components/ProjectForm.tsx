import React, { useState, useEffect } from "react";
import { Project } from "@/types/Projects";

type ProjectFormProps = {
  initialData?: Partial<Project>;
  onSubmit: (data: Omit<Project, "id" | "createdAt">) => Promise<void>;
  loading: boolean;
  message: string;
};

export default function ProjectForm({ initialData, onSubmit, loading, message }: ProjectFormProps) {
  const [form, setForm] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    image: initialData?.image || "",
    url: initialData?.url || "",
    technologies: initialData?.technologies?.join(", ") || "",
  });

  useEffect(() => {
    setForm({
      title: initialData?.title || "",
      description: initialData?.description || "",
      image: initialData?.image || "",
      url: initialData?.url || "",
      technologies: initialData?.technologies?.join(", ") || "",
    });
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const techArray = form.technologies.split(",").map((t) => t.trim()).filter(Boolean);
    onSubmit({ ...form, technologies: techArray } as any);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block font-semibold mb-1">Title</label>
        <input id="title" type="text" name="title" className="w-full border rounded px-3 py-2" value={form.title} onChange={handleChange} required placeholder="Enter project title" />
      </div>
      <div>
        <label htmlFor="description" className="block font-semibold mb-1">Description</label>
        <textarea id="description" name="description" className="w-full border rounded px-3 py-2" value={form.description} onChange={handleChange} required rows={3} placeholder="Enter project description" />
      </div>
      <div>
        <label htmlFor="image" className="block font-semibold mb-1">Image URL</label>
        <input id="image" type="text" name="image" className="w-full border rounded px-3 py-2" value={form.image} onChange={handleChange} required placeholder="Enter image URL" />
      </div>
      <div>
        <label htmlFor="url" className="block font-semibold mb-1">Project URL</label>
        <input id="url" type="text" name="url" className="w-full border rounded px-3 py-2" value={form.url} onChange={handleChange} required placeholder="Enter project URL" />
      </div>
      <div>
        <label htmlFor="technologies" className="block font-semibold mb-1">Technologies (comma separated)</label>
        <input id="technologies" type="text" name="technologies" className="w-full border rounded px-3 py-2" value={form.technologies} onChange={handleChange} required placeholder="e.g. React, TypeScript, Tailwind" />
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-primary-600 text-white rounded hover:bg-primary-700 transition" disabled={loading}>
        {loading ? "Saving..." : "Save Project"}
      </button>
      {message && <div className="text-center mt-2 text-sm font-semibold text-primary-600 dark:text-primary-400">{message}</div>}
    </form>
  );
} 