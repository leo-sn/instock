import "../AddNewInventoryItem/AddNewInventoryItem.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";

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

  function handleFormSubmit(e) {
    e.preventDefault();
    // console.log("TESTING THE ON SUBMIT HANDLE SUBMIT FUNCTION");
    // alert("I am in the submit of form");

    const toSubmitData = {
      warehouseName: e.target.warehouseName.value,
      itemName: e.target.itemName.value,
      description: e.target.description.value,
      category: e.target.category.value,
      status: e.target.status.value,
      quantity: e.target.quantity.value,
    };
    // console.log(toSubmitData);
    //console.log(e);
    axios.put(`http://localhost:3030/inventory`, toSubmitData);
  }

  return (
    <>
      <div className="addinventory">
        <div className="addinventory__header">
          <Link to={`/inventory`}>
            <img
              src={backarrow}
              className="addinventory__header--backarrow"
              alt="backarrow"
            ></img>
          </Link>
          <h1 className="addinventory__header--title">
            ADD NEW INVENTORY ITEM
          </h1>
        </div>
        <form onSubmit={handleFormSubmit} className="addinventory__formbody">
          <div className="addinventory__form">
            <div className="addinventory__form1">
              <label className="addinventory__form1--label">Item Name</label>
              <input
                placeholder="Item Name"
                name="itemName"
                className="addinventory__form1--input"
              ></input>
              <label className="addinventory__form1--label">Description</label>
              <input
                placeholder="Please enter a brief item description"
                name="description"
                className="addinventory__form1--inputdesc"
              ></input>

              <label className="addinventory__form1--label">Category</label>
              <Select
                name="category"
                options={cat_val_label}
                className="addinventory__form1--test"
              />
              {/* <input
              placeholder="Please select"
              className="addinventory__form1--input"
            ></input> */}
            </div>
            <div className="addinventory__form2">
              <div className="addinventory__form2--status">
                <div className="addinventory__form2--radiobuttons">
                  <label className="addinventory__form2--label">Status</label>
                  <br></br>
                  <input
                    type="radio"
                    id="radbuttoninstock"
                    name="status"
                    value={"In Stock"}
                    checked={stockstatus === "In Stock"}
                    onChange={handleChange}
                  ></input>
                   <label for="html">In Stock</label>
                  <input
                    type="radio"
                    id="radbuttonoutstock"
                    name="status"
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
                name="quantity"
                className="addinventory__form2--input"
              ></input>
              <div className="addinventory__form2--labelinputpair">
                <label className="addinventory__form2--label">Warehouse</label>
                <Select
                  name="warehouseName"
                  options={warehouse_val_label}
                  className="addinventory__form2--test"
                />
              </div>
            </div>
          </div>
          <div className="addinventory__footer">
            <Link to={`/inventory`}>
              <button className="addinventory__footer--button1">Cancel</button>
            </Link>
            <button type="submit" className="addinventory__footer--button2">
              + Add Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddNewInventoryItem;
