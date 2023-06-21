import React, { useEffect, useState } from 'react'
import  axios  from 'axios';

export default function AddGift() {
  const[CurrentUrl,setCurrentUrl]=useState("http://localhost:8081");
  const[addbuttton,setAddbutton]=useState(false);
  const[editbutton,setEditbutton]=useState(false);
  const[index,setIndex]=useState();
  const[addgiftDetails,Setaddgiftdetails]=useState({giftName:"",giftImageUrl:"",giftDetails:"",giftPrice:""})
   const[editgiftDetails,Seteditgiftdetails]=useState({giftName:"",giftImageUrl:"",giftDetails:"",giftPrice:"",giftId:0})

  const[giftFromDb,setGiftFromDb]=useState([]);
  function handlegiftDetails(event)
  {
const{name,value}=event.target;
Setaddgiftdetails((pre)=>
{
  return{
    ...pre,[name]:value
  }
})

  }
  function handleeditgiftDetails(event)
  {
    const{name,value}=event.target;
    Seteditgiftdetails((pre)=>
    {
      return{
        ...pre,[name]:value
      }
    })
  }
useEffect(()=>
{
      axios.get(CurrentUrl+'/admin/getGift').then((res)=>
      {
        setGiftFromDb(res.data);
      })
},[CurrentUrl])
function addGift()
{
  let formdata=new FormData();

    formdata.append('giftName',addgiftDetails.giftName);
    formdata.append('giftImageUrl',addgiftDetails.giftImageUrl);
    formdata.append('giftDetails',addgiftDetails.giftDetails);
    formdata.append('giftPrice',addgiftDetails.giftPrice);
 axios.post(CurrentUrl+'/admin/addGift',formdata)
}
function deleteGift(id)
{
axios.delete(CurrentUrl+`/admin/deleteGift/${id}`)
}
function editGift(index)
{
  editgiftDetails.giftId=index;
  let formdata=new FormData();
  formdata.append('giftName',editgiftDetails.giftName);
  formdata.append('giftImageUrl',editgiftDetails.giftImageUrl);
  formdata.append('giftDetails',editgiftDetails.giftDetails);
  formdata.append('giftPrice',editgiftDetails.giftPrice);
  formdata.append('giftId',editgiftDetails.giftId);

axios.put(CurrentUrl+`/admin/editGift/${index}`,formdata)
}
console.log(giftFromDb);
  return (
    <div className='admingifts'>
    <div className='nav-bar-container'>
    <h3  onClick={(event)=>
    {
      setAddbutton(!addbuttton);
      
    }
    }>➕ Add  Gifts</h3>
 
  <div className='scroll-order-items'>
 
  {giftFromDb.map((items,index)=>      // || /user/getallthemes
         {
              return(
                <div className='singleitems'>
                    <div className='items' key={index} >
                    <img src={items.giftImageUrl}></img>
                    <h2 style={{textAlign:"center"}}>{items.giftName }</h2>
                    <h4 style={{textAlign:"center",marginRight:'30px'}}>💲 {items.giftPrice}</h4>
                    <h4 style={{textAlign:"center"}}> {items.giftDetails}</h4>
                    <span onClick={()=>{setEditbutton(!editbutton);setIndex(items.giftId)}}>📝</span><span onClick={()=>deleteGift(items.giftId)}>❌</span>
                    
                    </div>
                    </div>
                    )
         })}
               
   </div>
   </div>
   {addbuttton &&<>   <div className='overlay-styles' onClick={()=>{setAddbutton(!addbuttton)}}></div>
<div className='addingdivision' style={{backgroundColor:"whitesmoke"}}>
      <form style={{marginLeft:"20px" }}>
      <h2 style={{textAlign:"center"}}>Enter New Gift Details </h2>

       <input className='allforminputs' placeholder='enter a gift name' id='enterGiftName' name='giftName' onChange={handlegiftDetails}></input>
       <input className='allforminputs' placeholder='enter a gift price' id='enterGiftPrice' name='giftPrice' onChange={handlegiftDetails}></input>
       <input className='allforminputs' placeholder='enter a gift image url' id='enterGiftimageUrl' name='giftImageUrl' onChange={handlegiftDetails}></input>
       <input className='allforminputs' placeholder='enter a gift quantity'id='enterGiftQuantity'  onChange={handlegiftDetails}></input>
       <input className='allforminputs' placeholder='enter a gift details' id='enterGiftDetails' name='giftDetails' onChange={handlegiftDetails}></input>
       </form><div>
       <button className='admingiftbutton' onClick={()=>addGift()} id='add'>Add Gift</button></div>
       </div>
     </>
    }
     {editbutton && <><div className='overlay-styles' onClick={()=>{setEditbutton(!editbutton)}}></div><div className='addingdivision' style={{backgroundColor:"whitesmoke"}}>
      <div style={{marginLeft:"20px" }}>
      <h2 style={{textAlign:"center"}}>Edit Gift Details </h2>

       <input className='allforminputs' placeholder='enter a gift name'  id='editGiftName'name='giftName' onChange={handleeditgiftDetails}></input>
       <input className='allforminputs' placeholder='enter a gift price'  id='editGiftPrice'  name='giftPrice' onChange={handleeditgiftDetails}></input>
       <input className='allforminputs' placeholder='enter a gift image url'  id='editGiftimageUrl'name='giftImageUrl' onChange={handleeditgiftDetails}></input>
       <input className='allforminputs' placeholder='enter a gift quantity'  id='editGiftQuantity' name='giftId' onChange={handleeditgiftDetails}></input>
       <input className='allforminputs' placeholder='enter a gift details'  id='editGiftDetails' name='giftDetails' onChange={handleeditgiftDetails}></input>
       </div>
       <div>
       <button className='admingiftbutton' id='update' onClick={()=>{editGift(index);console.log(index)}}>Update Gift</button>
       </div>
    </div></>
    }
   </div>

    
   
  )
}
