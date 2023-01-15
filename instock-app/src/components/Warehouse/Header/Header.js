import "../Header/Header.scss";
import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<div className="header">
				<p className="header__logo"></p>
				<Link to="/">
					<p className="header__heading--warehouse">Warehouses</p>
				</Link>
				<Link to="inventory">
					<p className="header__heading--inventory">Inventory</p>
				</Link>
			</div>
		</>
	);
}

export default Header;
