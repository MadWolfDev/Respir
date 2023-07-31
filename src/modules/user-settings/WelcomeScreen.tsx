import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/RoutePath.type";
import { Screen } from "../../theme/components/Screen";

export const WelcomeScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const clickModes = () => !location.pathname.includes(RoutePath.defaultBreathModesScreen) ?
        navigate(RoutePath.defaultBreathModesScreen) :
        navigate(RoutePath.welcomeScreen);
    const clickStart = () => navigate(RoutePath.breathAnimationScreen);
        
    
    return(
        <Screen>
            <Outlet />
            <ButtonContainer>
                <ModesButton 
                    variant='contained'
                    onClick= { clickModes }
                >
                    Cohérence cardiaque
                </ModesButton>
                <StartButton 
                    variant='contained'
                    onClick={ clickStart }
                >
                    Start
                </StartButton>
            </ButtonContainer>
        </Screen>
    );
};

const ButtonContainer = styled.div`
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

