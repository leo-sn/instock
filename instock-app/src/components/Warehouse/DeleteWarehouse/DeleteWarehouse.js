import { redirect, useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import './DeleteWarehouse.scss'

function DeleteWarehouse(props) {
	let warehouseId =  props.idToDelete;
	const [warehouseName, setWarehouseName] = useState('')

	useEffect(() => {
		getWarehouseName(warehouseId);
	  });

	const getWarehouseName = (warehouseId) => {
		axios.get(`http://localhost:3030/warehouse/${warehouseId}`)
		.then(res => {
			setWarehouseName(res.data.name)
		})
	}
 
	const deletewarehouse = async (warehouseId) => {
		await axios.delete(`http://localhost:3030/warehouse/${warehouseId}`);
		props.setModalActive(false)
	};

	return (
		<div className="transparency">

			<div className="delete-modal-container">
				<div className="delete-modal-container__text">
					<h2>Delete {warehouseName} Warehouse?</h2>
					<p>
						Please confirm that you'd like to delete the {warehouseName} from the list of
						warehouses. You won't be able to undo this action.
					</p>
				</div>
				<div className="delete-modal-container__buttons">
					<Link to={"/"}>
						<button className="button-delete-modal" onClick={() => props.setModalActive(false)}>Cancel</button>
					</Link>
					<Link
						onClick={() => {
							deletewarehouse(warehouseId);
							props.setModalActive(false)
							window.location.reload(true);
						}}
					>
						<button className="button-delete-modal button-colored">Delete</button>
					</Link>
				</div>
			</div>
		</div>
		
	);
}

export default DeleteWarehouse;
