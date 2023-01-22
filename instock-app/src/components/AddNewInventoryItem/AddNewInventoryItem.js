import "../AddNewInventoryItem/AddNewInventoryItem.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
//import { NavLink } from "react-router-dom";
import "../AddNewInventoryItem/AddNewInventoryItem.scss";
import InventoryForm from "../InventoryForm/InventoryForm.js";

function AddNewInventoryItem() {
  //1. create addNewInventoryItem() function that will update API to add new item info given by user

  return (
    <>
      <div className="addinventory">
        <img
          src={backarrow}
          className="addinventory__backarrow"
          alt="backarrow"
        ></img>
        <h1 className="addinventory__headertitle">ADD NEW INVENTORY ITEM</h1>
      </div>
      <InventoryForm />
    </>
  );
}
export default AddNewInventoryItem;
