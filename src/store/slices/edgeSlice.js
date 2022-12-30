import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    edgeColor: "#cccccc",
    edgeWidth: 3
}


const edgeSlice = createSlice({
    name: "edge",
    initialState,
    reducers: {
        setEdgeColor : (state, action) => {
            state.edgeColor = action.payload;
        },
        setEdgeWidth: (state, action) => {
            state.edgeWidth = action.payload
        }
    }
})



export const {
    setEdgeColor,
    setEdgeWidth
} = edgeSlice.actions;

export default edgeSlice.reducer;

