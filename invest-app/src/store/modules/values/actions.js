import { ADD_VALUES } from "./actionTypes";

export const addValues = (values) => {
	return {
		type: ADD_VALUES,
		payload: values,
	};
};
