import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import './AddGift.css';
import 'bootstrap/dist/css/bootstrap.css'

export default function AddTheme()  {
  const[CurrentUrl,setCurrentUrl]=useState("http://localhost:8081");
  const[addbuttton,setAddbutton]=useState(false);
  const[editbutton,setEditbutton]=useState(false);
  const[index,setIndex]=useState();
  const[addthemeDetails,Setaddthemedetails]=useState({themeName:"",themeDetails:"",themePrice:""})
  const[editthemeDetails,Seteditthemedetails]=useState({themeName:"",themeDetails:"",themePrice:"",themeId:0})
  const[themeFromDb,setThemeFromDb]=useState([]);
  function handlegiftDetails(event)
  {
const{name,value}=event.target;
Setaddthemedetails((pre)=>
{
  return{
    ...pre,[name]:value
  }
})



  }
  function handleeditgiftDetails(event)
  {
    const{name,value}=event.target;
    Seteditthemedetails((pre)=>
    {
      return{
        ...pre,[name]:value
      }
    })
  }
useEffect(()=>
{
      axios.get(CurrentUrl+'/admin/getTheme').then((res)=>
      {
        setThemeFromDb(res.data);
      })
},[CurrentUrl])
function addTheme(event)
{
  event.preventDefault();
  let formdata=new FormData();
  formdata.append('themeName',addthemeDetails.themeName);
  formdata.append('themeDetails',addthemeDetails.themeDetails);
  formdata.append('themePrice',addthemeDetails.themePrice);

  console.log(formdata);
axios.post(CurrentUrl+'/admin/addTheme',formdata)
}
function deleteTheme(id)
{
axios.delete(CurrentUrl+`/admin/deleteTheme/${id}`)
}
function editTheme(index,event)
{
  event.preventDefault();
  editthemeDetails.themeId=index;
  let formdata=new FormData();
  formdata.append('themeName',editthemeDetails.themeName);
  formdata.append('themeDetails',editthemeDetails.themeDetails);
  formdata.append('themePrice',editthemeDetails.themePrice);
  formdata.append('themeId',editthemeDetails.themeId);
  axios.put(CurrentUrl+`/admin/editTheme/${index}`,formdata)
}





  return (
    <div className='container'>
    <div className='row'>
      <div>
        <div className='col text-center'>
        <h3  className='btn btn-outline-success text-center' onClick={(event)=>{setAddbutton(!addbuttton);}} >➕ Add  Theme</h3>
        </div>
      </div>
    </div>
     <div className='row '>
{themeFromDb.map((items,index)=>
{
  return<div className='col-xxl-3 col-md-4 col-sm-4 gy-3 ' key={index}>
        <div className="card h-100  text-center" >          
           
          
           <div className="card-body">
           <h4 className="card-title text-start fs-6"><span className='text-muted'> &nbsp;&nbsp;Themename:</span>&nbsp;&nbsp;{items.themeName}</h4>
                <h5 className="card-text text-start fs-6"><span className='text-muted'>&nbsp;&nbsp;Themeprice:</span>&nbsp;&nbsp;💲{items.themePrice}</h5>
                 <p className="card-text text-start"> <span className='text-muted'>&nbsp;&nbsp;Themedetails:</span> &nbsp;&nbsp;{items.themeDetails}</p>
                
                 <div className=' d-flex justify-content-evenly'>
                 <span className='card-text' role='button' onClick={()=>{setEditbutton(!editbutton);setIndex(items.themeId)}}>📝</span>
                 <span className='card-text text-danger'role='button' onClick={()=>deleteTheme(items.themeId)}>X</span>
                 </div>

        </div>
  </div>
 </div>
})}
</div>

      {addbuttton &&<><div className='overlay-styles' onClick={()=>{setAddbutton(!addbuttton)}}></div>
     <div className=' d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle' >
      
      <form className='  p-5  bg-light rounded  '  onSubmit={addTheme} >
      <h4 className='text-center'>Adding..!</h4>

        <div className='form-group '>
          <label for="enterThemeName " className="text-muted">Name</label>
          <input className='form-control' placeholder='theme name' id='enterThemeName' name='themeName' onChange={handlegiftDetails}></input>
        </div>
        <div className='form-group '>
          <label for="enterThemePrice " className="text-muted">Price</label>
          <input className='form-control' placeholder=' theme price' id='enterThemePrice' name='themePrice' onChange={handlegiftDetails}></input>
        </div>
        <div className='form-group '>
          <label for="enterThemedescription"className="text-muted">Description</label>
          <input className='form-control' placeholder='theme description' id='enterThemedescription' name='themeDetails' onChange={handlegiftDetails}></input>
        </div>
        <input type='submit' className='btn btn-success btn-md btn-block mx-5 mt-3'  id='add' ></input>

      </form>
      </div></>}
      {editbutton &&<><div className='overlay-styles' onClick={()=>{setEditbutton(!editbutton)}}></div>
     <div className=' d-flex flex-column justify-content-center align-items-center position-absolute top-50 start-50 translate-middle' >
      
      <form className='  p-5 bg-light rounded  '   >
      <h4 className='text-center'>Updating..!</h4>
        <div className='form-group '>
          <label for="editThemeName " className="text-muted">Name</label>
          <input className='form-control' placeholder=' theme name'  id='editThemeName'name='themeName' onChange={handleeditgiftDetails}></input>
        </div>
        <div className='form-group '>
          <label for="editThemePrice " className="text-muted">Price</label>
          <input className='form-control' placeholder='theme price'  id='editThemePrice'  name='themePrice' onChange={handleeditgiftDetails}></input>
       </div>
        <div className='form-group '>
          <label for="editThemedescription"className="text-muted">Url</label>
          <input className='form-control' placeholder='...'  id='editThemedescription'name='themeDetails' onChange={handleeditgiftDetails}></input>
        </div>
  
        <button  className='btn btn-success btn-md btn-block mx-5 mt-3'  id='update' onClick={(event)=>{editTheme(index,event)}}>Update</button>

      </form>

      </div></>}
  </div>
  )
}
