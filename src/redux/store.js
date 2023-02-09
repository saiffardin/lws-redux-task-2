import {createStore} from "redux";
import inventoryReducer from "./Inventory/inventoryReducer";


const store = createStore(inventoryReducer)

export default store;