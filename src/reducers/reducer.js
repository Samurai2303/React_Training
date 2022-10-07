import {useReducer} from "react";
import {actions} from "./actions";

let reducer = (state, action) => {
    switch (actions.type) {
        case actions.addDog:
            return {...state, dogs: [...dogs, action.payload]};
        case actions.addCat:
            return {...state, cats: [...cats, action.payload]};
        case actions.deleteDog:
            let indexDog = state.dogs.findIndex(value => value.name === action.payload);
            state.dogs.splice(indexDog, 1);
            return {...state};
        case actions.deleteCat:
            let indexCat = state.cats.findIndex(value => value.name === action.payload);
            state.dogs.splice(indexCat, 1);
            return {...state};
    }
}

let CatsDogsReducer = useReducer(reducer, {cats: [], dogs: []});

export {CatsDogsReducer, reducer};
