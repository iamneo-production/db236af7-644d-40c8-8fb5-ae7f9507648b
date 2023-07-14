import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./MyOrder.css";
import EditOrder from "./EditOrder.js";
import Header from "./Header";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import  axios  from 'axios';

const MyOrders = () => {

  const[CurrentUrl,setCurrentUrl]=useState("http://localhost:8081");
  const data = [
    { name: "Photos", price: 19, quantity: 100 },
    { name: "Frbdfdgts", price: 319, quantity: 100 },
    { name: "Caards", price:25, quantity: 100 },
    { name: "Laptops Stickers", price:25, quantity: 100}
  ];

  const navigate = useNavigate();
  
  const DeleteData = (index) => {
    axios.delete(CurrentUrl+`/admin/deleteGift/${index}`)

    .then((r) =>
    {
      console.log(r);
    })
    .catch((e) =>
    {
      console.log(e);
    })
  };
    
  const EditData = () => {
    navigate("/EditOrder");
  };

return(
  <>
     <Header />
    <div className='container-sm text-center'>
   
   <table class="table table-hover table-scripted table">
      <thead class="table-info">
        <tr class="order-containers">   
          <th scope="col"><h3>GiftName</h3></th>
          <th scope="col"><h3>Price</h3></th>
          <th scope="col"><h3>Quantity</h3></th>
        </tr>
      </thead>
  <tbody>
 {data.map((items,index)=>
     {
       return(
         <tr >
           <td >{items.name}</td>
           <td>{items.price}</td>
           <td>{items.quantity}</td>

           <div className='d-flex '>
             <button className=' btn btn-outline'  onClick={()=>EditData()}><EditIcon/></button>
             <button className=' btn btn-outline' onClick={()=>DeleteData(items.index)}><DeleteIcon /> </button>
           </div>        
         
         </tr>
       )
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
