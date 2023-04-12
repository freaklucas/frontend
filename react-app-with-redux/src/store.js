import { createStore } from "react-redux";
import { cartReducer } from "./reducers/cartReducer";

const store = createStore(cartReducer);

export default store;