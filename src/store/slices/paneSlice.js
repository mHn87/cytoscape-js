import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    backgroundColor: "#dedede",
    minZoom: 12,
    maxZoom: 250,
    data: 10
}


const paneSlice = createSlice({
    name: "pane",
    initialState,
    reducers: {

    }
})



export const {

} = paneSlice.actions;

export default paneSlice.reducer;

