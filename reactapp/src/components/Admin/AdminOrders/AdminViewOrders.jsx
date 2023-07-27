import { useEffect, useState } from "react";
import axios from 'axios';
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminViewOrdersTable from "./AdminViewOrdersTable";


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
