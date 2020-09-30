import { ADD_FIRE } from "../actions/actions";


const initialState = {
    elements: {
        fire: 2,
        water: 0,
        earth: 0,
        air: 0
    }
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_FIRE:
            return {
                ...state,
                elements: {
                    ...state.elements,
                    fire: action.payload
                }
            };
        default:
            return state;
    }
}

export default reducer;