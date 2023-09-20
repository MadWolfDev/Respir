const REF_SCREEN_HEIGHT: number = 566;
const REF_SLIDERS_CONTAINER_MARGIN_BOTTOM: number = 40;
const REF_SLIDER_MARGIN_BOTTOM: number = 7;
const screenHeight: number = window.innerHeight;

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
