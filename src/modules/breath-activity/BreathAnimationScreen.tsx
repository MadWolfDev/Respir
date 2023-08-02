import styled from '@emotion/styled';
import { BreathAnimation } from './BreathAnimation';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../router/RoutePath.type';
import { Screen } from '../../theme/components/Screen';
import { useBreathModeStore } from '../../store/breathModeStore';
import { BreathModes } from '../../store/BreathModes.type';

export const BreathAnimationScreen = () => {
  const navigate = useNavigate();
  const click = () => navigate(RoutePath.welcomeScreen);
  const breathModeSelected = useBreathModeStore(
    (state) => state.breathModeSelected
  );

  return (
    <Screen>
      {breathModeSelected === BreathModes.heartCoherence && (
        <AnimContent>
          <BreathAnimation />
        </AnimContent>
      )}
      <ReturnButton variant="contained" onClick={click}>
        Retour
      </ReturnButton>
    </Screen>
  );
};

const AnimContent = styled.div`
  text-align: center;
  display: flex;
  flex: 1;
`;

const ReturnButton = styled(Button)`
  margin-bottom: 1.5em;
  align-self: center;
  width: 10em;
`;
