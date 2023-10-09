import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../CustomButton';
import { MusicSelection } from './MusicSelection';
import styled from '@emotion/styled';
import { RoutePath } from '../../../router/RoutePath.type';
import { MusicVolume } from './MusicVolume';

export const SettingsScreen = () => {
  const navigate = useNavigate();
  const handleReturnButtonClick = () => navigate(RoutePath.welcomeScreen);

  return (
    <Container>
      <MusicSelection />
      <MusicVolume />
      <CustomButton
        buttonMarginBottom={1}
        buttonText="Retour"
        handleClick={handleReturnButtonClick}
      />
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
});
