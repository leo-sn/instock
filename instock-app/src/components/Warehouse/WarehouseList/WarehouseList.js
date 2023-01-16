import Search from "./Search/Search";
import "../WarehouseList/WarehouseList.scss";

function WarehouseList() {
	return (
		<>
			<div className="warehouse-list">
				<Search />
				<div className="warehouse-list__div">
					<hr></hr>
					<div>
						<h3 className="warehouse-list__sub-heading"></h3>
						<p className="warehouse-list__name"></p>
						<h3 className="warehouse-list__sub-heading"></h3>
						<p className="warehouse-list__city"></p>
						<button className="warehouse-list__button"></button>
					</div>
					<div>
						<h3 className="warehouse-list__sub-heading"></h3>
						<p className="warehouse-list__name"></p>
						<h3 className="warehouse-list__sub-heading"></h3>
						<p className="warehouse-list__contact"></p>
						<p className="warehouse-list__email"></p>
						<button className="warehouse-list__button"></button>
					</div>
				</div>
			</div>
		</>
	);
}

export default WarehouseList;
