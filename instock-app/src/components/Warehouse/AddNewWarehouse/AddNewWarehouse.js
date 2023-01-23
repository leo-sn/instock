import "../AddNewWarehouse/AddNewWarehouse.scss";

import { useState, useEffect } from "react";
import SaveButton from "../Buttons/SaveButton/SaveButton";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useHistory } from "react";
import { useNavigate } from "react-router-dom";

function AddNewWarehouse() {
  const onSubmitAddForm = async (e) => {
    e.preventDefault();
    console.log(e.target.value);

    //get the info from the form and send to API
    // const toSubmitData = {
    //   name: warehouse.name,
    //   address: warehouse.address,
    //   city: warehouse.city,
    //   country: warehouse.country,
    //   contact: {
    //     name: warehouse.contactname,
    //     position: warehouse.position,
    //     phone: warehouse.phone,
    //     email: warehouse.email,
    //   },
    // };
    /// API adds to be UPDATED later
    // console.log(e);
    // await axios.put(
    //   `http://localhost:3030/warehouse/${warehouseId}`,
    //   toSubmitData
    // );
    // navigate("/");
  };

  return (
    <>
      <form onSubmit={(e) => onSubmitAddForm(e)}>
        <div className="warehouse-list__item">
          <h2>Add Warehouse</h2>
          <hr></hr>
          <h3>Warehouse Details</h3>

          <label>Warehouse Name</label>
          <input
            type="text"
            required="required"
            name="name"
            id="name"
            // placeholder=""
          ></input>
          <label>Street Address</label>
          <input
            placeholder=""
            type="text"
            required="required"
            name="address"
            id="address"
          ></input>
          <label>City</label>
          <input
            placeholder=""
            type="text"
            required="required"
            name="city"
            id="city"
            // placeholder="some city"
          ></input>
          <label>country</label>
          <input
            placeholder=""
            type="text"
            required="required"
            name="country"
            id="country"
          ></input>

          <h3>Contact Details</h3>

          <label>Contact Name</label>
          <input
            placeholder=""
            type="text"
            required="required"
            name="contactname"
            id="contactname"
          ></input>
          <label>Position</label>
          <input
            placeholder=""
            type="text"
            required="required"
            name="position"
            id="position"
            // placeholder=""
          ></input>
          <label>Phone Number</label>
          <input
            placeholder=""
            type="text"
            required="required"
            name="phone"
            id="phone"
            // placeholder=""
          ></input>
          <label>Email</label>
          <input
            placeholder=""
            type="text"
            required="required"
            name="email"
            id="email"
            // placeholder=""
          ></input>

          <button>Cancel</button>
          <SaveButton />
        </div>
      </form>
    </>
  );
}
export default AddNewWarehouse;
