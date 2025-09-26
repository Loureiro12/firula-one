import { create } from 'zustand';
import { BottomDrawerAction } from '../components/organisms/BottomDrawer/types';

interface BottomDrawerState {
  isVisible: boolean;
  title: string;
  description: string;
  actions: BottomDrawerAction[];
}

interface BottomDrawerStore extends BottomDrawerState {
  showBottomDrawer: (config: {
    title: string;
    description: string;
    actions?: BottomDrawerAction[];
  }) => void;
  hideBottomDrawer: () => void;
}

export const useBottomDrawerStore = create<BottomDrawerStore>((set) => ({
  // Estado inicial
  isVisible: false,
  title: '',
  description: '',
  actions: [],
  
  // Ações
  showBottomDrawer: (config) => {
    set({
      isVisible: true,
      title: config.title,
      description: config.description,
      actions: config.actions || [],
    });
  },
  
  hideBottomDrawer: () => {
    set({
      isVisible: false,
      title: '',
      description: '',
      actions: [],
    });
  },
}));