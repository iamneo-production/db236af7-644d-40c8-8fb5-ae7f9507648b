import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyOrders.css";
import Header from "../HomePage/Header";
import EditIcon from "../../../assets/android-edit.svg";
import DeleteIcon from "../../../assets/android-delete.png";
import axios from "axios";

const MyOrders = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [checker,setChecker]=useState(true);

  useEffect(() => {
    axios
      .get("/user/orderHistory")
      .then((response) => {
        setOrderDetails(response.data);
        
            if(orderDetails.length()==0){setChecker(false);}
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {};
  }, [orderDetails]);
  const navigate = useNavigate();

  const DeleteData = (index) => {
    axios
      .delete(`/user/deleteOrder/${index}`)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const EditData = (orderId) => {
    const selectedOrder=orderDetails.find((item) => item.orderId === orderId);
    navigate("/user/editorder",{
      state:selectedOrder,
    });
  };

  return (
    <>
      <Header />

      {checker ? <div className="No-orders"><h3>No Orders Available !</h3></div> :
       
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
            {orderDetails.map((item) => {
              return (
                <tr key={item.orderId}>
                  <td>{item.gift.giftName}</td>
                  <td>{item.orderPrice}</td>
                  <td>{item.gift.giftQuantity}</td>
                  <td>
                    <div className="d-flex ">
                      <button
                        className=" btn btn-outline"
                        onClick={() => EditData(items.orderId)}
                      >
                        <img src={EditIcon} alt="edit-icon"></img>
                      </button>
                      <button
                        className=" btn btn-outline"
                        onClick={() => DeleteData(item.orderId)}
                      >
                        <img src={DeleteIcon} alt="delete-icon"></img>{" "}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>}

    </>
  );
};

export default MyOrders;
