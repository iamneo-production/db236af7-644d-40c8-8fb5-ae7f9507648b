import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import AdminHeader from "../AdminHeader/AdminHeader";
import Adminthemes from "../Adminthemes/Adminthemes";
import AdminThemesForm from "../Adminthemes/AdminThemesForm";
import AdminThemesList from "../Adminthemes/AdminThemesList";
import 'bootstrap/dist/css/bootstrap.css'

export  function AddTheme()  {
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
      .catch((error) => {
        console.log(error);
        alert("Unable to add Theme. Try again later");
        setLoader(false);
      });
    setIsFormTouched(false);
    setEnteredThemeName("");
    setEnteredThemePrice("");
    setEnteredThemeDesc("");
  });

  const updateThemeHandler = () => {
    if (isFormTouched) {
      setLoader(true);
      console.log(
        "UPDATING",
        themeId,
        enteredThemeName,
        enteredThemePrice,
        enteredThemeDesc
      );
      const updatedThemeItem = {
        themeName: enteredThemeName,
        themePrice: enteredThemePrice,
        themeDetails: enteredThemeDesc,
      };
      axios
        .put(`/admin/editTheme?themeId=${themeId}`, updatedThemeItem)
        .then(() => {
          setRefresh(!refresh);
          setLoader(false);
        })
        .catch(() => {
          alert("Error! while updating");
          setLoader(false);
        });
    }
    setIsFormTouched(false);
  };

  const deleteThemeHandler = (themeItem) => {
    setLoader(true);
    axios
      .delete(`/admin/deleteTheme/${themeItem.themeId}`)
      .then(() => {
        setRefresh(!refresh);
        console.log("DELETING", themeItem.themeId);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };

  //Clicked Edit Icon from List
  const onEditTheme = (themeItem) => {
    console.log("EDITING", themeItem);
    setThemeId(themeItem.themeId);
    setEnteredThemeName(themeItem.themeName);
    setEnteredThemePrice(themeItem.themePrice);
    setEnteredThemeDesc(themeItem.themeDetails);
    setEditing(true);
  };

  const cancelEditHandler = () => {
    setEditing(false);
    setIsFormTouched(false);
    setEnteredThemeName("");
    setEnteredThemePrice("");
    setEnteredThemeDesc("");
  };

  const themeSubmitHandler = (event) => {
    event.preventDefault();
    console.log("FORM SUBMITTED", event);

    const submittedThemeItem = {
      themeName: event.target[0].value,
      themePrice: event.target[1].value,
      themeDetails: event.target[2].value,
    };

    if (editing) {
      updateThemeHandler();
    } else {
      addThemeHandler(submittedThemeItem);
    }
  };

  return (
    <>
      <AdminHeader activeSection="Themes" />
      {loader && <div className="routes-loader"></div>}
      <div className={classes["themes-container"]}>
        <div className={classes["themes-list-container"]}>
          <AdminThemesList
            themesList={themeFromDb}
            onEditTheme={onEditTheme}
            onDeleteTheme={deleteThemeHandler}
          />
        </div>
        <div className={classes["themes-form-container"]}>
          <AdminThemesForm
            editing={editing}
            isFormTouched={isFormTouched}
            cancelEditing={cancelEditHandler}
            enteredThemeName={enteredThemeName}
            enteredThemePrice={enteredThemePrice}
            enteredThemeDesc={enteredThemeDesc}
            themeNameChangeHandler={themeNameChangeHandler}
            themePriceChangeHandler={themePriceChangeHandler}
            themeDescChangeHandler={themeDescChangeHandler}
            themeSubmitHandler={themeSubmitHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Adminthemes;
