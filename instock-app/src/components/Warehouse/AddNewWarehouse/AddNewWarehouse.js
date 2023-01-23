import "../AddNewWarehouse/AddNewWarehouse.scss";

import { useState, useEffect } from "react";
import AddButton from "../Buttons/AddButton/AddButton";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useHistory } from "react";
import { useNavigate } from "react-router-dom";
import backbutton from "../../../assets/icons/arrow_back-24px.svg";

function AddNewWarehouse() {
  ///FUNCTION TO HANDLE SUBMIT
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("TESTING THE ON SUBMIT HANDLE SUBMIT FUNCTION");

    const toSubmitData = {
      name: e.target.name.value,
      address: e.target.address.value,
      city: e.target.city.value,
      country: e.target.country.value,
      contact: {
        name: e.target.contactname.value,
        position: e.target.position.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
      },
    };

    console.log(toSubmitData);

    //UPDATE LATER : SEND TO API
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
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="warehouse-add">
          <div className="warehouse-add__header">
            <img
              src={backbutton}
              alt="backbutton"
              className="warehouse-add__header--backbutton"
            ></img>
            <h2 className="warehouse-add__header--addwarehouse">
              Add Warehouse
            </h2>
            {/* <hr></hr> */}
          </div>
          <div className="warehouse-add__details">
            {/*****************   WAREHOUSE DETAILS   ********************/}
            <div className="warehouse-add__details--warehouse">
              <h3>Warehouse Details</h3>

              <label className="warehouse-add__details--label">
                Warehouse Name
              </label>
              <input
                type="text"
                required="required"
                name="name"
                id="name"
                placeholder="Warehouse Name"
                className="warehouse-add__details--input"
              ></input>
              <label className="warehouse-add__details--label">
                Street Address
              </label>
              <input
                placeholder="Street Address"
                type="text"
                required="required"
                name="address"
                id="address"
                className="warehouse-add__details--input"
              ></input>
              <label className="warehouse-add__details--label">City</label>
              <input
                placeholder="City"
                type="text"
                required="required"
                name="city"
                id="city"
                className="warehouse-add__details--input"
                // placeholder="some city"
              ></input>
              <label className="warehouse-add__details--label">Country</label>
              <input
                placeholder="Country"
                type="text"
                required="required"
                name="country"
                id="country"
                className="warehouse-add__details--input"
              ></input>
            </div>
            {/*****************   CONTACT DETAILS   ********************/}
            <div className="warehouse-add__details--contact">
              <h3>Contact Details</h3>

              <label className="warehouse-add__details--label">
                Contact Name
              </label>
              <input
                placeholder="Contact Name"
                type="text"
                required="required"
                name="contactname"
                id="contactname"
                className="warehouse-add__details--input"
              ></input>
              <label className="warehouse-add__details--label">Position</label>
              <input
                placeholder="Position"
                type="text"
                required="required"
                name="position"
                id="position"
                className="warehouse-add__details--input"
                // placeholder=""
              ></input>
              <label className="warehouse-add__details--label">
                Phone Number
              </label>
              <input
                placeholder="Phone Number"
                type="text"
                required="required"
                name="phone"
                id="phone"
                // placeholder=""
                className="warehouse-add__details--input"
              ></input>
              <label className="warehouse-add__details--label">Email</label>
              <input
                placeholder="Email"
                type="text"
                required="required"
                name="email"
                id="email"
                // placeholder=""
                className="warehouse-add__details--input"
              ></input>
            </div>
          </div>
          {/*****************   BUTTONS   ********************/}
          <div className="warehouse-add__buttons">
            <button className="warehouse-add__buttons--cancel">Cancel</button>
            <AddButton />
          </div>
        </div>
      </form>
    </>
  );
}
export default AddNewWarehouse;
