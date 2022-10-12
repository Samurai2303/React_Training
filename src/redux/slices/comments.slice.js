import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../../services";

let initialState = {
    comments: [],
    commentsLoading: false,
    commentsError: null,
    selectedComment: null
};

let getAll = createAsyncThunk(
    'commentsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await commentsService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        selectComment: (state, action) => {
            state.selectedComment = state.comments.find(value => value.id === action.payload);
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
})

let {reducer: commentsReducer, actions: {selectComment}} = commentsSlice;

let commentsActions = {
    selectComment,
    getAll
};

export {commentsReducer, commentsActions};
