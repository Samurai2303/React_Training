import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {todosService} from "../../services";

let initialState = {
    todos: [],
    todosLoading: false,
    todosError: null,
    selectedTodo: null
};

let getAll = createAsyncThunk(
    'todosSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await todosService.getAll();
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        selectTodo: (state, action) => {
            state.selectedTodo = state.todos.find(value => value.id === action.payload);
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.todosLoading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.todosError = action.payload;
                state.todosLoading = false;
            })
            .addCase(getAll.pending, (state) => {
                state.todosLoading = true;
            })
});

let {reducer: todosReducer, actions: {selectTodo}} = todosSlice;

let todosActions = {
    getAll,
    selectTodo
};

export {todosReducer, todosActions};
