function InventoryPage() {
  return (
    <div className="inventory_page_top">
      <h2 className="inventory_page_top__title">Inventory</h2>
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="inventory_page_top__search"
      ></input>
      <input
        type="submit"
        name="button"
        className="inventory_page_top__addbutton"
        placeholder="Add New Item"
      ></input>
    </div>
  );
}
export default InventoryPage;
