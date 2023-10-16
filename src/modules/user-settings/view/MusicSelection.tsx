import { Typography } from '@mui/material';
import { TextButton } from './TextButton';
import { SelectedMusicType, useMusicStore } from '../domain/musicStore';
import { Spacer } from '../../../libs/design-system/Spacer';
import { HorizontalContainer } from '../../../libs/design-system/HorizontalContainer';

export const MusicSelection = () => {
  const selectedMusic = useMusicStore((state) => state.selectedMusic);
  const updateSelectedMusic = useMusicStore(
    (state) => state.updateSelectedMusic
  );
  const handleMusicButtonClick = (newSelectedMusic: SelectedMusicType) => {
    updateSelectedMusic(newSelectedMusic);
  };

  return (
    <>
      <HorizontalContainer>
        <Spacer direction="HORIZONTAL" spacingFactor={1} />
        <Typography variant="h2">Musique</Typography>
      </HorizontalContainer>

      <TextButton
        buttonText="Relaxation zen détente absolue"
        isEnable={selectedMusic === 1}
        handleClick={() => handleMusicButtonClick(1)}
      />
      <TextButton
        buttonText="Ouverture totale des chakras"
        isEnable={selectedMusic === 2}
        handleClick={() => handleMusicButtonClick(2)}
      />
      <TextButton
        buttonText="Balade dans la forêt enchantée"
        isEnable={selectedMusic === 3}
        handleClick={() => handleMusicButtonClick(3)}
      />
      <TextButton
        buttonText="Erreur de casting"
        isEnable={selectedMusic === 4}
        handleClick={() => handleMusicButtonClick(4)}
      />
    </>
  );
};
