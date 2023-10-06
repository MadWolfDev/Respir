import { MusicChoice } from './MusicChoice';
import styled from '@emotion/styled';

export const SettingsScreen = () => {
  return (
    <Container>
      <MusicChoice />
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'start',
});
