import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    nodeColor: "#666666",
    nodeSize: 20
}


const nodeSlice = createSlice({
    name: "node",
    initialState,
    reducers: {
        setNodeColor : (state, action) => {
            state.nodeColor = action.payload;
        },
        setNodeSize: (state, action) => {
            state.nodeSize = action.payload
        }
    }
})



export const {
    setNodeColor,
    setNodeSize
} = nodeSlice.actions;

export default nodeSlice.reducer;

