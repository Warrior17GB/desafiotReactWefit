import React from "react";
import {
	HeaderElement,
	Logo,
	NavLinkBasket,
	DivLabels,
	MyShoppingCart,
	Items,
} from "./style";

export function Header() {
	return (
		<HeaderElement>
			<Logo to="/home">WeMovies</Logo>

			<NavLinkBasket to="/basket">
				<DivLabels>
					<MyShoppingCart>Meu Carrinho</MyShoppingCart>
					<Items>0 itens</Items>
				</DivLabels>
				<img src="/images/basketIcon.svg" alt="Cesta de compras" />
			</NavLinkBasket>
		</HeaderElement>
	);
}
