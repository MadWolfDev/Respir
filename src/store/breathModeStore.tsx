import { create } from 'zustand';
import { BreathModes } from './BreathModes.type';

interface IBreathMode {
  breathModeSelected: BreathModes;
  updateSelection: (newSelection: BreathModes) => void;
}

export const useBreathModeStore = create<IBreathMode>((set) => ({
  breathModeSelected: BreathModes.heartCoherence,
  updateSelection: (newSelection: BreathModes) =>
    set({ breathModeSelected: newSelection }),
}));
