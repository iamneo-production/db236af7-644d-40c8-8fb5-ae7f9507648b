import { useState, useEffect } from "react";
import classes from "./AdminThemes.module.css";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminThemesForm from "./AdminThemesForm";
import axios from "axios";
import AdminThemesList from "./AdminThemesList";

const AdminThemes = () => {
  const [themeFromDb, setThemeFromDb] = useState([]);
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    axios.get("/admin/theme").then((res) => {
      setThemeFromDb(res.data);
    });
    return () => {};
  }, [refresh]);

  const [editing, setEditing] = useState(false);

  const [themeId, setThemeId] = useState();
  const [enteredThemeName, setEnteredThemeName] = useState("");
  const [enteredThemePrice, setEnteredThemePrice] = useState("");
  const [enteredThemeDesc, setEnteredThemeDesc] = useState("");

  const themeNameChangeHandler = (event) => {
    setEnteredThemeName(event.target.value);
    setIsFormTouched(true);
  };

  const themePriceChangeHandler = (event) => {
    setEnteredThemePrice(event.target.value);
    setIsFormTouched(true);
  };

  const themeDescChangeHandler = (event) => {
    setEnteredThemeDesc(event.target.value);
    setIsFormTouched(true);
  };

  const addThemeHandler = (newTheme) => {
    console.log("ADDING", newTheme);
    setLoader(true);
    axios
      .post("/admin/addTheme", newTheme)
      .then(() => {
        setRefresh(!refresh);
        setLoader(false);
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
  };

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
    alert('Are you sure you want to delete this theme?');
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
    setEnteredThemeName("");
    setEnteredThemePrice("");
    setEnteredThemeDesc("");
    setEditing(false);
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

export default AdminThemes;
