export default function Error({ title, message }) {
  return (
    <div className="mx-auto bg-red-200 rounded-md my-10 h-24 w-80 text-center">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
