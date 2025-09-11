import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProjects, addProject, updateProject, deleteProject } from '../services/projectService';
import { Project } from '../../types/project';
import { useProjectStore } from '../store';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Keys for React Query
const PROJECTS_QUERY_KEY = 'projects';

// Hook to fetch projects
export const useProjects = () => {
  const { setProjects, localProjects } = useProjectStore();
  
  const query = useQuery({
    queryKey: [PROJECTS_QUERY_KEY],
    queryFn: getProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Combine Firebase projects with local projects
  useEffect(() => {
    if (query.data) {
      setProjects(query.data);
    }
  }, [query.data, setProjects]);

  // Return combined projects
  const allProjects = [...(query.data || []), ...localProjects];
  
  return {
    ...query,
    data: allProjects,
    projects: allProjects, // Add this for backward compatibility
  };
};

// Hook to add a project
export const useAddProject = () => {
  const queryClient = useQueryClient();
  const { addLocalProject } = useProjectStore();
  const auth = getAuth();

  return useMutation({
    mutationFn: (project: Omit<Project, 'id' | 'createdAt'>) => {
      // Check if user is authenticated
      if (auth.currentUser) {
        return addProject(project);
      } else {
        // Create a local project with a temporary ID
        const localProject: Project = {
          ...project,
          id: 'local_' + Date.now(),
          createdAt: Date.now()
        };
        addLocalProject(localProject);
        return Promise.resolve(localProject);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROJECTS_QUERY_KEY] });
    },
  });
};

// Hook to update a project
export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  const { updateLocalProject } = useProjectStore();
  const auth = getAuth();

  return useMutation({
    mutationFn: ({ id, project }: { id: string, project: Partial<Project> }) => {
      // Check if it's a local project
      if (id.startsWith('local_')) {
        updateLocalProject(id, project);
        return Promise.resolve({ id, ...project });
      }
      
      // Check if user is authenticated
      if (auth.currentUser) {
        return updateProject(id, project);
      } else {
        return Promise.reject(new Error('يجب تسجيل الدخول لتحديث المشروع'));
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROJECTS_QUERY_KEY] });
    },
  });
};

// Hook to delete a project
export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const { removeLocalProject } = useProjectStore();
  const auth = getAuth();

  return useMutation({
    mutationFn: (id: string) => {
      // If it's a local project (starts with 'local_')
      if (id.startsWith('local_')) {
        removeLocalProject(id);
        return Promise.resolve();
      }
      
      // Check if user is authenticated for Firebase operations
      if (auth.currentUser) {
        return deleteProject(id);
      } else {
        return Promise.reject(new Error('يجب تسجيل الدخول لحذف المشروع'));
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROJECTS_QUERY_KEY] });
    },
  });
};