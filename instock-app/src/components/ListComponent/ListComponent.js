import "../ListComponent/ListComponent.scss";
import { Link } from "react-router-dom";
import del from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import sort from "../../assets/icons/sort-24px.svg";

function InventoryListComponent(props) {
  //console.log(props.listitems);
  const inv_td = props.listitems.map((i) => {
    return (
      <div key={i.id} className="inventory_listitem_td__text">
        <p>{i.itemName}</p>
        <p>{i.category}</p>
        <p>{i.status}</p>
        <p>{i.quantity}</p>
        <p>{i.warehouseName}</p>
      </div>
    );
  });

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
          <div className="inventory_listitem_td__texttitlepair">
            <img
              src={sort}
              className="inventory_listitem_td__texttitlepair--sort"
            ></img>
            <h4 className="inventory_listitem_td__texttitlepair--title">
              INVENTORY ITEM
            </h4>
          </div>

          <div className="inventory_listitem_td__texttitlepair">
            <img
              src={sort}
              className="inventory_listitem_td__texttitlepair--sort"
            ></img>
            <h4 className="inventory_listitem_td__texttitlepair--title">
              CATEGORY
            </h4>
          </div>
          <div className="inventory_listitem_td__texttitlepair">
            <img
              src={sort}
              className="inventory_listitem_td__texttitlepair--sort"
            ></img>
            <h4 className="inventory_listitem_td__texttitlepair--title">
              STATUS
            </h4>
          </div>
          <div className="inventory_listitem_td__texttitlepair">
            <img
              src={sort}
              className="inventory_listitem_td__texttitlepair--sort"
            ></img>
            <h4 className="inventory_listitem_td__texttitlepair--title">QTY</h4>
          </div>
          <div className="inventory_listitem_td__texttitlepair">
            <img
              src={sort}
              className="inventory_listitem_td__texttitlepair--sort"
            ></img>
            <h4 className="inventory_listitem_td__texttitlepair--title">
              WAREHOUSE
            </h4>
          </div>
          <div className="inventory_listitem_td__texttitlepair">
            <h4 className="inventory_listitem_td__texttitlepair--title">
              ACTIONS
            </h4>
          </div>

          <h4>INVENTORY ITEM</h4>
          <h4>CATEGORY</h4>
          <h4>STATUS</h4>
          <h4>QTY</h4>
          <h4>WAREHOUSE</h4>
        </div>
        {inv_td}
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
              someitemname
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
