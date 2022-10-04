import {useReducer} from "react";

let reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count2: state.count2 + 1};
        case 'dec':
            return {...state, count2: state.count2 - 1};
        case 'reset':
            return {...state, count2: 0};
        case 'set':
            return {...state, count2: action.payload};
    }
}

let useCount2 = () => useReducer(reducer, {count2: 0});

export {useCount2};