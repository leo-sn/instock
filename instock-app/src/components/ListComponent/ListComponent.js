import "../ListComponent/ListComponent.scss";
import { Link } from "react-router-dom";
import del from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import "../ListComponent/ListComponent.scss";

function InventoryListComponent(props) {
  //1. add delete function
  function deleteInventoryItem(id) {
    console.log(id);
  }

  //2. add edit function
  function editInventoryItem(id) {
    console.log(id);
  }

  console.log(props.listitems);

  return (
    <>
      <div className="inventory_listitem_td">
        <div className="inventory_listitem_td__text">
          <p>Placeholder1_inventoryitem</p>
          <p>Placeholder1_category</p>
          <p>Placeholder1_status</p>
          <p>Placeholder1_qty</p>
          <p>Placeholder1_warehouse</p>
        </div>

        <div className="inventory_listitem_td__actionButtons">
          <a
            onClick={() => {
              deleteInventoryItem("83433026-ca32-4c6d-bd86-a39ee8b7303e");
            }}
            className="inventory_listitem_td__actionButtons--deletebutton"
          >
            <img
              className="inventory_listitem_td__actionButtons--delete"
              src={del}
            ></img>
          </a>
          <a
            onClick={() => {
              editInventoryItem("83433026-ca32-4c6d-bd86-a39ee8b7303e");
            }}
            className="inventory_listitem_td__actionButtons--editbutton"
          >
            <img
              className="inventory_listitem_td__actionButtons--edit"
              src={edit}
            ></img>
          </a>
        </div>
      </div>
      <div className="inventory_listitem">
        <div className="inventory_listitem__text">
          <p>Placeholder1_inventoryitem</p>
          <p>Placeholder1_category</p>
          <p>Placeholder1_status</p>
          <p>Placeholder1_qty</p>
          <p>Placeholder1_warehouse</p>
        </div>

        <div className="inventory_listitem__actionButtons">
          <a
            onClick={() => {
              deleteInventoryItem("83433026-ca32-4c6d-bd86-a39ee8b7303e");
            }}
            className="inventory_listitem__actionButtons--deletebutton"
          >
            <img
              className="inventory_listitem_td__actionButtons--delete"
              src={del}
            ></img>
          </a>
          <a
            onClick={() => {
              editInventoryItem("83433026-ca32-4c6d-bd86-a39ee8b7303e");
            }}
            className="inventory_listitem__actionButtons--editbutton"
          >
            <img
              className="inventory_listitem__actionButtons--edit"
              src={edit}
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default InventoryListComponent;
