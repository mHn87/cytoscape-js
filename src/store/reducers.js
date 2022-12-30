import {combineReducers} from "@reduxjs/toolkit";
import _ from "lodash" ;
import pane from "./slices/paneSlice";
import node from "./slices/nodeSlice";



const createReducer = (asyncReducers) => (state, action) => {
    const reducersObj = _.merge(
        {},
        {
            pane,
            node
        },
        asyncReducers
    )

    const combinedReducer = combineReducers(reducersObj)

    return combinedReducer(state, action)
}

export default createReducer