import React from "react";
import { useProduct } from "../../context/ProductsContext";
import BasketItem from "../BasketItem";
import { BasketWrapper, FinishPurchase, Header, List, Summary } from "./style";

function BasketItems() {
	const { products, productsTotal } = useProduct();
	return (
		<BasketWrapper>
			<Header>
				<label>&nbsp;</label>
				<label>PRODUTO</label>
				<label>QTD</label>
				<label>&nbsp;</label>
				<label>SUBTOTAL</label>
				<label>&nbsp;</label>
			</Header>

			<List>
				{products.map((product) => (
					<BasketItem movie={product}></BasketItem>
				))}
			</List>

			<hr></hr>
			<Summary>
				<FinishPurchase to="/purchase_complete">
					FINALIZAR PEDIDO
				</FinishPurchase>
				<div>
					<label>TOTAL</label>
					<label>{`R$ ${productsTotal.toFixed(2)}`}</label>
				</div>
			</Summary>
		</BasketWrapper>
	);
}

export default BasketItems;
