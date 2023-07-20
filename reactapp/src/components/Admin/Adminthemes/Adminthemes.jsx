import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import classes from "./Adminthemes.module.css";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminThemesList from "./AdminThemesList";
import AdminThemesForm from "./AdminThemesForm";

const Adminthemes = () => {
  const THEMES_DUMMY_LIST = [
    {
      id: uuidv4(),
      name: "Lighting",
      price: 70,
      description: "Duis aute irure dolor in reprehenderit",
    },
    {
      id: uuidv4(),
      name: "Photo Design",
      price: 100,
      description: "Duis aute irure dolor in reprehenderit",
    },
    {
      id: uuidv4(),
      name: "Face Pattern",
      price: 80,
      description: "Duis aute irure dolor in reprehenderit",
    },
    {
      id: uuidv4(),
      name: "Frame Design",
      price: 90,
      description: "Duis aute irure dolor in reprehenderit",
    },
  ];

  //FETCH THEME DATA FROM DB
  // const [themeFromDb, setThemeFromDb] = useState([]);
  // useEffect(() => {
  //   axios.get(CurrentUrl + "/admin/getTheme").then((res) => {
  //     setThemeFromDb(res.data);
  //   });
  // }, [CurrentUrl]);

  const [themesList, setThemesList] = useState(THEMES_DUMMY_LIST);

  const [editing, setEditing] = useState(false);
  const [isFormTouched, setIsFormTouched] = useState(false);

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
    setThemesList((prevState) => {
      return [...prevState, newTheme];
    });

    //SEND ADD REQ
    // axios.post(CurrentUrl + "/admin/addTheme", formdata);
    setIsFormTouched(false);
  };

  const updateThemeHandler = () => {
    if (isFormTouched) {
      console.log(
        "UPDATING",
        themeId,
        enteredThemeName,
        enteredThemePrice,
        enteredThemeDesc
      );
      // const updatedThemeItem = {
      //   name: enteredThemeName,
      //   price: enteredThemePrice,
      //   description: enteredThemeDesc,
      // };
      //SEND UPDATE REQ
      setIsFormTouched(false);
    } else return;
    // axios.put(CurrentUrl + `/admin/editTheme/${themeId}`, updatedThemeItem);
  };

  const deleteThemeHandler = (themeItem) => {
    setThemesList((prevState) => {
      return prevState.filter((theme) => theme.id !== themeItem.id);
    });

    console.log("DELETING", themeItem.id);
    // axios.delete(CurrentUrl + `/admin/deleteTheme/${themeItem.id}`);
  };

  //Clicked Edit Icon from List
  const onEditTheme = (themeItem) => {
    console.log("EDITING", themeItem);
    setThemeId(themeItem.id);
    setEnteredThemeName(themeItem.name);
    setEnteredThemePrice(themeItem.price);
    setEnteredThemeDesc(themeItem.description);
    setEditing(true);
  };

  const cancelEditHandler = () => {
    setEditing(false);
    setEnteredThemeName("");
    setEnteredThemePrice("");
    setEnteredThemeDesc("");
  };

  const themeSubmitHandler = (event) => {
    event.preventDefault();
    console.log("FORM SUBMITTED", event);

    const submittedThemeItem = {
      id: uuidv4(),
      name: event.target[0].value,
      price: event.target[1].value,
      description: event.target[2].value,
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

      <div className={classes["themes-container"]}>
        <div className={classes["themes-list-container"]}>
          <AdminThemesList
            themesList={themesList}
            onEditTheme={onEditTheme}
            onDeleteTheme={deleteThemeHandler}
          />
        </div>
        <div className={classes["themes-form-container"]}>
          <AdminThemesForm
            editing={editing}
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
