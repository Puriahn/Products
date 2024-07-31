import useHttp from "../Hooks/useHttp";
import Error from "../Common/Error";
import Button from "../Common/Button";

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
    <ul className="bg-slate-500 mx-24 rounded-lg flex-row text-center my-4">
      {data.map((album) => (
        <li className="my-5 items-center pb-9" key={album.id}>
          <article>
            <span className="font-bold">ID: </span> {album.id}{" "}
            <span className="font-bold">___ TITLE:  </span>
            {album.title}{" "}
            <span>
              <Button>Afdd</Button>
            </span>
          </article>
        </li>
      ))}
    </ul>
  );
}
