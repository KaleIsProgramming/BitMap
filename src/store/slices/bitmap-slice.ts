import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    activeColor: string;
}

const initialState: initialState = {
    activeColor: "white",

}

const bitmapSlice = createSlice({
    name: 'bitmap',
    initialState,
    reducers: {
        changeColor: (state, {payload}) => {
            state.activeColor = payload.color;
        },
    }
});

export const { changeColor } = bitmapSlice.actions;
export default bitmapSlice.reducer;