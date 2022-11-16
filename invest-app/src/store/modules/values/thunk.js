import { addValues } from "./actions";

export const addValuesThunk = (data) => {
	return (dispatch) => {
		const valuesResponse = Object.values(data);
		const valuesFormated = [];

		valuesResponse.forEach((value) => {
			valuesFormated.push(
				parseInt(value).toLocaleString("pt-br", {
					style: "currency",
					currency: "BRL",
				})
			);
		});

		const newData = [
			{
				amanhã: valuesFormated[0],
				"em 15 dias": valuesFormated[1],
				"em 30 dias": valuesFormated[2],
				"em 90 dias": valuesFormated[3],
			},
		];

		dispatch(addValues(newData));
	};
};
