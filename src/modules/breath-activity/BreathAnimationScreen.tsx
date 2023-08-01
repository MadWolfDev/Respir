import styled from "@emotion/styled";
import { BreathAnimation } from "./BreathAnimation";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../router/RoutePath.type";

export const BreathAnimationScreen = ({showAnim}:{showAnim:boolean;}) => {
    const navigate = useNavigate();

    return showAnim ? (
        <ScreenContainer>
            <AnimContent>
                <BreathAnimation /> 
            </AnimContent>
            <ReturnButton 
                variant='contained'
                onClick={() => { navigate(RoutePath.welcomeScreen); }}
            >
                Retour
            </ReturnButton>
        </ScreenContainer>
    ) : null;
};

const ScreenContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: end;
` 
const AnimContent = styled.div`
  text-align: center;
  display: flex;
  flex: 1;
`;

const ReturnButton = styled(Button)`
    margin-bottom: 1.5em;
    align-self: center;
    width:10em;
`