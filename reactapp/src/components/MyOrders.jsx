import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./MyOrders.module.css";
import Header from "./Header";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const MyOrders = () => {
  return (
    <>
      <Header />
      <div className={classes["order-container"]}>
        <h1>Gift-Name</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
      </div>

      <div className={classes["products"]}>
        <ol>
          <li>
            <p className={classes["list-item-name"]}>Coffee</p>
            <p  className={classes["list-item-quantity"]}>200</p>
            <p className={classes["list-item-price"]}>3pcs</p>
            <EditIcon/>
            <DeleteIcon />
          </li>
          <li>
            <p className={classes["list-item-name"]}>Coffee</p>
            <p  className={classes["list-item-quantity"]}>200</p>
            <p className={classes["list-item-price"]}>3pcs</p>
            <EditIcon/>
            <DeleteIcon />
          </li>
          <li>
            <p className={classes["list-item-name"]}>Coffee</p>
            <p  className={classes["list-item-quantity"]}>200</p>
            <p className={classes["list-item-price"]}>3pcs</p>
            <EditIcon/>
            <DeleteIcon />
          </li>
        </ol>
      </div>

      <div className={classes["buttons-container"]}>
        <button className={classes["button-arounder"]}>Pay</button>
      </div>
    </>
  );
};

export default MyOrders;
