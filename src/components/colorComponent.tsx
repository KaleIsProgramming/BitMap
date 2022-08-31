import { useRef } from "react";
import styled from "@emotion/styled";
import { useAppDispatch } from "../store";
import { changeColor } from "../store/slices";

export const ColorComponent = ({color}: any) => {
    const colorBox = useRef<HTMLHeadingElement>(null);
    const dispatch = useAppDispatch();
    
    const activeColorHandler = () => {
        dispatch(changeColor({color}))
    }

    const start = () => {
        const intervalID = setInterval(() => {
            if(colorBox.current != null){
                colorBox.current.style.backgroundColor = color;
                clearInterval(intervalID)
            }
        
        }, 10);
    }

    start();

    //colorBox.current!.style.backgroundColor = color;
    return(
        <StyledColorComponent ref={colorBox} onClick={() => activeColorHandler()}>
            <div></div>
        </StyledColorComponent>
    );
};

const StyledColorComponent = styled.div`
    height: 4rem;
    width: 4rem;
    background: black;
    cursor: pointer;

    &:hover {
        transition: 0.5s ease-in-out;
        scale: 1.1;
    }
`;

