import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useBreathModeStore } from '../../store/breathModeStore';
import { CustomSlider } from './CustomSlider';
import { defaultBreathConfigs } from '../../store/defaultBreathConfigs';
import {
  breathStages,
  useCustomBreathModeStore,
} from '../../store/customBreathModeStore';

export const CustomModeScreen = () => {
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

  return (
    <GlobalContainer>
      <CustomSlider
        sliderInitialValue={selectedBreathConfig.sessionLength}
        durationUnit="MIN"
        onValueSelected={(value) => onSliderUpdate(value, 'sessionLength')}
        title="Durée de la session"
      />
      <CustomSlider
        sliderInitialValue={selectedBreathConfig.breathInDuration}
        durationUnit="SEC"
        onValueSelected={(value) => onSliderUpdate(value, 'breathInDuration')}
        title="Durée de la première inspiration"
      />
      <CustomSlider
        sliderInitialValue={selectedBreathConfig.blockInDuration}
        durationUnit="SEC"
        onValueSelected={(value) => onSliderUpdate(value, 'blockInDuration')}
        title="Durée de la première rétention"
      />
      <CustomSlider
        sliderInitialValue={selectedBreathConfig.breathOutDuration}
        durationUnit="SEC"
        onValueSelected={(value) => onSliderUpdate(value, 'breathOutDuration')}
        title="Durée de l'expiration"
      />
      <CustomSlider
        sliderInitialValue={selectedBreathConfig.blockOutDuration}
        durationUnit="SEC"
        onValueSelected={(value) => onSliderUpdate(value, 'blockOutDuration')}
        title="Durée de la seconde rétention"
      />
    </GlobalContainer>
  );
};

const GlobalContainer = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-between',
  flex: 1,
});
