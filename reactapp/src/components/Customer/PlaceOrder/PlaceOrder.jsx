import React, { useState, useRef,useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "./PlaceOrder.css";
import axios from "axios";

const PlaceOrder = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const date = new Date();
  const [orderDate, setOrderDate] = useState(date.toISOString().slice(0, 10));
  const [orderDescription, setOrderDescription] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [themesFromDb, setThemesFromDb] = useState([]); //Constant to fetch themes from DB
  const [themes,setThemes]=useState([]) // constant to post to db
  const location = useLocation();
  const giftDetails = location.state;

  const[total,setTotal]=useState(giftDetails.giftPrice)
  const [errors, setErrors] = useState({
    name: "",
    address: "",
    orderDate: "",
    orderPrice: "",
    phone: "",
  });
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
  const dropdownRef = useRef(null);
  const navigate = useNavigate();



  useEffect(() => {
    const currentDate = new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    setOrderDate(currentDate);
  }, []);

  const validateFields = () => {
    const error = {};

    if (name.trim() === "") {
      error.name = "Name is required.";
    } 

    if (address.trim() === "") {
      error.address = "Address is required.";
    }

    if (phone.trim === " ") {
      error.phone = "Invalid Mobile Number";
    } else if (!/^\d{10}$/.test(phone)) {
      error.phone = "Phone number is invalid.";
    }
    return error;
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const validationerrors = validateFields();

    if (Object.keys(validationerrors).length > 0) {
      setErrors(validationerrors);
      return;
    }
    
    const orderData = {
      giftId:giftDetails.giftId,
      orderDescription:orderDescription,
      orderPrice:total,
      orderDate:orderDate,
      orderAddress:address,
      orderPhone:phone,
      themes:themes,
    };

    console.log(orderData);
    setName("");
    setAddress("");
    setPhone("");
    setOrderDate("");
    setOrderDescription("");
    setSelectedOptions([]);
    setErrors({});

    axios
    .post("/user/addOrder", orderData)
      .then(() => {
        alert("Order placed successfully");
        setName("");
        setAddress("");
        setPhone("");
        setOrderDate("");
        setOrderDescription("");
        setSelectedOptions([]);
        setErrors({});
        navigate("/user/myorders")
      })
      .catch((error) => {
        alert("Unable to place your Order. Try again later");
        console.error(error);
      });
    

  };

  const toggleDropdown = () => {
    setThemeDropdownOpen(false);
    setDropdownOpen(!dropdownOpen);
  };

  const toggleThemeDropdown = () => {
    setDropdownOpen(false);
    setThemeDropdownOpen(!themeDropdownOpen);
  };

  const handleOptionChange = (event,theme) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions((prevOptions) => [...prevOptions, value]);
      setTotal(total+theme.themePrice)
      setThemes((prevThemes)=>[...prevThemes,theme.themeId]);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((option) => option !== value)
      );
      setTotal(total-theme.themePrice);
      setThemes((prevThemes)=>prevThemes.filter(item => item !== theme.themeId))
    }
    setThemeDropdownOpen(false);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    const filteredCitiesList = citiesInIndia.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredCities(filteredCitiesList);
  };

  const citiesInIndia = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
  ];
  const [filteredCities, setFilteredCities] = useState(citiesInIndia);

  return (
    <>
    <div className=".order-container-holder">
      <h2>Place Order</h2>
      <form className="order-container" onSubmit={(event)=>handlePlaceOrder(event)}>
        <div className="form1">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form1">
          <input
            type="text" //modified date to text
            id="orderDate"
            value={orderDate}
            className="uneditable-input"
            placeholder="Select order date "
          />
          {errors.orderDate && (
            <span className="error">{errors.orderDate}</span>
          )}
        </div>
        <div className="form1">
          <div className="address-input">
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={`Enter your address 📍 `}
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <ul className="city-dropdown" ref={dropdownRef}>
                <li>
                  <input
                    type="text"
                    placeholder="Search city"
                    onChange={handleSearchChange}
                  />
                </li>
                {filteredCities.map((city) => (
                  <li key={city} onClick={() => setAddress(city)}>
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="form1">
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        
        <div className="form1">
          <input
            type="text"
            id="giftModel"
            value={`Gift: ${giftDetails.giftName}`}
            readOnly={true} // Keep readOnly attribute
            placeholder="Enter gift model"
            className="uneditable-input" // Apply CSS class for styling
          />
        </div>
        <div className="form1">
          <input
            type="text"
            id="orderPrice"
            value={`Order Price: ₹${total}`}
            readOnly //  readOnly
            placeholder="Enter order price"
            className="uneditable-input"
          />
          {errors.orderPrice && (
            <span className="error">{errors.orderPrice}</span>
          )}
        </div>
        <div className="form1">
          <textarea
            id="orderDescription"
            value={orderDescription}
            onChange={(e) => setOrderDescription(e.target.value)}
            placeholder="Enter order description"
          ></textarea>
        </div>
      
        <div className="form1">
          <div className="dropdown" onClick={toggleThemeDropdown}>
            <button className="dropdown-toggle" type="button">
              Select Options
            </button>
            {themeDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {themesFromDb.map((theme) => (
                    <div className="dropdown-row" key={theme.themeId}>
                      <div className="dropdown-column">
                        <label>
                          <input
                            type="checkbox"
                            value={theme.themeName}
                            checked={selectedOptions.includes(theme.themeName)}
                            onChange={(event)=>handleOptionChange(event,theme)}
                          />
                          {theme.themeName}
                        </label>
                      </div>
                      <div className="dropdown-column">
                        <span>Price: ₹{theme.themePrice}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
    </>
  );
};

export default PlaceOrder;
