import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../router/RoutePath.type';
import { Screen } from '../../../libs/design-system/Screen';
import { useBreathModeStore } from '../../breath-settings/domain/breathModeStore';
import { useCustomBreathModeStore } from '../../breath-settings/domain/customBreathModeStore';
import { defaultBreathConfigs } from '../../breath-settings/infra/defaultBreathConfigs';
import { ReturnButton } from './ReturnButton';
import { TextAnimation } from './TextAnimation';
import { BackgroundAnimation } from './BackgroundAnimation';
import { useMusicStore } from '../../user-settings/domain/musicStore';
import {
  BreathStageSoundEffect,
  clearIntervals,
} from './BreathStageSoundEffect';
import { createBreathAnimationVariants } from '../domain/createBreathAnimationVariants';

export const BreathAnimationScreen = () => {
  const navigate = useNavigate();
  const updateMusicStatus = useMusicStore((state) => state.updateMusicStatus);

  //Called wether the return button is clicked or the background animation is complete
  const backToWelcomeScreen = () => {
    navigate(RoutePath.welcomeScreen);
    clearIntervals();
    updateMusicStatus('STOPPED');
  };

  const selectedBreathMode = useBreathModeStore(
    (state) => state.selectedBreathMode
  );
  const customBreathConfig = useCustomBreathModeStore(
    (state) => state.breathConfig
  );
  const selectedBreathConfig =
    selectedBreathMode !== 'custom'
      ? defaultBreathConfigs[selectedBreathMode]
      : customBreathConfig;

  const breathAnimationVariants = createBreathAnimationVariants({
    blockIn: selectedBreathConfig.blockInDuration,
    blockOut: selectedBreathConfig.blockOutDuration,
    breathIn: selectedBreathConfig.breathInDuration,
    breathOut: selectedBreathConfig.breathOutDuration,
    sessionDuration: selectedBreathConfig.sessionLength,
  });

  const hasBlockedInPhase =
    selectedBreathConfig.blockInDuration > 0 ? true : false;
  const hasBlockedOutPhase =
    selectedBreathConfig.blockOutDuration > 0 ? true : false;

  return (
    <Screen>
      {/* <BreathStageSoundEffect breathConfig={selectedBreathConfig} /> */}
      <BackgroundAnimation
        mountainsAnimVariant={breathAnimationVariants.mountainsAnimation}
        shampeAnimVariant={breathAnimationVariants.defaultShampeAnimation}
        shampesNumber={6}
        hasBlockInAnim={hasBlockedInPhase}
        hasBlockOutAnim={hasBlockedOutPhase}
        handleAnimationComplete={backToWelcomeScreen}
      />

      {hasBlockedInPhase && (
        <TextAnimation
          variant={breathAnimationVariants.blockInTextAnimation}
          content="Maintenez"
          //@todo documenter les z-index avec un shéma dans un readme et justifier leur utilisation
          zindex={0}
        />
      )}

      {hasBlockedOutPhase && (
        <TextAnimation
          variant={breathAnimationVariants.blockOutTextAnimation}
          content="Bloquez"
        />
      )}

      <TextAnimation
        variant={breathAnimationVariants.breathInTextAnimation}
        content="Inspirez"
      />

      <TextAnimation
        variant={breathAnimationVariants.breathOutTextAnimation}
        content="Expirez"
      />

      <ReturnButton handleClick={backToWelcomeScreen} />
    </Screen>
  );
};
