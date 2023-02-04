import "../AddNewInventoryItem/AddNewInventoryItem.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
//import { NavLink } from "react-router-dom";
import "../AddNewInventoryItem/AddNewInventoryItem.scss";
import dropdownarrow2 from "../../assets/icons/arrow_drop_down-24px 2.svg";
// import { Component } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";

function AddNewInventoryItem(props) {
  /////////////////////////////////////
  //console.log(props.inventoryList[1]);
  const cat = new Set(
    props.inventoryList.map((i) => {
      return i.category;
    })
  );
  //console.log(cat);

  const arr_cat_uniq = Array.from(cat);
  //console.log(arr_cat_uniq);

  const cat_val_label = arr_cat_uniq.map((i) => {
    return { value: i, label: i };
  });

  //console.log(cat_val_label);

  const ware = new Set(
    props.inventoryList.map((i) => {
      return i.warehouseName;
    })
  );

  const arr_ware_uniq = Array.from(ware);

  const warehouse_val_label = arr_ware_uniq.map((i) => {
    return { value: i, label: i };
  });
  //console.log(arr_ware_uniq);
  //console.log(ware);

  const [stockstatus, setStockStatus] = useState("Out of Stock");
  const handleChange = (event) => {
    //console.log(event.target.value);
    setStockStatus(event.target.value);
  };

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
            <Select
              options={cat_val_label}
              className="addinventory__form1--test"
            />
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
              <Select
                options={warehouse_val_label}
                className="addinventory__form2--test"
              />
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
export default AddNewInventoryItem;
