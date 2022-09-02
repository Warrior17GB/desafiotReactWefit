import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { OutletPage } from "./style";

function DefaultPage() {
	return (
		<OutletPage>
			<Header />
			<div>
				<Outlet />
			</div>
		</OutletPage>
	);
}

export default DefaultPage;
