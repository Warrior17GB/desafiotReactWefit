import React from "react";
import EmptyBanner from "../../components/BasketEmpty";
import BasketItems from "../../components/BasketItems";
import { useProduct } from "../../context/ProductsContext";

function Basket() {
	const { products } = useProduct();

	return products.length > 0 ? <BasketItems /> : <EmptyBanner />;
}

export default Basket;
