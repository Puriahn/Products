import useHttp from "../Hooks/useHttp";
import Error from "../Common/Error";
import Button from "../Common/Button";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/CartStore";
import { useState } from "react";

const w = {};

export default function ProductList() {
  const dispatch = useDispatch();
  const [show, setShow] = useState({ ok: false, id: null });

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

  function handleClick(id, title) {
    const finalState = { id: id, title: title };
    dispatch(cartActions.add(finalState));
  }

  function handleShowBody(idd) {
    if (idd === show.id) {
      setShow({ ok: !show.ok, id: idd });
    }
    else{
        setShow({ ok: true, id: idd });
    }
  }
  return (
    <ul className="bg-slate-500 mx-24 rounded-lg flex-row text-center mt-2">
      {data.map((album) => (
        <li className=" items-center pb-9" key={album.id}>
          <article>
            <button
              className="px-7 mx-4 rounded-md hover:bg-slate-200 bg-slate-400 h-7"
              onClick={() => handleShowBody(album.id)}
            >
              More Details
            </button>
            <span className="font-bold">ID: </span> {album.id}{" "}
            <span className="font-bold">___ TITLE: </span>
            {album.title}{" "}
            <span>
              {(show.ok && show.id === album.id )&& (
                <div>
                  <span className="font-bold">BODY: </span>
                  {album.body}
                </div>
              )}
              <Button onClick={() => handleClick(album.id, album.title)}>
                Add
              </Button>
            </span>
          </article>
        </li>
      ))}
    </ul>
  );
}
