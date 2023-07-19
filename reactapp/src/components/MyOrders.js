import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "./Customer/HomePage/Header";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import "./MyOrder.css";

const MyOrders = () => {
  const [currentUrl, setCurrentUrl] = useState("http://localhost:8081");
  const data = [
    { name: "Photos", price: 19, quantity: 100 },
    { name: "Frbdfdgts", price: 319, quantity: 100 },
    { name: "Caards", price: 25, quantity: 100 },
    { name: "Laptops Stickers", price: 25, quantity: 100 },
  ];

  const navigate = useNavigate();

  const DeleteData = (index) => {
    axios
      .delete(currentUrl + `/admin/deleteGift/${index}`)

      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const EditData = () => {
    navigate("/editorder");
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
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>

                  <div className="d-flex">
                    <button
                      className="btn btn-outline"
                      onClick={() => EditData()}
                    >
                      <EditIcon />
                    </button>
                    <button
                      className="btn btn-outline"
                      onClick={() => DeleteData(item.id)}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
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
