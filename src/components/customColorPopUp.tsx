import { useRef } from "react";
import styled from "@emotion/styled";
import { useAppDispatch } from "../store";
import { pickCustomColor } from "../store/slices";
import { changeColor } from "../store/slices";

export const CustomColorPopUp = () => {
    const inputR = useRef<HTMLInputElement>(null);
    const inputG = useRef<HTMLInputElement>(null);
    const inputB = useRef<HTMLInputElement>(null);
    const inputHex = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const closePopUpHandler = () => {
        dispatch(pickCustomColor());
    }

    const changeColorHandler = (action: string) => {

        switch(action){
            case 'rgb':
                const isRgbRight = validationHandler('rgb');
                if(isRgbRight) {
                    const RgbPayload = {color: `rgb(${inputR.current?.value}, ${inputG.current?.value}, ${inputB.current?.value})`};
                    dispatch(changeColor(RgbPayload));
                }
                break;
            case 'hex':
                const isHexRight = validationHandler('hex');
                if(isHexRight) {
                    const hexPayload = {color: `${inputHex.current?.value}`}
                    dispatch(changeColor(hexPayload));
                }
                break;
        }
    }

    const validationHandler = (action: string) => {
        const hexChars = "#0123456789abcdef";
        const rgbChars = "0123456789";

        switch(action) {
            case 'rgb':
                const inputs = [inputR.current!, inputG.current!, inputB.current!];

                if((inputR.current!.value.length > 3) || (inputG.current!.value.length > 3) || (inputB.current!.value.length > 3)) {
                    inputR.current!.value = '255';
                    inputG.current!.value = '255';
                    inputB.current!.value = '255';
                    return false;
                } else {
                    let isRgbRight = true;
                    for (let i = 0; i < inputs.length; i++){
                        for(let j = 0; j < inputs[i].value.length; j++){
                            if(!(inputs[i].value.includes(rgbChars))) {
                                isRgbRight = false;
                            }
                        }

                        if(!isRgbRight){
                            inputs[i].value = "255";
                        }
                    }
                    return isRgbRight;
                }
            case 'hex':
                if(inputHex.current!.value.length > 7) {
                    inputHex.current!.value = '#ffffff';
                    return false;
                } else {
                    const length = inputHex.current!.value.length;
                    let isHexRight = true;

                    for(let i = 0; i < length; i++) {
                        if(!(hexChars.includes(inputHex.current!.value[i]))) {
                            isHexRight = false;
                        }
                    }

                    if(!isHexRight) {
                        inputHex.current!.value = "#ffffff";
                    }

                    return isHexRight;
                }
        }
    }

    const errorHandler = (errorMessage: string) => {
        switch(errorMessage){
            case "":
                break;
        }
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
                        <input ref={inputR} type="text" defaultValue={0} />
                        <p>G:</p>
                        <input ref={inputG} type="text" defaultValue={0} />
                        <p>B:</p>
                        <input ref={inputB} type="text" defaultValue={0} />
                        <button onClick={() => changeColorHandler('rgb')}>Submit</button>
                    </InputsContainer>
                </RgbPickingContainer>
                <HexPickingContainer>
                    <h2>Model Hex:</h2>
                    <input ref={inputHex} type="text" defaultValue={"#ffffff"} />
                    <button onClick={() => changeColorHandler('hex')}>Submit</button>
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