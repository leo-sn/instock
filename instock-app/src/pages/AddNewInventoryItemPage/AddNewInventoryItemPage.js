import AddNewInventoryItem from "../../components/AddNewInventoryItem/AddNewInventoryItem";
import Footer from "../../components/Warehouse/Footer/Footer.js";
import Header from "../../components/Warehouse/Header/Header.js";
import axios from "axios";
import { useState, useEffect } from "react";
function AddNewInventoryItemPage() {
  const [inventoryList, setinventoryList] = useState([]);
  axios.get("http://localhost:3030/inventory").then((res) => {
    // console.log("this is the inventory call axios");
    // console.log(res.data);
  });
  useEffect(() => {
    axios.get("http://localhost:3030/inventory").then((res) => {
      // console.log("this is the inventory call");
      // console.log(res.data);
      setinventoryList(res.data);
    });
  }, []);
  return (
    <>
      <Header />
      <AddNewInventoryItem inventoryList={inventoryList} />
      <Footer />
    </>
  );
}

export default AddNewInventoryItemPage;
