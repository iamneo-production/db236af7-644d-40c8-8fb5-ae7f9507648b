import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../AdminHeader/AdminHeader";
import edit from "../../../assets/edit.svg";
import deleteIcn from "../../../assets/delete.svg";
import add from "../../../assets/add.svg";

export default function AddGift() {
  const [addbuttton, setAddbutton] = useState(false);
  const [editbutton, setEditbutton] = useState(false);
  const [deletebutton, setDelete] = useState(false);
  const [index, setIndex] = useState();
  const [loader, setLoader] = useState(false);
  const [addgiftDetails, Setaddgiftdetails] = useState({
    giftName: "",
    giftImageUrl: "",
    giftDetails: "",
    giftPrice: "",
    giftQuantity: "",
  });
  const [editgiftDetails, Seteditgiftdetails] = useState({
    giftName: "",
    giftImageUrl: "",
    giftDetails: "",
    giftPrice: "",
    giftId: 0,
    giftQuantity: "",
  });

  const [giftFromDb, setGiftFromDb] = useState([]);
  function handlegiftDetails(event) {
    const { name, value } = event.target;
    Setaddgiftdetails((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }
  function handleeditgiftDetails(event) {
    const { name, value } = event.target;
    Seteditgiftdetails((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    axios.get("/admin/gift").then((res) => {
      console.log(res)
      setGiftFromDb(res.data);
    });
  },[editbutton,addbuttton,deletebutton]);

  function addGift(event) {
    event.preventDefault()
    setLoader(true)
    axios.post( "/admin/addGift", addgiftDetails).then(() => {
      setAddbutton(!addbuttton)
      Setaddgiftdetails({
        giftName: "",
        giftImageUrl: "",
        giftDetails: "",
        giftPrice: "",
        giftQuantity: "",
      })
      setLoader(false)
    }).catch((error) => {
      alert("Unable to add Gift");
      setAddbutton(!addbuttton);
    });
  }
  function deleteGift(id) {
    setLoader(true)
    axios.delete( `/admin/deleteGift/${id}`).then(() => {
      setDelete(!deletebutton)
      setLoader(false);
    });
  }

  function editGift(event) {
    event.preventDefault();
    setLoader(true);
    editgiftDetails.giftId = index;
    axios.put( `/admin/editGift?giftId=${index}`, editgiftDetails).then(() => {
      setLoader(false)
      setEditbutton(!editbutton) 
      Seteditgiftdetails({
        giftName: "",
        giftImageUrl: "",
        giftDetails: "",
        giftPrice: "",
        giftId: 0,
        giftQuantity: "",
      })
      }).catch((error) => {
        console.log(error.response.status)
        setLoader(false);
        setEditbutton(!editbutton);
        alert("Error! Possible Solution : Shorten the Image URL");
    });
  }
  return (
    <div>
        <AdminHeader activeSection="Gifts" />
        {loader && <div className="routes-loader"></div>}    
    <div className="container">
      <div className="addGiftBtn" onClick={(event) => {
                setAddbutton(!addbuttton);
              }}><img className="addGiftBtnImg" src={add}></img></div>
      <div className="row ">
        {giftFromDb.map((items, index) => {
          return (
            <div className="col-xxl-3 col-md-4 col-sm-4 gy-3 apply-font" key={index}>
              <div className="card border-0 text-center">
                <div className="card-body">
                  <img
                    className="h-75 w-75 p-2 cardimage "
                    src={items.giftImageUrl}
                    alt="Card image cap"
                  />
                  <h5 className="card-title">{items.giftName}</h5>
                  <p className="card-text"> ₹ {items.giftPrice}</p>
                  <p className="card-text">
                      {" "}
                      {items.giftQuantity} <span>ps</span>{" "}
                    </p>
                  <div className="giftDetails">
                    <p className="card-text ">
                    {items.giftDetails}
                    </p>
                  </div>
                  <div className="giftActions card-text">
                    <button className="giftActionsBtn" onClick={() => {
                        setEditbutton(!editbutton);
                        setIndex(items.giftId);
                      }}> Edit <img className="giftActionsIcon"src={edit}></img>
                     </button>
                    <button className="giftActionsBtn" onClick={() => deleteGift(items.giftId)}>Delete <img className="giftActionsIcon"src={deleteIcn}></img></button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ----------------------------------------------------------------- Add Gift ----------------------------------------------------------------------------------- */}
      {addbuttton &&<><div className='overlay-styles' onClick={()=>{setAddbutton(!addbuttton)}}></div>
     <div className='p-2 d-flex justify-content-center align-items-center position-absolute top-50 start-50 w-50 translate-middle' >
      
      <form className=' p-3 bg-light rounded  w-100 text-center'  onSubmit={addGift} >
      <h4 className='text-center'>Adding..!</h4>

     <div className='form-group row  '>
      
        <div className='col-xxl-12'>
          <label for="enterGiftName " className="text-muted">Name</label>
          <input className='form-control w-100' placeholder='gift name' id='enterGiftName' name='giftName' onChange={handlegiftDetails} required></input>
        </div>
        <div className='col-xxl-12'>
          <label for="enterGiftPrice " className="text-muted">Price</label>
          <input type = "number" className='form-control w-100' placeholder=' gift price' id='enterGiftPrice' name='giftPrice' onChange={handlegiftDetails} required></input>
        </div>
        <div className='col-xxl-12'>
          <label for="enterGiftimageUrl"className="text-muted">Url</label>
          <input className='form-control w-100' placeholder='http://' id='enterGiftimageUrl' name='giftImageUrl' onChange={handlegiftDetails} required></input>
        </div>
        <div className='col-xxl-12'>
          <label for="enterGiftQuantity"className="text-muted">Quantity</label>
          <input type = "number" className='form-control w-100' placeholder='gift quantity'id='enterGiftQuantity' name='giftQuantity' onChange={handlegiftDetails} required></input>
        </div>
        <div className='col-xxl-12'>
          <label for="enterGiftDetails"className="text-muted">Details</label>
          <input className='form-control w-100' placeholder='desc' id='enterGiftDetails' name='giftDetails' onChange={handlegiftDetails} required></input>
        </div>
        </div>
        <div className='text-center'>
        { loader ? <div className="loader"></div> : <input type='submit' className='btn btn-success btn-md btn-block ml-5 mt-3 '  id='add' ></input>}
        </div>
      </form>
      </div></>}
      {/* ----------------------------------------------------------------- Add Gift ----------------------------------------------------------------------------------- */}

      {/* ----------------------------------------------------------------- Edit Gift ----------------------------------------------------------------------------------- */}
      {editbutton &&<><div className='overlay-styles' onClick={()=>{setEditbutton(!editbutton)}}></div>
     <div className='p-2 d-flex justify-content-center align-items-center position-absolute top-50 start-50 w-50 translate-middle' >
      
      <form className=' p-3 bg-light rounded  w-100 text-center' onSubmit={editGift}>
      <h4 className='text-center'>Update..!</h4>

     <div className='form-group row  '>
      
        <div className='col-xxl-12'>
          <label for="editGiftName" className="text-muted">Name</label>
          <input className='form-control w-100' placeholder='gift name' id='editGiftName' name='giftName' onChange={handleeditgiftDetails} required></input>
        </div>
        <div className='col-xxl-12'>
          <label for="editGiftPrice" className="text-muted">Price</label>
          <input type = "number" className='form-control w-100' placeholder=' gift price' id='editGiftPrice' name='giftPrice' onChange={handleeditgiftDetails} required></input>
        </div>
        <div className='col-xxl-12'>
          <label for="editGiftimageUrl"className="text-muted">Url</label>
          <input className='form-control w-100' placeholder='http://' id='editGiftimageUrl' name='giftImageUrl' onChange={handleeditgiftDetails} required></input>
        </div>
        <div className='col-xxl-12'>
          <label for="editGiftQuantity"className="text-muted">Quantity</label>
          <input type = "number" className='form-control w-100' placeholder='gift quantity'id='editGiftQuantity' name='giftQuantity' onChange={handleeditgiftDetails} required></input>
        </div>
        <div className='col-xxl-12'>
          <label for="editGiftDetails"className="text-muted">Details</label>
          <input className='form-control w-100' placeholder='desc' id='editGiftDetails' name='giftDetails' onChange={handleeditgiftDetails} required></input>
        </div>
        </div>
          <div className='text-center'>
          { loader ? <div className="loader"></div> : <button type="submit"
                  className="btn btn-success btn-md btn-block mx-5 mt-3"
                  id="update">Update
                </button> 
          }
                
          </div>
      </form>
      </div></>}
      {/* ----------------------------------------------------------------- Edit Gift ----------------------------------------------------------------------------------- */}
    </div>
  </div>
  );
}
