import { redirect, useParams } from "react-router";
import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./DeleteInventoryComp.scss";

function DeleteInventory(props) {
  /////////////////////////////////////
  let { inventoryId } = useParams();
  console.log(inventoryId);
  console.log(typeof inventoryId);
  const [itemname, setItem] = useState("");
  console.log(props.modalActive);

  useEffect(() => {
    getInventoryName(inventoryId);
  });

  const getInventoryName = (inventoryId) => {
    axios.get(`http://localhost:3030/inventory/${inventoryId}`).then((res) => {
      console.log(res.data[0].itemName);
      setItem(res.data[0].itemName);
    });
  };

  const deleteinventoryitem = async (inventoryId) => {
    await axios.delete(`http://localhost:3030/inventory/${inventoryId}`);
    props.setModalActive(false);
  };

  return (
    <div className="transparency">
      <div className="delete-modal-container">
        <div className="delete-modal-container__text">
          <h2>Delete {itemname} inventory item ?</h2>
          <p>
            Please confirm that you'd like to delete {itemname} from the
            inventory list. You won't be able to undo this action.
          </p>
        </div>
        <div className="delete-modal-container__buttons">
          <Link to={"/inventory"}>
            <button
              className="button-delete-modal"
              onClick={() => props.setModalActive(false)}
            >
              Cancel
            </button>
          </Link>
          <Link
            onClick={() => {
              deleteinventoryitem(inventoryId);
              props.setModalActive(false);
              window.location.reload(true);
            }}
          >
            <button className="button-delete-modal button-colored">
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeleteInventory;
