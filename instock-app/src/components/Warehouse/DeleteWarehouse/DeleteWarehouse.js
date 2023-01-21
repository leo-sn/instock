import CancelButton from "../Buttons/CancelButton/CancelButton";
import DeleteItemButton from "../Buttons/DeleteItemButton/DeleteItemButton";

function DeleteWarehouse() {
	return (
		<>
			<h2>Delete Washington Warehouse?</h2>
			<p>
				Please confirm that you'd like to delete the Washington from the
				list of warehouses. You won't be able to undo this action.{" "}
			</p>
			<CancelButton />
			<DeleteItemButton />
		</>
	);
}

export default DeleteWarehouse;
