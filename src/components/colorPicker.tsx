import { useState, useRef } from "react";
import styled from "@emotion/styled";
import { ColorComponent, CustomColorPopUp } from ".";
import { SlideInBottom } from "../animation";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../store";
import { pickCustomColor } from "../store/slices";
import {ExpandLess, ExpandMore} from '@mui/icons-material';

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
        },
        {
            id: 6,
            color: "gray"
        },
        {
            id: 7,
            color: "Thistle"
        },
        {
            id: 8,
            color: "Snow"
        },
        {
            id: 9,
            color: "RosyBrown"
        },
        {
            id: 10,
            color: "Salmon"
        },
        {
            id: 11,
            color: "MediumSpringGreen"
        },
        {
            id: 12,
            color: "Turquoise"
        },
        {
            id: 13,
            color: "SpringGreen"
        },
        {
            id: 14,
            color: "Olive"
        },
        {
            id: 15,
            color: "Lavender"
        },
        {
            id: 16,
            color: "DeepSkyBlue"
        },
        {
            id: 17,
            color: "BlueViolet"
        },
        {
            id: 18,
            color: "Orchid"
        },
        {
            id: 19,
            color: "Navy"
        },
        {
            id: 20,
            color: "DarkSlateGray"
        },
        {
            id: 21,
            color: "DeepPink"
        },
        {
            id: 22,
            color: "Black"
        },
        {
            id: 23,
            color: "AliceBlue"
        },
        {
            id: 24,
            color: "LightSalmon"
        },
    ];
    const [isOpen, setIsOpen] = useState(true);
    const color = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const {activeColor, isCustomColorPicking} = useAppSelector(state => state.bitmapSlice);

    const start = () => {
        const intervalID = setInterval(() => {
            if(color.current != null){
                color.current.style.backgroundColor = activeColor;
                clearInterval(intervalID);
            }
        }, 10);
    }

    start();

    const customColorHandler = () => {

        if(!isCustomColorPicking){
            dispatch(pickCustomColor())
        }

    }

    const toggleColorPickerHandler = () => {
        setIsOpen(!isOpen)
    }
    //variants={SlideInBottom} initial="show" animate="hidden" exit="exit"
    return(
        <>
            <StyledHideButton onClick={() => toggleColorPickerHandler()}>
                <ExpandMore color="action" />
            </StyledHideButton>
            <AnimatePresence>
            {isOpen &&
                <ColorPickerContainer>
                    <LeftContainer>
                    </LeftContainer>
                    <MyColorsContainer> 
                        <PickedColorContainer>
                            <PickedColor ref={color} onClick={() => customColorHandler()} />
                            <h2>Picked Color</h2>
                        </PickedColorContainer>
                        <ColorsContainer>
                            {colors.map(colorObj => {
                                return <ColorComponent color={colorObj.color} key={colorObj.id}/>
                            })}
                        </ColorsContainer>
                    </MyColorsContainer>
                    <RightContainer>
                    </RightContainer>
                </ColorPickerContainer>
            }
            </AnimatePresence>
            {isCustomColorPicking && 
                <CustomColorPopUp />
            }
        </>
    );
};

const ColorPickerContainer = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translateX(-50%);
    height: 8vh;
    width: 100vw;
    background: gray;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledHideButton = styled.div`
    position: absolute;
    left: 50%;
    top: 8%;
    transform: translate(-50%);
    height: 2.5vh;
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: gray;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

const MyColorsContainer = styled.div`
  height: 100%;
  width: 18rem; 
  display: flex;
  background: #a39e9e; 
`;

const ColorsContainer = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const PickedColorContainer = styled.div`
    height: 100%; 
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #a39e9e;
    
    h2 {
        font-size: 0.7rem;
    }
`;

const PickedColor = styled.div`
    height: 3rem;
    width: 3rem;
    background: white;
`;


const RightContainer = styled.div`
    height: 100%;
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: gray;
`;

const LeftContainer = styled.div`
    height: 100%;
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: gray;
`;

