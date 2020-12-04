import {INCREMENT_ELEMENT, INCREASE_SPEED, ADD_ITEM, TICK_UP, TICK_RESET } from "../actions/actions";


const initialState = {
        fire: {
            current: 0,
            speed: 0,
            speedCost: 10,
            quantity: 1,
            quantCost: 100,
            tick: 10
        },
        water: {
            current: 0,
            speed: 0,
            speedCost: 10,
            quantity: 1,
            quantCost: 100,
            tick: 0
        },
        earth: {
            current: 0,
            speed: 0,
            speedCost: 10,
            quantity: 1,
            quantCost: 100,
            tick: 0
        },
        air: {
            current: 0,
            speed: 0,
            speedCost: 10,
            quantity: 1,
            quantCost: 100,
            tick: 0
        },
        inventory: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT_ELEMENT:
            if (action.payload === 'fire') {
                return {
                    ...state,
                    fire: {
                        ...state.fire,
                        current:  state.fire.current + state.fire.quantity
                    }
                };
            }
            else if (action.payload === 'water') {
                return {
                    ...state,
                    water: {
                        ...state.water,
                        current: state.water.current + state.water.quantity
                    }
                };
            }
            else if (action.payload === 'earth') {
                return {
                    ...state,
                    earth: {
                        ...state.earth,
                        current: state.earth.current + state.earth.quantity
                    }
                };
            }
            else if (action.payload === 'air') {
                return {
                    ...state,
                    air: {
                        ...state.air,
                        current: state.air.current + state.air.quantity
                    }
                }
            }
            else {
                return state;
            }
        case INCREASE_SPEED:
            if (action.payload === 'fire' && state.fire.current >= state.fire.speedCost) {
                return {
                    ...state,
                    fire: {
                        ...state.fire,
                        current: state.fire.current - state.fire.speedCost,
                        speed: state.fire.speed + 1,
                        speedCost: state.fire.speedCost * (state.fire.speed + 2)
                    }
                };
            }
            else if (action.payload === 'water' && state.water.current >= state.water.speedCost) {
                return {
                    ...state,
                    water: {
                        ...state.water,
                        current: state.water.current - state.water.speedCost,
                        speed: state.water.speed + 1,
                        speedCost: state.water.speedCost * (state.water.speed + 2)
                    }
                };
            }
            else if (action.payload === 'earth' && state.earth.current >= state.earth.speedCost) {
                return {
                    ...state,
                    earth: {
                        ...state.earth,
                        current: state.earth.current - state.earth.speedCost,
                        speed: state.earth.speed + 1,
                        speedCost: state.earth.speedCost * (state.earth.speed + 2)
                    }
                };
            }
            else if (action.payload === 'air' && state.air.current >= state.air.speedCost) {
                return {
                    ...state,
                    air: {
                        ...state.air,
                        current: state.air.current - state.air.speedCost,
                        speed: state.air.speed + 1,
                        speedCost: state.air.speedCost * (state.earth.speed + 2)
                    }
                };
            }
            else {
                return state;
            };
        case TICK_UP:
            if (action.payload === 'fire') {
                return {
                    ...state,
                    fire: {
                        ...state.fire,
                        tick: state.fire.tick + state.fire.speed
                    }
                }
            }
            else if (action.payload === 'water') {
                return {
                    ...state,
                    water: {
                        ...state.water,
                        tick: state.water.tick + state.water.speed
                    }
                }
            }
            else if (action.payload === 'earth') {
                return {
                    ...state,
                    earth: {
                        ...state.earth,
                        tick: state.earth.tick + state.earth.speed
                    }
                }
            }
            else if (action.payload === 'air') {
                return {
                    ...state,
                    air: {
                        ...state.air,
                        tick: state.air.tick + state.air.speed
                    }
                }
            }
            else {
                return state;
            };
        case TICK_RESET:
            if(action.payload === 'fire') {
                return {
                    ...state,
                    fire: {
                        ...state.fire,
                        tick: 0
                    }
                }
            }
            else if(action.payload === 'water') {
                return {
                    ...state,
                    water: {
                        ...state.water,
                        tick: 0
                    }
                }
            }
            else if(action.payload === 'earth') {
                return {
                    ...state,
                    earth: {
                        ...state.earth,
                        tick: 0
                    }
                }
            }
            else if(action.payload === 'air') {
                return {
                    ...state,
                    air: {
                        ...state.air,
                        tick: 0
                    }
                }
            }
        default:
            return state;
    }
}

export default reducer;