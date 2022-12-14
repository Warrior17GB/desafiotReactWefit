import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import PurchaseComplete from "./pages/PurchaseComplete";

function Rotas() {
	return (
		<Routes>
			<Route path="/" element={<DefaultPage />}>
				<Route path="*" element={<Navigate to="home" />} />
				<Route index element={<Navigate to="home" />} />
				<Route path="home" element={<Home />} />
				<Route path="basket" element={<Basket />} />
				<Route
					path="purchase_complete"
					element={<PurchaseComplete />}
				/>
			</Route>
		</Routes>
	);
}

export default Rotas;
