import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { BitRow } from "./bitRow";
import { useAppSelector } from "../store";

export const Bitmap = () => {
    const navigate = useNavigate();
    const bitMapArray = [];
    const {rowNum ,colNum} = useAppSelector(state => state.otherSlice);

    const start = () => {
        const intervalID = setInterval(() => {
            if(rowNum === 0 && colNum === 0) {
                navigate("/");
                clearInterval(intervalID);
            }
        },100);

    }
        
    start();

    for(let i = rowNum; i !== 0; i--) {
        let array = [];
        for(let j = colNum; j !== 0; j--){ 
            array.push({row: rowNum - i + 1, column: colNum - j + 1});
        }
        bitMapArray.push(array);
        array = [];
    }

    return(
        <StyledBitMap draggable="false">
            {
                bitMapArray.map(rowData => {
                    return <BitRow rowData={rowData} key={Math.random()}/>;
                })
            }          
        </StyledBitMap>
    )
}

const StyledBitMap = styled.div`
    height: 70vh;
    width: 80vw;
    -webkit-user-drag: none;
`;