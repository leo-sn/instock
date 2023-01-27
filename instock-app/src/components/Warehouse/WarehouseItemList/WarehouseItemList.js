import "../WarehouseItemList/WarehouseItemList.scss";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import EditButton from "../Buttons/EditButton/EditButton";
import { NavLink, Link } from "react-router-dom";
import BackArrow from "../../../assets/icons/arrow_back-24px.svg";
import RightArrow from "../../../assets/icons/chevron_right-24px.svg";

function WarehouseItemList(props) {
	return (
		<>
			<div className="warehouse__items">
				<div className="warehouse__itemslist__headings">
					<p className="warehouse__itemslist--warehouse">
						INVENTORY ITEM
					</p>
					<p className="warehouse__itemslist--address">CATEGORY</p>
					<p className="warehouse__itemslist--cname"> STATUS</p>
					<p className="warehouse__itemslist--cinformation">
						QUANTITY
					</p>
					<p className="warehouse__itemslist--actions">ACTIONS</p>
				</div>
				<div className="warehouse__itemslist__heading-div"></div>
				<div className="warehouse__items__main-heading-div">
					<Link to={`/`} className="warehouse__items-arrow">
						<img src={BackArrow}></img>
					</Link>

					<h2 className="warehouse__items__main-heading">
						{props.warehouseDetails.name}
					</h2>
					<Link
						className="warehouse__items__edit"
						to={`/warehouse/edit/${props.warehouseDetails.id}`}
					>
						<EditButton />
					</Link>
				</div>
				<div className="warehouse__info-div">
					<hr className="hr"></hr>
					<div className="warehouse__address">
						<h3 className="warehouse__items--warehouse-heading ">
							WAREHOUSE ADDRESS:
						</h3>

						<p className="warehouse__info-data ">
							{props.warehouseDetails.address},{" "}
							{props.warehouseDetails.city},{" "}
							{props.warehouseDetails.country}
						</p>
					</div>
					<div className="warehouse__info-flex">
						<div className="warehouse__contact-name">
							<h3 className="warehouse__items--warehouse-heading">
								CONTACT NAME:
							</h3>
							<p className="warehouse__info-data">
								{props.warehouseDetails.contact?.name}
							</p>
							<p className="warehouse__info-data">
								{props.warehouseDetails.contact?.position}
							</p>
						</div>
						<div className="warehouse__contact-number">
							<h3 className="warehouse__items--warehouse-heading">
								CONTACT INFORMATION:
							</h3>
							<p className="warehouse__info-data">
								{props.warehouseDetails.contact?.phone}
							</p>
							<p className="warehouse__info-data">
								{props.warehouseDetails.contact?.email}
							</p>
						</div>
					</div>
				</div>
				{props.warehouseDetails.inventory?.map((item) => {
					return (
						<>
							<div className="inventory">
								<hr className="inventory__linebreak"></hr>
								<div
									key={item.itemId}
									className="warehouse-itemlist-flex"
								>
									<div>
										<h3 className="warehouse-itemlist__sub-heading warehouse-list__sub-heading ">
											INVENTORY ITEM
										</h3>
										<NavLink
											className="inventory__item-name"
											to={`/warehouse/${props.warehouseDetails.id}/inventory/${item.itemId}`}
										>
											<p className="warehouse-itemlist__name inventory_item warehouse-itemlist__sub-data">
												{item.itemName}
											</p>
											<img
												className="warehouse-itemlist__right-arrow"
												src={RightArrow}
											></img>
										</NavLink>
										<h3 className="warehouse-itemlist__sub-heading warehouse-list__sub-heading ">
											CATEGORY
										</h3>
										<p className=" inventory__item-catergory warehouse-itemlist__sub-data ">
											{item.itemCategory}
										</p>
									</div>

									<div>
										<h3 className="warehouse-itemlist__sub-heading warehouse-list__sub-heading ">
											STATUS
										</h3>
										<p
											className=" status inventory__item-status  
									warehouse-list__sub-data"
										>
											{item.itemStatus}
										</p>
										<div className="inventory__qty">
											<h3 className="warehouse-itemlist__sub-heading warehouse-list__sub-heading ">
												QTY
											</h3>
											<p
												className="
										
										inventory__item-qty
										warehouse-list__sub-data"
											>
												{item.itemQuantity}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="warehouse-itemlist-buttons">
								<p className="delete">
									<DeleteButton />
								</p>
								<p className="editbutton">
									<EditButton />
								</p>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
}

export default WarehouseItemList;
