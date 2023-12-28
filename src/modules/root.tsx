import styled from '@emotion/styled';
import {
  Outlet,
  useBeforeUnload,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { RoutePath } from '../router/RoutePath.type';
import { useMusicStore } from './user-settings/domain/musicStore';

export const Root = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const updateMusicStatus = useMusicStore((state) => state.updateMusicStatus);

  const stopMusic = useCallback(
    () => updateMusicStatus('STOPPED'),
    [updateMusicStatus]
  );

  useEffect(() => {
    navigate(RoutePath.welcomeScreen);
  }, [navigate]);

  useEffect(() => {
    if (location.pathname !== '/exercice') stopMusic();
  }, [location, stopMusic]);

  useBeforeUnload(stopMusic);

  return (
    <AppContent>
      <Outlet />
    </AppContent>
  );
};

const AppContent = styled.div`
  background: linear-gradient(180deg, #ff8e8e 0%, #fff7dc 150%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
