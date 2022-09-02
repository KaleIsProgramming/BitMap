import styled from "@emotion/styled";
import { Bitmap, ColorPicker, ClearButton } from "../components";

export const MainPage = () => {

    return(
        <StyledMainPage>
            <Bitmap />
            <ColorPicker />
            <ClearButton />
        </StyledMainPage>
    )
};

const StyledMainPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;  
    flex-direction: column;
    overflow: hidden;
    background: #e7cc93;
`;