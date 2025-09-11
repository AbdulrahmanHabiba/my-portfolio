import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./lib/firebase";
import { enableNetwork, disableNetwork } from 'firebase/firestore';
import { addProject, deleteProject, getProjects, getSingleProject, updateProject } from "./lib/utils/projectsService";


export const testAdd = async () => {

  // await addProject({
  //   title : "js app" ,
  //   description : "sdsd " ,
  //   tech : ["Tailwind CSS" , "HTML5"] ,
  //   image : "wfcasc" ,
  //   link : "sdfdf" ,
  //   code : "dsfds" ,
  // })
  try {
    console.log("start test add ..... ")
    const projectId = (await getSingleProject("UVqJeoNswnJGfBjVaA7H"))
    // console.log(projectId)
    // await updateProject({})
 
    // projects.map(async (project)=> await addProject(project))

    const allProjects = await getProjects()
    console.log(allProjects)
  }
  catch (e) {
    console.error(e)
  }


}

