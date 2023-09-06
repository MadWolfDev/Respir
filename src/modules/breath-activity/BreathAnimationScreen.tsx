import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../router/RoutePath.type';
import { Screen } from '../../theme/components/Screen';
import { motion } from 'framer-motion';
import mountains from '../../data/images/Mountains.svg';
import shampe from '../../data/images/Shampe_Mstr.svg';
import {
  createBreathAnimationVariants,
  AnimVariant,
} from './createBreathAnimationVariants';
import { useBreathModeStore } from '../../store/breathModeStore';
import { useCustomBreathModeStore } from '../../store/customBreathModeStore';
import { defaultBreathConfigs } from '../../store/defaultBreathConfigs';

export const BreathAnimationScreen = () => {
  const navigate = useNavigate();
  const backToWelcomeScreen = () => navigate(RoutePath.welcomeScreen);

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
  const shampeAnimVariants: AnimVariant[] = new Array(6);
  shampeAnimVariants.fill(breathAnimationVariants.defaultShampeAnimation);

  for (let i = 0; i < 6; i++) {
    const backgroundPositionsY = [
      '-45vh',
      `${100 + 35 * i}vh`,
      `${100 + 35 * i}vh`,
      '-45vh',
      '-45vh',
    ];

    selectedBreathConfig.blockOutDuration === 0 &&
      backgroundPositionsY.splice(4, 1);
    selectedBreathConfig.blockInDuration === 0 &&
      backgroundPositionsY.splice(2, 1);

    shampeAnimVariants[i] = {
      ...shampeAnimVariants[i],
      show: {
        ...shampeAnimVariants[i].show,
        backgroundPositionY: backgroundPositionsY,
      },
    };
  }

  const renderShampeAnimations = (index: number) => {
    if (index < 6) {
      return (
        <StyledImage
          initial="hidden"
          animate="show"
          variants={shampeAnimVariants[index]}
          url={shampe}
        >
          {renderShampeAnimations(index + 1)}
        </StyledImage>
      );
    }

    return null;
  };

  return (
    <Screen>
      <StyledImage
        variants={breathAnimationVariants.mountainsAnimation}
        initial="hidden"
        animate="show"
        url={mountains}
      >
        {renderShampeAnimations(0)}
      </StyledImage>

      {selectedBreathConfig.blockInDuration > 0 && (
        <TextContentAnim
          initial="hidden"
          animate="show"
          variants={breathAnimationVariants.blockInTextAnimation}
          zindex={0}
        >
          <Typography variant="h1">Maintenez</Typography>
        </TextContentAnim>
      )}

      {selectedBreathConfig.blockOutDuration > 0 && (
        <TextContentAnim
          initial="hidden"
          animate="show"
          variants={breathAnimationVariants.blockOutTextAnimation}
        >
          <Typography variant="h1">Bloquez</Typography>
        </TextContentAnim>
      )}

      <TextContentAnim
        initial="hidden"
        animate="show"
        variants={breathAnimationVariants.breathInTextAnimation}
      >
        <Typography variant="h1">Inspirez</Typography>
      </TextContentAnim>

      <TextContentAnim
        initial="hidden"
        animate="show"
        variants={breathAnimationVariants.breathOutTextAnimation}
        onAnimationComplete={backToWelcomeScreen}
      >
        <Typography variant="h1">Expirez</Typography>
      </TextContentAnim>

      <ReturnButton variant="contained" onClick={backToWelcomeScreen}>
        Retour
      </ReturnButton>
    </Screen>
  );
};

const TextContentAnim = styled(motion.div)<{ zindex?: number }>(
  ({ zindex = 2 }) => ({
    alignSelf: 'center',
    position: 'fixed',
    zIndex: zindex,
  })
);

const ReturnButton = styled(Button)({
  marginBottom: '1.5em',
  alignSelf: 'center',
  width: '10em',
  position: 'fixed',
  zIndex: 3,
});

const StyledImage = styled(motion.div)<{ url: string }>(({ url }) => ({
  backgroundImage: `url(${url})`,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'fixed',
  overflow: 'hidden',
  zIndex: 1,
}));
