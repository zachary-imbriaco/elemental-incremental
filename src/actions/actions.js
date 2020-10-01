export const ADD_FIRE = 'ADD_FIRE';

export function addFire(currentFire) {
    console.log(currentFire)
    return {
        type: ADD_FIRE,
        payload: currentFire + 1
    }
}
