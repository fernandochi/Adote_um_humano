import { combineReducers, createStore } from "redux";
import { reduceEditAnimal } from "./reducer";
const reducer = combineReducers({
  animal: reduceEditAnimal,
});

const store = createStore(reducer);

export default store;
