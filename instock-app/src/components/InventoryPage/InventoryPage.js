import "../InventoryPage/InventoryPage.scss";
import ListComponent from "../ListComponent/ListComponent.js";
import { useState, useEffect } from "react";
import inventory_listitems from "../../assets/datatest/inventories.json"; //local test data
import Search from "../Warehouse/WarehouseList/Search/Search.js";
//import DeleteInventoryItem from "../../components/InventoryDeleteModal/InventoryDeleteModal.js";

function InventoryPage(props) {
  console.log(props);
  console.log(props.title);
  //1. direct to "Add New Inventory Item" page when user clicks on "+Add New Item" button

  //2. set list items from API (test with local test data)
  //const [listitems, setListitems] = useState([]);
  //console.log(inventory_listitems);
  //setListitems(inventory_listitems);
  const listitems = inventory_listitems;
  console.log(listitems);

  //3. set item id for delete (test)
  const delid = "a193a6a7-42ab-4182-97dc-555ee85e7486";
  //const [deleteID, setDeleteID] = useState(" ");

  //4. set item id for edit (test)
  let edid = "a193a6a7-42ab-4182-97dc-555ee85e7486";
  // const [editID, setEditID] = useState(" ");

  return (
    <>
      <div className="page_box">
        <Search title={props.title} />
        <ListComponent listitems={listitems} />
        {/* <DeleteInventoryItem deleteitem={delid} /> */}
      </div>
    </>
  );
}
export default InventoryPage;
