import "../ListComponent/ListComponent.scss";
import { Link } from "react-router-dom";
import del from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import "../ListComponent/ListComponent.scss";

function InventoryListComponent(props) {
  console.log(props.listitems);
  // const inv=props.listitems.map((i)=>{

  // })

  //*********** TESTING INVENTORY DATA ****/
  // props.listitems.map((i) => {
  //   console.log("INVENTORY ITEM " + i.itemName); //INVENTORY ITEM
  //   console.log("CATEGORY " + i.category); //CATEGORY
  //   console.log("STATUS " + i.status); //STATUS
  //   console.log("QTY " + i.quantity); //QTY
  //   console.log("WAREHOUSE " + i.warehouseName); //WAREHOUSE
  // });
  const itemname = "some inventory item name" + ">";
  console.log({ itemname });

  //1. add delete function
  function deleteInventoryItem(id) {
    console.log("this is the delete inventory item function");
  }

  //2. add edit function
  function editInventoryItem(id) {
    console.log("this is the edit inventory item function");
  }

  return (
    <>
      <div className="inventory_listitem_td">
        <div className="inventory_listitem_td__texttitle">
          <p>INVENTORY ITEM</p>
          <p>CATEGORY</p>
          <p>STATUS</p>
          <p>QTY</p>
          <p>WAREHOUSE</p>
        </div>
        <div className="inventory_listitem_td__text">
          <p>Placeholder1_inventoryitemname</p>
          <p>Placeholder1_categoryname</p>
          <p>Placeholder1_statusname</p>
          <p>Placeholder1_qtyname</p>
          <p>Placeholder1_warehousename</p>
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
          <div className="inventory_listitem__textpair1">
            <h4 className="inventory_listitem__textpair1--uppertext">
              INVENTORY ITEM
            </h4>
            <h3 className="inventory_listitem__textpair1--lowertext">
              {itemname}
            </h3>
          </div>
          <div className="inventory_listitem__textpair2">
            <h4 className="inventory_listitem__textpair2--uppertext">
              CATEGORY
            </h4>
            <p className="inventory_listitem__textpair2--lowertext">
              Placeholder1_category
            </p>
          </div>
          <div className="inventory_listitem__textpair3">
            <h4 className="inventory_listitem__textpair3--uppertext">STATUS</h4>
            <p className="inventory_listitem__textpair3--lowertext">
              Placeholder1_status
            </p>
          </div>
          <div className="inventory_listitem__textpair4">
            <h4 className="inventory_listitem__textpair4--uppertext">QTY</h4>
            <p className="inventory_listitem__textpair4--lowertext">
              Placeholder1_qty
            </p>
          </div>
          <div className="inventory_listitem__textpair5">
            <h4 className="inventory_listitem__textpair5--uppertext">
              WAREHOUSE
            </h4>
            <p className="inventory_listitem__textpair5--lowertext">
              Placeholder1_warehouse
            </p>
          </div>
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
