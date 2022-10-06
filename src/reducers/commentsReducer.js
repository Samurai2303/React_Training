import {actions} from "../configs";

export function commentsReducer(state = {comments: [], comment: null}, action) {
    switch (action.type) {
        case actions.loadComments:
            return {...state, comments: action.payload};
        case actions.getComment:
            let comment = state.comments.find(value => value.id === +action.payload);
            return {...state, comment};
        default:
            return {...state};
    }
}
