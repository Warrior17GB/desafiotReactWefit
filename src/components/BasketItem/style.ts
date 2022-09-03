import styled from "styled-components";

export const BasketItemCard = styled.div`
	height: 8rem;
	padding: 0.5rem 0;
	display: grid;
	grid-template-columns: 20% 22.5% 20% 8.5% 17% 12%;
	align-items: center;

	img {
		height: 100%;
		width: 5.5rem;
	}

	> div:nth-child(2) {
		display: flex;
		flex-direction: column;
		font-weight: 700;
		font-size: 1rem;
		color: #2f2e41;
	}

	> div:nth-child(3) {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	> div:nth-child(5) {
		display: flex;
		flex-direction: column;
		font-weight: 700;
		font-size: 1rem;
		color: #2f2e41;
	}

	> div:nth-child(6) {
		display: flex;
		justify-content: center;
	}
`;

export const MinusButton = styled.button`
	background: url("/images/minusIcon.svg");
	background-position: center;
	background-repeat: no-repeat;
	width: 1.5rem;
	height: 1.5rem;
	border: none;
	cursor: pointer;
`;

export const AmountCamp = styled.div`
	width: 3rem;
	height: 1.5rem;
	padding: 0 3px;
	border: 1px solid #d9d9d9;
	border-radius: 4px;
	margin: 0 0.5rem;
`;

export const PlusButton = styled.button`
	background: url("/images/plusIcon.svg");
	background-position: center;
	background-repeat: no-repeat;
	width: 1.5rem;
	height: 1.5rem;
	border: none;
	cursor: pointer;
`;

export const TrashCan = styled.button`
	background: url("/images/trashCan.svg");
	width: 14px;
	height: 18px;
	border: none;
	cursor: pointer;
`;
