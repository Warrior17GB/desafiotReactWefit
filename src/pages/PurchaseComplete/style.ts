import styled from "styled-components";
import { Link } from "react-router-dom";

export const PurchaseCompleteWrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: #ffffff;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 4rem;

	h1 {
		font-weight: 700;
		font-size: 1.25rem;
		color: #2f2e41;
	}

	img {
		margin: 1.5rem 0 1.25rem;
	}
`;

export const ReturnButton = styled(Link)`
	height: 2.5rem;
	padding: 0.75rem 3.75rem;
	color: #ffffff;
	font-weight: 700;
	font-size: 0.9rem;
	background-color: #009edd;
	border-radius: 4px;
	text-decoration: none;
`;
