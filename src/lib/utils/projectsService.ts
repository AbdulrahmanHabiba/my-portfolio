import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Project  {
    id?: string;
    title: string;
    description: string;
    tech : string[];
    image: string;
    link: string;
    code : string ;
    featured: boolean;
    inProgress?: boolean;
    order? : number
}

const projectsCollection = collection(db, "projects");


const getProjects = async (): Promise<Project[]> => {
  try {
    const querySnapshot = await getDocs(projectsCollection);

    const projects: Project[] = querySnapshot.docs.map((doc) => {
      const data = doc.data() as Omit<Project, "id">;
      return {
        id: doc.id,
        ...data,
      };
    });

   return projects.sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
    }
    return 0;
    });

  } catch (error) {
    console.error("Error getting projects:", error);
    return []; 
  }
};

const   updateProjectOrder = async (projectsWithOrder : {id :string , order: number }[])=>{
    try {
      const updatePromises =  projectsWithOrder.map((project) => {
            const currentProject = doc(projectsCollection, project.id) ;
            return updateDoc(currentProject, {order : project.order})
        })
        await Promise.all(updatePromises)
    } catch (error) {
        console.error("Error updating project order: ", error);
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
        return []  ;
    } 

}

export { getProjects, addProject ,updateProject ,deleteProject ,getSingleProject ,updateProjectOrder}
