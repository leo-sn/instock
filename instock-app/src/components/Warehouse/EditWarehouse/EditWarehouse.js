import "./EditWarehouse.scss";

import { useState, useEffect } from "react";
import SaveButton from "../Buttons/SaveButton/SaveButton";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useHistory } from "react";
import { useNavigate } from "react-router-dom";

function EditWarehouse() {
	let navigate = useNavigate();
	let { warehouseId } = useParams();
	console.log(warehouseId);

	const [warehouse, setWarehouse] = useState({
		name: "",
		address: "",
		city: "",
		country: "",
		contactname:"",
		position:"",
		phone:"",
		email:""
	});

	const onInputChange = (e) => {
		console.log(e)
		setWarehouse({ ...warehouse, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		loadwarehouse();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();

		//add both inputs together
		const toSubmitData = {
			name: warehouse.name,
			address: warehouse.address,
			city: warehouse.city,
			country: warehouse.country,
			contact: {
				name: warehouse.contactname,
				position: warehouse.position,
				phone: warehouse.phone,
				email: warehouse.email,
			}
		}

		console.log(e);
		await axios.put(
			`http://localhost:3030/warehouse/${warehouseId}`,
			toSubmitData
		);
		navigate("/");
	};

	const loadwarehouse = async () => {
		const result = await axios.get(
			`http://localhost:3030/warehouse/${warehouseId}`
		);
		const warehouseData = {
			name: result.data.name,
			address: result.data.address,
			city: result.data.city,
			country: result.data.country,
			contactname:result.data.contact.name,
			position:result.data.contact.position,
			phone:result.data.contact.phone,
			email:result.data.contact.email
		}
		setWarehouse(warehouseData);
	};

	return (
		<>
			<form onSubmit={(e) => onSubmit(e)}>
				<div className="warehouse-list__item">
					<h2>Edit Warehouse</h2>
					<hr></hr>
					<h3>Warehouse Details</h3>

					<label>Warehouse Name</label>
					<input
						type="text"
						required="required"
						name="name"
						id="name"
						// placeholder=""

						value={warehouse.name}
						onChange={(e) => onInputChange(e)}
					></input>
					<label>Street Address</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="address"
						id="address"
						// placeholder=""
						value={warehouse.address}
						onChange={(e) => onInputChange(e)}
					></input>
					<label>City</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="city"
						id="city"
						// placeholder=""
						value={warehouse.city}
						onChange={(e) => onInputChange(e)}
					></input>
					<label>country</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="country"
						id="country"
						// placeholder=""
						value={warehouse.country}
						onChange={(e) => onInputChange(e)}
					></input>

					<h3>Contact Details</h3>

					<label>Contact Name</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="contactname"
						id="contactname"
						// placeholder=""
						value={warehouse.contactname}
						onChange={(e) => onInputChange(e)}
					></input>
					<label>Position</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="position"
						id="position"
						// placeholder=""
						value={warehouse.position}
						onChange={(e) => onInputChange(e)}
					></input>
					<label>Phone Number</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="phone"
						id="phone"
						// placeholder=""
						value={warehouse.phone}
						onChange={(e) => onInputChange(e)}
					></input>
					<label>Email</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="email"
						id="email"
						// placeholder=""
						value={warehouse.email}
						onChange={(e) => onInputChange(e)}
					></input>

					<button>Cancel</button>
					<SaveButton />
				</div>
			</form>
		</>
	);
}

export default EditWarehouse;
