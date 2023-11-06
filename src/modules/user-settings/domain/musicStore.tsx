import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SelectedMusicType = 1 | 2 | 3 | 4;
type IMusic = {
  selectedMusic: SelectedMusicType;
  musicStatus: 'PLAYING' | 'STOPPED';
  volume: number;
  soundEffectIsEnabled: boolean;
  updateSelectedMusic: (newSelectedMusic: SelectedMusicType) => void;
  updateMusicStatus: (newStatus: 'PLAYING' | 'STOPPED') => void;
  updateVolume: (newVolume: number) => void;
  updateSoundEffectEnableState: (isEnabled: boolean) => void;
};

export const useMusicStore = create<IMusic>()(
  persist(
    (set) => ({
      selectedMusic: 1,
      musicStatus: 'STOPPED',
      volume: 50,
      soundEffectIsEnabled: true,

      updateSelectedMusic: (newSelectedMusic: SelectedMusicType) => {
        set({ selectedMusic: newSelectedMusic });
      },

      updateMusicStatus: (newStatus: 'PLAYING' | 'STOPPED') => {
        set({ musicStatus: newStatus });
      },

      updateVolume: (newVolume: number) => {
        set({ volume: newVolume });
      },

      updateSoundEffectEnableState(isEnabled: boolean) {
        set({ soundEffectIsEnabled: isEnabled });
      },
    }),
    {
      name: 'music-storage',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !['musicStatus'].includes(key)
          )
        ),
    }
  )
);
