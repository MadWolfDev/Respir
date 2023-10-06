import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { createButtonWidth } from './createValuesWithScreenSize';

export const MusicChoice = () => {
  return (
    <>
      <Title variant="h2">Musique</Title>
      <StyledButton color="custom" disableRipple>
        Musique 1
      </StyledButton>
      <StyledButton color="custom" disableRipple>
        Musique 2
      </StyledButton>
      <StyledButton color="custom" disableRipple>
        Musique 2
      </StyledButton>
    </>
  );
};

const Title = styled(Typography)({
  marginLeft: '10vw',
  marginTop: '3vh',
  marginBottom: '1vh',
});

const StyledButton = styled(Button)({
  width: `${createButtonWidth({ targetWidth: 100 })}vw`,
});
