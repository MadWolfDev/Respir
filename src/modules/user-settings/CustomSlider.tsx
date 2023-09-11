import styled from '@emotion/styled';
import { Slider, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimVariant } from '../breath-activity/createBreathAnimationVariants';
import { ExitAnim } from './createUIAnimation';

export const CustomSlider = ({
  sliderInitialValue,
  onValueSelected,
  durationUnit,
  title,
  hasMinimumValue,
  disabled,
  animVariant,
  exitAnim,
}: {
  sliderInitialValue: number;
  onValueSelected: (value: number) => void;
  durationUnit: 'SEC' | 'MIN';
  title: string;
  hasMinimumValue: boolean;
  disabled: boolean;
  animVariant?: AnimVariant;
  exitAnim?: ExitAnim;
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
      initial="initial"
      animate="animate"
      variants={animVariant}
      exit={exitAnim}
    >
      <Title variant="h2">{title}</Title>
      <Content>
        <StyledSlider
          defaultValue={calculateValue(sliderInitialValue, true)}
          min={hasMinimumValue ? 1 : 0}
          max={14}
          onChange={handleChange}
          onChangeCommitted={handleChangeCommited}
          disabled={disabled}
          key={`slider-${sliderInitialValue}`}
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
