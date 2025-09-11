src\lib\utils\projectsService.ts

const projectsCollection = collection(db, "projects");

const getProjects = async () =>{
    try {
        console.log("start getProducts ... ")
        const querySnapshot = await getDocs(projectsCollection)
        console.log(querySnapshot)
        const projects = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        return projects 
    } catch (error) {
        console.error("Error getting projects:", error);    
    }    
}

const getSingleProject = async ( id:string ) =>{
    try {
        const currentProject = doc(projectsCollection, id) ;
        return (await getDoc(currentProject)).data() ;
    }
    catch (error) {
        console.error("Error fetching project:", error);
        return null 
    }
 
}

const addProject = async (project: Project)=>{
    try {
        await addDoc(projectsCollection, project)
        console.log("Project has added " ,project)
    } catch (error) {
        console.error("Error adding project:", error);
    }
}

const updateProject = async (id :string  ,project : Partial<Project>)=>{
    try {
        const currentProject = doc(projectsCollection, id) ;
        await updateDoc(currentProject, project)
    } catch (error) {
        console.error("Error updating project: ", error);
    }
}

const deleteProject = async (id: string) => {
    try {
        const currentProject =  doc(projectsCollection ,id) ;
        await deleteDoc(currentProject)
    } catch (error) {
        console.error("Error deleting project: ", error);
    } 

}

export { getProjects, addProject ,updateProject ,deleteProject ,getSingleProject}

src\lib\hooks\useProjects.ts
const useProjects = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: getProjects,
    })
}

const useAddProject = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: addProject,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
        }
    })
}

const useUpdateProject = () =>{
    const queryClient = useQueryClient() ;
    return useMutation({
        mutationFn: updateProject,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
        }
    })
}

export {useProjects , useAddProject }

src\lib\queryClient.ts
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60 * 24,    // 24 hours - how long data stays fresh
            gcTime: 1000 * 60 * 60 * 48,       // 48 hours - how long to keep in memory
            retry: 2,
            refetchOnWindowFocus: false,
        },
    }
})


src\sections\Portfolio\Portfolio.tsx

import Title from "@/components/ui/Title";
import ProjectCard from "./components/ProjectCard";
import SectionMotion from "@/components/ui/SectionMotion";

const projects = [
  {
    title: "YC Directory",
    description:
      "Next.js 15 startup pitch directory with GitHub auth, Sanity CMS & clean UI.",
    image:
      "https://res.cloudinary.com/dnvlh7gm3/image/upload/v1752553420/YC-Directory.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
  .....
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="section-gap bg-background relative scroll-mt-24"
    >
      <SectionMotion>
        <div className="mb-10">
          <Title as="h2" underline>
            Portfolio
          </Title>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 xl:gap-14 place-items-center mb-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </SectionMotion>
    </section>
  );
};

export default Portfolio;


src\sections\Portfolio\components\ProjectCard.tsx
const ProjectCard = ({
  title,
  description,
  image,
  tech,
  link,
  code,
}: ProjectCardProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="group relative flex flex-col bg-card border border-[color:var(--secondary)] rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_0_var(--neon-pink)] hover:border-[color:var(--neon-pink)]">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 md:h-40 lg:h-44 w-full">
        {!imgLoaded && <Skeleton className="absolute inset-0 w-full h-full " />}
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgLoaded(true)}
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>
      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <h3 className="text-white text-lg font-semibold mb-2 flex items-center gap-2">
          {title}
        </h3>
        <p className="text-new-gray text-sm mb-2 line-clamp-2 min-h-[2.5em]">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 mt-auto min-h-[3em]">
          {tech.map((t) => {
            const Icon = techIcons[t] || null;
            return (
              <span
                key={t}
                className="flex items-center gap-1 text-xs px-2 py-0.5 max-h-[2em] rounded-full bg-primary/30 border border-[color:var(--secondary)] text-gray-200 font-medium shadow-sm backdrop-blur-sm"
              >
                {Icon && <Icon className="text-base opacity-80" />} {t}
              </span>
            );
          })}
        </div>
        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <AppButton
              variant="primary"
              size="sm"
              className="w-full flex items-center justify-center gap-2"
            >
              Live <RiLinksFill size={18} />
            </AppButton>
          </a>
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <AppButton
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center gap-2"
              >
                Code <FaGithub size={18} />
              </AppButton>
            </a>
          )}
        </div>
      </div>
      {/* Border Glow Effect */}
    </div>
  );
};

export default ProjectCard;

pages\Admin.tsx
export default function Admin() {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    githubUrl: "",
    liveUrl: "",
    featured: false
  })

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      image: "",
      tags: "",
      githubUrl: "",
      liveUrl: "",
      featured: false
    })
    setEditingProject(null)
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      tags: project.tags.join(", "),
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
      featured: project.featured
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setProjects(projects.filter(p => p.id !== id))
          toast.success("Project has been removed successfully.");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const projectData = {
      ...formData,
      tags: formData.tags.split(",").map(tag => tag.trim()).filter(Boolean),
      id: editingProject?.id || Date.now().toString()
    }

    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? projectData as Project : p))
  
            toast.success("Project has been updated successfully.");

    } else {
      setProjects([...projects, projectData as Project])
      toast.success("New Project has been added successfully.");
    }

    setIsDialogOpen(false)
    resetForm()
  }

  return (
    <div className="min-h-screen bg-background mt-14">
      <Test />
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your portfolio projects</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm} className="bg-primary hover:bg-primary/90">
                <FiPlus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-card border">
              <DialogHeader>
                <DialogTitle>{editingProject ? "Edit Project" : "Add New Project"}</DialogTitle>
                <DialogDescription>
                  {editingProject ? "Update project details" : "Fill in the project information"}
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                    className="bg-background border-input"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                    className="bg-background border-input"
                  />
                </div>
                
                <div>
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="/placeholder.svg"
                    className="bg-background border-input"
                  />
                </div>
                
                <div>
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    placeholder="React, TypeScript, Node.js"
                    className="bg-background border-input"
                  />
                </div>
                
                <div>
                  <Label htmlFor="github">GitHub URL</Label>
                  <Input
                    id="github"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
                    className="bg-background border-input"
                  />
                </div>
                
                <div>
                  <Label htmlFor="live">Live URL</Label>
                  <Input
                    id="live"
                    value={formData.liveUrl}
                    onChange={(e) => setFormData({...formData, liveUrl: e.target.value})}
                    className="bg-background border-input"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                    className="rounded border-input"
                  />
                  <Label htmlFor="featured">Featured Project</Label>
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingProject ? "Update" : "Add"} Project
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-200 bg-card border-border">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-card-foreground">
                      {project.title}
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="mt-1 text-sm text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-md overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="h-8 w-8 p-0 transition-all duration-200 hover:scale-110 active:scale-95"
                      title="View on GitHub"
                    >
                      <FiExternalLink className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="h-8 w-8 p-0 transition-all duration-200 hover:scale-110 active:scale-95"
                      title="View Live Demo"
                    >
                      <FiExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="flex space-x-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(project)}
                      className="h-8 w-8 p-0 hover:bg-accent transition-all duration-200 hover:scale-110 active:scale-95"
                      title="Edit Project"
                    >
                      <FiEdit className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(project.id)}
                      className="h-8 w-8 p-0 hover:bg-destructive hover:text-destructive-foreground transition-all duration-200 hover:scale-110 active:scale-95"
                      title="Delete Project"
                    >
                      <FiTrash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}