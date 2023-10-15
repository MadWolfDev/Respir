import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './libs/theme/Theme';
import { CssBaseline } from '@mui/material';
import { AppRouter } from './router/AppRouter';
import Sound, { ReactSoundProps } from 'react-sound';
import Music1 from './modules/user-settings/view/sons/Music_1.mp3';
import Music2 from './modules/user-settings/view/sons/Music_2.mp3';
import Music3 from './modules/user-settings/view/sons/Music_3.mp3';
import Music4 from './modules/user-settings/view/sons/Music_4.mp3';
import { useMusicStore } from './modules/user-settings/domain/musicStore';

export const App = () => {
  const musicStatus = useMusicStore((state) => state.musicStatus);
  const selectedMusic = useMusicStore((state) => state.selectedMusic);
  const volume = useMusicStore((state) => state.volume);
  const soundStatus: ReactSoundProps['playStatus'] = musicStatus;

  const selectMusicUrl = (): string => {
    switch (selectedMusic) {
      case 1:
        return Music1;
      case 2:
        return Music2;
      case 3:
        return Music3;
      default:
        return Music4;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Sound
        url={selectMusicUrl()}
        playStatus={soundStatus}
        playFromPosition={300}
        loop={true}
        autoLoad={true}
        volume={volume}
      />
      <CssBaseline />
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
};
