import "../AddNewInventoryItem/AddNewInventoryItem.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import { NavLink } from "react-router-dom";
import InventoryForm from "../InventoryForm/InventoryForm.js";

function AddNewInventoryItem() {
  //1. create addNewInventoryItem() function that will update API to add new item info given by user

  return (
    <>
      <InventoryForm />
    </>
  );
}
export default AddNewInventoryItem;
