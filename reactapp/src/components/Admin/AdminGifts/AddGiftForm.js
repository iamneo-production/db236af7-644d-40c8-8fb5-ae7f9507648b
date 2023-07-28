const AddGiftForm = (props) => {
  return (
    <>
      <div
        className="overlay-styles"
        onClick={props.toggleAddFormHandler}
      ></div>
      <div className="p-2 d-flex justify-content-center align-items-center position-absolute top-50 start-50 w-50 translate-middle">
        <form
          className=" p-3 bg-light rounded  w-100 text-center"
          onSubmit={props.addGiftSubmitHandler}
        >
          <h4 className="text-center">Add New Gift</h4>

          <div className="form-group row  ">
            <div className="col-xxl-12">
              <label htmlFor="enterGiftName " className="text-muted">
                Name
              </label>
              <input
                className="form-control w-100"
                placeholder="Enter Gift Name"
                id="enterGiftName"
                name="giftName"
                onChange={props.addGiftChangeHandler}
                required
              ></input>
            </div>
            <div className="col-xxl-12">
              <label htmlFor="enterGiftPrice " className="text-muted">
                Price
              </label>
              <input
                type="number"
                className="form-control w-100"
                placeholder="Enter Gift Price"
                id="enterGiftPrice"
                name="giftPrice"
                onChange={props.addGiftChangeHandler}
                required
              ></input>
            </div>
            <div className="col-xxl-12">
              <label htmlFor="enterGiftimageUrl" className="text-muted">
                URL
              </label>
              <input
                className="form-control w-100"
                placeholder="https://"
                id="enterGiftimageUrl"
                name="giftImageUrl"
                onChange={props.addGiftChangeHandler}
                required
              ></input>
            </div>
            <div className="col-xxl-12">
              <label htmlFor="enterGiftQuantity" className="text-muted">
                Quantity
              </label>
              <input
                type="number"
                className="form-control w-100"
                placeholder="Enter Gift Quantity"
                id="enterGiftQuantity"
                name="giftQuantity"
                onChange={props.addGiftChangeHandler}
                required
              ></input>
            </div>
            <div className="col-xxl-12">
              <label htmlFor="enterGiftDetails" className="text-muted">
                Details
              </label>
              <input
                className="form-control w-100"
                placeholder="Enter Gift Description"
                id="enterGiftDetails"
                name="giftDetails"
                onChange={props.addGiftChangeHandler}
                required
              ></input>
            </div>
          </div>
          <div className="text-center">
            {props.loader ? (
              <div className="loader"></div>
            ) : (
              <button
                type="submit"
                className="btn btn-success btn-md btn-block ml-5 mt-3 "
                id="add"
              >
                Add
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddGiftForm;
