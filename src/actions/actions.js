export const ADD_FIRE = 'ADD_FIRE';
export const ADD_WATER = 'ADD_WATER';
export const ADD_EARTH = 'ADD_EARTH';
export const ADD_AIR = 'ADD_AIR';

export function addFire(currentFire) {
    return {
        type: ADD_FIRE,
        payload: currentFire + 1
    }
}

export function addWater(currentWater) {
    return {
        type: ADD_WATER,
        payload: currentWater + 1
    }
}

export function addEarth(currentEarth) {
    return {
        type: ADD_EARTH,
        payload: currentEarth + 1
    }
}

export function addAir(currentAir) {
    return {
        type: ADD_AIR,
        payload: currentAir + 1
    }
}
