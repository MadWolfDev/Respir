import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useBreathModeStore } from '../../store/breathModeStore';
import { BreathModes } from '../../store/BreathModes.type';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';

export const DefaultBreathModesScreen = (props: {
  setShowBreathModes: Dispatch<SetStateAction<boolean>>;
}) => {
  const updateBreathModeSelection = useBreathModeStore(
    (state) => state.updateDefaultBreathMode
  );
  const changeDefaultBreathMode = (newBreathMode: BreathModes) => {
    updateBreathModeSelection(newBreathMode);
    props.setShowBreathModes(false);
  };

  return (
    <ButtonContainer data-testid="mode-buttons">
      <FirstModeButton
        variant="contained"
        onClick={() => changeDefaultBreathMode(BreathModes.heartCoherence)}
      >
        {BreathModes.heartCoherence}
      </FirstModeButton>
      <ModeButton
        variant="contained"
        onClick={() => changeDefaultBreathMode(BreathModes.vitality)}
      >
        {BreathModes.vitality}
      </ModeButton>
      <ModeButton
        variant="contained"
        onClick={() => changeDefaultBreathMode(BreathModes.relaxation)}
      >
        {BreathModes.relaxation}
      </ModeButton>
      <ModeButton
        variant="contained"
        onClick={() => changeDefaultBreathMode(BreathModes.square)}
      >
        {BreathModes.square}
      </ModeButton>
      <ModeButton
        variant="contained"
        onClick={() => changeDefaultBreathMode(BreathModes.custom)}
      >
        {BreathModes.custom}
      </ModeButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: space-between;
`;
const ModeButton = styled(Button)`
  align-self: center;
  margin-bottom: 1em;
  width: 15em;
`;

const FirstModeButton = styled(ModeButton)`
  margin-bottom: 2.5em;
`;
