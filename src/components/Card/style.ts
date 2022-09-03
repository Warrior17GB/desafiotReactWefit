import styled from "styled-components";

export const CardItem = styled.div`
	padding: 0.75rem;
	border-radius: 4px;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const Poster = styled.img`
	height: 60%;
	width: 65%;
	object-fit: contain;
`;

export const Title = styled.label`
	width: 100%;
	text-align: center;
	font-size: 0.75rem;
	font-weight: 700;
`;

export const Price = styled.label`
	width: 100%;
	text-align: left;
	font-size: 0.65rem;
	font-weight: 700;
`;

export const ButtonAdd = styled.button`
	width: 100%;
	height: 2.5rem;
	border: none;
	cursor: pointer !important;
	background-color: #009edd;
	border-radius: 4px;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 0.5rem;

	* {
		cursor: pointer !important;
	}
`;

export const IconAddItem = styled.img``;

export const AddOne = styled.label`
	font-size: 0.75rem;
	font-weight: 400;
	color: #ffffff;
	margin-left: 0.5rem;
`;

export const ButtonText = styled.label`
	width: 100%;
	text-align: right;
	font-size: 0.75rem;
	font-weight: 700;
	color: #ffffff;
	white-space: nowrap;
`;
