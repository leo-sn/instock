import "../AddNewInventoryItem/AddNewInventoryItem.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import { NavLink } from "react-router-dom";

function AddNewInventoryItem() {
  //1. create addNewInventoryItem() function that will update API to add new item info given by user

  return (
    <>
      <div className="addnewinventoryitem">
        <div className="addnewinventoryitem__header">
          <NavLink to="/" className="header__heading--warehouse">
            Warehouses
          </NavLink>
          <img
            src={backarrow}
            className="addnewinventoryitem__header--backarrow"
          ></img>
          <h1 className="addnewinventoryitem__header--title">
            Add New Inventory Item
          </h1>
        </div>
        <div className="addnewinventoryitem_itemdetails">
          <h3>Item Details</h3>
        </div>

        <div className="addnewinventoryitem_itemavailability">
          <h3>Item Availability</h3>
        </div>

        <div className="addnewinventoryitem_buttons"></div>
      </div>
    </>
  );
}
export default AddNewInventoryItem;
