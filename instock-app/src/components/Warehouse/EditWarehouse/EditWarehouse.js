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

	const [warehouse, setwarehouse] = useState({
		name: "",
		address: "",
		city: "",
		country: "",
		contactname: "",
		position: "",
		phoneNumber: "",
		email: "",
	});

	const {
		name,
		address,
		city,
		country,
		contactname,
		position,
		phoneNumber,
		email,
	} = warehouse;
	const onInputChange = (e) => {
		setwarehouse({ ...warehouse, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		loadwarehouse();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(e);
		await axios.put(
			`http://localhost:3030/warehouse/${warehouseId}`,
			warehouse
		);
		navigate("/");
	};

	const loadwarehouse = async () => {
		const result = await axios.get(
			`http://localhost:3030/warehouse/${warehouseId}`
		);
		setwarehouse(result.data);
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
						// placeholder=""
						value={name}
						onChange={(e) => onInputChange(e)}
					></input>
					<label>Street Address</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="address"
						// placeholder=""
						value={address}
						onChange={(e) => onInputChange(e)}
					></input>
					<label>City</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="city"
						// placeholder=""
						value={city}
						onChange={(e) => onInputChange(e)}
					></input>
					<label>country</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="country"
						// placeholder=""
						value={country}
						onChange={(e) => onInputChange(e)}
					></input>

					<h3>Contact Details</h3>

					<label>Contact Name</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="contactName"
						// placeholder=""
						value={contactname}
						onChange={(e) => onInputChange(e)}
					></input>
					<label>Position</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="position"
						// placeholder=""
						value={position}
						onChange={(e) => onInputChange(e)}
					></input>
					<label>Phone Number</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="phoneNumber"
						// placeholder=""
						value={phoneNumber}
						onChange={(e) => onInputChange(e)}
					></input>
					<label>Email</label>
					<input
						placeholder=""
						type="text"
						required="required"
						name="email"
						// placeholder=""
						value={email}
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
