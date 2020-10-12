export const INCREMENT_ELEMENT = 'INCREMENT_ELEMENT';
export const INCREASE_SPEED = 'INCREASE_SPEED';
export const ADD_ITEM = 'ADD_ITEM';

export function incrementElement(element) {
    return {
        type: INCREMENT_ELEMENT,
        payload: element
    }
}

export function increaseSpeed(element) {
    return {
        type: INCREASE_SPEED,
        payload: element
    }
}


export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    }
}