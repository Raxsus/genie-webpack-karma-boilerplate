import {TOGGLE_SELECTED} from '../actions'

const defaultState = {
    selected: false,
    name: ''
};

export const facetNode = (state = defaultState, action) => {
    switch (action.type){
        case TOGGLE_SELECTED:
            return {...state, selected: !state.selected};
        default:
            return state;
    }
};