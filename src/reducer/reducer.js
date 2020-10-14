import {INCREMENT_ELEMENT, INCREASE_SPEED, ADD_ITEM } from "../actions/actions";


const initialState = {
        fire: 0,
        fireSpeed: 0,
        fSpeedCost: 10,
        fireQuant: 1,
        fQuantCost: 100,
        water: 0,
        waterSpeed: 0,
        wSpeedCost: 10,
        waterQuant: 1,
        wQuantCost: 100,
        earth: 0,
        earthSpeed: 0,
        eSpeedCost: 10,
        earthQuant: 1,
        eQuantCost: 100,
        air: 0,
        airSpeed: 0,
        aSpeedCost: 10,
        airQuant: 1,
        aQuantCost: 100,
        inventory: []
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
            if (action.payload === 'fire' && state.fire >= state.fSpeedCost) {
                return {
                    ...state,
                    fire: state.fire - state.fSpeedCost,
                    fireSpeed: state.fireSpeed + 1,
                    fSpeedCost: state.fSpeedCost * (state.fireSpeed + 2)
                };
            }
            else if (action.payload === 'water' && state.water >= state.wSpeedCost) {
                return {
                    ...state,
                    water: state.water - state.wSpeedCost,
                    waterSpeed: state.waterSpeed + 1,
                    wSpeedCost: state.wSpeedCost * (state.waterSpeed + 2)
                }
            }
            else if (action.payload === 'earth' && state.earth >= state.eSpeedCost) {
                return {
                    ...state,
                    earth: state.earth - state.eSpeedCost,
                    earthSpeed: state.earthSpeed + 1,
                    eSpeedCost: state.eSpeedCost * (state.earthSpeed + 2)
                }
            }
            else if (action.payload === 'air' && state.earth >= state.aSpeedCost) {
                return {
                    ...state,
                    earth: state.earth - state.aSpeedCost,
                    earthSpeed: state.earthSpeed + 1,
                    aSpeedCost: state.aSpeedCost * (state.airSpeed + 2)
                }
            }
            else {
                return state;
            }
        
        case ADD_ITEM:
            if (action.payload.currency === 'Fire' && state.fire >= action.payload.price) {
            return {
                ...state,
                fire: state.fire - action.payload.price,
                inventory: [
                    ...state.inventory,
                    action.payload
                ]
            }
        }
        else if (action.payload.currency === 'Water' && state.water >= action.payload.price) {
            return {
                ...state,
                water: state.water - action.payload.price,
                inventory: [
                    ...state.inventory,
                    action.payload
                ]
            }
        }
        else if (action.payload.currency === 'Earth' && state.earth >= action.payload.price) {
            return {
                ...state,
                earth: state.earth - action.payload.price,
                inventory: [
                    ...state.inventory,
                    action.payload
                ]
            }
        }
        else if (action.payload.currency === 'Air' && state.air >= action.payload.price) {
            return {
                ...state,
                air: state.air - action.payload.price,
                inventory: [
                    ...state.inventory,
                    action.payload
                ]
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