import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../../services/comments.service";

let initialState = {
    comments: [],
    selectedComment: null,
    commentsError: null,
    commentsLoading: false,
    commentFromApi: null,
    commentFromApiError: null,
    commentFromApiLoading: false
};

let getAll = createAsyncThunk(
    'getAll',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await commentsService.getAll();
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
            let {data} = await commentsService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)


let commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        select: (state, action) => {
            let index = state.comments.findIndex(value => value.id === action.payload);
            state.selectedComment = state.comments[index];
        },
        deleteComment: (state, action) => {
            let index = state.comments.findIndex(value => value.id === action.payload);
            state.comments.splice(index, 1);
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.commentsLoading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.commentsError = action.payload;
                state.commentsLoading = false;
            })
            .addCase(getAll.pending, (state) => {
                state.commentsLoading = true;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.commentFromApi = action.payload;
                state.commentFromApiLoading = false;
            })
            .addCase(getById.rejected, (state, action) => {
                state.commentFromApiError = action.payload;
                state.commentFromApiLoading = false;
            })
            .addCase(getById.pending, (state) => {
                state.commentFromApiLoading = true;
            })
});

let {reducer: commentsReducer, actions: {select, deleteComment}} = commentsSlice;

let commentsActions = {
    getAll,
    getById,
    select,
    deleteComment
};

export {commentsReducer, commentsActions};