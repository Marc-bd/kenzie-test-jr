import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from "redux";
import valuesReducer from "./modules/values/reducer";

import thunk from "redux-thunk";

const reducer = combineReducers({ values: valuesReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
