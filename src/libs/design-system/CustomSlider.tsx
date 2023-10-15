import styled from '@emotion/styled';
import { Slider, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  AnimVariant,
  ExitAnim,
} from '../../modules/breath-activity/domain/createBreathAnimationVariants';
import { Spacer } from './Spacer';
import { createSliderWidth } from './createValuesWithScreenSize';

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

  const handleChange = (_: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      setSliderValue(calculateValue(value));
    }
  };

  const handleChangeCommited = (
    _: React.SyntheticEvent | Event,
    value: number | number[]
  ) => {
    if (typeof value === 'number') {
      onValueSelected(calculateValue(value));
    }
  };

  return (
    <>
      <Spacer direction="VERTICAL" spacingFactor={0.25} />
      <SliderContainer
        initial="initial"
        animate="animate"
        variants={animVariant}
        exit={exitAnim}
      >
        <Title variant="h3">{title}</Title>
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
          <Spacer direction="HORIZONTAL" spacingFactor={1} />
          <Typography variant="h3">{displayValue(sliderValue)}</Typography>
        </Content>
      </SliderContainer>
    </>
  );
};

const Content = styled.div({
  alignSelf: 'center',
  display: 'flex',
});

const StyledSlider = styled(Slider)({
  alignSelf: 'center',
  width: `${createSliderWidth({ targetWidth: 65, sliderSize: 'big' })}vw`,
});

const Title = styled(Typography)({
  alignSelf: 'center',
});

const SliderContainer = styled(motion.div)({
  alignSelf: 'center',
  display: 'flex',
  flexDirection: 'column',
});
