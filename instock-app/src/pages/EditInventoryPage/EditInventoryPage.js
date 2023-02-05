import EditInventory from "../../components/EditNewInventoryItem/EditNewInventoryItem";
import Footer from "../../components/Warehouse/Footer/Footer";
import Header from "../../components/Warehouse/Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function EditInventoryPage() {
  return (
    <>
      <Header />
      <EditInventory />
      <Footer />
    </>
  );
}

export default EditInventoryPage;
