import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./pages/Warehouse/Warehouse";
import Inventory from "./pages/Inventory/Inventory";
import AddNewInventoryItemPage from "./pages/AddNewInventoryItemPage/AddNewInventoryItemPage";
import WarehouseDetails from "./pages/Warehouse/WarehouseDetails";
import { useParams } from "react-router-dom";
import DetailInventoryItem from "./components/DetailInventoryItem/DetailInventoryItem";
import WarehouseEdit from "./pages/Warehouse/WarehouseEdit";
import WarehouseDelete from "./pages/Warehouse/WarehouseDelete";
import WarehouseAdd from "./pages/Warehouse/WarehouseAdd.js";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import InventoryDelete from "./pages/InventoryDeleteModal/InventoryDeleteModal";

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
          <Route path="/" element={<Warehouse title={current_title} />} />
          <Route
            path="/warehouse/:warehouseId"
            element={<WarehouseDetails />}
          />
          <Route
            path="/warehouse/:warehouseId/inventory/:inventoryId"
            element={<DetailInventoryItem />}
          />

          <Route
            path="/warehouse/edit/:warehouseId"
            element={<WarehouseEdit />}
          />

          <Route path="/warehouse/add" element={<WarehouseAdd />} />

          <Route
            path="/warehouse/delete/:warehouseId"
            element={<WarehouseDelete />}
          ></Route>

          <Route
            path="/inventory"
            element={<Inventory title={current_title} />}
          />
          <Route path="/inventory/add" element={<AddNewInventoryItemPage />} />
          <Route
            path="/inventory/edit/:inventoryId"
            element={<EditInventoryPage />}
          />
          <Route
            path="/inventory/delete/:inventoryId"
            element={<InventoryDelete />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
