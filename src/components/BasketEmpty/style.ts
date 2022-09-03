import styled from "styled-components";

export const EmptyBannerDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4rem 9rem;
	background-color: #ffffff;
	border-radius: 4px;

	h1 {
		font-size: 1.25rem;
		font-weight: 700;
		color: #2f2e41;
		margin-bottom: 3.25rem;
	}

	hr {
		width: 100%;
		height: 2px;
		border: 1px solid #3f3d56;
	}

	a {
		width: 11rem;
		height: 2.5rem;
		background-color: #009edd;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 700;
		color: #ffffff;
		margin-top: 2rem;
	}
`;
