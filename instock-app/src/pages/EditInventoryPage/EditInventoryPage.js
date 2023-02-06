import EditInventory from "../../components/EditNewInventoryItem/EditNewInventoryItem";
import Footer from "../../components/Warehouse/Footer/Footer";
import Header from "../../components/Warehouse/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function EditInventoryPage() {
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
      <EditInventory inventoryList={inventoryList} />
      <Footer />
    </>
  );
}

export default EditInventoryPage;
