import styled from "@emotion/styled";
import { BreathAnimation } from "./BreathAnimation";

export const BreathAnimationManager = ({showAnim}:{showAnim:boolean;}) => {

    return showAnim ? (
        <AnimContent>
            <BreathAnimation /> 
        </AnimContent>
    ) : (
        <AnimContent>

        </AnimContent>
    );
};

const AnimContent = styled.div`
  text-align: center;
  display: flex;
  flex: 1;
`;