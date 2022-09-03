import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    activeColor: string;
    isCustomColorPicking: boolean;
}

const initialState: initialState = {
    activeColor: "white",
    isCustomColorPicking: false,

}

const bitmapSlice = createSlice({
    name: 'bitmap',
    initialState,
    reducers: {
        changeColor: (state, {payload}) => {
            state.activeColor = payload.color;
        },
        pickCustomColor: (state) => {
            state.isCustomColorPicking = !state.isCustomColorPicking;
        }
    }
});

export const { changeColor, pickCustomColor } = bitmapSlice.actions;
export default bitmapSlice.reducer;