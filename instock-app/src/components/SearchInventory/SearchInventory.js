import "../SearchInventory/SearchInventory";
import { Link } from "react-router-dom";
function SearchInventory() {
  return (
    <>
      <h2 className="search">Inventory</h2>
      <form>
        <input className="search__input" placeholder="Search..."></input>
        <Link to={"/inventory/add"}>
          <button className="search__button--add">+ Add New Item</button>
        </Link>
      </form>
    </>
  );
}

export default SearchInventory;
