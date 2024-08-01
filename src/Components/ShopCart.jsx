import { useDispatch, useSelector } from "react-redux";
import Modal from "../Common/Modal";
import { shopActions } from "../Store/Shop";
import Button from "../Common/Button";

const w = {};

export default function ShopCart() {
  const cartShop = useSelector((state) => state.products.all);
  const cartShow = useSelector((state) => state.shop.x);
  const dispatch = useDispatch();

  function handleHide() {
    dispatch(shopActions.hideCart());
  }

  function handleGoToCheckout() {
    dispatch(shopActions.showCheckout());
  }

  return (
    <Modal
      open={cartShow === "showCart"}
      onClose={cartShow === "showCheckout" ? null : handleHide}
    >
      <h2 className="font-bold">Your Cart</h2>
      {cartShop.length === 0 && <div>Your Cart Is Empty</div>}
      <ul>
        {cartShop.map((item) => (
          <li className="text-white my-3" key={item.id}>
            <span className="font-bold text-green-950">title: </span>
            {item.title} &ensp;*&ensp;
            {item.quantity > 1 && <span>{item.quantity}</span>}
          </li>
        ))}
      </ul>

      <div className="mt-12">
        {cartShop.length > 0 && (
          <Button
            cssC="p-5 float-right mt-24 hover:bg-stone-400 rounded-md "
            onClick={handleGoToCheckout}
          >
            CheckOut
          </Button>
        )}
        <Button
          cssC="p-5 float-right mt-24 hover:bg-stone-400 rounded-md "
          onClick={handleHide}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
}
