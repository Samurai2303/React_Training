import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../services/users.service";

let initialState = {
    users: [],
    user: null,
    loading: false,
    error: null,
    userFromApi: null,
    errorUser: null,
    loadingUser: false
}

let getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await usersService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let getUserFromApi = createAsyncThunk(
    'userSlice/getUserFromApi',
    async ({id}, {rejectWithValue}) => {
        try {
            let {data} = await usersService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        selectUser: (state, action) => {
            state.user = action.payload;
        },
        deleteUser: (state, action) => {
            let index = state.users.findIndex(value => value.id === action.payload);
            state.users.splice(index, 1);
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserFromApi.fulfilled, (state, action) => {
                state.userFromApi = action.payload;
                state.loadingUser = false;
            })
            .addCase(getUserFromApi.rejected, (state, action) => {
                state.errorUser = action.payload;
                state.loadingUser = false;
            })
            .addCase(getUserFromApi.pending, (state) => {
                state.loadingUser = true;
            })
});

let {reducer: userReducer, actions: {selectUser, deleteUser}} = userSlice;

let userActions = {
    getAll,
    selectUser,
    getUserFromApi,
    deleteUser
};

export {userReducer, userActions};