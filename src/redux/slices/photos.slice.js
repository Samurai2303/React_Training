import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {photosService} from "../../services";

let initialState = {
    photos: [],
    photosLoading: false,
    photosError: null,
    selectedPhoto: null
};

let getAll = createAsyncThunk(
    'photosSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await photosService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let photosSlice = createSlice({
    name: 'photosSlice',
    initialState,
    reducers: {
        selectPhoto: (state, action) => {
            state.selectedPhoto = state.photos.find(value => value.id === action.payload);
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.photos = action.payload;
                state.photosLoading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.photosError = action.payload;
                state.photosLoading = false;
            })
            .addCase(getAll.pending, (state) => {
                state.photosLoading = true;
            })
});

let {reducer: photosReducer, actions: {selectPhoto}} = photosSlice;

let photosActions = {
    getAll,
    selectPhoto
};

export {photosReducer, photosActions};

