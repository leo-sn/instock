import "../EditNewInventoryItem/EditNewInventoryItem.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import { NavLink } from "react-router-dom";
import InventoryForm from "../InventoryForm/InventoryForm.js";

function EditNewInventoryItem() {
  //1. create addNewInventoryItem() function that will update API to add new item info given by user

  return (
    <>
      <div className="addinventory">
        <div className="addinventory__header">
          <img
            src={backarrow}
            className="addinventory__header--backarrow"
            alt="backarrow"
          ></img>
          <h1 className="addinventory__header--title">
            ADD NEW INVENTORY ITEM
          </h1>
        </div>
        <div className="addinventory__formbody">
          <form className="addinventory__form1">
            <label className="addinventory__form1--label">Item Name</label>
            <input
              placeholder="Item Name"
              className="addinventory__form1--input"
            ></input>
            <label className="addinventory__form1--label">Description</label>
            <input
              placeholder="Please enter a brief item description"
              className="addinventory__form1--inputdesc"
            ></input>

            <label className="addinventory__form1--label">Category</label>
            {/* <Select
              options={cat_val_label}
              className="addinventory__form1--test"
            /> */}
            {/* <input
              placeholder="Please select"
              className="addinventory__form1--input"
            ></input> */}
          </form>
          <form className="addinventory__form2">
            <div className="addinventory__form2--status">
              <div className="addinventory__form2--radiobuttons">
                <label className="addinventory__form2--label">Status</label>
                <br></br>
                <input
                  type="radio"
                  id="radbuttoninstock"
                  name="rad1"
                  value={"In Stock"}
                  checked={stockstatus === "In Stock"}
                  onChange={handleChange}
                ></input>
                 <label for="html">In Stock</label>
                <input
                  type="radio"
                  id="radbuttonoutstock"
                  name="rad2"
                  value={"Out of Stock"}
                  checked={stockstatus === "Out of Stock"}
                  onChange={handleChange}
                ></input>
                 <label for="html">Out of Stock</label>
              </div>
            </div>
            <label className="addinventory__form2--label">Quantity</label>
            <input
              placeholder="0"
              className="addinventory__form2--input"
            ></input>
            <div className="addinventory__form2--labelinputpair">
              <label className="addinventory__form2--label">Warehouse</label>
              {/* <Select
                options={warehouse_val_label}
                className="addinventory__form2--test"
              /> */}
            </div>
          </form>
        </div>
        <div className="addinventory__footer">
          <button className="addinventory__footer--button1">Cancel</button>
          <button className="addinventory__footer--button2">+ Add Item</button>
        </div>
      </div>
    </>
  );
}
export default EditNewInventoryItem;
