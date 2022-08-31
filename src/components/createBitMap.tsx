import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useAppDispatch } from "../store";
import { insertRowColNumber2 } from "../store/slices";

export const CreateBitMap = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const colNum = useRef<HTMLInputElement>(null);
    const rowNum =  useRef<HTMLInputElement>(null);

    const inputHandler = (e: any) => {
        if(e.target.value < 1){
            e.target.value = 1;
        } else if(e.target.value > 99) {
            e.target.value = 99;
        }
    }
    
    

    const SubmitHandler = () => {
        const payload = {
            rowNum: rowNum.current!.value,
            colNum: colNum.current!.value
        };
        navigate("kolorki");
        dispatch(insertRowColNumber2(payload));
        
    }

    return(
        <CrateBitMapForm>
            <h1>Wybierz ilość kolumn i rzędów</h1>
            <h2>Wybierz ilość kolumn</h2>
            <InputContainer>
                <input type="number" name="form" ref={colNum} defaultValue="1" onInput={(e) => inputHandler(e)} required/>
            </InputContainer>
            <h2>Wybierz ilość rzędów</h2>
            <InputContainer>
                <input type="number" name="form" ref={rowNum} defaultValue="1" onInput={(e) => inputHandler(e)} required/>
            </InputContainer>
            <button name="form" onClick={() => SubmitHandler()}>Stwórz BitMape!</button>
        </CrateBitMapForm>
    );
};

const CrateBitMapForm = styled.div`
    height: 60%;
    width: 50%;  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: gray;
    border-radius: 20px;
    color: white;
    h1, h2, button{
        width: 80%;
        margin: 8px 0;
    }

    h1{
        border-bottom: 2px solid black;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 0px;
        font-size: 1.8rem;
        color: gray;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        transition: 0.5s ease-in-out;
    }

    button:hover {
        scale: 1.05;
        transition: 0.5s ease-in-out;
    }
`;

const InputContainer = styled.div`
    width: 80%;
    height: 15%;
    margin-bottom: 10px;

    input {
        height: 90%;
        width: 15%;
        border: none;
        border-radius: 20px;
        text-align: center;
        outline: none;
        font-size: 1.8rem;
        color: gray;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    input[type=number] {
    -moz-appearance: textfield;
    }
`;