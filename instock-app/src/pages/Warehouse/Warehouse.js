import Header from "../../components/Warehouse/Header/Header";
import WarehouseList from "../../components/Warehouse/WarehouseList/WarehouseList";
import axios from "axios";
import { useState, useEffect } from "react";

function Warehouse() {
	return (
		<>
			<Header />
			<WarehouseList />
		</>
	);
}

export default Warehouse;
