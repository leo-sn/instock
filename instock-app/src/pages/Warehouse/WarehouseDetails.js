import Header from "../../components/Warehouse/Header/Header";
import WarehouseItemList from "../../components/Warehouse/WarehouseItemList/WarehouseItemList";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../../components/Warehouse/Footer/Footer";
import { useParams } from "react-router-dom";

function Warehouse() {
  const [warehouseDetails, setwarehouseDetails] = useState({});
  const { warehouseId, inventoryId } = useParams();

  useEffect(() => {
    axios.get("http://localhost:3030/warehouse/" + warehouseId).then((res) => {
      setwarehouseDetails(res.data);
      console.log(res.data);
    });
  }, [warehouseId]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/warehouse/" + warehouseId + "/" + inventoryId)
      .then((res) => {
        console.log(res);
        setwarehouseDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [warehouseId, inventoryId]);

  return (
    <>
      <Header />
      <WarehouseItemList warehouseDetails={warehouseDetails} />
      <Footer />
    </>
  );
}

export default Warehouse;
