import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderElement = styled.header`
	height: 4.5rem;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.75rem;
	margin-bottom: 2.5rem;
`;

export const Logo = styled(Link)`
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 1.75rem;
	color: #ffffff;
	text-decoration: none;
	cursor: pointer;
`;

export const NavLinkBasket = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
	text-decoration: none;
`;

export const DivLabels = styled.div`
	display: flex;
	text-align: end;
	flex-direction: column;
`;

export const MyShoppingCart = styled.label`
	font-size: 1rem;
	font-weight: 600;
	color: #ffffff;
	cursor: pointer;
`;

export const Items = styled.label`
	font-size: 0.75rem;
	font-weight: 600;
	color: #999999;
	cursor: pointer;
`;
