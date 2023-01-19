import "../ListComponent/ListComponent.scss";
import { Link } from "react-router-dom";
import del from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";

function ListComponent(props) {
  console.log(props.listitems);
  return (
    <div className="inventory_listitem">
      <p>Placeholder1_inventoryitem</p>
      <p>Placeholder1_category</p>
      <p>Placeholder1_status</p>
      <p>Placeholder1_qty</p>
      <p>Placeholder1_warehouse</p>
      <div className="inventory_listitem__actionButtons">
        <img
          className="inventory_listitem__actionButtons--delete"
          src={del}
        ></img>
        <img
          className="inventory_listitem__actionButtons--edit"
          src={edit}
        ></img>
      </div>
    </div>
  );
}
export default ListComponent;
