import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {albumsService} from "../../services";

let initialState = {
    albums: [],
    albumsLoading: false,
    albumsError: null
};

let getAll = createAsyncThunk(
    'albumsSlice/getAll',
    async(_, {rejectWithValue}) => {
        try {
            let {data} = await albumsService.getAll();
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let albumsSlice = createSlice({
    name: 'albumsSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.albums = action.payload;
                state.albumsLoading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.albumsError = action.payload;
                state.albumsLoading = false;
            })
            .addCase(getAll.pending, (state) => {
                state.albumsLoading = true;
            })
})

let {reducer: albumsReducer} = albumsSlice;

let albumActions = {
    getAll
};

export {albumsReducer, albumActions};

