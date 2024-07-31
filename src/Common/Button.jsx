export default function Button({ children,...props }) {
  const cssClass =
    "transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-blue-500 text-white rounded-md my-5 font-bold py-2 px-3 ring-1";
  return (
    <div className="mx-auto text-center">
      <button {...props} className={cssClass}>{children}</button>
    </div>
  );
}
