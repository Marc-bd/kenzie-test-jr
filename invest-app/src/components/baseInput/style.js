import styled, { css } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 80px;
	width: 75%;

	.errors {
		font-size: 0.8rem;
		color: var(--red);
	}

	.label {
		font-size: 0.8rem;
	}

	.legend {
		font-size: 0.7rem;
		color: var(--grey);
	}

	@media (min-width: 1024px) {
		.label {
			font-size: 1.1rem;
		}

		.legend {
			font-size: 0.9rem;
		}
	}
`;

export const InputContainer = styled.div`
	background: #ffff;
	border-radius: 10px;
	border: 2px solid #f7f9fa;
	color: #000;
	gap: 6px;
	width: 100%;
	display: flex;
	border: 1px solid var(--border);
	border-radius: 5px;
	height: 35px;
	align-items: center;
	font-size: 16px;

	${(props) =>
		props.errors &&
		css`
			border-color: var(--red);
		`}

	&:hover {
		border-color: var(--blue);
	}

	p {
		margin-left: 5px;
	}

	input {
		border: none;
		font-size: 16px;
		width: 80%;

		::placeholder {
			color: var(--grey);
		}
	}

	@media (min-width: 1024px) {
		width: 80%;
		border: 2px solid var(--border);
	}
`;
