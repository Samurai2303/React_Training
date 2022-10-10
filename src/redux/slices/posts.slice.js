import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../../services";

let initialState = {
    posts: [],
    postsLoading: false,
    postsError: null,
    selectedPost: null
}

let getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await postsService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers:{
        selectPost: (state, action) => {
            state.selectedPost = state.posts.find(value => value.id === action.payload);
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.postsLoading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.postsError = action.payload;
                state.postsLoading = false;
            })
            .addCase(getAll.pending, (state) => {
                state.postsLoading = true;
            })
});

let {reducer: postsReducer, action: {selectPost}} = postsSlice;

let postsActions = {
    getAll,
    selectPost
};

export {postsReducer, postsActions};