import "./EditWarehouse.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import BackArrow from "../../../assets/icons/arrow_back-24px.svg";

function EditWarehouse() {
	let navigate = useNavigate();
	let { warehouseId } = useParams();
	console.log(warehouseId);

	const [warehouse, setWarehouse] = useState({
		name: "",
		address: "",
		city: "",
		country: "",
		contactname: "",
		position: "",
		phone: "",
		email: "",
	});

	const onInputChange = (e) => {
		console.log(e);
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
			},
		};

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
			contactname: result.data.contact.name,
			position: result.data.contact.position,
			phone: result.data.contact.phone,
			email: result.data.contact.email,
		};
		setWarehouse(warehouseData);
	};

	return (
		<>
			<form onSubmit={(e) => onSubmit(e)}>
				<div className="warehouse__edit">
					<Link to={`/`} className="warehouse__edit-arrow">
						<img src={BackArrow}></img>
					</Link>
					<h2 className="warehouse__edit-heading">Edit Warehouse</h2>
					<hr className="linebreak--edit"></hr>

					<div className="edit__flex">
						<div className="warehouse__details">
							<h3 className="warehouse__edit-sub-heading">
								Warehouse Details
							</h3>
							<div className="warehouse__edit__label">
								<label className="warehouse__edit__label">
									Warehouse Name
								</label>
								<input
									className="warehouse__edit-input"
									type="text"
									required="required"
									name="name"
									id="name"
									value={warehouse.name}
									onChange={(e) => onInputChange(e)}
								></input>
							</div>
							<div className="warehouse__edit__label">
								<label className="warehouse__edit__label">
									Street Address
								</label>
								<input
									className="warehouse__edit-input"
									placeholder=""
									type="text"
									required="required"
									name="address"
									id="address"
									value={warehouse.address}
									onChange={(e) => onInputChange(e)}
								></input>
							</div>

							<div className="warehouse__edit__label">
								<label className="warehouse__edit__label">
									City
								</label>
								<input
									className="warehouse__edit-input"
									placeholder=""
									type="text"
									required="required"
									name="city"
									id="city"
									value={warehouse.city}
									onChange={(e) => onInputChange(e)}
								></input>
							</div>
							<div className="warehouse__edit__label">
								<label className="warehouse__edit__label">
									Country
								</label>
								<input
									className="warehouse__edit-input"
									placeholder=""
									type="text"
									required="required"
									name="country"
									id="country"
									value={warehouse.country}
									onChange={(e) => onInputChange(e)}
								></input>
							</div>
						</div>

						<div className="contact__details">
							<h3 className="warehouse__edit-sub-heading">
								Contact Details
							</h3>

							<div className="warehouse__edit__label">
								<label className="warehouse__edit__label">
									Contact Name
								</label>
								<input
									className="warehouse__edit-input"
									placeholder=""
									type="text"
									required="required"
									name="contactname"
									id="contactname"
									value={warehouse.contactname}
									onChange={(e) => onInputChange(e)}
								></input>
							</div>
							<div className="warehouse__edit__label">
								<label className="warehouse__edit__label">
									Position
								</label>
								<input
									className="warehouse__edit-input"
									placeholder=""
									type="text"
									required="required"
									name="position"
									id="position"
									value={warehouse.position}
									onChange={(e) => onInputChange(e)}
								></input>
							</div>
							<div className="warehouse__edit__label">
								<label className="warehouse__edit__label">
									Phone Number
								</label>
								<input
									className="warehouse__edit-input"
									placeholder=""
									type="text"
									required="required"
									name="phone"
									id="phone"
									value={warehouse.phone}
									onChange={(e) => onInputChange(e)}
								></input>
							</div>
							<div className="warehouse__edit__label">
								<label className="warehouse__edit__label">
									Email
								</label>
								<input
									className="warehouse__edit-input"
									placeholder=""
									type="text"
									required="required"
									name="email"
									id="email"
									value={warehouse.email}
									onChange={(e) => onInputChange(e)}
								></input>
							</div>
						</div>
					</div>
					<div className="buttons">
						<button className="buttons__cancel">Cancel</button>
						<button className="buttons__save">Save</button>
					</div>
				</div>
			</form>
		</>
	);
}

export default EditWarehouse;
