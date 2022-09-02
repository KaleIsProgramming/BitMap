import { useRef } from "react";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../store";
import { changeColor } from "../store/slices";

export const Bit = ({bitData}: any) => {
    const {colNum} = useAppSelector(state => state.otherSlice);
    const {activeColor} = useAppSelector(state => state.bitmapSlice);
    const bitDiv = useRef<HTMLHeadingElement>(null);
    const bitWidth = (1 / colNum * 100) + "%";

    const mouseOverHandler = () => {
        bitDiv.current!.style.backgroundColor = activeColor;

    }

    window.addEventListener("keydown", (e) => {
        if(e.keyCode == 18){
            bitDiv.current?.addEventListener("mouseover", mouseOverHandler)
        }
    });

    window.addEventListener("keyup", (e) => {
            bitDiv.current?.removeEventListener("mouseover", mouseOverHandler);
    
    });

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
    height: calc(100% - 2px);
    width: calc(10% - 2px);
    margin: 1px;
    background: gray;
    -webkit-user-drag: none;
`;