import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    activeColor: string;
    rowNum: number;
    colNum: number;
}

const initialState: initialState = {
    activeColor: "white",
    rowNum: 20,
    colNum: 20
}

const bitmapSlice = createSlice({
    name: 'bitmap',
    initialState,
    reducers: {
        changeColor: (state, {payload}) => {
            state.activeColor = payload.color;
        },
        insertRowColNumber: (state, {payload}) => {
            state.rowNum = payload.rowNum;
            state.colNum = payload.colNum;
        },
    }
});

export const { changeColor, insertRowColNumber } = bitmapSlice.actions;
export default bitmapSlice.reducer;