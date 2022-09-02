import React from "react";
import {
	AddOne,
	ButtonAdd,
	ButtonText,
	CardItem,
	IconAddItem,
	Poster,
	Price,
	Title,
} from "./style";

interface Movie {
	id: number;
	image: string;
	price: number;
	title: string;
}

export function Card({ movie }: { movie: Movie }) {
	return (
		<CardItem>
			<Poster src={movie.image} alt={movie.title} />
			<Title>{movie.title}</Title>
			<Price>
				{`R$ ${movie.price.toFixed(2).toString().replace(".", ",")}`}
			</Price>
			<ButtonAdd>
				<IconAddItem
					src="/images/addBasketIcon.svg"
					alt="Adicionar ao carrinho"
				/>
				<AddOne>1</AddOne>
				<ButtonText>ADICIONAR AO CARRINHO</ButtonText>
			</ButtonAdd>
		</CardItem>
	);
}
