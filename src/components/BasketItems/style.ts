import styled from "styled-components";
import { Link } from "react-router-dom";

export const BasketWrapper = styled.div`
	background-color: #ffffff;
	border-radius: 4px;
	padding: 0.75rem;
	display: flex;
	flex-direction: column;
	max-height: 100%;

	hr {
		margin-top: 1.5rem;
		width: 100%;
		border: 1px solid #999999;
	}
`;

export const Header = styled.div`
	width: calc(100% - 10px);
	height: 2.5rem;
	display: grid;
	grid-template-columns: 20% 22.5% 20% 8.5% 17% 12%;
	align-items: center;
	margin-bottom: 0.75rem;

	> label {
		font-size: 1rem;
		font-weight: 700;
		color: #999999;
	}

	> label:nth-child(3) {
		text-align: center;
	}
`;

export const List = styled.div`
	width: 100%;
	max-height: 30rem;
	overflow-y: scroll;

	::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 10px;
		border-radius: 4px;
		background-color: #99999955;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: #999999;
	}
`;

export const Summary = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	padding-top: 0.75rem;

	button {
	}

	> div {
		label:nth-child(1) {
			font-weight: 700;
			font-size: 0.9rem;
			color: #999999;
			margin-right: 0.3rem;
		}

		label:nth-child(2) {
			font-weight: 700;
			font-size: 1.5rem;
			color: #2f2e41;
		}
	}
`;

export const FinishPurchase = styled(Link)`
	border: none;
	padding: 0.75rem 1.5rem;
	background-color: #009edd;
	border-radius: 4px;
	color: #ffffff;
	font-weight: 700;
	font-size: 0.9rem;
	cursor: pointer;
	text-decoration: none;
`;
