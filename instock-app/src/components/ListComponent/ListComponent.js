import "../ListComponent/ListComponent.scss";

import del from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import "../ListComponent/ListComponent.scss";
import sort from "../../assets/icons/sort-24px.svg";
function InventoryListComponent(props) {
  ////MOBILE VIEW REPEATING DIV////
  const inv = props.listitems.map((i) => {
    return (
      <>
        <div className="inventory_listitem">
          <div className="inventory_listitem__text">
            <div className="inventory_listitem__textpair1">
              <h4 className="inventory_listitem__textpair1--uppertext">
                INVENTORY ITEM
              </h4>
              <h3 className="inventory_listitem__textpair1--lowertext">
                {i.itemName}
              </h3>
            </div>
            <div className="inventory_listitem__textpair2">
              <h4 className="inventory_listitem__textpair2--uppertext">
                CATEGORY
              </h4>
              <p className="inventory_listitem__textpair2--lowertext">
                {i.category}
              </p>
            </div>
            <div className="inventory_listitem__textpair3">
              <h4 className="inventory_listitem__textpair3--uppertext">
                STATUS
              </h4>
              <p className="inventory_listitem__textpair3--lowertext">
                {i.status}
              </p>
            </div>
            <div className="inventory_listitem__textpair4">
              <h4 className="inventory_listitem__textpair4--uppertext">QTY</h4>
              <p className="inventory_listitem__textpair4--lowertext">
                {i.quantity}
              </p>
            </div>
            <div className="inventory_listitem__textpair5">
              <h4 className="inventory_listitem__textpair5--uppertext">
                WAREHOUSE
              </h4>
              <p className="inventory_listitem__textpair5--lowertext">
                {i.warehouseName}
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
  });

  ////////////// TABLET/DESKTOP VIEW REPEATING PART//////////////////////

  const inv_td = props.listitems.map((i) => {
    if (i.status == "In Stock") {
      console.log("this is instock");
      console.log(i.id);
      var statusclass = "inventory_listitem_td__text--ptagparentstatus green";
      console.log(statusclass);
    } else {
      console.log("this is out of stock");
      console.log(i.id);
      var statusclass = "inventory_listitem_td__text--ptagparentstatus red";
      console.log(statusclass);
    }

    return (
      <div key={i.id} className="inventory_listitem_td__text">
        <div className="inventory_listitem_td__text--ptagparentbig">
          <p className="inventory_listitem_td__text--ptagbig">{i.itemName}</p>
        </div>
        <div className="inventory_listitem_td__text--ptagparent">
          <p className="inventory_listitem_td__text--ptag">{i.category}</p>
        </div>
        <div className={statusclass}>
          <p className="inventory_listitem_td__text--ptagstatus">{i.status}</p>
        </div>
        <div className="inventory_listitem_td__text--ptagparentsmall">
          <p className="inventory_listitem_td__text--ptagsmall">{i.quantity}</p>
        </div>
        <div className="inventory_listitem_td__text--ptagparentbig">
          <p className="inventory_listitem_td__text--ptagbig">
            {i.warehouseName}
          </p>
        </div>
        <div className="inventory_listitem_td__actionButtons">
          <a className="inventory_listitem_td__actionButtons--deletebutton">
            <img
              className="inventory_listitem_td__actionButtons--delete"
              src={del}
            ></img>
          </a>
          <a className="inventory_listitem_td__actionButtons--editbutton">
            <img
              className="inventory_listitem_td__actionButtons--edit"
              src={edit}
            ></img>
          </a>
        </div>
      </div>
    );
  });
  ////////////// TABLET/DESKTOP VIEW HEADER PART//////////////////////
  return (
    <>
      <div className="inventory_listitem_td">
        <div className="inventory_listitem_td__texttitle">
          <div className="inventory_listitem_td__texttitlepairbig">
            <img
              src={sort}
              className="inventory_listitem_td__texttitlepairbig--sort"
            ></img>
            <h4 className="inventory_listitem_td__texttitlepairbig--title">
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
          <div className="inventory_listitem_td__texttitlepairsmall">
            <img
              src={sort}
              className="inventory_listitem_td__texttitlepairsmall--sort"
            ></img>
            <h4 className="inventory_listitem_td__texttitlepairsmall--title">
              QTY
            </h4>
          </div>
          <div className="inventory_listitem_td__texttitlepairbig">
            <img
              src={sort}
              className="inventory_listitem_td__texttitlepairbig--sort"
            ></img>
            <h4 className="inventory_listitem_td__texttitlepairbig--title">
              WAREHOUSE
            </h4>
          </div>
          <div className="inventory_listitem_td__texttitlepair">
            <h4 className="inventory_listitem_td__texttitlepair--title">
              ACTIONS
            </h4>
          </div>
        </div>
        <div className="inventory_listitem_td__textcontainer">{inv_td}</div>

        {/* SAMPLE ON CLICK FOR TD VIEW        <div className="inventory_listitem_td__actionButtons">
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
        </div> */}
      </div>

      {/* ARCHIVED MOBILE PART    <div className="inventory_listitem">
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
      </div> */}
      {inv}
    </>
  );
}

export default InventoryListComponent;
