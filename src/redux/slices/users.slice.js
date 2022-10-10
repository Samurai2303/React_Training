import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../services";

let initialState = {
    users: [],
    usersLoading: false,
    usersError: null,
    selectedUser: null
}

let getAll = createAsyncThunk(
    'usersSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await usersService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        selectUser: (state, action) => {
            state.selectedUser = state.users.find(value => value.id === action.payload);
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
                state.usersLoading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.usersError = action.payload;
                state.usersLading = false;
            })
            .addCase(getAll.pending, (state) => {
                state.usersLoading = true;
            })

});

let {reducer: usersReducer, actions: {selectUser}} = usersSlice;

let usersActions = {
    getAll,
    selectUser

}

export {usersReducer, usersActions};