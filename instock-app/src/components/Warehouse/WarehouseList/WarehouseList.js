import Search from "./Search/Search";
import "./WarehouseList.scss";
import Buttons from "../Buttons/EditButton/EditButton";
import { Link } from "react-router-dom";
import EditButton from "../Buttons/EditButton/EditButton";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import RightArrow from "../../../assets/icons/chevron_right-24px.svg";

function WarehouseList(props) {
	const title = props.title;
	return (
		<>
			<div className="warehouse-list">
				<Search title={title} />
				<div className="warehouse-list__heading-div"></div>
				{props.warehouseList.map((list) => {
					return (
						<div className="warehouse-list__div" key={list.id}>
							<hr className="warehouse-list--linebreak"></hr>
							<div className="warehouse-list__list">
								<div>
									<h3 className="warehouse-list__sub-heading warehouse-list__warehouse-heading">
										WAREHOUSE
									</h3>
									<Link
										to={`/warehouse/${list.id}`}
										className="warehouse-list__link"
									>
										<p className="warehouse-list__name warehouse-list__sub-data">
											{list.name}
										</p>
										<img
											className="warehouse-list__right-arrow"
											src={RightArrow}
										></img>
									</Link>
									<h3 className="warehouse-list__sub-heading warehouse-list__address-heading">
										ADDRESS
									</h3>
									<p className="warehouse-list__address warehouse-list__sub-data">
										{list.address}, {list.city},
										{list.country}
									</p>
								</div>
								<div>
									<h3 className="warehouse-list__sub-heading  warehouse-list__contact-name-heading">
										CONTACT NAME
									</h3>
									<p className="warehouse-list__contact-name warehouse-list__sub-data">
										{list.contact.name}
									</p>
									<h3 className="warehouse-list__sub-heading  warehouse-list__contact-info-heading">
										CONTACT INFORMATION
									</h3>
									<p className="warehouse-list__contact warehouse-list__sub-data">
										{list.contact.phone}
									</p>
									<p className="warehouse-list__email warehouse-list__sub-data">
										{list.contact.email}
									</p>
								</div>
							</div>
							<div className="warehouse-list-buttons">
								<p className="warehouse-list__sub-heading  warehouse-list__buttons-heading">
									ACTIONS
								</p>
								<DeleteButton />
								<EditButton />
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default WarehouseList;
