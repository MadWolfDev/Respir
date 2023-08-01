import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/RoutePath.type";

export const WelcomeScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    return(
        <ScreenContainer>
            <Outlet />
            <ButtonsContainer>
                <ModesButton 
                    variant='contained'
                    onClick={() => { 
                        !location.pathname.includes(RoutePath.defaultBreathModesScreen) ?
                            navigate(RoutePath.defaultBreathModesScreen) :
                            navigate(RoutePath.welcomeScreen);
                    }}
                >
                    Cohérence cardiaque
                </ModesButton>
                <StartButton 
                    variant='contained'
                    onClick={() => { navigate(RoutePath.breathAnimationScreen); }}
                >
                    Start
                </StartButton>
            </ButtonsContainer>
        </ScreenContainer>
    );
};

const ScreenContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: end;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
`;

const ModesButton = styled(Button)`
    margin-bottom: 1em;
    align-self: center;
    width: 15em;
`

const StartButton = styled(ModesButton)`
    margin-bottom: 1.5em;
    width: 10em;

`

