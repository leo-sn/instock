import "../EditNewInventoryItem/EditNewInventoryItem.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";
import InventoryForm from "../InventoryForm/InventoryForm.js";
import Select from "react-select";

function EditNewInventoryItem(props) {
  let navigate = useNavigate();
  let { inventoryId } = useParams();
  const cat = new Set(
    props.inventoryList.map((i) => {
      return i.category;
    })
  );
  //console.log(inventoryId);
  const arr_cat_uniq = Array.from(cat);
  const cat_val_label = arr_cat_uniq.map((i) => {
    return { value: i, label: i };
  });
  const ware = new Set(
    props.inventoryList.map((i) => {
      return i.warehouseName;
    })
  );
  const arr_ware_uniq = Array.from(ware);
  const warehouse_val_label = arr_ware_uniq.map((i) => {
    return { value: i, label: i };
  });

  const [inventoryitem, setInventory] = useState({
    warehouseName: "",
    itemName: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
  });

  const onInputChange = (e) => {
    //console.log(e);
    setInventory({ ...inventoryitem, [e.target.name]: e.target.value });
  };
  //console.log(inventoryitem);

  useEffect(() => {
    loadinventory();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    //add both inputs together
    const toSubmitData = {
      warehouseName: inventoryitem.warehouseName,
      itemName: inventoryitem.itemName,
      description: inventoryitem.description,
      category: inventoryitem.category,
      status: inventoryitem.status,
      quantity: inventoryitem.quantity,
    };

    //console.log(e);
    await axios.put(
      `http://localhost:3030/inventory/${inventoryId}`,
      toSubmitData
    );
    navigate("/");
  };

  const loadinventory = async () => {
    const result = await axios.get(
      `http://localhost:3030/inventory/${inventoryId}`
    );
    const inventoryData = {
      warehouseName: result.data.warehouseName,
      itemName: result.data.itemName,
      description: result.data.description,
      category: result.data.category,
      status: result.data.status,
      quantity: result.data.quantity,
    };
    setInventory(inventoryData);
  };
  const [stockstatus, setStockStatus] = useState("In Stock");
  const handleChange = (event) => {
    //console.log(event.target.value);
    setStockStatus(event.target.value);
  };
  return (
    <>
      <form className="addinventory">
        <div className="addinventory__header">
          <img
            src={backarrow}
            className="addinventory__header--backarrow"
            alt="backarrow"
          ></img>
          <h1 className="addinventory__header--title">EDIT INVENTORY ITEM</h1>
        </div>
        <div className="addinventory__formbody">
          <div className="addinventory__form1">
            <label className="addinventory__form1--label">Item Name</label>
            <input
              placeholder="Item Name"
              name="itemName"
              value={inventoryitem.itemName}
              onChange={(e) => onInputChange(e)}
              className="addinventory__form1--input"
            ></input>
            <label className="addinventory__form1--label">Description</label>
            <input
              placeholder="Please enter a brief item description"
              className="addinventory__form1--inputdesc"
              name="description"
              value={inventoryitem.description}
              onChange={(e) => onInputChange(e)}
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
                  value={inventoryitem.status}
                  checked={stockstatus === "In Stock"}
                  onChange={handleChange}
                ></input>
                 <label for="html">In Stock</label>
                <input
                  type="radio"
                  id="radbuttonoutstock"
                  name="status"
                  value={inventoryitem.status}
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
              name="quantity"
              value={inventoryitem.quantity}
              onChange={(e) => onInputChange(e)}
            ></input>
            <div className="addinventory__form2--labelinputpair">
              <label className="addinventory__form2--label">Warehouse</label>
              <Select
                options={warehouse_val_label}
                className="addinventory__form2--test"
              />
            </div>
          </div>
        </div>
        <div className="addinventory__footer">
          <button className="addinventory__footer--button1">Cancel</button>

          <button type="submit" className="addinventory__footer--button2">
            + Edit Item
          </button>
        </div>
      </form>
    </>
  );
}
export default EditNewInventoryItem;
