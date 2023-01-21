import "../DeleteButton/DeleteButton.scss";

function DeleteButton(props) {
	// console.log(props);

	return (
		<div>
			<button
				// onClick={props.deleteWarehouse}
				className="warehouse-button--delete"
			></button>
		</div>
	);
}

export default DeleteButton;
