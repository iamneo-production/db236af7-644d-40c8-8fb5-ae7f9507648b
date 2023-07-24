const EditGiftForm = (props) => {
  return (
    <>
      <div
        className="overlay-styles"
        onClick={props.toggleEditFormHandler}
      ></div>
      <div className="p-2 d-flex justify-content-center align-items-center position-absolute top-50 start-50 w-50 translate-middle">
        <form
          className=" p-3 bg-light rounded  w-100 text-center"
          onSubmit={props.updateGiftSubmitHandler}
        >
          <h4 className="text-center">Edit Gift</h4>

          <div className="form-group row  ">
            <div className="col-xxl-12">
              <label htmlFor="editGiftName" className="text-muted">
                Name
              </label>
              <input
                className="form-control w-100"
                placeholder="Enter Gift Name"
                id="editGiftName"
                name="giftName"
                value={props.giftItemDetails.giftName}
                onChange={props.editGiftChangeHandler}
                required
              ></input>
            </div>
            <div className="col-xxl-12">
              <label htmlFor="editGiftPrice" className="text-muted">
                Price
              </label>
              <input
                type="number"
                className="form-control w-100"
                placeholder="Enter Gift Price"
                id="editGiftPrice"
                name="giftPrice"
                value={props.giftItemDetails.giftPrice}
                onChange={props.editGiftChangeHandler}
                required
              ></input>
            </div>
            <div className="col-xxl-12">
              <label htmlFor="editGiftimageUrl" className="text-muted">
                Url
              </label>
              <input
                className="form-control w-100"
                placeholder="https://"
                id="editGiftimageUrl"
                name="giftImageUrl"
                value={props.giftItemDetails.giftImageUrl}
                onChange={props.editGiftChangeHandler}
                required
              ></input>
            </div>
            <div className="col-xxl-12">
              <label htmlFor="editGiftQuantity" className="text-muted">
                Quantity
              </label>
              <input
                type="number"
                className="form-control w-100"
                placeholder="Enter Gift Quantity"
                id="editGiftQuantity"
                name="giftQuantity"
                value={props.giftItemDetails.giftQuantity}
                onChange={props.editGiftChangeHandler}
                required
              ></input>
            </div>
            <div className="col-xxl-12">
              <label htmlFor="editGiftDetails" className="text-muted">
                Details
              </label>
              <input
                className="form-control w-100"
                placeholder="Enter Gift Description"
                id="editGiftDetails"
                name="giftDetails"
                value={props.giftItemDetails.giftDetails}
                onChange={props.editGiftChangeHandler}
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
                className="btn btn-success btn-md btn-block mx-5 mt-3"
                id="update"
                disabled={!props.isFormTouched}
              >
                Update
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default EditGiftForm;
