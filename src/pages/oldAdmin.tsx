import { FiPlus } from "react-icons/fi";
import Button from "@/components/ui/button";
import Skeleton from "@/components/ui/skeleton";
import { useProjects, useDeleteProject } from "@/lib/hooks/useProjects";
import { useStore } from "@/lib/store";
import ProjectCard from "@/sections/Portfolio/components/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { Project } from "@/lib/utils/projectsService";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Admin() {
  const { data: projects, isLoading, error } = useProjects();
  const { mutate: deleteProject } = useDeleteProject();
  const { openModal, setProject } = useStore();
  
  // Handle adding a new project
  const handleAddProject = () => {
    setProject(null);
    openModal();
  };
  
  // Handle editing a project
  const handleEditProject = (project: Project) => {
    setProject(project);
    openModal();
  };
  
  // Handle deleting a project
  const handleDeleteProject = (id: string) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      deleteProject(id, {
        onSuccess: () => {
          toast({
            title: "Project deleted",
            description: "The project has been removed successfully",
          });
        },
        onError: (error: any) => {
          toast({
            title: "Delete failed",
            description: error.message,
            variant: "destructive",
          });
        },
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Project Management Dashboard</h1>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Dashboard Overview</CardTitle>
          <CardDescription>Manage your portfolio projects from this central dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="font-medium">Total Projects</h3>
              <p className="text-3xl font-bold">{projects?.length || 0}</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="font-medium">Featured Projects</h3>
              <p className="text-3xl font-bold">{projects?.filter(p => p.featured)?.length || 0}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleAddProject}>
            <FiPlus className="mr-2" /> Add New Project
          </Button>
        </CardFooter>
      </Card>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border rounded-lg p-4">
                  <Skeleton className="h-40 w-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <div className="flex gap-2 mt-4">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  isAdminPage={true}
                  onEdit={() => handleEditProject(project)}
                  onDelete={() => handleDeleteProject(project.id)}
                />
              ))}
            </div>
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
              {[1, 2].map((i) => (
                <div key={i} className="border rounded-lg p-4">
                  <Skeleton className="h-40 w-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <div className="flex gap-2 mt-4">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">Error loading projects. Please try again.</p>
              <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
                Refresh
              </Button>
            </div>
          ) : projects && projects.filter(p => p.featured).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => p.featured).map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  isAdminPage={true}
                  onEdit={() => handleEditProject(project)}
                  onDelete={() => handleDeleteProject(project.id)}
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
      
      {/* Project Modal for Add/Edit */}
      <ProjectModal />
    </div>
  );
}