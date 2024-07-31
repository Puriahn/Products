import useHttp from "../Hooks/useHttp";
import Error from "../Common/Error";

const w = {};

export default function ProductList() {
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
  return (
   
      <ul className="bg-slate-500 mx-48 rounded-lg flex-row text-center my-4">
        {data.map((album) => (
          <li className="my-5 items-center px-24" key={album.id}>
            <article>{album.title}</article>
          </li>
        ))}
      </ul>
  );
}
