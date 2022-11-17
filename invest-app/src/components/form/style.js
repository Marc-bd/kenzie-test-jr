import styled from "styled-components";

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: auto;
	margin-top: 16px;

	button {
		margin: 12px;
		padding: 7px;
		border-radius: 6px;
		border: none;
		cursor: pointer;
		font-weight: 700;
	}

	@media (min-width: 425px) {
	}

	@media (min-width: 1024px) {
		gap: 30px;
		padding-top: 25px;

		button {
			padding: 7px;
			border-radius: 6px;
			border: none;
			cursor: pointer;
			font-weight: 700;
			width: 100px;
			height: 55px;
		}
	}
`;
