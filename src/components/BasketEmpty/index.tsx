import React from "react";
import { Link } from "react-router-dom";
import { EmptyBannerDiv } from "./style";

function EmptyBanner() {
	return (
		<EmptyBannerDiv>
			<h1>Parece que não há nada por aqui :(</h1>
			<img
				src="/images/emptyBasketBackground.svg"
				alt="O carrinho não possui itens."
			/>
			<hr></hr>
			<Link to="home">VOLTAR</Link>
		</EmptyBannerDiv>
	);
}

export default EmptyBanner;
