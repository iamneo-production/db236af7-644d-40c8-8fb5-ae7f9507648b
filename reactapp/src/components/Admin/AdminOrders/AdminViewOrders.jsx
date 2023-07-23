import { useState,useEffect } from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminViewOrdersTable from "./AdminViewOrdersTable";
import axios from "axios";

const AdminViewOrders = () => {
  const [ordersData, setOrdersData] = useState([]);
  useEffect(() => {
    axios.get("/admin/order").then((res) => {
      setOrdersData(res.data);
    });
  }, [ordersData]);

  return (
    <>
      <AdminHeader activeSection="Orders" />
      <AdminViewOrdersTable ordersData={ordersData} />
    </>
  );
};

export default AdminViewOrders;
