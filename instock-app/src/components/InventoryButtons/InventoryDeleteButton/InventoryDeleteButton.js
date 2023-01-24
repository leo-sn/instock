import "./InventoryDeleteButton.scss";

function InventoryDeleteButton(props) {
  // console.log(props);

  return (
    <div>
      <button
        // onClick={props.deleteWarehouse}--change later
        className="inventory-button__delete"
      ></button>
    </div>
  );
}

export default InventoryDeleteButton;
