import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
    getProjects,
    addProject,
    updateProject,
    deleteProject ,
    type Project,
    updateProjectOrder
} from '@/lib/utils/projectsService'
const useProjects = () => {
    return useQuery<Project[] , Error>({
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
        mutationFn: ({ id, project }: { id: string; project: Partial<Project> }) =>
            updateProject(id , project)
        ,onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
        }
    })
}
const useUpdateProjectsOrder = () =>{
    const queryClient = useQueryClient() ;
    return useMutation({
        mutationFn: (projectsWithOrder : {id :string , order: number }[])=> updateProjectOrder(projectsWithOrder),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
        }
    })
}
const useDeleteProject = () =>{
    const queryClient = useQueryClient() ;
    return useMutation({
        mutationFn: (id: string) => deleteProject(id)
        ,onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
        }
    })
}

export {useProjects , useAddProject ,useUpdateProject ,useDeleteProject ,useUpdateProjectsOrder}
