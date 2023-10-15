import { create } from 'zustand';
import { BreathModes } from '../infra/defaultBreathConfigs';

interface IBreathMode {
  selectedBreathMode: BreathModes;
  updateBreathMode: (newBreathMode: BreathModes) => void;
}

export const useBreathModeStore = create<IBreathMode>()((set) => ({
  selectedBreathMode: 'heartCoherence',

  updateBreathMode: (newBreathMode: BreathModes) => {
    set({ selectedBreathMode: newBreathMode });
  },
}));
