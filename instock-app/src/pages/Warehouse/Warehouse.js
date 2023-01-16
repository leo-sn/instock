import Header from "../../components/Warehouse/Header/Header";
import WarehouseList from "../../components/Warehouse/WarehouseList/WarehouseList";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../../components/Warehouse/Footer/Footer";

function Warehouse() {
	return (
		<>
			<Header />
			<WarehouseList />
			<Footer />
		</>
	);
}

export default Warehouse;
