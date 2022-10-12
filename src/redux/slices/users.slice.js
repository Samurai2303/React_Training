import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../services";

let initialState = {
    users: [],
    usersLoading: false,
    usersError: null,
    selectedUser: null,
    newUserForm: false,
    postLoading: false,
    postError: null
};

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

let postUser = createAsyncThunk(
    'usersSlice/postUser',
    async({user}, {rejectWithValue}) => {
        try {
            let {data} = await usersService.postUser(user);
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

let usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        selectUser: (state, action) => {
            state.selectedUser = state.users[action.payload];
        },
        toggleForm: (state) => {
            state.newUserForm ? state.newUserForm = false : state.newUserForm = true;
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
            .addCase(postUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
                state.postLoading = false;
            })
            .addCase(postUser.rejected, (state, action) => {
                state.postError = action.payload;
                state.postLoading = false;
            })
            .addCase(postUser.pending, (state) => {
                state.postLoading = true;
            })

});

let {reducer: usersReducer, actions: {selectUser, toggleForm}} = usersSlice;

let usersActions = {
    getAll,
    postUser,
    selectUser,
    toggleForm
}

export {usersReducer, usersActions};