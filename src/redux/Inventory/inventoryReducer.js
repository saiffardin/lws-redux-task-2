import {stockedItemDetails} from "../../utils/stockedItemDetails";
import {DECREMENT_INVENTORY} from "./actionTypes";

const initialState = [...stockedItemDetails]

const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case DECREMENT_INVENTORY:
            return state.map((item) => {
                if (item.name === action.payload) {
                    return {...item, itemsRemaining: item.itemsRemaining - 1}
                }

                return item;
            })

        default:
            return state;
    }
}

export default inventoryReducer;