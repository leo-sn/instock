import "../DetailInventoryItem/DetailInventoryItem.js";
import { Link, Navigate } from "react-router-dom";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
function DetailInventoryItem() {
  return (
    <>
      <div className="detailinventoryitem">
        <div className="detailinventoryitem__header">
          <img
            src={backarrow}
            className="detailinventoryitem__header--backbutton"
          ></img>
          <h1 className="detailinventoryitem__header--title">
            placeholder inventory item detail title
          </h1>
          <button className="detailinventoryitem__header--editbutton">
            <img
              src={edit}
              className="detailinventoryitem__header--editbuttonimg"
            ></img>
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailInventoryItem;
