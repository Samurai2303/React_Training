import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postsReducer, usersReducer} from "./slices";

let rootReducer = combineReducers({
    usersReducer,
    postsReducer
});

let store = configureStore({
    reducer: rootReducer
});

export {store};