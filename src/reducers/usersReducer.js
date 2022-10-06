import {actions} from "../configs";

export function usersReducer(state = {users: [], user: null}, action) {
    switch (action.type) {
        case actions.loadUsers:
            return {...state, users: action.payload};
        case actions.getUser:
            let user = state.users.find(value => value.id === +action.payload);
            return {...state, user};
        default:
            return {...state};
    }
}
