import React from "react";
import { useProduct } from "../../context/ProductsContext";
import {
	HeaderElement,
	Logo,
	NavLinkBasket,
	DivLabels,
	MyShoppingCart,
	Items,
} from "./style";

export function Header() {
	const { productsCount } = useProduct();

	return (
		<HeaderElement>
			<Logo to="/home">WeMovies</Logo>

			<NavLinkBasket to="/basket">
				<DivLabels>
					<MyShoppingCart>Meu Carrinho</MyShoppingCart>
					<Items>{`${productsCount} itens`}</Items>
				</DivLabels>
				<img src="/images/basketIcon.svg" alt="Cesta de compras" />
			</NavLinkBasket>
		</HeaderElement>
	);
}
