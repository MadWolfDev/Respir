const screenWidth: number = window.innerWidth;

export const createButtonWidth = ({
  targetWidth,
  buttonSize = 'big',
}: {
  targetWidth: number;
  buttonSize?: 'small' | 'big';
}): number => {
  return screenWidth > 500 ? (buttonSize === 'big' ? 20 : 15) : targetWidth;
};

export const createSliderWidth = ({
  targetWidth,
  sliderSize = 'big',
}: {
  targetWidth: number;
  sliderSize?: 'small' | 'big';
}): number => {
  return screenWidth > 500 ? (sliderSize === 'big' ? 30 : 20) : targetWidth;
};

export const createContainerWidth = ({
  targetWidth,
}: {
  targetWidth: number;
}) => {
  return screenWidth > 500 ? 30 : targetWidth;
};
