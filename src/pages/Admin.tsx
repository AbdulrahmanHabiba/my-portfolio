import { FiPlus } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useProjects, useDeleteProject, useUpdateProjectsOrder } from "@/lib/hooks/useProjects";
import ProjectCard from "@/sections/Portfolio/ProjectCard";
import ProjectModal from "./components/projectmodal";
import { type Project } from '@/lib/utils/projectsService';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import SkeletonCard from "@/components/ui/SkeletonCard";
import AuthButton from "./AuthButton";
import { useAuth } from "@/lib/hooks/useAuth";

// Add drag and drop libraries
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
  type DragEndEvent
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useUser } from "@/lib/context/UserContext";
import AdminAlert from "./components/AdminAlert";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

// Create SortableProjectCard component for drag and drop
function SortableProjectCard(props: {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  onMoveUp?: (id: string) => void;
  onMoveDown?: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: props.project.id as string,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transform ? "transform 150ms cubic-bezier(0.25, 1, 0.5, 1)" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative">
      <div className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
        <Button
          size="icon"
          className="rounded-full bg-primary/80 hover:bg-primary text-white shadow-md cursor-pointer"
          onClick={() => props.onMoveUp && props.onMoveUp(props.project.id as string)}
        >
          <FaArrowUp size={16} />
        </Button>
        <Button
          size="icon"
          className="rounded-full bg-primary/80 hover:bg-primary text-white shadow-md cursor-pointer"
          onClick={() => props.onMoveDown && props.onMoveDown(props.project.id as string)}
        >
          <FaArrowDown size={16} />
        </Button>
      </div>
      <ProjectCard
        {...props.project}
        isAdminPage={true}
        onEdit={props.onEdit}
        onDelete={props.onDelete}
        dragHandleProps={{ ...attributes, ...listeners, className: "hidden md:flex" }}
      />
    </div>
  );
}

export default function Admin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { data: projects, isLoading, error } = useProjects();
  const { mutate: deleteProject } = useDeleteProject();
  const { mutate: updateOrder } = useUpdateProjectsOrder();
  const [openAlert, setOpenAlert] = useState(false)
  const { user } = useAuth();
  const { isAdmin } = useUser();

  // Add sensors for drag and drop
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle adding a new project
  const handleAddProject = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  // Handle editing a project
  const handleEditProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Handle deleting a project
  const handleDeleteProject = (id: string) => {
    if (!isAdmin) {
      toast.error("Only admins can delete projects");
      setOpenAlert(true);
      return;
    }
    if (window.confirm("Are you sure you want to delete this project?")) {
      deleteProject(id, {
        onSuccess: () => {
          toast.success("Project deleted successfully");
        },
        onError: (error: Error) => {
          toast.error("Delete failed: " + error.message);
        },
      });
    }
  };

  // Handle drag end function
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!isAdmin) {
      toast.error("Only admins can reorder projects");
      setOpenAlert(true);

      return;
    }
    if (!over || active.id === over.id || !projects) {
      return;
    }


    // Reorder projects
    const oldIndex = projects.findIndex((p) => p.id === active.id);
    const newIndex = projects.findIndex((p) => p.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      const newProjects = arrayMove(projects, oldIndex, newIndex);

      // Update order in database
      const projectsWithOrder = newProjects.map((project, index) => ({
        id: project.id as string,
        order: index
      }));

      updateOrder(projectsWithOrder, {
        onSuccess: () => {
          toast.success("Projects order updated successfully");
        },
        onError: () => {
          toast.error("Failed to update projects order");
        }
      });
    }
  };

  // Handle moving project up
  const handleMoveUp = (id: string) => {
    if (!isAdmin) {
      toast.error("Only admins can reorder projects");
      setOpenAlert(true);
      return;
    }

    if (!projects) return;

    const index = projects.findIndex(p => p.id === id);
    if (index <= 0) return; // Already at the top

    const newProjects = [...projects];
    const newIndex = index - 1;

    // Swap positions
    [newProjects[index], newProjects[newIndex]] = [newProjects[newIndex], newProjects[index]];

    // Update order in database
    const projectsWithOrder = newProjects.map((project, idx) => ({
      id: project.id as string,
      order: idx
    }));

    updateOrder(projectsWithOrder, {
      onSuccess: () => {
        toast.success("Project moved up successfully");
      },
      onError: () => {
        toast.error("Failed to update projects order");
      }
    });
  };

  // Handle moving project down
  const handleMoveDown = (id: string) => {
    if (!isAdmin) {
      toast.error("Only admins can reorder projects");
      setOpenAlert(true);
      return;
    }

    if (!projects) return;

    const index = projects.findIndex(p => p.id === id);
    if (index === -1 || index >= projects.length - 1) return; // Already at the bottom

    const newProjects = [...projects];
    const newIndex = index + 1;

    // Swap positions
    [newProjects[index], newProjects[newIndex]] = [newProjects[newIndex], newProjects[index]];

    // Update order in database
    const projectsWithOrder = newProjects.map((project, idx) => ({
      id: project.id as string,
      order: idx
    }));

    updateOrder(projectsWithOrder, {
      onSuccess: () => {
        toast.success("Project moved down successfully");
      },
      onError: () => {
        toast.error("Failed to update projects order");
      }
    });
  };

  return (
    <div className="container mx-auto py-12 mt-12">
      <div className="text-center mt-0 sm:mt-6 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent">Project Management Dashboard</h1>
        <p className="text-muted-foreground mt-2 text-sm">Manage and organize your portfolio projects</p>
      </div>
      <AdminAlert open={openAlert} onOpenChange={setOpenAlert} />

      <Card className="mb-8 border-2 border-border/50 bg-gradient-to-br from-card/80 to-card shadow-xl">
        <CardContent className="pt-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">Welcome {user ? user.displayName : "Guest"}</h2>
            {!user && <p className="text-muted-foreground mb-5 text-sm">You need to log in to save your changes</p>}
            <div className="max-w-[12rem] mx-auto">
              <AuthButton />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 border-2 border-border/50 bg-gradient-to-br from-card/80 to-card shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl">Dashboard Overview</CardTitle>
          <CardDescription className="text-base">Manage your portfolio projects from this central dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-neon-purple/10 to-neon-purple/5 border-2 border-neon-purple/20 p-6 rounded-xl hover:border-neon-purple/40 transition-all shadow-lg">
              <h3 className="font-semibold text-muted-foreground mb-2 uppercase tracking-wider text-sm">Total Projects</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">{projects?.length || 0}</p>
            </div>
            <div className="bg-gradient-to-br from-neon-blue/10 to-neon-blue/5 border-2 border-neon-blue/20 p-6 rounded-xl hover:border-neon-blue/40 transition-all shadow-lg">
              <h3 className="font-semibold text-muted-foreground mb-2 uppercase tracking-wider text-sm">Featured Projects</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">{projects?.filter(p => p.featured)?.length || 0}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-6">
          <Button
            onClick={handleAddProject}
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <FiPlus className="mr-2" /> Add New Project
          </Button>
        </CardFooter>
      </Card>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4 bg-prrimary border-1 p-1">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">Error loading projects. Please try again.</p>
              <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
                Refresh
              </Button>
            </div>
          ) : projects && projects.length > 0 ? (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SortableContext
                  items={projects.map(p => p.id as string)}
                  strategy={verticalListSortingStrategy}
                >
                  {projects.map((project) => (
                    <SortableProjectCard
                      key={project.id}
                      project={project}
                      onEdit={() => handleEditProject(project as Project)}
                      onDelete={() => handleDeleteProject(project.id as string)}
                      onMoveUp={handleMoveUp}
                      onMoveDown={handleMoveDown}
                    />
                  ))}
                </SortableContext>
              </div>
            </DndContext>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">Start by adding your first project to your portfolio.</p>
              <Button onClick={handleAddProject}>
                <FiPlus className="mr-2" /> Add New Project
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="featured">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">Error loading projects. Please try again.</p>
              <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
                Refresh
              </Button>
            </div>
          ) : projects && projects.filter(p => p.featured as boolean).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.featured as boolean).map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  isAdminPage={true}
                  onEdit={() => handleEditProject(project as Project)}
                  onDelete={() => handleDeleteProject(project?.id as string)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No featured projects</h3>
              <p className="text-muted-foreground mb-6">Mark projects as featured to display them here.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}