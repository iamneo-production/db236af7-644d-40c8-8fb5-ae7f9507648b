import classes from "./PlaceOrder.module.css";
import DownArrow from "../../../assets/down-arrow.png";

const PlaceOrderForm = (props) => {
  return (
    <form
      className={classes["order-container"]}
      onSubmit={props.placeOrderHandler}
    >
      <div className="form1">
        <input
          type="text"
          id="customer-name"
          name="customerName"
          value={props.orderFormDetails.customerName}
          onChange={props.orderFormDetailsChangeHandler}
          placeholder="Enter Your Name"
          required
        />
      </div>
      <div className={classes["form1"]}>
        <input
          type="text"
          id="orderDate"
          value={`Date: ${props.orderDate}`}
          className={classes["uneditable-input"]}
          readOnly
        />
      </div>
      <div className={classes["form1"]}>
        <div className={classes["address-input"]}>
          <input
            type="text"
            id="address"
            name="orderAddress"
            value={props.orderFormDetails.orderAddress}
            onChange={props.orderFormDetailsChangeHandler}
            placeholder={`Enter Your Address 📍 `}
            required
            onClick={props.toggleAddressDropdownHandler}
          />
          {props.isAddressDropdownOpen && (
            <ul className={classes["city-dropdown"]}>
              <li>
                <input
                  type="text"
                  name="orderAddress"
                  placeholder="Search City"
                  onChange={props.addressSearchChangeHandler}
                />
              </li>
              {props.filteredCities.map((city) => (
                <li
                  key={city}
                  name="orderAddress"
                  onClick={() =>
                    props.orderFormDetailsChangeHandler({
                      target: { name: "orderAddress", value: city },
                    })
                  }
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={classes["form1"]}>
        <input
          type="number"
          id="phone"
          name="orderPhone"
          value={props.orderFormDetails.orderPhone}
          onChange={props.orderFormDetailsChangeHandler}
          placeholder="Enter Your Phone Number"
          required
        />
        {props.errors.phone && (
          <span className={classes["error"]}>{props.errors.phone}</span>
        )}
      </div>
      <div className={classes["form1"]}>
        <input
          type="text"
          id="giftModel"
          className={classes["uneditable-input"]}
          readOnly
          value={`Gift: ${props.giftName} ${
            props.orderFormDetails.themes.length > 0
              ? `+ selected ${props.orderFormDetails.themes.length} ${
                  props.orderFormDetails.themes.length > 1
                    ? "themes"
                    : "theme"
                }`
              : ""
          }`}
        />
      </div>
      <div className={classes["form1"]}>
        <input
          type="text"
          id="orderPrice"
          value={`Order Price: ₹${props.orderFormDetails.orderPrice}`}
          readOnly
          className={classes["uneditable-input"]}
        />
      </div>
      <div className={classes["form1"]}>
        <textarea
          id="orderDescription"
          name="orderDescription"
          value={props.orderFormDetails.orderDescription}
          onChange={props.orderFormDetailsChangeHandler}
          placeholder="Enter Order Description"
          required
        ></textarea>
      </div>
      <div className={classes["form1"]}>
        <div className={classes["dropdown"]}>
          <button
            className={classes["dropdown-toggle"]}
            type="button"
            onClick={props.toggleThemeDropdownHandler}
          >
            Select Themes <img src={DownArrow} alt="down-arrow" />
          </button>
          {props.isThemeDropdownOpen && (
            <div
              className={classes["dropdown-menu"]}
              ref={props.themeDropdownRef}
            >
              <div className={classes["dropdown-content"]}>
                {props.themesFromDb.map((theme) => (
                  <div className={classes["dropdown-row"]} key={theme.themeId}>
                    <div className={classes["dropdown-column"]}>
                      <label>
                        <input
                          type="checkbox"
                          value={theme.themeName}
                          checked={props.selectedThemeOptions.includes(
                            theme.themeName
                          )}
                          onChange={(event) =>
                            props.themeSelectionChangeHandler(event, theme)
                          }
                        />
                        {theme.themeName}
                      </label>
                    </div>
                    <div className={classes["dropdown-column"]}>
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
  );
};

export default PlaceOrderForm;
