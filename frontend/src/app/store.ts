import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../slices"

export const store = configureStore({
    reducer: {
        session: sessionReducer
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;