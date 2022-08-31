import styled from "@emotion/styled";
import { Bitmap, ColorPicker } from "../components";

export const MainPage = () => {

    return(
        <StyledMainPage>
            <Bitmap />
            <ColorPicker />
        </StyledMainPage>
    )
};

const StyledMainPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;  
    overflow: hidden;
    background: #e7cc93;
`;