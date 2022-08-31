import { useRef } from "react";
import styled from "@emotion/styled";
import { Bit } from "./bit";
import { useAppSelector } from "../store";

interface BitRowObj {
    row: number,
    column: number
}

type BitRowArray = BitRowObj[];

export const BitRow = ({rowData}: any) => {
    
    const {rowNum} = useAppSelector(state => state.bitmapSlice);
    const bitRowDiv = useRef<HTMLHeadingElement>(null);
    const bitHeight = (1 / rowNum * 100) + '%';

    const start = () => {
        const intervalID = setInterval(() => {
            if(bitRowDiv.current != null) {
                bitRowDiv.current!.style.height =  bitHeight;
                clearInterval(intervalID);
            }
        }, 10)
    }

    start();

    return(
        <StyledBitRow ref={bitRowDiv}>
            {
                rowData.map((bitData: BitRowObj) => {
                    return <Bit bitData={bitData} />
                })
            }
            
        </StyledBitRow>
    )
}

const StyledBitRow = styled.div`
    display: table-row;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`;