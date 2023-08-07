import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
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

const ButtonContainer = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column-reverse',
  alignItems: 'space-between',
});

const ModeButton = styled(Button)({
  alignSelf: 'center',
  marginBottom: '1em',
  width: '15em',
}) as typeof Button;

const FirstModeButton = styled(ModeButton)({
  marginBottom: '2.5em',
}) as typeof ModeButton;

const FirstModeButton = styled(ModeButton)`
  margin-bottom: 2.5em;
`;
