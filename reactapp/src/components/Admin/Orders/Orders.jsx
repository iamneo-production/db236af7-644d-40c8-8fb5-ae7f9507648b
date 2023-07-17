import { useEffect, useState } from "react";
import 'axios'
import {MdOutlineDeleteOutline} from 'react-icons/md'
import './orders.css'
import axios from "axios";

function Orders() {
 
const[allorders,Setallorder]=useState([]);
   useEffect(()=>
    {
       axios.get("/admin/order").then((res)=>
       {
        Setallorder(res.data);
        // console.log(res)
       })
    },[])

  function deleteorder(index)
  {
    axios.delete(`/admin/deleteOrder/${index}`);
  }
  return (
    <div className='App'>
      

<h2 className="order-heading">All Orders</h2>
<div className="ordercontainer">
  <div className="fromnew fromnewheader">

            <div> Order Id</div>
            <div> User</div>
            <div> Gift Name</div>
            <div> Price</div>
            <div> Address</div>
            <div>Action</div>           
          </div>

         {allorders.map((items,index)=> //allorders.map
         {
        return  <div key={index} className="fromnew fromnewbody">  
            <div>{items.orderId}</div>
            <div>{items.orderEmail}</div>
            <div>{items.gift.giftName}</div>
            <div>{items.orderPrice}</div>
            <div>{items.orderAddress}</div>
            <div className="deletebutton" onClick={()=>deleteorder(items.orderId)}><button><MdOutlineDeleteOutline/></button></div>           
          </div>
         })}
           
</div>
           </div>
          
          
  );
}

export default Orders;