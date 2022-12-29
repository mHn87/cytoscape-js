import {combineReducers} from "@reduxjs/toolkit";
import _ from "lodash" ;
import pane from "./slices/paneSlice";


const createReducer = (asyncReducers) => (state, action) => {
    const reducersObj = _.merge(
        {},
        {
            pane
        },
        asyncReducers
    )

    const combinedReducer = combineReducers(reducersObj)

    return combinedReducer(state, action)
}

export default createReducer