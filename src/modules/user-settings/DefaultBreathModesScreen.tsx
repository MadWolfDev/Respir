import { Button } from "@mui/material"
import styled from "@emotion/styled";

export const DefaultBreathModesScreen = () => {
    return (
        <ButtonsContainer>
            <FirstModeButton variant="contained">Cohérence cardiaque</FirstModeButton>
            <ModeButton variant="contained">Respiration vitalité</ModeButton>
            <ModeButton variant="contained">Respiration détente</ModeButton>
            <ModeButton variant="contained">Respiration carrée</ModeButton>
            <ModeButton variant="contained">Personnalisé</ModeButton>
        </ButtonsContainer>
    );
};

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: space-between;

`
const ModeButton = styled(Button)`
    align-self: center;
    margin-bottom: 1em;
    width: 15em;
`

const FirstModeButton = styled(ModeButton)`
    margin-bottom: 2.5em;
`
