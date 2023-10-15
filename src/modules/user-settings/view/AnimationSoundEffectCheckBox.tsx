import { Typography } from '@mui/material';
import { Spacer } from '../../../libs/design-system/Spacer';
import { HorizontalContainer } from '../../../libs/design-system/HorizontalContainer';
import Checkbox from '@mui/material/Checkbox';
import { useMusicStore } from '../domain/musicStore';

export const AnimationSoundEffectCheckBox = () => {
  const soundEffectIsEnabled = useMusicStore(
    (state) => state.soundEffectIsEnabled
  );
  const updateSoundEffectEnableState = useMusicStore(
    (state) => state.updateSoundEffectEnableState
  );
  const handleChange = () => {
    updateSoundEffectEnableState(!soundEffectIsEnabled);
  };

  return (
    <>
      <HorizontalContainer>
        <Spacer direction="HORIZONTAL" spacingFactor={1} />
        <Typography variant="h2">Effet sonore</Typography>
        <Spacer direction="HORIZONTAL" spacingFactor={1} />
        <Checkbox
          checked={soundEffectIsEnabled}
          onChange={handleChange}
          color="enable"
          disableRipple
        />
      </HorizontalContainer>
      <HorizontalContainer>
        <Spacer direction="HORIZONTAL" spacingFactor={1} />
        <Typography variant="h4" textAlign={'center'}>
          Son qui se déclenche à chaque étape de respiration
        </Typography>
      </HorizontalContainer>
    </>
  );
};
