import React from "react";
import Rotas from "./Routes";
import styled from "styled-components";
import "./styles/global.css";
import { ProductProvider } from "./context/ProductsContext";

function App() {
	const Div = styled.div`
		background-color: #2f2e41;
		width: 100vw;
		height: 100vh;
		padding: 1rem 25% 2.5rem;
	`;

	return (
		<ProductProvider>
			<Div>
				<Rotas />
			</Div>
		</ProductProvider>
	);
}

export default App;
