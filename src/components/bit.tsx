import { useRef } from "react";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../store";
import { changeColor } from "../store/slices";

export const Bit = ({bitData}: any) => {
    const {activeColor, colNum} = useAppSelector(state => state.bitmapSlice);
    const bitDiv = useRef<HTMLHeadingElement>(null);
    const bitWidth = (1 / colNum * 100) + "%";
    const ColorHandler = () => {
        bitDiv.current!.style.backgroundColor = activeColor;
    }

    const start = () => {
        const intervalID = setInterval(() => {
            if(bitDiv.current != null){
                bitDiv.current!.style.width = bitWidth;
                clearInterval(intervalID)
            }
        },10);
    };

    start();

    return(
        <StyledBit ref={bitDiv} onClick={() => ColorHandler()}>
            <div></div>
        </StyledBit>
    )
}

const StyledBit = styled.div`
    height: calc(100% - 8px);
    width: calc(10% - 8px);
    margin: 4px;
    background: gray;
    -webkit-user-drag: none;
`;