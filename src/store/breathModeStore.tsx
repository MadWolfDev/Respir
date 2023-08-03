import { create } from 'zustand';
import { BreathModes } from './BreathModes.type';

interface IBreathMode {
  breathModeSelected: {
    breathMode: BreathModes;
    sessionLength: number;
    breathInDuration: number;
    breathOutDuration: number;
    blockInDuration: number;
    blockOutDuration: number;
  };
  updateDefaultBreathMode: (newBreathMode: BreathModes) => void;
  updateCustomBreathMode: (
    newSessionLength: number,
    newBreathInDuration: number,
    newBreathOutDuration: number,
    newBlockInDuration: number,
    newBlockOutDuration: number
  ) => void;
}

export const createCustomBreathModeObject = (
  newBreathMode: BreathModes,
  newSessionLength: number,
  newBreathInDuration: number,
  newBreathOutDuration: number,
  newBlockInDuration: number,
  newBlockOutDuration: number
) => {
  return {
    breathMode: newBreathMode,
    sessionLength: newSessionLength,
    breathInDuration: newBreathInDuration,
    breathOutDuration: newBreathOutDuration,
    blockInDuration: newBlockInDuration,
    blockOutDuration: newBlockOutDuration,
  };
};

export const createDefaultBreathModeObject = (newBreathMode: BreathModes) => {
  switch (newBreathMode) {
    case BreathModes.heartCoherence:
      return createCustomBreathModeObject(newBreathMode, 5, 5, 5, 0, 0);
    case BreathModes.vitality:
      return createCustomBreathModeObject(newBreathMode, 5, 6, 4, 0, 0);
    case BreathModes.relaxation:
      return createCustomBreathModeObject(newBreathMode, 5, 4, 6, 0, 0);
    case BreathModes.square:
      return createCustomBreathModeObject(newBreathMode, 5, 5, 5, 5, 5);
    default:
      return createCustomBreathModeObject(newBreathMode, 5, 5, 5, 0, 0);
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
    const newBreathModeObject: {
      breathMode: BreathModes;
      sessionLength: number;
      breathInDuration: number;
      breathOutDuration: number;
      blockInDuration: number;
      blockOutDuration: number;
    } = createDefaultBreathModeObject(newBreathMode);
    set({ breathModeSelected: newBreathModeObject });
  },

  updateCustomBreathMode: (
    newSessionLength: number,
    newBreathInDuration: number,
    newBreathOutDuration: number,
    newBlockInDuration: number,
    newBlockOutDuration: number
  ) => {
    const newBreathModeObject: {
      breathMode: BreathModes;
      sessionLength: number;
      breathInDuration: number;
      breathOutDuration: number;
      blockInDuration: number;
      blockOutDuration: number;
    } = createCustomBreathModeObject(
      BreathModes.custom,
      newSessionLength,
      newBreathInDuration,
      newBreathOutDuration,
      newBlockInDuration,
      newBlockOutDuration
    );
    set({ breathModeSelected: newBreathModeObject });
  },
}));
