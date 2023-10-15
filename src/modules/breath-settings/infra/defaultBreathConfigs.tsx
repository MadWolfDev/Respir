export const defaultBreathConfigs = {
  heartCoherence: {
    sessionLength: 5,
    breathInDuration: 5,
    blockInDuration: 0,
    breathOutDuration: 5,
    blockOutDuration: 0,
  },
  vitality: {
    sessionLength: 5,
    breathInDuration: 6,
    breathOutDuration: 4,
    blockInDuration: 0,
    blockOutDuration: 0,
  },
  relaxation: {
    sessionLength: 5,
    breathInDuration: 4,
    breathOutDuration: 6,
    blockInDuration: 0,
    blockOutDuration: 0,
  },
  square: {
    sessionLength: 5,
    breathInDuration: 5,
    breathOutDuration: 5,
    blockInDuration: 5,
    blockOutDuration: 5,
  },
  custom: {
    sessionLength: 5,
    breathInDuration: 5,
    blockInDuration: 0,
    breathOutDuration: 5,
    blockOutDuration: 0,
  },
} as const;

export type BreathModes = keyof typeof defaultBreathConfigs;
