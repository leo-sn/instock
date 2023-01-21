import "./Search.scss";
import { useParams } from "react-router";

function Search(props) {
	return (
		<>
			<h2 className="search">{props.title}</h2>
			<form>
				<input
					className="search__input"
					placeholder="Search..."
				></input>
				<button className="search__button--add">
					+ Add New Warehouse
				</button>
			</form>
		</>
	);
}

export default Search;
