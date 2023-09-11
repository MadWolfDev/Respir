import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useBreathModeStore } from '../../store/breathModeStore';
import { CustomSlider } from './CustomSlider';
import { defaultBreathConfigs } from '../../store/defaultBreathConfigs';
import {
  breathStages,
  useCustomBreathModeStore,
} from '../../store/customBreathModeStore';
import {
  createSlidersExitAnim,
  createSlidersVariantAnim,
} from './createUIAnimation';

export const SlidersScreen = () => {
  const selectedBreathMode = useBreathModeStore(
    (state) => state.selectedBreathMode
  );
  const customBreathConfig = useCustomBreathModeStore(
    (state) => state.breathConfig
  );
  const updateCustomBreathConfig = useCustomBreathModeStore(
    (state) => state.updateBreathConfig
  );
  const selectedBreathConfig =
    selectedBreathMode !== 'custom'
      ? defaultBreathConfigs[selectedBreathMode]
      : customBreathConfig;

  const onSliderUpdate = (value: number, breathStage: breathStages) => {
    updateCustomBreathConfig({ breathStage, value });
  };
  const slidersDisabled: boolean =
    selectedBreathMode === 'custom' ? false : true;

  const slidersExitAnims = createSlidersExitAnim(5);
  const slidersAnimVariants = createSlidersVariantAnim(5);

  return (
    <GlobalContainer>
      <CustomSlider
        sliderInitialValue={selectedBreathConfig.sessionLength}
        durationUnit="MIN"
        onValueSelected={(value) => onSliderUpdate(value, 'sessionLength')}
        title="Durée de la session"
        hasMinimumValue={true}
        disabled={slidersDisabled}
        animVariant={slidersAnimVariants[0]}
        exitAnim={slidersExitAnims[0]}
      />
      <CustomSlider
        sliderInitialValue={selectedBreathConfig.breathInDuration}
        durationUnit="SEC"
        onValueSelected={(value) => onSliderUpdate(value, 'breathInDuration')}
        title="Durée de la première inspiration"
        hasMinimumValue={true}
        disabled={slidersDisabled}
        animVariant={slidersAnimVariants[1]}
        exitAnim={slidersExitAnims[1]}
      />
      <CustomSlider
        sliderInitialValue={selectedBreathConfig.blockInDuration}
        durationUnit="SEC"
        onValueSelected={(value) => onSliderUpdate(value, 'blockInDuration')}
        title="Durée de la première rétention"
        hasMinimumValue={false}
        disabled={slidersDisabled}
        animVariant={slidersAnimVariants[2]}
        exitAnim={slidersExitAnims[2]}
      />
      <CustomSlider
        sliderInitialValue={selectedBreathConfig.breathOutDuration}
        durationUnit="SEC"
        onValueSelected={(value) => onSliderUpdate(value, 'breathOutDuration')}
        title="Durée de l'expiration"
        hasMinimumValue={true}
        disabled={slidersDisabled}
        animVariant={slidersAnimVariants[3]}
        exitAnim={slidersExitAnims[3]}
      />
      <CustomSlider
        sliderInitialValue={selectedBreathConfig.blockOutDuration}
        durationUnit="SEC"
        onValueSelected={(value) => onSliderUpdate(value, 'blockOutDuration')}
        title="Durée de la seconde rétention"
        hasMinimumValue={false}
        disabled={slidersDisabled}
        animVariant={slidersAnimVariants[4]}
        exitAnim={slidersExitAnims[4]}
      />
    </GlobalContainer>
  );
};

const GlobalContainer = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-between',
  flex: 1,
  overflow: 'hidden',
});
