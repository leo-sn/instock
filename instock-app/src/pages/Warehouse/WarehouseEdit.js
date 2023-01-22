import EditWarehouse from "../../components/Warehouse/EditWarehouse/EditWarehouse";
import Footer from "../../components/Warehouse/Footer/Footer";
import Header from "../../components/Warehouse/Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function WarehouseEdit() {
	return (
		<>
			<Header />
			<EditWarehouse />
			<Footer />
		</>
	);
}

export default WarehouseEdit;
