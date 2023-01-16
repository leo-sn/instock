import "../Header/Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<>
			<div className="header">
				<p className="header__logo"></p>
				<NavLink to="/" className="header__heading--warehouse">
					Warehouses
				</NavLink>
				<NavLink to="/inventory" className="header__heading--inventory">
					Inventory
				</NavLink>
			</div>
		</>
	);
}

export default Header;
