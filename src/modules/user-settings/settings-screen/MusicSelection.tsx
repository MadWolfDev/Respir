import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { MusicButton } from './MusicButton';
import { useMusicStore } from '../../../store/musicStore';
import { CustomButton } from '../CustomButton';

export const MusicSelection = () => {
  const selectedMusic = useMusicStore((state) => state.selectedMusic);
  const updateSelectedMusic = useMusicStore(
    (state) => state.updateSelectedMusic
  );
  const handleMusicButtonClick = (newSelectedMusic: 1 | 2 | 3 | 4) => {
    updateSelectedMusic(newSelectedMusic);
  };

  return (
    <div>
      <Title variant="h2">Musique</Title>
      <MusicButton
        buttonText="Relaxation Zen Détente Absolue"
        isEnable={selectedMusic === 1}
        handleClick={() => handleMusicButtonClick(1)}
      />
      <MusicButton
        buttonText="Ouverture Totale Des Chakras"
        isEnable={selectedMusic === 2}
        handleClick={() => handleMusicButtonClick(2)}
      />
      <MusicButton
        buttonText="Balade Dans La Forêt Enchantée"
        isEnable={selectedMusic === 3}
        handleClick={() => handleMusicButtonClick(3)}
      />
      <MusicButton
        buttonText="Erreur De Casting"
        isEnable={selectedMusic === 4}
        handleClick={() => handleMusicButtonClick(4)}
      />
    </div>
  );
};

const Title = styled(Typography)({
  marginLeft: '10vw',
  marginTop: '5vh',
  marginBottom: '4vh',
});
