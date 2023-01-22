import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function DeleteWarehouse() {
	let navigate = useNavigate();
	let { warehouseId } = useParams();

	const [warehouse, setwarehouse] = useState({});

	useEffect(() => {
		loadwarehouse();
	}, []);

	const loadwarehouse = async () => {
		const result = await axios.get(`http://localhost:3030/warehouse`);
		console.log(result.data);
		setwarehouse(result.data);
	};

	const deletewarehouse = async (warehouseId) => {
		await axios.delete(`http://localhost:3030/warehouse/${warehouseId}`);
		loadwarehouse();
		navigate("/");
	};

	return (
		<>
			<h2>Delete Warehouse?</h2>
			<p>
				Please confirm that you'd like to delete the from the list of
				warehouses. You won't be able to undo this action.
			</p>
			<Link to={"/"}>
				<button>Cancel</button>
			</Link>

			<Link
				onClick={() => {
					deletewarehouse(warehouseId);
				}}
			>
				Delete
			</Link>
		</>
	);
}

export default DeleteWarehouse;
