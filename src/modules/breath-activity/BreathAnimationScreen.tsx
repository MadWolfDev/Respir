import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../router/RoutePath.type';
import { createBreathAnimationVariants } from './createBreathAnimationVariants';
import { Screen } from '../../theme/components/Screen';
import { useBreathModeStore } from '../../store/breathModeStore';
import { useCustomBreathModeStore } from '../../store/customBreathModeStore';
import { defaultBreathConfigs } from '../../store/defaultBreathConfigs';
import { ReturnButton } from './ReturnButton';
import { useEffect, useState } from 'react';
import { TextAnimation } from './TextAnimation';
import { BackgroundAnimation } from './BackgroundAnimation';

export const BreathAnimationScreen = () => {
  const navigate = useNavigate();
  const backToWelcomeScreen = () => navigate(RoutePath.welcomeScreen);
  const [returnButtonDisabled, setReturnButtonDisabled] =
    useState<boolean>(false);

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

  useEffect(() => {
    window.onclick = () => {
      setReturnButtonDisabled(false);
    };
  }, []);

  //@todo calculer via deux useMemo les valeurs hasBlockedInPhase et hasBlockedOutPhase

  return (
    <Screen>
      <BackgroundAnimation
        mountainsAnimVariant={breathAnimationVariants.mountainsAnimation}
        shampeAnimVariant={breathAnimationVariants.defaultShampeAnimation}
        shampesNumber={6}
        //@todo utiliser hasBlockedInPhase et hasBlockOutPhase
        hasBlockInAnim={selectedBreathConfig.blockInDuration > 0 ? true : false}
        hasBlockOutAnim={
          selectedBreathConfig.blockOutDuration > 0 ? true : false
        }
        handleAnimationComplete={backToWelcomeScreen}
      />

      {/* @todo utiliser hasBlockedInPhase  */}
      {selectedBreathConfig.blockInDuration > 0 && (
        <TextAnimation
          variant={breathAnimationVariants.blockInTextAnimation}
          content="Maintenez"
          //@todo documenter les z-index avec un shéma dans un readme et justifier leur utilisation
          zindex={0}
        />
      )}

      {/* @todo utiliser hasBlockedOutPhase  */}
      {selectedBreathConfig.blockOutDuration > 0 && (
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

      <ReturnButton
        handleClick={backToWelcomeScreen}
        buttonDisabled={returnButtonDisabled}
        setButtonDisabled={setReturnButtonDisabled}
      />
    </Screen>
  );
};
