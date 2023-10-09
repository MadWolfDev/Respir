// @todo est-ce que tu peux regarder si tu ne peux pas plutôt faire ça via le theme ?

const REF_SCREEN_HEIGHT: number = 566;
const REF_SLIDERS_CONTAINER_MARGIN_BOTTOM: number = 20;
const REF_SLIDER_MARGIN_BOTTOM: number = 7;
const screenHeight: number = window.innerHeight;
const screenWidth: number = window.innerWidth;

export const createMarginBottomSlidersContainerValue = (): number => {
  return (
    (screenHeight - REF_SCREEN_HEIGHT) / 2.5 +
    REF_SLIDERS_CONTAINER_MARGIN_BOTTOM
  );
};

export const createMarginBottomSlidersValue = (): number => {
  return (
    (screenHeight + createMarginBottomSlidersContainerValue()) /
    ((REF_SCREEN_HEIGHT + REF_SLIDERS_CONTAINER_MARGIN_BOTTOM) /
      REF_SLIDER_MARGIN_BOTTOM)
  );
};

export const createButtonWidth = ({
  targetWidth,
  buttonSize = 'big',
}: {
  targetWidth: number;
  buttonSize?: 'small' | 'big';
}): number => {
  return screenWidth > 500 ? (buttonSize === 'big' ? 20 : 15) : targetWidth;
};
