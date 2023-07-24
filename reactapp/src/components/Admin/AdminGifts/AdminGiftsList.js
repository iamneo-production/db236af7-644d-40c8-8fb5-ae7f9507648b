import edit from "../../../assets/edit.svg";
import deleteIcn from "../../../assets/delete.svg";

const AdminGiftsList = (props) => {
  return (
    <div className="row" style={{ marginTop: "5%" }}>
      {props.giftsList.map((items, index) => {
        return (
          <div
            className="col-xxl-3 col-md-4 col-sm-4 gy-3 apply-font"
            key={index}
          >
            <div className="card border-0 text-center">
              <div className="card-body">
                <img
                  className="h-75 w-75 p-2 cardimage "
                  src={items.giftImageUrl}
                  alt="gift-url"
                />
                <h5 className="card-title">{items.giftName}</h5>
                <p className="card-text"> ₹ {items.giftPrice}</p>
                <p className="card-text">
                  {" "}
                  {items.giftQuantity} <span>ps</span>{" "}
                </p>
                <div className="giftDetails">
                  <p className="card-text ">{items.giftDetails}</p>
                </div>
                <div className="giftActions card-text">
                  <button
                    className="giftActionsBtn"
                    onClick={() => props.onEditGift(items)}
                  >
                    {" "}
                    Edit{" "}
                    <img
                      className="giftActionsIcon"
                      src={edit}
                      alt="gift-edit"
                    ></img>
                  </button>
                  <button
                    className="giftActionsBtn"
                    onClick={() => props.deleteGiftHandler(items.giftId)}
                  >
                    Delete{" "}
                    <img
                      className="giftActionsIcon"
                      src={deleteIcn}
                      alt="gift-delete"
                    ></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminGiftsList;
