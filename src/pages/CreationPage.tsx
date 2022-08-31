import styled from "@emotion/styled";
import { CreateBitMap } from "../components";

export const CreationPage = () => {

    return(
        <StyledCreationPage>
            <CreateBitMap />
        </StyledCreationPage>
    )
}

const StyledCreationPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;