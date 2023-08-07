import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../router/RoutePath.type';
import { Screen } from '../../theme/components/Screen';
import { useBreathModeStore } from '../../store/breathModeStore';
import { useState } from 'react';
import { DefaultBreathModesScreen } from './DefaultBreathModesScreen';

export const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [showBreathModes, setShowBreathModes] = useState<boolean>(false);
  const handleClickBreathModes = () => {
    setShowBreathModes(!showBreathModes);
  };
  const breathModeSelected = useBreathModeStore(
    (state) => state.breathModeSelected
  );

  return (
    <Screen>
      <Outlet />
        {showBreathModes && (
          <DefaultBreathModesScreen setShowBreathModes={setShowBreathModes} />
        )}
      <ButtonContainer>
        <ModesButton
          variant="contained"
          onClick={handleClickBreathModes}
          data-testid="modes-button"
        >
          {breathModeSelected.breathMode}
        </ModesButton>
        <StartButton
          variant="contained"
          onClick={clickStart}
          data-testid="start-button"
        >
          Start
        </StartButton>
      </ButtonContainer>
    </Screen>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const ModesButton = styled(Button)`
  margin-bottom: 1em;
  align-self: center;
  width: 15em;
`;

const StartButton = styled(ModesButton)`
  margin-bottom: 1.5em;
  width: 10em;
`;
