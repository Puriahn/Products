import { useDispatch, useSelector } from "react-redux";
import { shopActions } from "../Store/Shop";
export default function Cart() {
  const cartShop = useSelector((state) => state.products.all);
  const cartShow = useSelector((state) => state.shop.x);

  
  const dispatch = useDispatch();
  function handleShowCart() {
    dispatch(shopActions.showCart());
    console.log(cartShow)
  }
  return (
    <button
      onClick={handleShowCart}
      className="float-right block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    >
      Cart ({cartShop.length})
    </button>
  );
}
