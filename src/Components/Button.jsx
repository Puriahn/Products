export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-6 00 hover:text-stone-200"
    >
      {children}
    </button>
  );
}
