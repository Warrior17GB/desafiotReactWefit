import styled from "styled-components";

export const OutletPage = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;

	> div {
		width: 100%;
		height: calc(100% - 7rem);
		min-height: 35rem;
	}
`;
