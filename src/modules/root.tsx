import styled from '@emotion/styled';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import { RoutePath } from '../router/RoutePath.type';
  
export const Root = () => {
    const navigate = useNavigate();
    useEffect(() => {navigate(RoutePath.welcomeScreen)}, []);
    
    return (         
        <AppContent>
            <Outlet />
        </AppContent>
    )
}

const AppContent = styled.div`
  background: linear-gradient(180deg, #FF8E8E 0%, #FFF7DC 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
`