import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Card } from "../../components/Card";
import { ItemCards } from "./style";

function Home() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		requestProducts();
	}, []);

	const requestProducts = () => {
		Axios.get("http://localhost:5000/products")
			.then((response) => setItems(response.data))
			.catch((error) => {
				alert("Ocorreu um erro.");
				console.error(`Error message: ${error.message}`);
			});
	};

	return (
		<ItemCards>
			{items.map((item, index) => (
				<Card movie={item} key={`Card${index}`}></Card>
			))}
		</ItemCards>
	);
}

export default Home;
