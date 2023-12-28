import styled from '@emotion/styled';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { RoutePath } from '../router/RoutePath.type';
import { useMusicStore } from './user-settings/domain/musicStore';

export const Root = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const updateMusicStatus = useMusicStore((state) => state.updateMusicStatus);

  useEffect(() => {
    navigate(RoutePath.welcomeScreen);
  }, [navigate]);

  useEffect(() => {
    console.log(location);
    if (location.pathname !== '/exercice') updateMusicStatus('STOPPED');
  }, [location]);

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
