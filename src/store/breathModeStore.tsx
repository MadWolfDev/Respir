import { create } from 'zustand';
import { BreathModes } from './BreathModes.type';

type BreathScheme = {
  sessionLength: number;
  breathInDuration: number;
  breathOutDuration: number;
  blockInDuration: number;
  blockOutDuration: number;
};
type BreathModeStore = BreathScheme & { breathMode: BreathModes };

interface IBreathMode {
  breathModeSelected: BreathModeStore;
  updateDefaultBreathMode: (newBreathMode: BreathModes) => void;
  updateCustomBreathMode: (customValues: BreathScheme) => void;
}

export const createDefaultBreathModeObject = (newBreathMode: BreathModes) => {
  switch (newBreathMode) {
    case BreathModes.heartCoherence:
      return {
        breathMode: newBreathMode,
        sessionLength: 5,
        breathInDuration: 5,
        breathOutDuration: 5,
        blockInDuration: 0,
        blockOutDuration: 0,
      };
    case BreathModes.vitality:
      return {
        breathMode: newBreathMode,
        sessionLength: 5,
        breathInDuration: 6,
        breathOutDuration: 4,
        blockInDuration: 0,
        blockOutDuration: 0,
      };
    case BreathModes.relaxation:
      return {
        breathMode: newBreathMode,
        sessionLength: 5,
        breathInDuration: 4,
        breathOutDuration: 6,
        blockInDuration: 0,
        blockOutDuration: 0,
      };
    case BreathModes.square:
      return {
        breathMode: newBreathMode,
        sessionLength: 5,
        breathInDuration: 5,
        breathOutDuration: 5,
        blockInDuration: 5,
        blockOutDuration: 5,
      };
    default:
      return {
        breathMode: newBreathMode,
        sessionLength: 5,
        breathInDuration: 5,
        breathOutDuration: 5,
        blockInDuration: 0,
        blockOutDuration: 0,
      };
  }
};

export const useBreathModeStore = create<IBreathMode>()((set) => ({
  breathModeSelected: {
    breathMode: BreathModes.heartCoherence,
    sessionLength: 5,
    breathInDuration: 5,
    breathOutDuration: 5,
    blockInDuration: 0,
    blockOutDuration: 0,
  },

  updateDefaultBreathMode: (newBreathMode: BreathModes) => {
    const newBreathModeObject = createDefaultBreathModeObject(newBreathMode);
    set({ breathModeSelected: newBreathModeObject });
  },

  updateCustomBreathMode: (customValues: BreathScheme) => {
    const newBreathModeObject = {
      ...customValues,
      breathMode: BreathModes.custom,
    };
    set({ breathModeSelected: newBreathModeObject });
  },
}));
