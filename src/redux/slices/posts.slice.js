import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../../services/posts.service";

let initialState = {
    posts: [],
    selectedPost: null,
    postsLoading: false,
    postsError: null,
    postFromApi: null,
    postFromApiLoading: false,
    postFromApiError: null
};

let getAll = createAsyncThunk(
    'getAll',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await postsService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let getById = createAsyncThunk(
    'getById',
    async ({id}, {rejectWithValue}) => {
        try {
            let {data} = await postsService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

let postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        select: (state, action) => {
            let index = state.posts.findIndex(value => value.id === action.payload);
            state.selectedPost = state.posts[index];
        },
        deletePost: (state, action) => {
            let index = state.posts.findIndex(value => value.id === action.payload);
            state.posts.splice(index, 1);
        }
    },
    extraReducers: builder =>
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
            .addCase(getById.fulfilled, (state, action) => {
                state.postFromApi = action.payload;
                state.postFromApiLoading = false;
            })
            .addCase(getById.rejected, (state, action) => {
                state.postFromApiError = action.payload;
                state.postFromApiLoading = false;
            })
            .addCase(getById.pending, (state) => {
                state.postFromApiLoading = true;
            })
});

let {reducer: postsReducer, actions: {select, deletePost}} = postsSlice;

let postsActions = {
    getAll,
    getById,
    select,
    deletePost
};

export {postsReducer, postsActions};