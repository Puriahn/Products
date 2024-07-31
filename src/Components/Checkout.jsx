import { useDispatch, useSelector } from "react-redux";

export default function Checkout() {
  const cartShop = useSelector((state) => state.products.all);

  const { data, isLoading, error } = useHttp(
    "https://jsonplaceholder.typicode.com/posts",
    w,
    []
  );

  if (isLoading) {
    return <p className="center">Fetching Meals...</p>;
  }
  if (error) {
    return <Error title="Failed to fetch data" message={error} />;
  }
  return <></>;
}
