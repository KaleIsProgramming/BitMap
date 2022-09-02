import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useAppDispatch } from "../store";
import { insertRowColNumber2 } from "../store/slices";

export const ClearButton = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const clearHandler = () => {
        navigate("#");
    }

    const newHandler = () => {
        const payload = {
            colNum: 0,
            rowNum: 0
        }
        dispatch(insertRowColNumber2(payload))
    }

    return(
        <ButtonContainer>
            <StyledButton onClick={() => newHandler()}>New</StyledButton>   
            <StyledButton onClick={() => clearHandler()}>Clear</StyledButton>   
        </ButtonContainer>
    )
};

const ButtonContainer = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0rem;
`;

const StyledButton = styled.button`
    padding: 1.2rem 2.7rem;
    font-size: 1.2rem;
    margin: 30px;
    border-radius: 15px;
    border: none;
    background: #f7efdc;
    cursor: pointer;
`;