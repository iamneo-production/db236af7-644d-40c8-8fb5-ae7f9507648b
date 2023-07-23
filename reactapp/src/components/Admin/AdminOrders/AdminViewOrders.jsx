import { useState,useEffect } from "react";
import axios from 'axios';
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminViewOrdersTable from "./AdminViewOrdersTable";

const AdminViewOrders = () => {
//   const ORDERS_DUMMY_DATA = [
//     {
//       orderId: 1,
//       orderEmail: "sarth@ss.com",
//       giftName: "Frame",
//       orderPrice: 23,
//       orderAddress: "Street Colony, 448302",
//     },
//     {
//       orderId: 2,
//       orderEmail: "sarth@ss.com",
//       giftName: "Frame",
//       orderPrice: 23,
//       orderAddress: "Street Colony, 448302",
//     },
//     {
//       orderId: 3,
//       orderEmail: "sarth@ss.com",
//       giftName: "Frame",
//       orderPrice: 23,
//       orderAddress: "Street Colony, 448302",
//     },
//     {
//       orderId: 4,
//       orderEmail: "sarth@ss.com",
//       giftName: "Frame",
//       orderPrice: 23,
//       orderAddress: "Street Colony, 448302",
//     },
//     {
//       orderId: 5,
//       orderEmail: "sarth@ss.com",
//       giftName: "Frame",
//       orderPrice: 23,
//       orderAddress: "Street Colony, 448302",
//     },
//     {
//       orderId: 6,
//       orderEmail: "sarth@ss.com",
//       giftName: "Frame",
//       orderPrice: 23,
//       orderAddress: "Street Colony, 448302",
//     },
//     {
//       orderId: 7,
//       orderEmail: "sarth@ss.com",
//       giftName: "Frame",
//       orderPrice: 23,
//       orderAddress: "Street Colony, 448302",
//     },
//   ];

  const [ordersData, setOrdersData] = useState([]);
  useEffect(() => {
    axios.get("/admin/order").then((res) => {
      Setallorder(res.data);
       console.log(res)
    });
  }, []);

  return (
    <>
      <AdminHeader activeSection="Orders" />
      <AdminViewOrdersTable ordersData={ordersData} />
    </>
  );
};

export default AdminViewOrders;