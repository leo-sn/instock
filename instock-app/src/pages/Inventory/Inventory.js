import InventoryPage from "../../components/InventoryPage/InventoryPage.js";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../../components/Warehouse/Footer/Footer.js";
import Header from "../../components/Warehouse/Header/Header.js";
function Inventory(props) {
  const title = props.title;
  const [inventoryList, setinventoryList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3030/inventory").then((res) => {
      console.log("this is the inventory call");
      console.log(res.data);
      setinventoryList(res.data);
    });
  }, []);
  return (
    <>
      <Header />
      <InventoryPage inventoryList={inventoryList} title={title} />
      <Footer />
    </>
  );
}

export default Inventory;
