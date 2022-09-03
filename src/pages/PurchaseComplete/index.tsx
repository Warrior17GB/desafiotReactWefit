import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductsContext";
import { PurchaseCompleteWrapper, ReturnButton } from "./style";

function PurchaseComplete() {
	const { finishPurchase } = useProduct();

	useEffect(() => {
		finishPurchase();
	}, []);

	return (
		<PurchaseCompleteWrapper>
			<h1>Compra realizada com sucesso!</h1>
			<img src="/images/purchaseComplete.svg" alt="Compra concluida!" />
			<ReturnButton to="/home">VOLTAR</ReturnButton>
		</PurchaseCompleteWrapper>
	);
}

export default PurchaseComplete;
