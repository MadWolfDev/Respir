import { create } from 'zustand';
import { BreathModes } from '../infra/defaultBreathConfigs';
import { persist } from 'zustand/middleware';

interface IBreathMode {
  selectedBreathMode: BreathModes;
  updateBreathMode: (newBreathMode: BreathModes) => void;
}

export const useBreathModeStore = create<IBreathMode>()(
  persist(
    (set) => ({
      selectedBreathMode: 'heartCoherence',

      updateBreathMode: (newBreathMode: BreathModes) => {
        set({ selectedBreathMode: newBreathMode });
      },
    }),
    {
      name: 'breathMode-storage',
    }
  )
);
