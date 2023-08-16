import styled from '@emotion/styled';
import { Slider, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const CustomSlider = ({
  sliderInitialValue,
  onValueSelected,
  durationUnit,
  title,
}: {
  sliderInitialValue: number;
  onValueSelected: (value: number) => void;
  durationUnit: 'SEC' | 'MIN';
  title: string;
}) => {
  const [sliderValue, setSliderValue] = useState<number>(sliderInitialValue);

  const displayValue = (value: number): string => {
    if (durationUnit === 'SEC') return `${value} sec`;
    if (durationUnit === 'MIN') return `${value} min`;
    return value.toString();
  };

  const calculateValue = (value: number, reverse: boolean = false): number => {
    value > 10 &&
      (!reverse
        ? (value = 10 + (value - 10) * 5)
        : (value = 10 + (value - 10) / 5));
    return value;
  };

  const handleChange = (event: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      setSliderValue(calculateValue(value));
    }
  };

  const handleChangeCommited = (
    event: React.SyntheticEvent | Event,
    value: number | number[]
  ) => {
    if (typeof value === 'number') {
      onValueSelected(calculateValue(value));
    }
  };

  return (
    <SliderContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25 } }}
      exit={{ opacity: 0 }}
    >
      <Title variant="h2">{title}</Title>
      <Content>
        <StyledSlider
          defaultValue={calculateValue(sliderValue, true)}
          max={14}
          onChange={handleChange}
          onChangeCommitted={handleChangeCommited}
        />
        <Typography variant="h2">{displayValue(sliderValue)}</Typography>
      </Content>
    </SliderContainer>
  );
};

const Content = styled.div({
  alignSelf: 'center',
  display: 'flex',
  gap: '1.5em',
});

const StyledSlider = styled(Slider)({
  alignSelf: 'center',
  width: '18em',
}) as typeof Slider;

const Title = styled(Typography)({
  marginBottom: '0.5em',
  alignSelf: 'center',
}) as typeof Typography;

const SliderContainer = styled(motion.div)({
  alignSelf: 'center',
  display: 'flex',
  marginTop: '2em',
  flexDirection: 'column',
});
