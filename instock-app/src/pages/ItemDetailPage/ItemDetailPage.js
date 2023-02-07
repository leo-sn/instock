import ItemDetail from "../../components/DetailInventoryItem/DetailInventoryItem";
import Footer from "../../components/Warehouse/Footer/Footer";
import Header from "../../components/Warehouse/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ItemDetailPage() {
  return (
    <>
      <Header />
      <ItemDetail />
      <Footer />
    </>
  );
}

export default ItemDetailPage;
