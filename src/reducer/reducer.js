import {INCREMENT_ELEMENT, INCREASE_SPEED } from "../actions/actions";


const initialState = {
        fire: 0,
        fireSpeed: 0,
        fireQuant: 1,
        water: 0,
        waterSpeed: 0,
        waterQuant: 1,
        earth: 0,
        earthSpeed: 0,
        earthQuant: 1,
        air: 0,
        airSpeed: 0,
        airQuant: 1
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT_ELEMENT:
            if (action.payload === 'fire') {
                return {
                    ...state,
                    fire: state.fire + state.fireQuant
                };
            }
            else if (action.payload === 'water') {
                return {
                    ...state,
                    water: state.water + state.waterQuant
                };
            }
            else if (action.payload === 'earth') {
                return {
                    ...state,
                    earth: state.earth + state.earthQuant
                };
            }
            else if (action.payload === 'air') {
                return {
                    ...state,
                    air: state.air + state.airQuant
                };
            }
            else {
                return state;
            }
        case INCREASE_SPEED:
            if (action.payload == 'fire' && state.fire >= 10) {
                return {
                    ...state,
                    fire: state.fire - 10,
                    fireSpeed: state.fireSpeed + 1
                };
            }
            else if (action.payload == 'water' && state.water >= 10) {
                return {
                    ...state,
                    water: state.water - 10,
                    waterSpeed: state.waterSpeed + 1
                }
            }
            else if (action.payload == 'earth' && state.earth >= 10) {
                return {
                    ...state,
                    earth: state.earth - 10,
                    earthSpeed: state.earthSpeed + 1
                }
            }
            else if (action.payload == 'air' && state.earth >= 10) {
                return {
                    ...state,
                    earth: state.earth - 10,
                    earthSpeed: state.earthSpeed + 1
                }
            }
            else {
                return state;
            }
        default:
            return state;
    }
}

export default reducer;