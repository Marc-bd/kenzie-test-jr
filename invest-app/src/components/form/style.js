import styled from "styled-components";

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: auto;
	margin-top: 16px;

	@media (min-width: 1024px) {
		gap: 30px;
		padding-top: 25px;
	}
`;
