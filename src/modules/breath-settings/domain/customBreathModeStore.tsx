import { create } from 'zustand';

export type BreathConfig = {
  sessionLength: number;
  breathInDuration: number;
  breathOutDuration: number;
  blockInDuration: number;
  blockOutDuration: number;
};
export type breathStages = keyof BreathConfig;

interface ICustomMode {
  breathConfig: BreathConfig;
  updateBreathConfig: (newBreathStageConfig: {
    breathStage: breathStages;
    value: number;
  }) => void;
}

export const useCustomBreathModeStore = create<ICustomMode>()((set, get) => ({
  breathConfig: {
    sessionLength: 5,
    breathInDuration: 5,
    breathOutDuration: 5,
    blockInDuration: 0,
    blockOutDuration: 0,
  },

  updateBreathConfig: (newBreathStageConfig: {
    breathStage: breathStages;
    value: number;
  }) => {
    const currentBreathConfig = get().breathConfig;

    set({
      breathConfig: {
        ...currentBreathConfig,
        [newBreathStageConfig.breathStage]: newBreathStageConfig.value,
      },
    });
  },
}));
