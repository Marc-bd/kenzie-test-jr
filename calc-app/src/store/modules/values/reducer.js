import { ADD_VALUES } from "./actionTypes";

const initialState = [];

const valuesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_VALUES:
			const values = action;
			return values;
		default:
			return state;
	}
};

export default valuesReducer;
