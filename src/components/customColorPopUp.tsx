import styled from "@emotion/styled";
import { useAppDispatch } from "../store";
import { pickCustomColor } from "../store/slices";

export const CustomColorPopUp = () => {
    const dispatch = useAppDispatch();

    const closePopUpHandler = () => {
        dispatch(pickCustomColor());
    }

    return(
        <PopUpContainer>
            <InfoContainer>
                <NameContainer>
                    <p>Custom_color_picker</p>
                </NameContainer>
                <CloseIcon onClick={() => closePopUpHandler()}>
                    X
                </CloseIcon>
            </InfoContainer>
            <ContentContainer>    
                <RgbPickingContainer>
                    <h2>Model RGB:</h2>
                    <InputsContainer>
                        <p>R:</p>
                        <input type="text" />
                        <p>G:</p>
                        <input type="text" />
                        <p>B:</p>
                        <input type="text" />
                        <button>Submit</button>
                    </InputsContainer>
                </RgbPickingContainer>
                <HexPickingContainer>
                    <h2>Model Hex:</h2>
                    <input type="text" />
                    <button>Submit</button>
                </HexPickingContainer>
            </ContentContainer>    
        </PopUpContainer>
    )
}

const PopUpContainer = styled.div`
    position: absolute;
    height: 25rem;
    width: 23rem;
    top: 10%;
    left: 5%;
    background: gray;
    border: 2px solid black;
`;

const InfoContainer = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
`;

const NameContainer = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid black;
    
    p{
        margin-left: 15px;
    }
`;

const CloseIcon = styled.div`
    height: 100%;
    width: 10%;
    background: red;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentContainer = styled.div`
    height: 90%;
    width: 100%;
`;

const RgbPickingContainer = styled.div`
    height: 65%;
    width: 100%;
    background: white;
    border-bottom: 2px solid black;

    h2{
        height: 15%;
        width: 100%;
        margin-left: 15px;
    }

`;

const HexPickingContainer = styled.div`
    height: 30%;
    width: 100%;
    margin: 15px 0px 0px 15px;
    display: flex;
    flex-direction: column;
    input, button {
        width: 60%;
        margin: 5px 0px;
        outline: none;
    }

    button {
        border: none;
        background: #72e46e;
        border-radius: 6px;
    }

`;

const InputsContainer = styled.div`
    height: 85%;
    width: 100%;
    margin-left: 15px;
    display: flex;
    flex-direction: column;

    input, button {
        width: 60%;
        margin: 2px 0px;
        outline: none;
    }

    button {
        margin-top: 5px;
        border: none;
        background: #72e46e;
        border-radius: 6px;
    }
`;