import "../DetailInventoryItem/DetailInventoryItem.js";
import "../DetailInventoryItem/DetailInventoryItem.scss";
import { Link, Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import axios from "axios";

function DetailInventoryItem() {
  let { inventoryId } = useParams();
  //console.log(inventoryId);
  const [itemdetail, setItem] = useState({}); //the item detail

  useEffect(() => {
    axios
      .get(`http://localhost:3030/inventory/${inventoryId}`)
      .then((result) => {
        // console.log(result.data);
        console.log(typeof result.data);
        setItem(result.data[0]);
        // console.log(result.data[0]);
      });
  }, []);

  //console.log(itemdetail.itemName);

  return (
    <>
      <div className="detailinventoryitem">
        <div className="detailinventoryitem__header">
          <img
            src={backarrow}
            className="detailinventoryitem__header--backbutton"
          ></img>
          <h1 className="detailinventoryitem__header--title">
            {itemdetail.itemName}
          </h1>
          <button className="detailinventoryitem__header--editbutton">
            <img
              src={edit}
              className="detailinventoryitem__header--editbuttonimg"
            ></img>
            Edit
          </button>
        </div>
        <div className="detailinventoryitem__itemdetailmobile">
          <div className="detailinventoryitem__itemdetailmobile--1">
            <h4 className="detailinventoryitem__itemdetailmobiletitle--desc">
              ITEM DESCRIPTION
            </h4>
            <p className="detailinventoryitem__itemdetailmobilecontent--desc">
              {itemdetail.description}
            </p>
          </div>
          <div className="detailinventoryitem__itemdetailmobile--2">
            <h4 className="detailinventoryitem__itemdetailmobiletitle--cat">
              CATEGORY
            </h4>
            <p className="detailinventoryitem__itemdetailmobilecontent--cat">
              {itemdetail.category}
            </p>
          </div>
          <div className="detailinventoryitem__itemdetailmobile--3">
            <h4 className="detailinventoryitem__itemdetailmobiletitle--status">
              STATUS
            </h4>
            <p className="detailinventoryitem__itemdetailmobilecontent--status">
              {itemdetail.status}
            </p>
          </div>
          <div className="detailinventoryitem__itemdetailmobile--4">
            <h4 className="detailinventoryitem__itemdetailmobiletitle--warehouse">
              WAREHOUSE
            </h4>
            <p className="detailinventoryitem__itemdetailmobilecontent--warehouse">
              {itemdetail.warehouse}
            </p>
          </div>
          <div className="detailinventoryitem__itemdetailmobile--5">
            <h4 className="detailinventoryitem__itemdetailmobiletitle--quantity">
              QUANTITY
            </h4>
            <p className="detailinventoryitem__itemdetailmobilecontent--quantity">
              {itemdetail.quantity}
            </p>
          </div>
        </div>
        {/* //////////////////  TABLET AND DESKTOP ////////////////// */}
        <div className="detailinventoryitem__itemdetailtd">
          <div className="detailinventoryitem__itemdetailtd1">
            <div className="detailinventoryitem__itemdetailtd1--1">
              <h4 className="detailinventoryitem__itemdetailtdtitle--desc">
                ITEM DESCRIPTION
              </h4>
              <p className="detailinventoryitem__itemdetailtdcontent--desc">
                {itemdetail.description}
              </p>
            </div>
            <div className="detailinventoryitem__itemdetailtd1--2">
              <h4 className="detailinventoryitem__itemdetailtdtitle--cat">
                CATEGORY
              </h4>
              <p className="detailinventoryitem__itemdetailtdcontent--cat">
                {itemdetail.category}
              </p>
            </div>
          </div>

          <div className="detailinventoryitem__itemdetailtd2">
            <div className="detailinventoryitem__itemdetailtd2--1">
              <h4 className="detailinventoryitem__itemdetailtdtitle--status">
                STATUS
              </h4>
              <p className="detailinventoryitem__itemdetailtdcontent--status">
                {itemdetail.status}
              </p>
            </div>
            <div className="detailinventoryitem__itemdetailtd2--2">
              <h4 className="detailinventoryitem__itemdetailtdtitle--quantity">
                QUANTITY
              </h4>
              <p className="detailinventoryitem__itemdetailtdcontent--quantity">
                {itemdetail.quantity}
              </p>
            </div>
            <div className="detailinventoryitem__itemdetailtd2--3">
              <h4 className="detailinventoryitem__itemdetailtdtitle--warehouse">
                WAREHOUSE
              </h4>
              <p className="detailinventoryitem__itemdetailtdcontent--warehouse">
                {itemdetail.warehouseName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailInventoryItem;
