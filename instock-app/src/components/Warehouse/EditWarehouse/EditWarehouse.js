import "./EditWarehouse.scss";
import DeleteItemButton from "../Buttons/DeleteItemButton/DeleteItemButton";
import CancelButton from "../Buttons/CancelButton/CancelButton";

function EditWarehouse() {
	return (
		<>
			<div className="warehouse-list__item">
				<h2>Edit Warehouse</h2>
				<hr></hr>
				<h3>Warehouse Details</h3>
				<form>
					<label>Warehouse Name</label>
					<input placeholder=""></input>
					<label>Street Address</label>
					<input placeholder=""></input>
					<label>City</label>
					<input placeholder=""></input>
					<label>country</label>
					<input placeholder=""></input>
				</form>
				<h3>Contact Details</h3>
				<form>
					<label>Contact Name</label>
					<input placeholder=""></input>
					<label>Position</label>
					<input placeholder=""></input>
					<label>Phone Number</label>
					<input placeholder=""></input>
					<label>Email</label>
					<input placeholder=""></input>
				</form>
				<CancelButton />
				<DeleteItemButton />
			</div>
		</>
	);
}

export default EditWarehouse;
