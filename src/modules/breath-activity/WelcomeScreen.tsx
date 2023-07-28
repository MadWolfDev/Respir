import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/RoutePath.type";

export const WelcomeScreen = () => {
    const navigate = useNavigate();
    
    return(
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