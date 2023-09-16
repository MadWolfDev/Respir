import styled from '@emotion/styled';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { RoutePath } from '../router/RoutePath.type';

export const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(RoutePath.welcomeScreen);
  }, [navigate]);

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
