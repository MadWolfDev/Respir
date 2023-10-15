import styled from '@emotion/styled';
import { Slider, Typography } from '@mui/material';
import { useMusicStore } from '../domain/musicStore';
import { Spacer } from '../../../libs/design-system/Spacer';
import { useState } from 'react';
import { HorizontalContainer } from '../../../libs/design-system/HorizontalContainer';
import { createSliderWidth } from '../../../libs/design-system/createValuesWithScreenSize';

export const MusicVolume = () => {
  const volume = useMusicStore((state) => state.volume);
  const updateVolume = useMusicStore((state) => state.updateVolume);
  const [sliderValue, setSliderValue] = useState<number>(volume);

  const handleChangeCommited = (
    _: React.SyntheticEvent | Event,
    value: number | number[]
  ) => {
    if (typeof value === 'number') {
      updateVolume(value);
    }
  };

  const handleChange = (_: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      setSliderValue(value);
    }
  };

  return (
    <>
      <HorizontalContainer>
        <Spacer direction="HORIZONTAL" spacingFactor={1} />
        <Typography variant="h2">Volume</Typography>
      </HorizontalContainer>
      <HorizontalContainer>
        <Spacer direction="HORIZONTAL" spacingFactor={4} />
        <StyledSlider
          defaultValue={volume}
          min={0}
          max={100}
          onChange={handleChange}
          onChangeCommitted={handleChangeCommited}
          key={`slider-${volume}`}
        />
        <Spacer direction="HORIZONTAL" spacingFactor={1} />
        <Typography variant="h3">{sliderValue}</Typography>
      </HorizontalContainer>
    </>
  );
};

const StyledSlider = styled(Slider)({
  width: `${createSliderWidth({ targetWidth: 60, sliderSize: 'small' })}vw`,
});
