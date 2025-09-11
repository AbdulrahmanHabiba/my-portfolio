import { useState, useEffect } from "react";
import { useUser } from "@/lib/context/UserContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAddProject, useUpdateProject } from "@/lib/hooks/useProjects";
import toast from "react-hot-toast";

import Technologis from "./Technologis";
import AdminAlert from "./AdminAlert";

export interface Project {
  id?: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  code: string;
  featured: boolean;
  order? :number
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}


export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {


  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    tech: [] as string[],
    link: "",
    code: "",
    featured: false,
    order : 0
  });

  // Hooks for adding/updating projects
  const { mutate: addProject, isPending: isAdding } = useAddProject();
  const { mutate: updateProject, isPending: isUpdating } = useUpdateProject();
  const isLoading = isAdding || isUpdating;
  const { isAdmin } = useUser();
  const [openAlert, setOpenAlert] = useState(false)

  // Handlers


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.tech.length === 0) {
      toast.error("Please add at least one technology");
      return;
    }
    if (!isAdmin) {
      setOpenAlert(true) ;
      return ;
    }

    if (project?.id) {
      // Update existing project
      updateProject(
        { project: { ...formData }, id: project.id },
        {
          onSuccess: () => {
            toast.success("Your project has been updated successfully");
            onClose();
          },
          onError: (error: Error) => {
            toast.error(error.message || "Update failed");
          },
        }
      );
    } else {
      // Add new project
      addProject(formData, {
        onSuccess: () => {
          toast.success("Your project has been added successfully");
          onClose();
        },
        onError: (error: Error) => {
          toast.error(error.message || "Add failed");
        },
      });
    }
  };

  // Reset form when modal opens/closes or project changes
  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        description: project.description || "",
        image: project.image || "",
        tech: project.tech || [],
        link: project.link || "",
        code: project.code || "",
        featured: project.featured || false,
        order : project.order || 0
      });
    } else {
      setFormData({
        title: "",
        description: "",
        image: "",
        tech: [],
        link: "",
        code: "",
        featured: false,
        order : 0
      });

    }

  }, [project, isOpen]);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {project ? "Edit Project" : "Add New Project"}
          </DialogTitle>
          <DialogDescription>
            {project
              ? "Update your project details below."
              : "Fill in the details for your new project."}
          </DialogDescription>
        </DialogHeader>
             <AdminAlert open={openAlert} onOpenChange={setOpenAlert} />
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <Label className="mb-2" htmlFor="title">
              Title
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              required
              disabled={isLoading}
              className="bg-background border-input"
              placeholder="Project title"
            />
          </div>

          {/* Description */}
          <div>
            <Label className="mb-2" htmlFor="description">
              Description
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              required
              disabled={isLoading}
              className="bg-background border-input"
              placeholder="Brief project description..."
              rows={3}
            />
          </div>

          {/* Image URL */}
          <div>
            <Label className="mb-2" htmlFor="image">
              Image URL
            </Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, image: e.target.value }))
              }
              required
              disabled={isLoading}
              className="bg-background border-input"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Technologies */}
    
          <Technologis formData={formData} setFormData={setFormData} isLoading={isLoading} />

          {/* Live URL */}
          <div>
            <Label className="mb-2" htmlFor="link">
              Live URL
            </Label>
            <Input
              id="link"
              value={formData.link}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, link: e.target.value }))
              }
              required
              disabled={isLoading}
              className="bg-background border-input"
              placeholder="https://example.com"
            />
          </div>

          {/* GitHub URL */}
          <div>
            <Label className="mb-2" htmlFor="code">
              GitHub URL
            </Label>
            <Input
              id="code"
              value={formData.code}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, code: e.target.value }))
              }
              required
              disabled={isLoading}
              className="bg-background border-input"
              placeholder="https://github.com/username/repo"
            />
          </div>

          {/* Featured */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, featured: e.target.checked }))
              }
              disabled={isLoading}
              className="rounded border-input"
            />
            <Label className="mb-2" htmlFor="featured">
              Featured Project
            </Label>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="destructive"
              className="border-1 hover:text-white/50"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              disabled={isLoading || formData.tech.length === 0 }
            >
              {isLoading ? "Saving..." : project ? "Update" : "Add"} Project
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
