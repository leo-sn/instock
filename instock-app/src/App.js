import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./pages/Warehouse/Warehouse";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseDetails from "./pages/Warehouse/WarehouseDetails";
import { useParams } from "react-router-dom";
import DetailInventoryItem from "./components/DetailInventoryItem/DetailInventoryItem";
import WarehouseEdit from "./pages/Warehouse/WarehouseEdit";
import WarehouseDelete from "./pages/Warehouse/WarehouseDelete";

function App() {
	const { title } = useParams();
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

					<Route
						path="/warehouse/:warehouseId/edit"
						element={<WarehouseEdit />}
					/>

					<Route
						path="/warehouse/:warehouseId/delete"
						element={<WarehouseDelete />}
					></Route>

					<Route path="/inventory" element={<Inventory />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
