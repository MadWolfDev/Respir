import styled from "@emotion/styled"
import { ReactNode } from "react"

export const Screen = ({ children } : { children : ReactNode | ReactNode[]} ) => 
    <ScreenContainer>
        {children}
    </ScreenContainer>


const ScreenContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: end;
` 