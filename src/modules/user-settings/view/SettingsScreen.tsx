import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../../libs/design-system/CustomButton';
import { MusicSelection } from './MusicSelection';
import styled from '@emotion/styled';
import { RoutePath } from '../../../router/RoutePath.type';
import { MusicVolume } from './MusicVolume';
import { Spacer } from '../../../libs/design-system/Spacer';
import {
  createButtonWidth,
  createContainerWidth,
} from '../../../libs/design-system/createValuesWithScreenSize';

export const SettingsScreen = () => {
  const navigate = useNavigate();
  const handleReturnButtonClick = () => navigate(RoutePath.welcomeScreen);

  return (
    <GlobalContainer>
      <Content>
        <Spacer direction="VERTICAL" spacingFactor={1} spacingFactorFixed />
        <MusicSelection />
        <Spacer direction="VERTICAL" spacingFactor={1} />
        <MusicVolume />
        <Spacer direction="VERTICAL" spacingFactor={1} />
      </Content>
      <CustomButton
        buttonText="Valider"
        handleClick={handleReturnButtonClick}
        buttonWidth={createButtonWidth({
          targetWidth: 45,
          buttonSize: 'small',
        })}
      />
      <Spacer direction="VERTICAL" spacingFactor={1} spacingFactorFixed />
    </GlobalContainer>
  );
};

const Content = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

const GlobalContainer = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignSelf: 'center',
  width: `${createContainerWidth({ targetWidth: 100 })}%`,
});
