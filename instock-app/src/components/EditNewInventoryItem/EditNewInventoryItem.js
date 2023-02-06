import "../EditNewInventoryItem/EditNewInventoryItem.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import InventoryForm from "../InventoryForm/InventoryForm.js";

function EditNewInventoryItem() {
  let navigate = useNavigate();
  let { inventoryId } = useParams();
  console.log(inventoryId);

  const [inventoryitem, setInventory] = useState({
    warehouseName: "",
    itemName: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
  });

  const onInputChange = (e) => {
    console.log(e);
    setInventory({ ...inventoryitem, [e.target.name]: e.target.value });
  };
  console.log(inventoryitem);

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

    console.log(e);
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
  return (
    <>
      <div className="editinventory">
        <div className="editinventory__header">
          <img
            src={backarrow}
            className="editinventory__header--backarrow"
            alt="backarrow"
          ></img>
          <h1 className="editinventory__header--title">EDIT INVENTORY ITEM</h1>
        </div>
        <div className="editinventory__formbody">
          <form className="editinventory__form1">
            <label className="editinventory__form1--label">Item Name</label>
            <input
              placeholder="Item Name"
              className="editinventory__form1--input"
            ></input>
            <label className="editinventory__form1--label">Description</label>
            <input
              placeholder="Please enter a brief item description"
              className="editinventory__form1--inputdesc"
            ></input>

            <label className="editinventory__form1--label">Category</label>
            {/* <Select
              options={cat_val_label}
              className="addinventory__form1--test"
            /> */}
            {/* <input
              placeholder="Please select"
              className="addinventory__form1--input"
            ></input> */}
          </form>
          <form className="editinventory__form2">
            <div className="editinventory__form2--status">
              <div className="editinventory__form2--radiobuttons">
                <label className="editinventory__form2--label">Status</label>
                <br></br>
                <input
                  type="radio"
                  id="radbuttoninstock"
                  name="rad1"
                  value={"In Stock"}
                  // checked={stockstatus === "In Stock"}
                  // onChange={handleChange}
                ></input>
                 <label for="html">In Stock</label>
                <input
                  type="radio"
                  id="radbuttonoutstock"
                  name="rad2"
                  value={"Out of Stock"}
                  // checked={stockstatus === "Out of Stock"}
                  // onChange={handleChange}
                ></input>
                 <label for="html">Out of Stock</label>
              </div>
            </div>
            <label className="editinventory__form2--label">Quantity</label>
            <input
              placeholder="0"
              className="editinventory__form2--input"
            ></input>
            <div className="editinventory__form2--labelinputpair">
              <label className="editinventory__form2--label">Warehouse</label>
              {/* <Select
                options={warehouse_val_label}
                className="addinventory__form2--test"
              /> */}
            </div>
          </form>
        </div>
        <div className="editinventory__footer">
          <button className="editinventory__footer--button1">Cancel</button>
          <button className="editinventory__footer--button2">
            + Edit Item
          </button>
        </div>
      </div>
    </>
  );
}
export default EditNewInventoryItem;
