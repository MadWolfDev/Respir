import { create } from 'zustand';

interface IMusic {
  selectedMusic: 1 | 2 | 3 | 4;
  musicStatus: 'PLAYING' | 'STOPPED';
  updateSelectedMusic: (newSelectedMusic: 1 | 2 | 3 | 4) => void;
  updateMusicStatus: (newStatus: 'PLAYING' | 'STOPPED') => void;
}

export const useMusicStore = create<IMusic>()((set) => ({
  selectedMusic: 1,
  musicStatus: 'STOPPED',

  updateSelectedMusic: (newSelectedMusic: 1 | 2 | 3 | 4) => {
    set({ selectedMusic: newSelectedMusic });
  },

  updateMusicStatus: (newStatus: 'PLAYING' | 'STOPPED') => {
    set({ musicStatus: newStatus });
  },
}));
