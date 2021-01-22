import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import {
  reduceEditAnimal,
  reduceUserAuthenticated,
  reduceIsDonor,
} from "./reducer";

const reducer = combineReducers({
  animal: reduceEditAnimal,
  auth: reduceUserAuthenticated,
  isDonor: reduceIsDonor,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
