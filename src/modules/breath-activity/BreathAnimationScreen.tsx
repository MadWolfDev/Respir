import styled from '@emotion/styled';
import { BreathAnimationManager } from './BreathAnimationManager';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../router/RoutePath.type';
import { Screen } from '../../theme/components/Screen';

export const BreathAnimationScreen = () => {
  const navigate = useNavigate();
  const click = () => navigate(RoutePath.welcomeScreen);

  return (
    <Screen>
      <AnimContent>
        <BreathAnimationManager />
      </AnimContent>
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
