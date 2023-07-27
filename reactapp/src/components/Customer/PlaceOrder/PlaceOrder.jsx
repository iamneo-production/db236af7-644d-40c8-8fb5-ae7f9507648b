import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import PlaceOrderForm from "./PlaceOrderForm";

const PlaceOrder = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const giftDetails = location.state;

  const [selectedThemeOptions, setSelectedThemeOptions] = useState([]);
  const [isAddressDropdownOpen, setIsAddressDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});

  // Fetch Themes from DB
  const [themesFromDb, setThemesFromDb] = useState([]);
  useEffect(() => {
    axios
      .get("/user/themes")

      .then((response) => {
        setThemesFromDb(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const citiesInIndia = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
  ];
  const [filteredCities, setFilteredCities] = useState(citiesInIndia);

  //Set CurrentDate
  const [orderDate, setOrderDate] = useState(
    new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  );
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setOrderDate(currentDate);
  }, [orderDate]);

  // Set Orders Form Initial State
  const orderFormInitialState = {
    customerName: "",
    orderDescription: "",
    giftId: giftDetails.giftId,
    orderPrice: giftDetails.giftPrice,
    orderDate,
    orderAddress: "",
    orderPhone: "",
    themes: [],
  };
  const [orderFormDetails, setOrderFormDetails] = useState(
    orderFormInitialState
  );

  // Close theme dropdown on clicking outside
  const themeDropdownRef = useRef(null);
  useEffect(() => {
    const checkIfClickedOutside = (event) => {
      if (
        isThemeDropdownOpen &&
        themeDropdownRef.current &&
        !themeDropdownRef.current.contains(event.target)
      ) {
        setIsThemeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isThemeDropdownOpen]);

  const orderFormDetailsChangeHandler = (event) => {
    const { name, value } = event.target;
    setOrderFormDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const validateFields = () => {
    const error = {};

    if (!/^\d{10}$/.test(orderFormDetails.orderPhone)) {
      error.phone = "Phone number is invalid";
    }
    return error;
  };

  const toggleAddressDropdownHandler = () => {
    setIsThemeDropdownOpen(false);
    setIsAddressDropdownOpen(!isAddressDropdownOpen);
  };

  const toggleThemeDropdownHandler = (e) => {
    setIsAddressDropdownOpen(false);
    setIsThemeDropdownOpen(!isThemeDropdownOpen);
  };

  const addressSearchChangeHandler = (event) => {
    const { value } = event.target;
    const filteredCitiesList = citiesInIndia.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredCities(filteredCitiesList);
  };

  const themeSelectionChangeHandler = (event, theme) => {
    let totalPrice;
    let currentSelectedThemes = orderFormDetails.themes;

    const { value, checked } = event.target;

    if (checked) {
      setSelectedThemeOptions((prevOptions) => [...prevOptions, value]);
      totalPrice = orderFormDetails.orderPrice + theme.themePrice;
      currentSelectedThemes.push(theme.themeId);
    } else {
      setSelectedThemeOptions((prevOptions) =>
        prevOptions.filter((option) => option !== value)
      );
      totalPrice = orderFormDetails.orderPrice - theme.themePrice;
      currentSelectedThemes = currentSelectedThemes.filter(
        (themeItem) => themeItem !== theme.themeId
      );
    }

    setOrderFormDetails((prevState) => {
      return {
        ...prevState,
        orderPrice: totalPrice,
        themes: currentSelectedThemes,
      };
    });
  };

  const placeOrderHandler = (event) => {
    event.preventDefault();
    const validationerrors = validateFields();

    if (Object.keys(validationerrors).length > 0) {
      setErrors(validationerrors);
      return;
    }

    axios
      .post("/user/addOrder", orderFormDetails)
      .then(() => {
        alert("Order placed successfully");
        setOrderFormDetails(orderFormInitialState);
        setSelectedThemeOptions([]);
        setErrors({});
        navigate("/user/myorders");
      })
      .catch((error) => {
        alert("Unable to place your Order. Try again later");
        console.error(error);
      });
  };

  return (
    <div className=".order-container-holder">
      <h2>Place Order</h2>
      <PlaceOrderForm
        giftName={giftDetails.giftName}
        orderDate={orderDate}
        filteredCities={filteredCities}
        toggleAddressDropdownHandler={toggleAddressDropdownHandler}
        addressSearchChangeHandler={addressSearchChangeHandler}
        isAddressDropdownOpen={isAddressDropdownOpen}
        themesFromDb={themesFromDb}
        isThemeDropdownOpen={isThemeDropdownOpen}
        toggleThemeDropdownHandler={toggleThemeDropdownHandler}
        selectedThemeOptions={selectedThemeOptions}
        themeSelectionChangeHandler={themeSelectionChangeHandler}
        themeDropdownRef={themeDropdownRef}
        orderFormDetails={orderFormDetails}
        orderFormDetailsChangeHandler={orderFormDetailsChangeHandler}
        errors={errors}
        placeOrderHandler={placeOrderHandler}
      />
    </div>
  );
};

export default PlaceOrder;
