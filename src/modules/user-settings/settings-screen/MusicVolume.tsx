import styled from '@emotion/styled';
import { Slider, Typography } from '@mui/material';
import { CustomSlider } from '../CustomSlider';

export const MusicVolume = () => {
  return (
    <Content>
      <Title variant="h2">Volume</Title>
      <StyledSlider defaultValue={5} min={0} max={10} />
    </Content>
  );
};

const Content = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'space-between',
});

const Title = styled(Typography)({
  marginLeft: '10vw',
  marginTop: '5vh',
  marginBottom: '4vh',
});

const StyledSlider = styled(Slider)({
  alignSelf: 'center',
  width: '65vw',
}) as typeof Slider;
