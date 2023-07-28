import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/RoutePath.type";

export const WelcomeScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    return(
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
            onClick={() => { navigate(RoutePath.breathAnimationScreen);}}
        >
            Start/Stop
        </StartButton>
    );
};


const StartButton = styled(Button)`
align-self : center
`;
const ModesButton = styled(Button)`
    margin-bottom: 1em;
    align-self: center;
    width: 15em;
`
