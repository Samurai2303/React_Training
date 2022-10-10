import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {commentsReducer, postsReducer, userReducer} from "./slices";

let rootReducer = combineReducers({
    userReducer,
    postsReducer,
    commentsReducer
});

let setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};