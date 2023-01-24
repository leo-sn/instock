import Header from "../../components/Warehouse/Header/Header";
import WarehouseList from "../../components/Warehouse/WarehouseList/WarehouseList";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../../components/Warehouse/Footer/Footer";

function Warehouse(props) {
	const title = props.title;
	const [warehouseList, setwarehouseList] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3030/warehouse").then((res) => {
			setwarehouseList(res.data);
		});
	}, []);
	

	return (
		<>
			<Header />
			<WarehouseList warehouseList={warehouseList} title={title} />
			<Footer />
		</>
	);
}

export default Warehouse;
