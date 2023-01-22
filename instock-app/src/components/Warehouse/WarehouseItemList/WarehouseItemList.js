import "../WarehouseItemList/WarehouseItemList.scss";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import EditButton from "../Buttons/EditButton/EditButton";
import { NavLink, Link } from "react-router-dom";

function WarehouseItemList(props) {
	// console.log(props.warehouseDetails.id);
	return (
		<>
			<div className="warehouse-list__item">
				<div>
					<h2>{props.warehouseDetails.name}</h2>
					<Link to={`/warehouse/edit/${props.warehouseDetails.id}`}>
						<EditButton />
					</Link>
				</div>
				<hr className="warehouse-list__item--linebreak"></hr>
				<h3>WAREHOUSE ADDRESS:</h3>
				<p>
					{props.warehouseDetails.address},{" "}
					{props.warehouseDetails.city},{" "}
					{props.warehouseDetails.country}
				</p>
				<h3>CONTACT NAME:</h3>
				<p>{props.warehouseDetails.contact?.name}</p>
				<p>{props.warehouseDetails.contact?.position}</p>
				<h3>CONTACT INFORMATION:</h3>
				<p>{props.warehouseDetails.contact?.phone}</p>
				<p>{props.warehouseDetails.contact?.email}</p>
				{props.warehouseDetails.inventory?.map((item) => {
					return (
						<>
							<div>
								<hr></hr>
								<div key={item.itemId}>
									<h3 className="warehouse-list__sub-heading">
										INVENTORY ITEM
									</h3>
									<NavLink
										to={`/warehouse/${props.warehouseDetails.id}/inventory/${item.itemId}`}
									>
										<p className="warehouse-list__name warehouse-list__sub-data">
											{item.itemName}
										</p>
									</NavLink>
									<h3 className="warehouse-list__sub-heading">
										CATEGORY
									</h3>
									<p className="warehouse-list__address warehouse-list__sub-data">
										{item.itemCategory}
									</p>
								</div>
								<div>
									<h3 className="warehouse-list__sub-heading">
										STATUS
									</h3>
									<p className="warehouse-list__name warehouse-list__sub-data">
										{item.itemStatus}
									</p>
									<h3 className="warehouse-list__sub-heading">
										QTY
									</h3>
									<p className="warehouse-list__contact warehouse-list__sub-data">
										{item.itemQuantity}
									</p>
								</div>
							</div>
							<div className="warehouse-list-buttons">
								<EditButton />
								<DeleteButton />
							</div>
						</>
					);
				})}
			</div>
		</>
	);
}

export default WarehouseItemList;
