import React from "react";
import { IProduct } from "../../@types/product";
import { useProduct } from "../../context/ProductsContext";
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

export function Card({ movie }: { movie: IProduct }) {
	const { addProductList } = useProduct();

	return (
		<CardItem>
			<Poster src={movie.image} alt={movie.title} />
			<Title>{movie.title}</Title>
			<Price>
				{`R$ ${movie.price.toFixed(2).toString().replace(".", ",")}`}
			</Price>
			<ButtonAdd onClick={() => addProductList(movie)}>
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
