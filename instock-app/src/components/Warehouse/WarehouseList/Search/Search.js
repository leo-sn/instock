import "../Search/Search.scss";

function Search() {
	return (
		<>
			<h2 className="search">Warehouses</h2>
			<form>
				<input
					className="search__input"
					placeholder="Search..."
				></input>
				<button className="search__button--add">
					Add New Warehouse
				</button>
			</form>
		</>
	);
}

export default Search;
