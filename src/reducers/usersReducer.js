import {actions} from "../configs";

export function usersReducer(state = {users: [], user: null}, action) {
    switch (action.type) {
        case actions.loadUsers:
            return {...state, users: action.payload};
        case actions.getUser:
            let index = state.users.findIndex(value => value.id === action.payload);
            console.log(index);
            return {...state, user: state.users[index]};
        default:
            return {...state};
    }
}
