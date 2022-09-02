import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home";

function Rotas() {
	return (
		<Routes>
			<Route path="/" element={<DefaultPage />}>
				<Route path="*" element={<Navigate to="home" />} />
				<Route index element={<Navigate to="home" />} />
				<Route path="home" element={<Home />} />
				<Route path="basket" element={<>"basket"</>} />
				<Route
					path="purchase_complete"
					element={<>"purchase_complete"</>}
				/>
			</Route>
		</Routes>
	);
}

export default Rotas;
