import "../ListComponent/ListComponent.scss";
import ListComponent from "../ListComponent/ListComponent.js";
import { useState, useEffect } from "react";
import inventory_listitems from "../../assets/datatest/inventories.json";

function InventoryPage() {
  const [listitems, setListitems] = useState([]);
  console.log(inventory_listitems);
  return (
    <>
      <div className="page_box">
        <ListComponent listitems={listitems} />
      </div>
    </>
  );
}
export default InventoryPage;
