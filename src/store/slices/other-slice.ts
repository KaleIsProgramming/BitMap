import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    rowNum: number;
    colNum: number;
}

const initialState: initialState = {
    rowNum: 0,
    colNum: 0
}

const otherSlice = createSlice({
    name: 'other',
    initialState,
    reducers: {
        // changeColor: (state, {payload}) => {
        //     state.activeColor = payload.color;
        // },
        insertRowColNumber2: (state, {payload}) => {
            state.rowNum = payload.rowNum;
            state.colNum = payload.colNum;
        },
    }
});

export const { insertRowColNumber2 } = otherSlice.actions;
export default otherSlice.reducer;