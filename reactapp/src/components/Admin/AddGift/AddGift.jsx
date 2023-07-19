import React, { useEffect, useState } from "react";
import "./AddGift.css";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

export default function AddGift() {
  const [CurrentUrl, setCurrentUrl] = useState("http://localhost:8081");
  const [addbuttton, setAddbutton] = useState(false);
  const [editbutton, setEditbutton] = useState(false);
  const [index, setIndex] = useState();
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
    axios.get(CurrentUrl + "/admin/getGift").then((res) => {
      setGiftFromDb(res.data);
    });
  }, [CurrentUrl]);
  function addGift(event) {
    event.preventDefault();

    let formdata = new FormData();
    formdata.append("giftName", addgiftDetails.giftName);
    formdata.append("giftImageUrl", addgiftDetails.giftImageUrl);
    formdata.append("giftDetails", addgiftDetails.giftDetails);
    formdata.append("giftQuantity", addgiftDetails.giftQuantity);
    formdata.append("giftPrice", addgiftDetails.giftPrice);
    axios.post(CurrentUrl + "/admin/addGift", formdata);
  }
  function deleteGift(id) {
    axios.delete(CurrentUrl + `/admin/deleteGift/${id}`);
  }
  function editGift(index, event) {
    event.preventDefault();
    editgiftDetails.giftId = index;
    let formdata = new FormData();
    formdata.append("giftName", editgiftDetails.giftName);
    formdata.append("giftImageUrl", editgiftDetails.giftImageUrl);
    formdata.append("giftDetails", editgiftDetails.giftDetails);
    formdata.append("giftQuantity", addgiftDetails.giftQuantity);
    formdata.append("giftPrice", editgiftDetails.giftPrice);
    formdata.append("giftId", editgiftDetails.giftId);

    axios.put(CurrentUrl + `/admin/editGift/${index}`, formdata);
  }
  console.log(giftFromDb);
  return (
    <div className="container ">
      <div className="row">
        <div>
          <div className="col text-center">
            <h3
              className="btn btn-outline-success text-center"
              onClick={(event) => {
                setAddbutton(!addbuttton);
              }}
            >
              ➕ Add Gifts
            </h3>
          </div>
        </div>
      </div>
      <div className="row ">
        {giftFromDb.map((items, index) => {
          return (
            <div className="col-xxl-3 col-md-4 col-sm-4 gy-3 " key={index}>
              <div className="card h-100 border-0 text-center">
                <div className="card-body">
                  <img
                    className="h-50 w-50 p-2 cardimage "
                    src={items.giftImageUrl}
                    alt="Card image cap"
                  />
                  <h5 className="card-title">{items.giftName}</h5>
                  <p className="card-text"> 💲{items.giftPrice}</p>
                  <p className="card-text ">
                    {" "}
                    {items.giftQuantity} <span>ps</span>{" "}
                  </p>
                  <div className=" d-flex justify-content-evenly">
                    <span
                      className="card-text"
                      role="button"
                      onClick={() => {
                        setEditbutton(!editbutton);
                        setIndex(items.giftId);
                      }}
                    >
                      📝
                    </span>
                    <span
                      className="card-text text-danger"
                      role="button"
                      onClick={() => deleteGift(items.giftId)}
                    >
                      <RxCross2 />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ----------------------------------------------------------------- Add Gift ----------------------------------------------------------------------------------- */}
      {addbuttton && (
        <>
          <div
            className="overlay-styles"
            onClick={() => {
              setAddbutton(!addbuttton);
            }}
          ></div>
          <div className=" d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
            <form className="  p-5  bg-light rounded  " onSubmit={addGift}>
              <h4 className="text-center">Adding..!</h4>

              <div className="form-group ">
                <label for="enterGiftName " className="text-muted">
                  Name
                </label>
                <input
                  className="form-control "
                  placeholder="gift name"
                  id="enterGiftName"
                  name="giftName"
                  onChange={handlegiftDetails}
                ></input>
              </div>
              <div className="form-group ">
                <label for="enterGiftPrice " className="text-muted">
                  Price
                </label>
                <input
                  className="form-control"
                  placeholder=" gift price"
                  id="enterGiftPrice"
                  name="giftPrice"
                  onChange={handlegiftDetails}
                ></input>
              </div>
              <div className="form-group ">
                <label for="enterGiftimageUrl" className="text-muted">
                  Url
                </label>
                <input
                  className="form-control"
                  placeholder="http://"
                  id="enterGiftimageUrl"
                  name="giftImageUrl"
                  onChange={handlegiftDetails}
                ></input>
              </div>
              <div className="form-group ">
                <label for="enterGiftQuantity" className="text-muted">
                  Quantity
                </label>
                <input
                  className="form-control"
                  placeholder="gift quantity"
                  id="enterGiftQuantity"
                  name="giftQuantity"
                  onChange={handlegiftDetails}
                ></input>
              </div>
              <div className="form-group ">
                <label for="enterGiftDetails" className="text-muted">
                  Details
                </label>
                <input
                  className="form-control"
                  placeholder="desc"
                  id="enterGiftDetails"
                  name="giftDetails"
                  onChange={handlegiftDetails}
                ></input>
              </div>
              <input
                type="submit"
                className="btn btn-success btn-md btn-block mx-5 mt-3"
                id="add"
              ></input>
            </form>
          </div>
        </>
      )}
      {/* ----------------------------------------------------------------- Add Gift ----------------------------------------------------------------------------------- */}

      {/* ----------------------------------------------------------------- Edit Gift ----------------------------------------------------------------------------------- */}
      {editbutton && (
        <>
          <div
            className="overlay-styles"
            onClick={() => {
              setEditbutton(!editbutton);
            }}
          ></div>
          <div className=" d-flex flex-column justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
            <form className="  p-5 bg-light rounded  ">
              <h4 className="text-center">Updating..!</h4>
              <div className="form-group ">
                <label for="editGiftName " className="text-muted">
                  Name
                </label>
                <input
                  className="form-control"
                  placeholder="gift name"
                  id="editGiftName"
                  name="giftName"
                  onChange={handleeditgiftDetails}
                ></input>
              </div>
              <div className="form-group ">
                <label for="editGiftPrice " className="text-muted">
                  Price
                </label>
                <input
                  className="form-control"
                  placeholder=" gift price"
                  id="editGiftPrice"
                  name="giftPrice"
                  onChange={handleeditgiftDetails}
                ></input>
              </div>
              <div className="form-group ">
                <label for="editGiftimageUrl" className="text-muted">
                  Url
                </label>
                <input
                  className="form-control"
                  placeholder="http://"
                  id="editGiftimageUrl"
                  name="giftImageUrl"
                  onChange={handleeditgiftDetails}
                ></input>
              </div>
              <div className="form-group ">
                <label for="editGiftQuantity" className="text-muted">
                  Quantity
                </label>
                <input
                  className="form-control"
                  placeholder="gift quantity"
                  id="editGiftQuantity"
                  name="giftId"
                  onChange={handleeditgiftDetails}
                ></input>
              </div>
              <div className="form-group ">
                <label for="editGiftDetails" className="text-muted">
                  Details
                </label>
                <input
                  className="form-control"
                  placeholder="desc"
                  id="editGiftDetails"
                  name="giftDetails"
                  onChange={handleeditgiftDetails}
                ></input>
              </div>
              <button
                className="btn btn-success btn-md btn-block mx-5 mt-3"
                id="update"
                onClick={(event) => {
                  editGift(index, event);
                }}
              >
                Update
              </button>
            </form>
          </div>
        </>
      )}
      {/* ----------------------------------------------------------------- Edit Gift ----------------------------------------------------------------------------------- */}
    </div>
  );
}
