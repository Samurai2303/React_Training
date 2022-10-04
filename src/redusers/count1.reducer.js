import {useReducer} from "react";

let reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1};
        case 'dec':
            return {...state, count1: state.count1 - 1};
        case 'reset':
            return {...state, count1: 0};
        case 'set':
            return {...state, count1: action.payload};
    }
}

let useCount1 = () => useReducer(reducer, {count1: 0});

export {useCount1};