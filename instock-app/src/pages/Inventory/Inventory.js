import InventoryPage from "../../components/InventoryPage/InventoryPage.js";
import Footer from "../../components/Warehouse/Footer/Footer.js";
import Header from "../../components/Warehouse/Header/Header.js";
function Inventory(props) {
  console.log(props);
  console.log("title" + props.title);
  return (
    <>
      <Header />
      <InventoryPage title={props.title} />
      <Footer />
    </>
  );
}

export default Inventory;
