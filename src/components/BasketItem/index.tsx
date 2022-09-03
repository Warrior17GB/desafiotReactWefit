import React from "react";
import { IProductList } from "../../@types/product";
import { useProduct } from "../../context/ProductsContext";
import {
	AmountCamp,
	BasketItemCard,
	MinusButton,
	PlusButton,
	TrashCan,
} from "./style";

function BasketItem({ movie }: { movie: IProductList }) {
	const { addProductList, removeProduct, removeTotal } = useProduct();

	return (
		<BasketItemCard>
			<img src={movie.image} alt={movie.title} />
			<div>
				<label>{movie.title}</label>
				<label>
					{`R$ ${movie.price
						.toFixed(2)
						.toString()
						.replace(".", ",")}`}
				</label>
			</div>
			<div>
				<MinusButton onClick={() => removeProduct(movie)} />
				<AmountCamp>{movie.amount}</AmountCamp>
				<PlusButton onClick={() => addProductList(movie)} />
			</div>
			<div>&nbsp;</div>
			<div>
				{`R$ ${(movie.price * movie.amount)
					.toFixed(2)
					.toString()
					.replace(".", ",")}`}
			</div>
			<div>
				<TrashCan onClick={() => removeTotal(movie)} />
			</div>
		</BasketItemCard>
	);
}

export default BasketItem;
