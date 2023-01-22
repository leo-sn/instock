import "../InventoryForm/InventoryForm.scss";
function InventoryForm(props) {
  return (
    <>
      <div className="inventoryform">
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
