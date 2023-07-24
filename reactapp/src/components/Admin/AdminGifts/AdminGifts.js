import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "../AdminHeader/AdminHeader";
import AddIcon from "../../../assets/add.svg";
import AddGiftForm from "./AddGiftForm";
import EditGiftForm from "./EditGiftForm";
import AdminGiftsList from "./AdminGiftsList";

const AdminGifts = () => {
  const [giftsList, setGiftsList] = useState([]);
  const giftItemInitialState = {
    giftName: "",
    giftImageUrl: "",
    giftDetails: "",
    giftPrice: "",
    giftQuantity: "",
  };

  const [giftItemDetails, setGiftItemDetails] = useState(giftItemInitialState);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [isGiftItemDeleted, setIsGiftItemDeleted] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    axios.get("/admin/gift").then((res) => {
      setGiftsList(res.data);
    });
  }, [showEditForm, showAddForm, isGiftItemDeleted]);

  const toggleAddFormHandler = () => {
    setShowAddForm(!showAddForm);
  };

  const toggleEditFormHandler = () => {
    setIsFormTouched(false);
    setShowEditForm(!showEditForm);
  };

  const addGiftChangeHandler = (event) => {
    const { name, value } = event.target;
    setGiftItemDetails((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const editGiftChangeHandler = (event) => {
    setIsFormTouched(true);
    const { name, value } = event.target;
    setGiftItemDetails((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  // Clicked edit icon from list
  const onEditGift = (giftItem) => {
    toggleEditFormHandler();
    setGiftItemDetails(giftItem);
  };

  const addGiftSubmitHandler = (event) => {
    event.preventDefault();
    setLoader(true);
    axios
      .post("/admin/addGift", giftItemDetails)
      .then(() => {
        toggleAddFormHandler();
        setGiftItemDetails(giftItemInitialState);
        setLoader(false);
      })
      .catch((error) => {
        alert("Unable to add Gift");
        toggleAddFormHandler();
      });
  };

  const updateGiftSubmitHandler = (event) => {
    event.preventDefault();
    setLoader(true);
    axios
      .put(`/admin/editGift?giftId=${giftItemDetails.giftId}`, giftItemDetails)
      .then((res) => {
        console.log(res);
        setLoader(false);
        toggleEditFormHandler();
        setIsFormTouched(false);
        setGiftItemDetails(giftItemInitialState);
      })
      .catch((error) => {
        setLoader(false);
        toggleEditFormHandler();
        alert("Error! Possible Solution : Shorten the Image URL");
      });
  };

  const deleteGiftHandler = (themeId) => {
    alert('Are you sure you want to delete this item?');
    setLoader(true);
    axios.delete(`/admin/deleteGift/${themeId}`).then(() => {
      setIsGiftItemDeleted(!isGiftItemDeleted);
      setLoader(false);
    });
  };

  return (
    <>
      <AdminHeader activeSection="Gifts" />
      <div className="container">
        <AdminGiftsList
          giftsList={giftsList}
          onEditGift={onEditGift}
          deleteGiftHandler={deleteGiftHandler}
        />

        {loader && (
          <>
            <div className="routes-loader"></div>
            <div className="overlay-styles"></div>
          </>
        )}

        <div className="addGiftBtn" onClick={toggleAddFormHandler}>
          <img className="addGiftBtnImg" src={AddIcon} alt="gift-add"></img>
        </div>

        {showAddForm && (
          <AddGiftForm
            showAddForm={showAddForm}
            toggleAddFormHandler={toggleAddFormHandler}
            addGiftSubmitHandler={addGiftSubmitHandler}
            addGiftChangeHandler={addGiftChangeHandler}
            loader={loader}
          />
        )}
        {showEditForm && (
          <EditGiftForm
            toggleEditFormHandler={toggleEditFormHandler}
            updateGiftSubmitHandler={updateGiftSubmitHandler}
            editGiftChangeHandler={editGiftChangeHandler}
            giftItemDetails={giftItemDetails}
            isFormTouched={isFormTouched}
            loader={loader}
          />
        )}
      </div>
    </>
  );
};

export default AdminGifts;
