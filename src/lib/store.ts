import { create } from 'zustand';
import { Project } from './utils/projectsService';

interface ProjectState {
  project: Project | null;
  isModalOpen: boolean;
  setProject: (project: Project | null) => void;
  openModal: () => void;
  closeModal: () => void;
}

export const useStore = create<ProjectState>((set) => ({
  project: null,
  isModalOpen: false,
  setProject: (project) => set({ project }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));