import {DECREMENT_INVENTORY} from "./actionTypes"

export const decrementInventory = (itemName) => {
    return {
        type: DECREMENT_INVENTORY,
        payload: itemName
    }
}