import { ADD_AIR, ADD_EARTH, ADD_FIRE, ADD_WATER } from "../actions/actions";


const initialState = {
        fire: 0,
        water: 0,
        earth: 0,
        air: 0
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_FIRE:
            return {
                ...state,
                fire: action.payload
            };
        case ADD_WATER:
            return {
                ...state,
                water: action.payload
            };
        case ADD_EARTH:
            return {
                ...state,
                earth: action.payload
            };
        case ADD_AIR:
            return {
                ...state,
                air: action.payload
            };
        default:
            return state;
    }
}

export default reducer;