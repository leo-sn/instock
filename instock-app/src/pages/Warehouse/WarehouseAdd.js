import AddNewWarehouse from "../../components/Warehouse/AddNewWarehouse/AddNewWarehouse";
import Footer from "../../components/Warehouse/Footer/Footer";
import Header from "../../components/Warehouse/Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function WarehouseAdd() {
  return (
    <>
      <Header />
      <AddNewWarehouse />
      <Footer />
    </>
  );
}

export default WarehouseAdd;
