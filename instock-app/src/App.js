import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./pages/Warehouse/Warehouse";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseDetails from "./pages/Warehouse/WarehouseDetails";
import { useParams } from "react-router-dom";
import DetailInventoryItem from "./components/DetailInventoryItem/DetailInventoryItem";

function App() {
	const { title } = useParams();
	console.log(title);
	let current_title;
	if (title === undefined) {
		current_title = "Warehouses";
	} else {
		current_title = "Inventory";
	}
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Warehouse title={current_title} />}
					/>
					<Route
						path="/warehouse/:warehouseId"
						element={<WarehouseDetails />}
					/>
					<Route
						path="/warehouse/:warehouseId/inventory/:inventoryId"
						element={<DetailInventoryItem />}
					/>

					<Route path="/inventory" element={<Inventory />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
