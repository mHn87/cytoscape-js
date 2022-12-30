import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    backgroundColor: "#dedede",
    minZoom: -100,
    maxZoom: 10,
    data: 2
}


const paneSlice = createSlice({
    name: "pane",
    initialState,
    reducers: {
        setBackgroundColor : (state, action) => {
            state.backgroundColor = action.payload;
        },
        setMinZoom: (state, action) => {
            state.minZoom = action.payload
        },
        setMaxZoom: (state, action) => {
            state.maxZoom = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        }
    }
})



export const {
    setBackgroundColor,
    setMinZoom,
    setMaxZoom,
    setData
} = paneSlice.actions;

export default paneSlice.reducer;

