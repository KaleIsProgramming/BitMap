import { configureStore } from "@reduxjs/toolkit";
import bitmapSlice from "./slices/bitmap-slice";
import otherSlice from "./slices/other-slice";

const store = configureStore({
    reducer: {
        bitmapSlice,
        otherSlice
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;