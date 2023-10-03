import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// interface SessionState {
//     name: string;
//     id: number;
// }

const initialState: SessionData[] = [];

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        addSession(state, action: PayloadAction<SessionData>){
            state.unshift(action.payload)
        },
    }
})

export const { addSession } = sessionSlice.actions;
export default sessionSlice.reducer;