import "../ListComponent/ListComponent.scss";
import ListComponent from "../ListComponent/ListComponent.js";
import { useState, useEffect } from "react";
import inventory_listitems from "../../assets/datatest/inventories.json";
import DeleteInventoryItem from "../../components/InventoryDeleteModal/InventoryDeleteModal.js";

function InventoryPage() {
  //add new inventory item modal

  const [listitems, setListitems] = useState([]);
  console.log(inventory_listitems);
  setListitems(inventory_listitems);
  return (
    <>
      <div className="page_box">
        <ListComponent listitems={listitems} />
        <DeleteInventoryItem deleteitem={id} />
      </div>
    </>
  );
}
export default InventoryPage;
