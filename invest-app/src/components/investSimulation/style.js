import styled from "styled-components";

export const Background = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid var(--border);
	border-radius: 4px;

	@media (min-width: 560px) {
		display: flex;
		flex-direction: row;
	}
`;

export const ContentForm = styled.div`
	background-color: #fff;
	padding-top: 20px;
	height: 100%;

	h1 {
		font-size: 1.1rem;
		margin-left: 0.5rem;
		font-weight: 700;
	}

	@media (min-width: 560px) {
		padding: 20px 0px;
	}

	@media (min-width: 1024px) {
		width: 400px;

		h1 {
			font-size: 1.5rem;
			margin-left: 1.5rem;
		}
	}
`;

export const ContentResult = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 23px;

	.titleResult {
		width: 65%;
		border-bottom: 1px solid var(--lightblue);
	}

	h2 {
		text-transform: uppercase;
		color: var(--blue);
		font-size: 0.9rem;
		margin: 26px 0px 0px 0px;
	}

	ul {
		padding: 0px;
		margin: 0px;
	}

	li {
		color: var(--blue);
		font-size: 0.9rem;
		padding: 12px;
		text-transform: capitalize;
		font-style: italic;

		.prefix {
			font-weight: 700;
			color: var(--blueclear);
			font-style: normal;

			.value {
				color: var(--blueclear);
			}
		}
	}

	@media (min-width: 560px) {
		width: 187px;
		margin-top: 50px;
	}

	@media (min-width: 1024px) {
		width: 300px;

		margin: 90px 0px 0px 0px;
		gap: 30px;

		h2 {
			text-transform: uppercase;
			color: var(--blue);
			font-size: 1.2rem;
			margin: 26px 0px 0px 0px;
		}

		li {
			font-size: 1.1rem;
		}

		.titleResult {
			width: 65%;
			border-bottom: 3px solid var(--lightblue);
		}
	}
`;
