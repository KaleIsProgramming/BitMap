import { useState } from "react";
import styled from "@emotion/styled";
import { ColorComponent } from ".";
import { SlideInBottom } from "../animation";
import { AnimatePresence, motion } from "framer-motion";

export const ColorPicker = () => {
    const colors = [
        {
            id: 1,
            color: "white"
        }, 
        {
            id: 2,
            color: "lime"
        }, 
        {
            id: 3,
            color: "red"
        }, 
        {
            id: 4,
            color: "blue"
        }, 
        {
            id: 5,
            color: "yellow"
        }
    ];
    const [isOpen, setIsOpen] = useState(true);

    const toggleColorPickerHandler = () => {
        setIsOpen(!isOpen)
    }
    //variants={SlideInBottom} initial="show" animate="hidden" exit="exit"
    return(
        <>
            <StyledHideButton onClick={() => toggleColorPickerHandler()}>
            </StyledHideButton>
            <AnimatePresence>
            {isOpen &&
                <ColorPickerContainer> 
                    {colors.map(colorObj => {
                        return <ColorComponent color={colorObj.color} key={colorObj.id}/>
                    })}
                </ColorPickerContainer>
            }
            </AnimatePresence>
        </>
    );
};

const ColorPickerContainer = styled(motion.div)`
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
    height: 8vh;
    width: 80vw;
    background: gray;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const StyledHideButton = styled.div`
    position: absolute;
    left: 50%;
    bottom: 8%;
    transform: translate(-50%);
    height: 2.5vh;
    width: 10vw;
    background: gray;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`