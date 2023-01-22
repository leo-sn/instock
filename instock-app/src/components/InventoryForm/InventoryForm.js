import "../InventoryForm/InventoryForm.scss";
import backarrow from "../../assets/icons/arrow_back-24px.svg";
function InventoryForm(props) {
  return (
    <>
      <div className="inventoryform">
        <div className="inventoryform__header">
          <img
            src="backarrow"
            className="inventoryform__header--img"
            alt="backarrow"
          ></img>
          <h1 className="inventoryform__header--title">
            ADD NEW INVENTORY ITEM
          </h1>
        </div>
        <div className="inventoryform_body">
          <form classname="inventoryform_body__form1">
            <label className="inventoryform_body__form1--label1">
              Item Name:
              <input
                placeholder="Item Name"
                className="inventoryform_body__form1--input1"
              ></input>
            </label>
            <label className="inventoryform_body__form1--label2">
              Description:
              <input
                placeholder="Please enter a brief item description"
                className="inventoryform_body__form1--input2"
              ></input>
            </label>
            <label className="inventoryform_body__form1--label3">
              Choose a car:
            </label>
          </form>
          <form classname="inventoryform_body__form2"></form>
        </div>
        <div className="inventoryform__footer">
          <button className="inventoryform__footer--button1">Cancel</button>
          <button className="inventoryform__footer--button2">
            + Add New Warehouse
          </button>
        </div>
      </div>
    </>
  );
}
export default InventoryForm;
