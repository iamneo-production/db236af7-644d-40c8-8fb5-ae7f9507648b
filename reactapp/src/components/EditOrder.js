import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditOrder.css';

const EditOrder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [orderPrice, setOrderPrice] = useState('');
  const [giftModel, setGiftModel] = useState('');
  const [orderDescription, setOrderDescription] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: '',
    orderDate: '',
    orderPrice: '',
    termsChecked: '',
    phone: ''
  });

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const validateFields = () => {
    const error = {};

    if (name.trim() === '') {
      error.name = 'Name is required.';
    }
    if (email.trim() === '') {
      error.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = 'Email is invalid.';
    }
    if (address.trim() === '') {
      error.address = 'Address is required.';
    }
    if (orderDate.trim() === '') {
      error.orderDate = 'Order date is required.';
    }
    if(phone.trim === " ") {
      error.phone="Invalid Mobile Number"
    }
    else if (!/^\d{10}$/.test(phone)) {
      error.phone = 'Phone number is invalid.';
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
      name,
      email,
      address,
      phone,
      orderDate,
      orderPrice,
      giftModel,
      orderDescription,
      termsChecked,
      selectedOptions,
    };
    setName('');
    setEmail('');
    setAddress('');
    setPhone('');
    setOrderDate('');
    setOrderPrice('');
    setGiftModel('');
    setOrderDescription('');
    setTermsChecked(false);
    setSelectedOptions([]);
    setErrors({});
    fetch('https://8081-dadecaeedcbbfdebbecaddaeffdec.project.examly.io/user/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to submit the order.'); // Handle non-successful response
      }
      return response.json('Order added'); // Parse the response body as JSON
    })
      .then(data => {
        // Handle successful response from the backend
        console.log(data);
        setName('');
        setEmail('');
        setAddress('');
        setPhone('');
        setOrderDate('');
        setOrderPrice('');
        setGiftModel('');
        setOrderDescription('');
        setTermsChecked(false);
        setSelectedOptions([]);
        setErrors({});
        navigate('/view-themes'); 
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
    navigate('/view-themes');
  };

  const toggleDropdown = () => {
    setThemeDropdownOpen(false);
    setDropdownOpen(!dropdownOpen);
  };

  const toggleThemeDropdown = () => {
    setDropdownOpen(false);
    setThemeDropdownOpen(!themeDropdownOpen);
  };

  const handleOptionChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions((prevOptions) => [...prevOptions, value]);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((option) => option !== value)
      );
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

  const citiesInIndia = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'];
  const [filteredCities, setFilteredCities] = useState(citiesInIndia);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: ''
    }));
  };

  return (
    <div className='container'>
      <h2>Update Order</h2>
      <form className='order-container'  onSubmit={handlePlaceOrder}>
        <div className='form1'>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className='form1'>
          <input
            type="date"
            id="orderDate"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            placeholder="Select order date "
          />
          {errors.orderDate && <span className="error">{errors.orderDate}</span>}
        </div>        
        <div className='form1'>
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
                  <input type="text" placeholder="Search city" onChange={handleSearchChange} />
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
        <div className='form1'>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className='form1'>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className='form1'>
          <input
            type="text"
            id="orderPrice"
            value={orderPrice}
            readOnly //  readOnly
            placeholder="Enter order price"
            className="uneditable-input" 
          />
          {errors.orderPrice && <span className="error">{errors.orderPrice}</span>}
        </div>
        <div className='form1'>
          <input
            type="text"
            id="giftModel"
            value={giftModel}
            readOnly // Keep readOnly attribute
            placeholder="Enter gift model"
            className="uneditable-input" // Apply CSS class for styling
          />
        </div>

        <div className='form1'>
          <textarea
            id="orderDescription"
            value={orderDescription}
            onChange={(e) => setOrderDescription(e.target.value)}
            placeholder="Enter order description"
          ></textarea>
        </div>
        <div className='form1'>
          <div className="dropdown" onClick={toggleThemeDropdown}>
          <button className="dropdown-toggle" type="button">
            Select Options
          </button>
          {themeDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="dropdown-row">
                  <div className="dropdown-column">
                    <label>
                      <input
                        type="checkbox"
                        value="Photo Design 200"
                        checked={selectedOptions.includes('Photo Design 200')}
                        onChange={handleOptionChange}
                      />
                      Photo Design 200
                    </label>
                  </div>
                  <div className="dropdown-column">
                    <label>
                      <input
                        type="checkbox"
                        value="Pattern 100"
                        checked={selectedOptions.includes('Pattern 100')}
                        onChange={handleOptionChange}
                      />
                      Pattern 100
                    </label>
                  </div>
                </div>
                <div className="dropdown-row">
                  <div className="dropdown-column">
                    <label>
                      <input
                        type="checkbox"
                        value="Face Pattern 50"
                        checked={selectedOptions.includes('Face Pattern 50')}
                        onChange={handleOptionChange}
                      />
                      Face Pattern 50
                    </label>
                  </div>
                  <div className="dropdown-column">
                    <label>
                      <input
                        type="checkbox"
                        value="Frame Design 300"
                        checked={selectedOptions.includes('Frame Design 300')}
                        onChange={handleOptionChange}
                      />
                      Frame Design 300
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        </div>    
        
<button className='update'>
  <div class="spinner"></div>Update Order</button>
      </form>
    </div>
  );
};

export default EditOrder;