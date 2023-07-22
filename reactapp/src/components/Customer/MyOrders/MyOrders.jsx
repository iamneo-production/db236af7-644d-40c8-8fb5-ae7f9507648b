import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyOrders.css";
import EditOrder from "../EditOrder/EditOrder";
import Header from "../HomePage/Header";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const MyOrders = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const data = [
    { name: "Photos", price: 19, quantity: 100 },
    { name: "Frbdfdgts", price: 319, quantity: 100 },
    { name: "Caards", price: 25, quantity: 100 },
    { name: "Laptops Stickers", price: 25, quantity: 100 },
  ];
  useEffect(() => {
    axios
      .get("/user/orderHistory")
      .then((response) => {
        setOrderDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      return () => {
      }
    }, []);
  const navigate = useNavigate();

  const DeleteData = (index) => {
    axios
      .delete(`/admin/deleteGift/${index}`)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const EditData = () => {
    navigate("/user/editorder");
  };

  return (
    <>
      <Header />
      <div className="container-sm text-center">
        <table className="table table-hover table-scripted table">
          <thead className="table-info">
            <tr className="order-containers">
              <th scope="col">
                <h3>GiftName</h3>
              </th>
              <th scope="col">
                <h3>Price</h3>
              </th>
              <th scope="col">
                <h3>Quantity</h3>
              </th>
              <th scope="col">
                <h3>Action</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((items, index) => {
              return (
                <tr>
                  <td>{items.gift.giftName}</td>
                  <td>{items.orderPrice}</td>
                  <td>{items.gift.giftQuantity}</td>
                  <td>
                    <div className="d-flex ">
                      <button
                        className=" btn btn-outline"
                        onClick={() => EditData()}
                      >
                        <EditIcon />
                      </button>
                      <button
                        className=" btn btn-outline"
                        onClick={() => DeleteData(items.index)}
                      >
                        <DeleteIcon />{" "}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="buttons-container">
        <button className="button-arounder">Pay</button>
      </div>
    </>
  );
};

export default MyOrders;
