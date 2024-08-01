import { useDispatch, useSelector } from "react-redux";
import Modal from "../Common/Modal";
import { shopActions } from "../Store/Shop";
import Button from "../Common/Button";
import Input from "../Common/Input.jsx";
const w = {};

export default function Checkout() {
  const cartShow = useSelector((state) => state.shop.x);
  const dispatch = useDispatch();

  function handleHide() {
    dispatch(shopActions.hideCart());
  }

  return (
    <>
      <Modal open={cartShow === "showCheckout"} onClose={handleHide}>
        <form>
          <h2 className="font-bold">Checkout</h2>
          <div className="mb-3">Total Amount: $$$$$$$</div>
          <Input label="Full Name" type="text" id="name" />
          <Input label="E-mail Address" type="email" id="email" />
          <Input label="City" type="text" id="city" />
          <div className="flex">
            <Input label="Postal Code" type="text" id="postal-code" />
            <Input label="Street" type="text" id="street" />
          </div>
        </form>
        <div>
          <Button
            onClick={handleHide}
            cssC="p-5 justify-end mt-24 hover:bg-stone-400 rounded-md float-end"
          >
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
}
