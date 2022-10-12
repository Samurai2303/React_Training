import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {albumsReducer, commentsReducer, photosReducer, postsReducer, todosReducer, usersReducer} from "./slices";

let rootReducer = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer,
    todosReducer,
    albumsReducer,
    photosReducer
});

let store = configureStore({
    reducer: rootReducer
});

export {store};