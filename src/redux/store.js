import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/users.slice";
import {postsReducer} from "./slices/posts.slice";
import {commentsReducer} from "./slices/comments.slice";

let rootReducer = combineReducers({
    userReducer,
    postsReducer,
    commentsReducer
});

let setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};